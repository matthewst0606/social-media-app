<?php
/*  --- editdescription.php ---
    allows a user to edit the description
    of a post.
*/
session_start();
require __DIR__ . "/../core/redirect.php";

if (!isset($_SESSION['id'])) 
    redirect("../../public/HTML/login.php");
if (!isset($_POST['post_id']) || !isset($_POST['description']))
    redirect("../../public/HTML/main.php"); 


$userId = $_SESSION['id'];
$postId = $_POST['post_id'];
$description = $_POST['description'];

require __DIR__ . "/../core/db_connect.php";

$stmt = $pdo->prepare("
    UPDATE post SET description = ? 
    WHERE post_id = ? AND user_id = ?"
);
$stmt->execute([$description, $postId, $userId]);


redirect("../../public/HTML/main.php");
?>
