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
        // Validate the request
        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:png,jpg,jpeg,gif'
        ]);
    
        if ($validator->fails()) {
            Log::error('Image validation failed: ' . json_encode($validator->errors()));
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ]);
        }
    
        // Check if the file is present in the request
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $ext = $image->getClientOriginalExtension();
            $imageName = strtotime('now') . '.' . $ext;
    
            // Save data in temp images table
            $model = new TempImage();
            $model->name = $imageName;
            $model->save();
    
            // Save the original image in uploads/temp directory
            $originalImagePath = public_path('uploads/temp/' . $imageName);
            $image->move(public_path('uploads/temp'), $imageName);
    
            Log::info('Image uploaded successfully: ' . $originalImagePath);
    
            return response()->json([
                'status' => true,
                'data' =>['id' => $model->id],
                'message' => 'Image uploaded successfully'
            ]);
        } else {
            Log::error('No file uploaded');
            return response()->json([
                'status' => false,
                'message' => 'No file uploaded',
            ]);
        }
    }
    
}
