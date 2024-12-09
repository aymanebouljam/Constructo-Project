<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\PasswordResetMail;

class AuthenticationController extends Controller
{
    public function authenticate(Request $request)
    {
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;

            // Check if the user's password is temporary
            $needsPasswordChange = $user->temporary_password; // Assuming `temporary_password` is a column in your User model

            return response()->json([
                'status' => true,
                'message' => 'Authentication successful',
                'token' => $token,
                'id' => $user->id,
                'needs_password_change' => $needsPasswordChange, // Add this flag
            ], 200);
        }

        return response()->json([
            'status' => false,
            'message' => 'Invalid credentials',
        ], 401);
    }

    // Password change method
    public function changePassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|min:6',
        ]);

        $user = Auth::user();

        // Check if old password matches
        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json([
                'status' => false,
                'message' => 'Old password is incorrect',
            ], 400);
        }

        // Update password
        $user->password = Hash::make($request->new_password);
        $user->temporary_password = false; // Mark the password as no longer temporary
        $user->save();

        return response()->json([
            'status' => true,
            'message' => 'Password changed successfully',
        ], 200);
    }

    // Logout method
    public function logout(Request $request)
    {
        $user = Auth::user();
        $user->tokens()->delete();

        return response()->json([
            'status' => true,
            'message' => 'Logged out successfully'
        ], 200);
    }

    // Send Password Reset Email
    public function sendPasswordResetEmail(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
            ]);
    
            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'errors' => $validator->errors()
                ], 422);
            }
    
            $user = User::where('email', $request->email)->first();
    
            if (!$user) {
                return response()->json([
                    'status' => false,
                    'message' => 'User not found'
                ], 404);
            }
    
            $token = Str::random(64);
            $user->password_reset_token = $token;
            $user->password_reset_expires = now()->addHour();
            $user->save();
    
            // Send reset email to the user with the generated token
            Mail::to($user->email)->send(new PasswordResetMail($token));

            return response()->json([
                'status' => true,
                'message' => 'Password reset email sent successfully',
            ], 200);
        } catch (\Exception $e) {
            \Log::error('Error in sendPasswordResetEmail: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong. Please try again later.',
            ], 500);
        }
    }

    // Reset Password using the token
    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'new_password' => 'required|min:8|confirmed',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }
    
        // Find the user by the token
        $user = User::where('password_reset_token', $request->token)
            ->where('password_reset_expires', '>', now())
            ->first();
    
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid or expired token',
            ], 400);
        }
    
        // Update the password
        $user->password = Hash::make($request->new_password);
        $user->password_reset_token = null;  // Remove token after use
        $user->password_reset_expires = null;  // Clear expiration time
        $user->temporary_password = false;  // Mark as permanent password
        $user->save();
    
        // Log the new password hash for debugging
        \Log::info('New password hash: ' . $user->password); // This will log the hash in your log files for verification
    
        return response()->json([
            'status' => true,
            'message' => 'Password updated successfully',
        ], 200);
    }
}
