<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Str;
use App\Mail\PasswordResetMail;

class PasswordResetController extends Controller
{
    // Send Password Reset Email
    public function sendPasswordResetEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Find the user by email
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'User not found'
            ], 404);
        }

        // Generate a password reset token
        $token = Str::random(64);

        // Store the token and expiration time in the user's record
        $user->password_reset_token = $token;
        $user->password_reset_expires = now()->addHour(); // Token expires in 1 hour
        $user->save();

        // Send the password reset email
        Mail::to($user->email)->send(new PasswordResetMail($token));

        return response()->json([
            'status' => true,
            'message' => 'Password reset email sent successfully',
        ], 200);
    }

    // Reset Password using the token
    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Find the user by email
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'User not found'
            ], 404);
        }

        // Check if the token is valid and not expired
        if ($user->password_reset_token !== $request->token || $user->password_reset_expires < now()) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid or expired token'
            ], 400);
        }

    
        $user->password = Hash::make($request->password);

        $user->password_reset_token = null; // Clear the token after use
        $user->password_reset_expires = null; // Clear the expiration time
        $user->save();

        return response()->json([
            'status' => true,
            'message' => 'Password updated successfully'
        ], 200);
    }
}
