<?php
$errorMessage = "";
if (isset($_GET["error"])) {
    if ($_GET["error"] === "username") {
        $errorMessage = "Invalid username.";
    }
    else if ($_GET["error"] === "email") {
        $errorMessage = "Invalid email."; 
    }
    else if ($_GET["error"] === "password") {
        $errorMessage = "Invalid password."; 
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post Cards</title>
    <link rel="stylesheet" href="../CSS/reset.css">
    <link rel="stylesheet" href="../CSS/main.css">
    <link rel="stylesheet" href="../CSS/login.css">


</head>
<body>
    <!------------------ top navigation --------------------->
    <header class="top-header">
        <h1><a href="login.php">Social Media</a></h1>
        <nav id="top-nav">
            <ul class="tab-container">
                <li class="nav-tab">
                    <a href="#" class="nav-btn">
                        <p>about</p> 
                        <img src="../icons/info-circle-2.svg" alt="icon" class="icon">
                    </a>
                </li>
                <li class="nav-tab">
                    <a href="#" class="nav-btn">
                        <p>help</p>
                        <img src="../icons/help-circle-2.svg" alt="icon" class="icon">
                    </a>
                </li>
            </ul>
        </nav>
    </header>

    <!------------------ registration page --------------------->

    <main>    
        <section class="active-page" id="login-page">
            <section id="main-content">
                <!-- display error message if username or password is incorrect -->
                <?php if ($errorMessage !== ""): ?>
                    <p class="error-message"><?php echo $errorMessage; ?></p>
                <?php endif; ?>


                <form action="../../app/auth/registerhelper.php" method="post">
                    <section class="form-section">
                        <input type="text" required="" name="username" id="username" placeholder="username" class="form-details">
                        <input type="email" required="" name="email" id="email" placeholder="email" class="form-details">
                        <input type="password" required="" name="password" id="password" placeholder="password" class="form-details">
                    </section>
                    <section class="submit-section">
                        <input type="submit" name="register" value="register" class="submit-btn">
                    </section>
                </form>
            </section>
        </section>
    </main>


</body>
</html>
