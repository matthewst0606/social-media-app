<?php
session_start();
// make sure form was submitted
if (!isset($_POST['register'])) exit();

require __DIR__ . "/../core/redirect.php";
require __DIR__ . "/../core/db_connect.php";

// retreiving registration form values
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// checks values to make sure they dont contain invalid characters
if (str_contains($username, " ")) {
    header("Location: ../../public/HTML/register.php?error=username");
    exit();
}
else if (str_contains($email, " ") || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../../public/HTML/register.php?error=email");
    exit();
}
else if (str_contains($password, " ")) {
    header("Location: ../../public/HTML/register.php?error=password");
    exit();
}

// insert the new username, email, and hashed password into the database
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
$stmt = $pdo->prepare("
    INSERT INTO users (username, email, password) 
    VALUES (?, ?, ?) RETURNING user_id
");
$stmt->execute([$username, $email, $hashedPassword]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

// preset values for a new user profile
$profileStmt = $pdo->prepare(
    "INSERT INTO userProfile (user_id, bio, pfp) VALUES (?, ?, ?)"
);
$profileStmt->execute([
    $user['user_id'],
    "no bio yet.",
    "icons/profile-circle-2.svg"
]);

// 
$_SESSION['loggedin'] = true;
$_SESSION['id'] = $user['user_id'];
$_SESSION['username'] = $username;


header("Location: ../../public/HTML/main.php");
exit();
?>
