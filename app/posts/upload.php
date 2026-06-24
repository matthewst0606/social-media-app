<?php
/*  --- upload.php ---
    allows a user to upload a post
*/
session_start();

require __DIR__ . "/../core/redirect.php";
require __DIR__ . "/../core/db_connect.php";

// Checks if a file was actually sent from the form
if (!isset($_SESSION['id'])) 
    redirect("../../public/HTML/login.php");

// Checks if PHP detected an upload error
if (!isset($_FILES["uploadFile"]) || $_FILES["uploadFile"]["error"] !== UPLOAD_ERR_OK) {
    $error = $_FILES["uploadFile"]["error"] ?? UPLOAD_ERR_NO_FILE;

    if ($error === UPLOAD_ERR_INI_SIZE || $error === UPLOAD_ERR_FORM_SIZE) {
        redirect("../../public/HTML/main.php?error=upload_size");
    }

    redirect("../../public/HTML/main.php?error=upload");
}



$userId = $_SESSION['id'];
$uploadDir = __DIR__ . "/../../public/uploads/"; 
$imageInfo = getimagesize($_FILES["uploadFile"]["tmp_name"]);

if ($imageInfo === false) {
    redirect("../../public/HTML/main.php?error=upload_type");
}

$extension = strtolower(pathinfo($_FILES["uploadFile"]["name"], PATHINFO_EXTENSION));
$allowedExtensions = ["jpg", "jpeg", "png", "gif", "webp"];

if (!in_array($extension, $allowedExtensions, true)) {
    redirect("../../public/HTML/main.php?error=upload_type");
}

$fileName = uniqid("post_", true) . "." . $extension;
$destination = $uploadDir . $fileName; 


// Moves the uploaded file from the temporary folder into the uploads folder
if (!move_uploaded_file($_FILES["uploadFile"]["tmp_name"], $destination)) 
    redirect("../../public/HTML/main.php?error=upload");



$content = "uploads/" . $fileName;
$format = "image";


// Gets the description from the form, or uses an empty string if none was entered
$description = $_POST["uploadDesc"] ?? "";
$tags = $_POST["uploadTags"] ?? "";


// Prepares the SQL statement for adding a new post
$stmt = $pdo->prepare("
    INSERT INTO post (user_id, format, content, description, tags) 
    VALUES (?, ?, ?, ?, ?)
");

// Runs the SQL statement using the post values
$stmt->execute([$userId, $format, $content, $description, $tags]);

// Sends  user back to the main page
redirect("../../public/HTML/main.php");
?>
