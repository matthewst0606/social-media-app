<?php
/*  --- db_connect.php ---
    connects to the postgres database.
    the database details are only to be used 
    as an example.
*/
$pdo = new PDO(
    "pgsql:host=localhost;port=5432;dbname=social_media",
    "postgres",
    "postgres"
);

?>