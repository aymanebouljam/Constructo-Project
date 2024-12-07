<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\TempImage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class ProjectController extends Controller
{
    // Get all projects
    public function index()
    {
        $projects = Project::all();

        return response()->json([
            'status' => true,
            'projects' => $projects,
        ]);
    }

    // Get a single project
    public function show($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'project' => $project,
        ]);
    }

    // Create a new project
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:projects',
            'short_desc' => 'nullable|string',
            'content' => 'nullable|string',
            'construction_type' => 'nullable|string',
            'sector' => 'nullable|string',
            'location' => 'nullable|string',
            'image' => 'nullable|integer|exists:temp_images,id',
            'status' => 'required|integer',
        ]);

        $project = new Project();
        $project->fill($validated);

        if ($request->has('image') && $request->image > 0) {
            $this->handleImage($project, $request->image);
        }

        $project->save();

        return response()->json([
            'status' => true,
            'message' => 'Project created successfully',
            'project' => $project,
        ]);
    }

    // Update a project
    public function update(Request $request, $id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found',
            ], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'slug' => 'sometimes|required|string|max:255|unique:projects,slug,' . $id,
            'short_desc' => 'nullable|string',
            'content' => 'nullable|string',
            'construction_type' => 'nullable|string',
            'sector' => 'nullable|string',
            'location' => 'nullable|string',
            'image' => 'nullable|integer|exists:temp_images,id',
            'status' => 'required|integer',
        ]);

        $project->fill($validated);

        if ($request->has('image') && $request->image > 0) {
            $this->handleImage($project, $request->image);
        }

        $project->save();

        return response()->json([
            'status' => true,
            'message' => 'Project updated successfully',
            'project' => $project,
        ]);
    }

    // Delete a project
    public function destroy($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found',
            ], 404);
        }

        if ($project->image) {
            $this->deleteImage($project->image);
        }

        $project->delete();

        return response()->json([
            'status' => true,
            'message' => 'Project deleted successfully',
        ]);
    }

    // Handle image copying from temp to projects folder
    private function handleImage(Project $project, $tempImageId)
    {
        $tempImage = TempImage::find($tempImageId);

        if ($tempImage) {
            $sourcePath = public_path('uploads/temp/' . $tempImage->name);
            $destinationFolder = public_path('uploads/projects/');
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

                // Assign the image data to the project
                $project->image_id = $tempImage->id;
                $project->image = $tempImage->name;

                // Mark the temp image as used
                $tempImage->used = true;
                $tempImage->save();
            } else {
                Log::error('Failed to copy file from ' . $sourcePath . ' to ' . $destinationPath);
                return response()->json([
                    'status' => false,
                    'message' => 'Failed to move the file to the projects folder',
                ], 500);
            }
        }
    }

    // Delete image from the projects folder
    private function deleteImage($imageName)
    {
        $imagePath = public_path('uploads/projects/' . $imageName);

        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
    }
}
