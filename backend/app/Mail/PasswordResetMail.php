<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class PasswordResetMail extends Mailable
{
    public $token;

    public function __construct($token)
    {
        $this->token = $token;
    }

    public function build()
    {
        return $this->subject('Password Reset Request')
                    ->html($this->buildHtml());
    }

    protected function buildHtml()
    {
        $resetUrl = "http://localhost:5173/admin/reset-password?token={$this->token}";
        
        return "
            <p>Click the link below to reset your password:</p>
            <a href='{$resetUrl}'>Reset Password</a>
        ";
    }
}
