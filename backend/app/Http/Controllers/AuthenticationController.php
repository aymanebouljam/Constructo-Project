<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthenticationController extends Controller
{
    public function authenticate(Request $request)
    {
        // Apply Validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        } else {
            // Attempt to authenticate the user
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                // Get the authenticated user ID
                $userId = Auth::id();
                // Find the user by ID
                $user = User::find($userId);
                $token = $user->createToken('auth_token')->plainTextToken;

                return response()->json([
                    'status' => true,
                    'message' => 'Authentication successful',
                    'token' => $token,
                    'id' => $user->id
                ], 200);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Invalid email or password',
                ], 401);
            }
        }
    }
    public function logout(Request $request)
{
    // Get the authenticated user's ID
    $userId = Auth::id();
    // Find the user by ID
    $user = User::find($userId);

    // Revoke all tokens for the user
    $user->tokens()->delete();

    return response()->json([
        'status' => true,
        'message' => 'Logged out successfully'
    ], 200);
}

}
?>