<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MemberController extends Controller
{
    // This method returns all active members
    public function index() {
        try {
            $members = Member::where('status', 1)->orderBy('created_at', 'DESC')->get();
            return response()->json([
                'status' => true,
                'data' => $members
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve members: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve members',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // This method returns the latest active members
    public function latestMembers(Request $request){
        try {
            $limit = $request->get('limit', 3);
            
            $members = Member::where('status', 1)
                        ->take($limit)
                        ->orderBy('created_at', 'DESC')->get();
                        
            return response()->json([
                'status' => true,
                'data' => $members
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve latest members: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve latest members',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // This method returns a single member by ID
    public function member($id) {
        try {
            $member = Member::find($id);

            if ($member == null) {
                return response()->json([
                    'status' => false,
                    'message' => 'Member not found'
                ]);
            }

            return response()->json([
                'status' => true,
                'data' => $member
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve member: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve member',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
