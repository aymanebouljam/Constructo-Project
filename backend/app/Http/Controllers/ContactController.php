<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function sendEmail(Request $request)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Send the email
        try {
            Mail::to('admin@constructo.ma')->send(new ContactMail($validated));
            return response()->json(['success' => 'Message sent successfully!']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to send message. Please try again later.']);
        }
    }
}
