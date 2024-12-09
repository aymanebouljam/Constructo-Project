<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/log-test', function () {
    Log::info('This is a test log message.');
    return 'Log message written!';
});

use App\Http\Controllers\Auth\PasswordResetController;
use App\Mail\PasswordResetMail;
use App\Models\User;




// Show password reset form
Route::get('/password-reset-form', [PasswordResetController::class, 'showResetForm'])->name('password.reset');

// Handle password reset form submission
Route::post('/password-reset', [PasswordResetController::class, 'resetPassword'])->name('password.update');
use App\Http\Controllers\AuthenticationController;

Route::post('/password-reset-email', [AuthenticationController::class, 'sendPasswordResetEmail']);
Route::post('/password-reset', [AuthenticationController::class, 'resetPassword']);


Route::get('/test-password-reset-email', function () {
    $userEmail = 'admin@constructo.ma';  // Your email or replace with an actual user's email

    // Find the user by email
    $user = User::where('email', $userEmail)->first();

    if (!$user) {
        return 'User not found';
    }

    // Generate a random reset token
    $token = Str::random(64);

    // Store the token and expiration date in the user's record
    $user->password_reset_token = $token;
    $user->password_reset_expires = now()->addHour();  // Token expires in 1 hour
    $user->save();

    // Send the password reset email
    Mail::to($userEmail)->send(new PasswordResetMail($token));

    return 'Password reset email sent with token!';
});

