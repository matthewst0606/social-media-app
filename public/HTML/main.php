<?php
    session_start();
    require_once __DIR__ . "/../../app/core/redirect.php";

    if (!isset($_SESSION['id'])) redirect("login.php");
    require_once __DIR__ . "/../../app/core/mainhelper.php";

    $defaultPfp =  'icons/profile-circle-2.svg';
    $userPfp = '../' . ($userProfile['pfp'] ?? $defaultPfp);

    $defaultBio = "no bio yet.";
    $userBio = $userProfile['bio'] ?? $defaultBio;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link rel="stylesheet" href="../CSS/main.css">


    <script src="../js/postInteract.js"></script>
    <script src="../js/icons.js"></script>
    <script src="../js/comment.js"></script>
    <script src="../js/post.js"></script>
    <script src="../js/profile.js"></script>
    <script src="../js/stats.js"></script>
    <script src="../js/navigation.js"></script>
    <script src="../js/data.js"></script>
</head>

<body>
    <!------------------ top navigation --------------------->
    <header class="top-header">

        <h1><a href="login.php">Social Media</a></h1> 

        <!-- top navigation that holds tabs -->
        <nav id="top-nav"><ul class="tab-container"></ul></nav>

        <!-- top nagivation that holds the searchbar + button -->
        <nav class="searchbar">
            <input type="text" placeholder="search" class="searchbox">
            <button class="searchbtn">
                <img src="../icons/search-3.svg" alt="search">
            </button>
        </nav>
    </header>

    <main>
        <!------------------ home section --------------------->
        <section id="home-page" class="active-page">
            <section id="main-content"></section>
        </section>

        <!------------------ friends section --------------------->
        <section id="friends-page" class="hidden">
            <section id="card-container">

                <article class="users-card">
                    <h2 class="title">Find Friends</h2>
                    
                    <ul class="users-list"></ul>
                </article>

                <!----- friends box ------>
                <article class="friends-card">
                    <h2 class="title">Friends</h2>
                    <!-- list all friends -->
                    <ul class="friends-list"></ul>
                </article>
            </section>
        </section>
        
        <!------------------ upload post section --------------------->
        <section id="post-page" class="hidden">
            <article class="content-card form-section">
                <h2 class="title">Upload</h2>
                
                <!-- form for uploading a post -->
                <form action="../../app/posts/upload.php" method="post" enctype="multipart/form-data">

                    <!-- for uploading images & adding description to post -->
                    <input type="file" id="uploadFile" name="uploadFile">
                   
                    <input 
                        class="searchbox" type="text" 
                        id="description" name="uploadDesc" 
                        maxlength="255" placeholder="Add Description."
                    >
                    <!-- submit the upload -->
                    <input type="submit" value="Upload" class="submit-btn">
                </form>
            </article>
        </section>

        <!------------------ notifications section --------------------->
        <section id="notifications-page" class="hidden">
                <article class="content-card notifications-card">
                    <h2 class="title">Notifications</h2>

                    <!-- list all notifications if available -->
                    <ul class="notification-list"></ul>
                </article>
        </section>

        <!------------------ user profile section --------------------->
        <section id="profile-page" class="hidden">
            <section id="profile-banner">

                <!-- sections containing parts of banner -->
                <article class="banner-section">
                    <h2 class="title">profile</h2>
                    
                    <!-- pfp, username, & bio -->
                    <img id="pfp" src="<?php echo htmlspecialchars($userPfp); ?>" alt="pfp">
                    <p id="username">
                        <strong><?php echo htmlspecialchars($_SESSION['username']); ?></strong>
                    </p>
                    <p id="bio"><?php echo htmlspecialchars($userBio); ?></p>
                    
                    <!-- settings button -->
                    <a href="settings.php" class="edit-profile-btn">edit profile</a>
                </article>
            

                <!-- displays followers, following, likes, posts -->
                <article class="tab-section">
                    <ul class="banner-container"></ul>
                </article>
            </section>

            <!-- displays the accounts posts -->
            <section id="profile-posts"></section>
        </section>
    </main>

    <!-- script to send details from DB to JS -->
    <?php include __DIR__ . "/include/appdata.php"; ?>
    <script src="../js/user.js"></script>
    <script src="../js/notification.js"></script>
    <script src="../js/main.js"></script>
</body>
</html>
