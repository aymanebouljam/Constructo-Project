<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class PasswordResetController extends Controller
{
    public function showResetForm(Request $request)
    {
        $token = $request->query('token');
        return view('auth.passwords.reset', compact('token'));
    }

    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
            'token' => 'required',
        ]);
    
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
    
        // Find user by email
        $user = User::where('email', $request->email)->first();
    
        if (!$user || $user->password_reset_token !== $request->token || $user->password_reset_expires < now()) {
            return redirect()->back()->with('error', 'Invalid or expired reset token.');
        }
    
        // If everything is valid, reset password
        $user->password = Hash::make($request->password);
        $user->password_reset_token = null;  // Remove token after use
        $user->password_reset_expires = null;  // Clear expiry
        $user->save();
    
        return redirect()->route('login')->with('success', 'Password updated successfully');
    }
    
    public function sendPasswordResetEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email'
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
    
        // Generate a new token
        $token = Str::random(64);
    
        // Store the token and expiration time in the database
        $user->password_reset_token = $token;
        $user->password_reset_expires = now()->addHour(); // Set expiration time (e.g., 1 hour)
        $user->save();
    
        // Send reset email (assuming Mail is configured)
        Mail::to($user->email)->send(new \App\Mail\PasswordResetMail($token));
    
        return response()->json([
            'status' => true,
            'message' => 'Password reset email sent'
        ], 200);
    }
    

}
