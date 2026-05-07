<?php
session_start();

require __DIR__ . "/../core/redirect.php";
require __DIR__ . "/../core/db_connect.php";

// Checks if a file was actually sent from the form
if (!isset($_SESSION['id'])) 
    redirect("../../public/HTML/login.php");


// Checks if PHP detected an upload error
if ($_FILES["uploadFile"]["error"] !== UPLOAD_ERR_OK) 
    redirect("../../public/HTML/main.php?error=upload");



$userId = $_SESSION['id'];
$uploadDir = __DIR__ . "/../../public/uploads/"; 
$fileName = basename($_FILES["uploadFile"]["name"]);
$destination = $uploadDir . $fileName; 


// Moves the uploaded file from the temporary folder into the uploads folder
if (!move_uploaded_file($_FILES["uploadFile"]["tmp_name"], $destination)) 
    redirect("../../public/HTML/main.php?error=upload");



$content = "uploads/" . $fileName;
$format = "image";


// Gets the description from the form, or uses an empty string if none was entered
$description = $_POST["uploadDesc"] ?? "";


// Prepares the SQL statement for adding a new post
$stmt = $pdo->prepare("
    INSERT INTO post (user_id, format, content, description) 
    VALUES (?, ?, ?, ?)
");

// Runs the SQL statement using the post values
$stmt->execute([$userId, $format, $content, $description]);

// Sends  user back to the main page
header("Location: ../../public/HTML/main.php");
exit();
?>
