<?php
    session_start();
    require_once __DIR__ . "/../../app/core/redirect.php";
    if (!isset($_SESSION['id'])) redirect("login.php");
?>


<!-- edit profile
    profile photo
    delete acocunt
    add bio
    change details
    

-->




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settings</title>

    <link rel="stylesheet" href="../CSS/reset.css">
    <link rel="stylesheet" href="../CSS/main.css">
</head>
<body>
    <!------------------ top navigation --------------------->
    <header class="top-header">
        <h1>Social Media</h1>
        <nav id="top-nav">
            <ul class="tab-container back-tab-container">
                <li class="nav-tab back-tab">
                    <a href="main.php" class="nav-btn back-btn">back to profile</a>
                </li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="active-page" id="settings-page">

            <article class="content-card settings-card">
                <h2 class="title">Profile Settings</h2>

                <ul class="settings-options">
                    <li class="nav-tab settings-tab">
                        <button class="nav-btn settings-btn" id="edit-pfp-button">Change Profile Photo</button>
                    </li>
                    <li class="nav-tab settings-tab">
                        <button class="nav-btn settings-btn" id="edit-bio-button">Change Bio</button>
                    </li>
                    <li class="nav-tab settings-tab">
                        <button class="nav-tab settings-btn" id="delete-account-button">Delete Account</button>
                    </li>
                </ul>
            </article>
        </section>
    </main>

    <script src="../js/settings.js"></script>
    <script>
        const settings = new Settings();
        settings.displaySettings();
    </script>
</body>
</html>
