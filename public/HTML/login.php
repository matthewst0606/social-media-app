<?php
$errorMessage = "";

if (isset($_GET["error"])) {
    if ($_GET["error"] === "password") {
        $errorMessage = "Incorrect password."; 
    }
    else if ($_GET["error"] === "username") {
        $errorMessage = "Username not found.";
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
    <!------------------ login page --------------------->

    <main>
        <section class="active-page" id="login-page">
            <section id="main-content">

                <!-- display error message if username or password is incorrect -->
                <?php if ($errorMessage !== ""): ?>
                    <p class="error-message"><?php echo $errorMessage; ?></p>
                <?php endif; ?>

                <form action="../../app/auth/loginhelper.php" method="post">
                    <section class="form-section">
                        <!-- enter username -->
                        <input type="text" required="" 
                            name="username" id="username" 
                            placeholder="username" class="form-details"
                        >
                        <!-- enter password -->
                        <input type="password" required="" 
                            name="password" id="password" 
                            placeholder="password" class="form-details"
                        >
                    </section>

                    <!-- submit -->
                    <section class="submit-section">
                        <input type="submit" name="login" 
                               value="login" class="submit-btn" id="login"
                        >
                        <button class="submit-btn" id="register">
                            <a href="register.php">register</a>
                        </button>
                    </section>
                </form>
            </section>
        </section>
    </main>
</body>
</html>
