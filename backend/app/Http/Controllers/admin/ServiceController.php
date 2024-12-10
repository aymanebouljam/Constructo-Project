<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\TempImage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();

        return response()->json([
            'status' => true,
            'services' => $services,
        ]);
    }

    public function show($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service non trouvé',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'service' => $service,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:services',
            'short_desc' => 'nullable|string',
            'content' => 'nullable|string',
            'image' => 'nullable|integer|exists:temp_images,id',
            'status' => 'required|integer',
        ]);

        $service = new Service();
        $service->fill($validated);

        if ($request->has('image') && $request->image > 0) {
            $this->handleImage($service, $request->image);
        }

        $service->save();

        return response()->json([
            'status' => true,
            'message' => 'Service créé avec succès',
            'service' => $service,
        ]);
    }

    public function update(Request $request, $id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service non trouvé',
            ], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'slug' => 'sometimes|required|string|max:255|unique:services,slug,' . $id,
            'short_desc' => 'nullable|string',
            'content' => 'nullable|string',
            'image' => 'nullable|integer|exists:temp_images,id',
            'status' => 'required|integer',
        ]);

        $service->fill($validated);

        if ($request->has('image') && $request->image > 0) {
            $this->handleImage($service, $request->image);
        }

        $service->save();

        return response()->json([
            'status' => true,
            'message' => 'Service mis à jour avec succès',
            'service' => $service,
        ]);
    }

    public function destroy($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service non trouvé',
            ], 404);
        }

        if ($service->image) {
            $this->deleteImage($service->image);
        }

        $service->delete();

        return response()->json([
            'status' => true,
            'message' => 'Service supprimé avec succès',
        ]);
    }

    private function handleImage(Service $service, $tempImageId)
    {
        $tempImage = TempImage::find($tempImageId);
    
        if ($tempImage) {
            $sourcePath = public_path('uploads/temp/' . $tempImage->name);
            $destinationFolder = public_path('uploads/services/');
            $destinationPath = $destinationFolder . $tempImage->name;
    
            Log::info('Vérification de l\'existence du fichier au chemin : ' . $sourcePath);
    
            if (!File::exists($sourcePath)) {
                Log::error('Le fichier source n\'existe pas : ' . $sourcePath);
                return response()->json([
                    'status' => false,
                    'message' => 'Le fichier source n\'existe pas dans le dossier temporaire',
                ], 400);
            }
    
            if (!File::exists($destinationFolder)) {
                File::makeDirectory($destinationFolder, 0755, true);
            }
    
            if (File::copy($sourcePath, $destinationPath)) {
                Log::info('Fichier copié avec succès de ' . $sourcePath . ' à ' . $destinationPath);
    
                $service->image_id = $tempImage->id;
                $service->image = $tempImage->name;
    
                $tempImage->used = true;
                $tempImage->save();
            } else {
                Log::error('Échec de la copie du fichier de ' . $sourcePath . ' à ' . $destinationPath);
                return response()->json([
                    'status' => false,
                    'message' => 'Échec du déplacement du fichier vers le dossier des services',
                ], 500);
            }
        }
    }

    private function deleteImage($imageName)
    {
        $imagePath = public_path('uploads/services/' . $imageName);

        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
    }
}
