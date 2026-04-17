<?php

if (!isset($_FILES["uploadFile"])) exit("No file was sent.");
else if ($_FILES["uploadFile"]["error"] !== UPLOAD_ERR_OK) exit("Upload failed with error code: " . $_FILES["uploadFile"]["error"]);

$uploadDir = __DIR__ . "/../uploads/";
$fileName = basename($_FILES["uploadFile"]["name"]);
$destination = $uploadDir . $fileName;

if (!is_dir($uploadDir)) exit("Upload folder does not exist: " . $uploadDir);
if (!is_uploaded_file($_FILES["uploadFile"]["tmp_name"])) exit("Temporary uploaded file is missing.");
if (!move_uploaded_file($_FILES["uploadFile"]["tmp_name"], $destination)) exit("Failed to move uploaded file to: " . $destination);

echo "File uploaded successfully: " . htmlspecialchars($fileName);
header("Location: ../HTML/main.html");
exit();
?>