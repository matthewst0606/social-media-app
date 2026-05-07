<?php


// get connection to db
require __DIR__ . "/db_connect.php";


// --------------  statement --------------
$stmt = $pdo->prepare(
    "
    SELECT post.*, users.username
    FROM post
    JOIN users ON post.user_id = users.user_id 
    ORDER BY post.created_at DESC, post.post_id DESC   
    "
);
$stmt->execute();
$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);        

// -------------- profile statement --------------
$profile = $pdo->prepare(
    "
    SELECT post.*, users.username
    FROM post
    JOIN users ON post.user_id = users.user_id
    WHERE post.user_id = ?
    ORDER BY post.created_at DESC, post.post_id DESC
    "
);
$profile->execute([$_SESSION['id']]);
$profilePosts = $profile->fetchAll(PDO::FETCH_ASSOC);

$userProfileStmt = $pdo->prepare("
    SELECT bio, pfp
    FROM userProfile
    WHERE user_id = ?
");
$userProfileStmt->execute([$_SESSION['id']]);
$userProfile = $userProfileStmt->fetch(PDO::FETCH_ASSOC);


// -------------- users statement --------------
$usersStmt = $pdo->prepare(
    "
    SELECT users.user_id, users.username, userProfile.pfp
    FROM users
    JOIN userProfile ON users.user_id = userProfile.user_id
    WHERE users.user_id != ?
    "
);
$usersStmt->execute([$_SESSION['id']]);
$users = $usersStmt->fetchAll(PDO::FETCH_ASSOC);


// -------------- friends statement --------------
$friendsStmt = $pdo->prepare(
    "
    SELECT 
        users.user_id,
        users.username
    FROM follow
    JOIN users ON follow.following_id = users.user_id
    WHERE follow.follower_id = ?
    "
);
$friendsStmt->execute([$_SESSION['id']]);
$friends = $friendsStmt->fetchAll(PDO::FETCH_ASSOC);

// -------------- comment statement --------------
$commentsStmt = $pdo->prepare("
    SELECT 
        comment.comment_id,
        comment.content,
        comment.created_at,
        comment.post_id,
        comment.user_id,
        users.username,
        userProfile.pfp
    FROM comment
    JOIN users ON comment.user_id = users.user_id
    JOIN userProfile ON users.user_id = userProfile.user_id
    ORDER BY comment.created_at ASC, comment.comment_id ASC
");
$commentsStmt->execute();
$comments = $commentsStmt->fetchAll(PDO::FETCH_ASSOC);

// -------------- interact statement --------------
$reactionStmt = $pdo->prepare("
    SELECT post_id, user_id, reaction
    FROM postReaction
");
$reactionStmt->execute();
$reactions = $reactionStmt->fetchAll(PDO::FETCH_ASSOC);


?>
