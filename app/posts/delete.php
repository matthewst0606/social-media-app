<?php
session_start();
require __DIR__ . "/../core/redirect.php";

if (!isset($_SESSION['id'])) redirect("../../public/HTML/login.php");
if (!isset($_POST['post_id'])) redirect("../../public/HTML/main.php");

$userId = $_SESSION['id'];
$postId = $_POST['post_id'];

require __DIR__ . "/../core/db_connect.php";

$stmt = $pdo->prepare("
    DELETE FROM post 
    WHERE post_id = ? AND user_id = ?"
);
$stmt->execute([$postId, $userId]);


redirect("../../public/HTML/main.php");
?>
