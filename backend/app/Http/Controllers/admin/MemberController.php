<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class MemberController extends Controller
{
    // Get all members
    public function index()
    {
        $members = Member::all();

        return response()->json([
            'status' => true,
            'members' => $members,
        ]);
    }

    // Get a single member
    public function show($id)
    {
        $member = Member::find($id);

        if (!$member) {
            return response()->json([
                'status' => false,
                'message' => 'Member not found',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'member' => $member,
        ]);
    }

    // Create a new member
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'job_title' => 'required|string|max:255',
            'linkedin_url' => 'nullable|string|max:255',
            'image_id' => 'nullable|integer|exists:temp_images,id',
            'status' => 'required|integer',
        ]);

        $member = new Member();
        $member->fill($validated);

        if ($request->has('image_id') && $request->image_id > 0) {
            $this->handleImage($member, $request->image_id);
        }

        $member->save();

        return response()->json([
            'status' => true,
            'message' => 'Member created successfully',
            'member' => $member,
        ]);
    }

    // Update a member
    public function update(Request $request, $id)
    {
        $member = Member::find($id);

        if (!$member) {
            return response()->json([
                'status' => false,
                'message' => 'Member not found',
            ], 404);
        }

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'job_title' => 'sometimes|required|string|max:255',
            'linkedin_url' => 'nullable|string|max:255',
            'image_id' => 'nullable|integer|exists:temp_images,id',
            'status' => 'required|integer',
        ]);

        $member->fill($validated);

        if ($request->has('image_id') && $request->image_id > 0) {
            $this->handleImage($member, $request->image_id);
        }

        $member->save();

        return response()->json([
            'status' => true,
            'message' => 'Member updated successfully',
            'member' => $member,
        ]);
    }

    // Delete a member
    public function destroy($id)
    {
        $member = Member::find($id);

        if (!$member) {
            return response()->json([
                'status' => false,
                'message' => 'Member not found',
            ], 404);
        }

        if ($member->image) {
            $this->deleteImage($member->image);
        }

        $member->delete();

        return response()->json([
            'status' => true,
            'message' => 'Member deleted successfully',
        ]);
    }

    // Handle image copying from temp to members folder
    private function handleImage(Member $member, $tempImageId)
    {
        $tempImage = TempImage::find($tempImageId);

        if ($tempImage) {
            $sourcePath = public_path('uploads/temp/' . $tempImage->name);
            $destinationFolder = public_path('uploads/members/');
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

                // Assign the image data to the member
                $member->image_id = $tempImage->id;
                $member->image = $tempImage->name;

                // Mark the temp image as used
                $tempImage->used = true;
                $tempImage->save();
            } else {
                Log::error('Failed to copy file from ' . $sourcePath . ' to ' . $destinationPath);
                return response()->json([
                    'status' => false,
                    'message' => 'Failed to move the file to the members folder',
                ], 500);
            }
        }
    }

    // Delete image from the members folder
    private function deleteImage($imageName)
    {
        $imagePath = public_path('uploads/members/' . $imageName);

        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
    }
}
