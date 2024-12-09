<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
</head>
<body>
    <h2>Password Reset Request</h2>
    <p>We received a request to reset your password. Click the link below to reset your password:</p>
    <a href="{{ url('password-reset-form?token=' . $token) }}">Reset Password</a>
</body>
</html>
