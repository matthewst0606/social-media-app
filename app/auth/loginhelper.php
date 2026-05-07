<?php
session_start();
if (!isset($_POST['login'])) exit();


require __DIR__ . "/../core/redirect.php";
require __DIR__ . "/../core/db_connect.php";


$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $pdo->prepare("
    SELECT user_id, password 
    FROM users 
    WHERE username = ?
");
$stmt->execute([$username]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) redirect("../../public/HTML/login.php?error=username");

if (password_verify($password, $user['password'])) {
    $_SESSION['loggedin'] = true;
    $_SESSION['id'] = $user['user_id'];
    $_SESSION['username'] = $username;
    redirect("../../public/HTML/main.php");
}
else redirect("../../public/HTML/login.php?error=password");
?>
