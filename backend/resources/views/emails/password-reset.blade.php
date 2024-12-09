<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Password Reset</title>
</head>
<body>
    <h2>Reset Your Password</h2>
    <p>Click the link below to reset your password:</p>
    <a href="{{ url('/password-reset-form?token=' . $token) }}">Reset Password</a>
</body>
</html>

