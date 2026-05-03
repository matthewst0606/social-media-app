

<?php
session_start();

if (!isset($_POST['login'])) exit();

require __DIR__ . "/db_connect.php";

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $getConnection->prepare("
    SELECT user_id, password 
    FROM users 
    WHERE username = ?
");
$stmt->execute([$username]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    header("Location: ../HTML/login.php?error=username");
    exit();
}

if (password_verify($password, $user['password'])) {
    $_SESSION['loggedin'] = true;
    $_SESSION['id'] = $user['user_id'];
    $_SESSION['username'] = $username;
    header("Location: ../HTML/main.php");
    exit();
}
else {
    header("Location: ../HTML/login.php?error=password");
    exit();
}

?>