<?php
session_start();
require __DIR__ . "/../core/db_connect.php";

$post_id = $_POST['post_id'];
$user_id = $_SESSION['id'];
$reaction = $_POST['reaction'];

if ($reaction === "remove") {
    $stmt = $pdo->prepare("
        DELETE FROM postReaction
        WHERE post_id = ? AND user_id = ?
    ");
    $stmt->execute([$post_id, $user_id]);
    exit;
}

$stmt = $pdo->prepare("
    INSERT INTO postReaction (post_id, user_id, reaction)
    VALUES (?, ?, ?)
    ON CONFLICT (post_id, user_id)
    DO UPDATE SET reaction = EXCLUDED.reaction
");
$stmt->execute([$post_id, $user_id, $reaction]);


?>
