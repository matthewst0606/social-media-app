<?php
	session_start();
	require_once __DIR__ . "/../../app/core/redirect.php";

	if (!isset($_SESSION['id'])) redirect("login.php");
	require_once __DIR__ . "/../../app/core/mainhelper.php";

	$username = $_SESSION['username'];
	$uploadErrorMessage = "";

	if (isset($_GET["error"])) {
		if ($_GET["error"] === "upload_size") {
			$uploadErrorMessage = "That image is too large. Try a smaller image or restart the PHP server with the README command.";
		}
		else if ($_GET["error"] === "upload_type") {
			$uploadErrorMessage = "Please upload an image file.";
		}
		else if ($_GET["error"] === "upload") {
			$uploadErrorMessage = "The image could not be uploaded.";
		}
	}

	$defaultPfp =  'icons/profile-circle-2.svg';
	$userPfp = '../' . ($userProfile['pfp'] ?? $defaultPfp);

	$defaultBio = "no bio yet.";
	$userBio = $userProfile['bio'] ?? $defaultBio;


	function renderProfileInfo($username, $userPfp, $userBio) {
		echo '<img id="pfp" src="' . htmlspecialchars($userPfp) . '" alt="pfp">';
		echo '<p id="username"><strong>' . htmlspecialchars($username) . '</strong></p>';
		echo '<p id="bio">' . htmlspecialchars($userBio) . '</p>';
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home Page</title>
  <link rel="stylesheet" href="../CSS/main.css">

  <script src="../js/domHelpers.js"></script>
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

		<h1><a href="login.php">Post Cards</a></h1>

		<!-- top navigation that holds tabs -->
		<nav id="top-nav">
			<ul class="tab-container"></ul>
		</nav>

		<!-- top nagivation that holds the searchbar + button -->
		<form class="searchbar" id="search-form">
			<input type="text" placeholder="search post by tags" class="searchbox" id="search-input">
			<button class="searchbtn" type="submit"><img src="../icons/search-3.svg" alt="search"></button>
		</form>
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

				<?php if ($uploadErrorMessage !== ""): ?>
					<p class="error-message"><?php echo htmlspecialchars($uploadErrorMessage); ?></p>
				<?php endif; ?>

				<!-- form for uploading a post -->
				<form action="../../app/posts/upload.php" method="post" enctype="multipart/form-data">

					<!-- for uploading images & adding description to post -->
					<input type="file" id="uploadFile" name="uploadFile" accept="image/*" required>
					<input
						class="searchbox" type="text" id="description"
						name="uploadDesc" maxlength="255" placeholder="add description"
					>
					<input
							class="searchbox" type="text" id="tags"
							name="uploadTags"
							maxlength="255" placeholder="add tags"
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
					<?php renderProfileInfo($username, $userPfp, $userBio); ?>

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
