<?php
/*  --- editSettings.php ---
    allows users to delete their account,
    update their bio, or change their profile photo
*/
session_start();
require __DIR__ . "/../core/redirect.php";
require __DIR__ . "/../core/db_connect.php";

if (!isset($_SESSION['id'])) redirect("../../public/HTML/login.php");


// delete account
if (isset($_POST['deleteAccount'])) {
    $stmt = $pdo->prepare("DELETE FROM users WHERE user_id = ?");
    $stmt->execute([$_SESSION['id']]);

    session_unset();
    session_destroy();
    redirect("../../public/HTML/login.php");
}

// update bio
if (isset($_POST['bio'])) {
    $bio = trim($_POST['bio']);

    if ($bio === "")
        { redirect("../../public/HTML/settings.php?error=bio"); }

    $stmt = $pdo->prepare("
        UPDATE userProfile
        SET bio = ?
        WHERE user_id = ?
    ");
    $stmt->execute([$bio, $_SESSION['id']]);

    redirect("../../public/HTML/settings.php");
}

// if the pfp is saved without adding a file
// set it to the default icon
if (isset($_FILES['profilePhoto']) &&
    $_FILES['profilePhoto']['error'] === UPLOAD_ERR_NO_FILE) {
    $stmt = $pdo->prepare("
        UPDATE userProfile
        SET pfp = ?
        WHERE user_id = ?
    ");
    $stmt->execute(["icons/profile-circle-2.svg", $_SESSION['id']]);

    redirect("../../public/HTML/settings.php");
}

// update pfp
if (isset($_FILES['profilePhoto']) &&
    $_FILES['profilePhoto']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = __DIR__ . "/../../public/uploads/";
    $fileName = uniqid("pfp_", true) . "_" . basename($_FILES['profilePhoto']['name']);
    $destination = $uploadDir . $fileName;

    if (!move_uploaded_file($_FILES['profilePhoto']['tmp_name'], $destination))
        redirect("../../public/HTML/settings.php?error=profile-photo");

    $pfp = "uploads/" . $fileName;

    $stmt = $pdo->prepare("
        UPDATE userProfile
        SET pfp = ?
        WHERE user_id = ?
    ");
    $stmt->execute([$pfp, $_SESSION['id']]);

    redirect("../../public/HTML/settings.php");
}

redirect("../../public/HTML/settings.php");
?>
