<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProjectController extends Controller
{
    // This method returns all active projects
    public function index() {
        try {
            $projects = Project::where('status', 1)->orderBy('created_at', 'DESC')->get();
            return response()->json([
                'status' => true,
                'data' => $projects
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve projects: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve projects',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // This method returns the latest active projects
    public function latestProjects(Request $request){
        try {
            $limit = $request->get('limit', 3);
            
            $projects = Project::where('status', 1)
                        ->take($limit)
                        ->orderBy('created_at', 'DESC')->get();
                        
            return response()->json([
                'status' => true,
                'data' => $projects
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve latest projects: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve latest projects',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // This method returns a single project by ID
    public function project($id) {
        try {
            $project = Project::find($id);

            if ($project == null) {
                return response()->json([
                    'status' => false,
                    'message' => 'Project not found'
                ]);
            }

            return response()->json([
                'status' => true,
                'data' => $project
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve project: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve project',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
