<?php
session_start();
require __DIR__ . "/../core/redirect.php";

if (!isset($_SESSION['id'])) {
    redirect("../../public/HTML/login.php");
}

$postId = $_POST['post_id'] ?? null;
$commentText = $_POST['comment_text'] ?? "";

if (!$postId || trim($commentText) === "") {
    redirect("../../public/HTML/main.php");
}

require __DIR__ . "/../core/db_connect.php";

$stmt = $pdo->prepare(
    "INSERT INTO comment (post_id, user_id, content) VALUES (?, ?, ?)"
);

$stmt->execute([
    $postId,
    $_SESSION['id'],
    $commentText
]);

redirect("../../public/HTML/main.php");
?>
