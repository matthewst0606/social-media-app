<script> 
    const dbPosts = <?php echo json_encode($posts); ?>; 
    const userPosts = <?php echo json_encode($profilePosts); ?>;
    const dbFriends = <?php echo json_encode($friends); ?>;
    const dbComments = <?php echo json_encode($comments); ?>;
    const dbUsers = <?php echo json_encode($users); ?>;
    const dbReactions = <?php echo json_encode($reactions); ?>;
    const currentUserId = <?php echo json_encode($_SESSION['id']); ?>;
</script>