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
    // Get all services
    public function index()
    {
        $services = Service::all();

        return response()->json([
            'status' => true,
            'services' => $services,
        ]);
    }

    // Get a single service
    public function show($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'service' => $service,
        ]);
    }

    // Create a new service
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
        'message' => 'Service created successfully',
        'service' => $service,
    ]);
}


    // Update a service
    public function update(Request $request, $id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found',
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
            'message' => 'Service updated successfully',
            'service' => $service,
        ]);
    }

    // Delete a service
    public function destroy($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found',
            ], 404);
        }

        if ($service->image) {
            $this->deleteImage($service->image);
        }

        $service->delete();

        return response()->json([
            'status' => true,
            'message' => 'Service deleted successfully',
        ]);
    }

    // Handle image copying from temp to services folder
    private function handleImage(Service $service, $tempImageId)
    {
        $tempImage = TempImage::find($tempImageId);
    
        if ($tempImage) {
            // Correct the path to match the upload process
            $sourcePath = public_path('uploads/temp/' . $tempImage->name);
            $destinationFolder = public_path('uploads/services/');
            $destinationPath = $destinationFolder . $tempImage->name;
    
            Log::info('Checking for file existence at path: ' . $sourcePath);
    
            // Check if the source file exists
            if (!File::exists($sourcePath)) {
                Log::error('Source file does not exist: ' . $sourcePath);
                return response()->json([
                    'status' => false,
                    'message' => 'Source file does not exist in the temp folder',
                ], 400);
            }
    
            // Ensure the destination folder exists
            if (!File::exists($destinationFolder)) {
                File::makeDirectory($destinationFolder, 0755, true);
            }
    
            // Copy the file to the destination
            if (File::copy($sourcePath, $destinationPath)) {
                Log::info('File copied successfully from ' . $sourcePath . ' to ' . $destinationPath);
    
                // Assign the image data to the service
                $service->image_id = $tempImage->id;
                $service->image = $tempImage->name;
    
                // Mark the temp image as used
                $tempImage->used = true;
                $tempImage->save();
            } else {
                Log::error('Failed to copy file from ' . $sourcePath . ' to ' . $destinationPath);
                return response()->json([
                    'status' => false,
                    'message' => 'Failed to move the file to the services folder',
                ], 500);
            }
        }
    }
    

    // Delete image from the services folder
    private function deleteImage($imageName)
    {
        $imagePath = public_path('uploads/services/' . $imageName);

        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
    }
}
