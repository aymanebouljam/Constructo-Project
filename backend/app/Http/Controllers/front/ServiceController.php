<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ServiceController extends Controller
{
    // This method returns all active services
    public function index() {
        try {
            $services = Service::where('status', 1)->orderBy('created_at', 'DESC')->get();
            return response()->json([
                'status' => true,
                'data' => $services
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve services: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve services',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // This method returns the latest active services
    public function latestServices(Request $request){
        try {
            $limit = $request->get('limit', 3);
            
            $services = Service::where('status', 1)
                        ->take($limit)
                        ->orderBy('created_at', 'DESC')->get();
                        
            return response()->json([
                'status' => true,
                'data' => $services
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve latest services: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve latest services',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // This method returns a single service by ID
    public function service($id) {
        try {
            $service = Service::find($id);

            if ($service == null) {
                return response()->json([
                    'status' => false,
                    'message' => 'Service introuvable'
                ]);
            }

            return response()->json([
                'status' => true,
                'data' => $service
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve service: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve service',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
