
// ------------------ display top navigation --------------------
function displayTopNav() {
    const topNavigation = document.getElementById("top-nav");
    const ul = document.querySelector(".tab-container");

    for (let i = 0; i < topNav.length; i++) {
        let li = topNav[i].displayNav();
        ul.appendChild(li);
    }
    new TabInteract(topNavigation);
}

// ------------------ display main posts --------------------
function displayMainPosts() {
    const mainContent = document.getElementById("main-content");
    
    for (let i = 0; i < dbPosts.length; i++) {
        const reactions = displayReactions(dbPosts[i].post_id);
        let post = new Post(
            "../" + dbPosts[i].content,
            dbPosts[i].description,
            dbPosts[i].post_id,
            reactions.likeCount,
            reactions.dislikeCount,
            reactions.userReaction
        );
    
        let postContainer = post.displayPost();

        displayComments(postContainer, dbPosts[i].post_id);
        mainContent.appendChild(postContainer);
    }    
}


function displayComments(article, postId) {
    let commentsContainer = article.querySelector(".comments-container");
    let postComments = dbComments.filter(comment => comment.post_id == postId); 

    for (let i = 0; i < postComments.length; i++) {
        let comment = new Comment(
            postComments[i].pfp ? "../" + postComments[i].pfp : "../icons/profile-circle-2.svg",
            postComments[i].username,
            postComments[i].content
        );
        commentsContainer.appendChild(comment.displayComment());
    }
}


// ------------------ display profile posts --------------------
function displayReactions(postId) {
    let postReactions = dbReactions.filter(row => row.post_id == postId);
    let likeCount = postReactions.filter(row => row.reaction === "like").length;
    let dislikeCount = postReactions.filter(row => row.reaction === "dislike").length;

    let userReaction = null;
    let currentUserReaction = postReactions.find(row => row.user_id == currentUserId);


    if (currentUserReaction) {
        userReaction = currentUserReaction.reaction;
    }

    return {
        likeCount: likeCount,
        dislikeCount: dislikeCount,
        userReaction: userReaction,
    };
}



// ------------------ display profile posts --------------------
function displayProfilePosts() {
    const profilePosts = document.getElementById("profile-posts");
    profilePosts.replaceChildren();

    for (let i = 0; i < userPosts.length; i++) {
        let post = new ProfilePost(
           "../" + userPosts[i].content,
            userPosts[i].description,
            userPosts[i].post_id
        );
        let article = post.displayProfilePost();
        profilePosts.appendChild(article);
    }
}


// ------------------ display profile stats --------------------
function displayProfileStats() {
    const list = document.querySelector(".banner-container");
    if (!list) return;
    list.replaceChildren();

    for (let i = 0; i < profileStats.length; i++) {
        let li = profileStats[i].displayStat();
        list.appendChild(li);
    }
    document.getElementById("posts-count").textContent = userPosts.length;
}


// ------------------ display users --------------------
function displayUsers() {
    const usersList = document.querySelector(".users-list");

    for (let i = 0; i < dbUsers.length; i++) {
        let user = new User(
            dbUsers[i].username,
            dbUsers[i].pfp ? "../" + dbUsers[i].pfp : "../icons/profile-circle-2.svg",
        );

        let li = user.displayItem();
        usersList.appendChild(li);
    }
}
// ------------------ display notifications --------------------
function displayNotifications() {
    Notification.displayNotificationList([]);
}

// ----- calling functions -----
displayTopNav();
displayMainPosts();

displayProfilePosts();
displayProfileStats();
displayUsers();
displayNotifications();

new PostInteract(document.getElementById("main-content"));

