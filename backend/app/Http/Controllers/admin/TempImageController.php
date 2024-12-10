<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class TempImageController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:png,jpg,jpeg,gif,webp'
        ]);

        if ($validator->fails()) {
            Log::error('Échec de la validation de l\'image : ' . json_encode($validator->errors()));
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ]);
        }

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $ext = $image->getClientOriginalExtension();
            $imageName = strtotime('now') . '.' . $ext;

            $model = new TempImage();
            $model->name = $imageName;
            $model->save();

            $originalImagePath = public_path('uploads/temp/' . $imageName);
            $image->move(public_path('uploads/temp'), $imageName);

            Log::info('Image téléchargée avec succès : ' . $originalImagePath);

            return response()->json([
                'status' => true,
                'data' => ['id' => $model->id],
                'message' => 'Image téléchargée avec succès'
            ]);
        } else {
            Log::error('Aucun fichier téléchargé');
            return response()->json([
                'status' => false,
                'message' => 'Aucun fichier téléchargé',
            ]);
        }
    }
}
