<?php
// a simple helper function to redirect users to a specific page
function redirect($location) {
    header("Location: $location");
    exit();
}
?>