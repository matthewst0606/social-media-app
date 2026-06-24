/*
    --- main.js ---
    This is the main javascript file that
    combines all components together.
*/

// ------------------ display top navigation --------------------
function displayTopNav() {
    const topNavigation = document.getElementById("top-nav");
    const tabList = document.querySelector(".tab-container");

    for (let i = 0; i < topNav.length; i++) {
        const tabItem = topNav[i].displayNav();
        tabList.appendChild(tabItem);
    }

    new TabInteract(topNavigation);
}

// ------------------ display main posts --------------------
function displayMainPosts(posts = dbPosts) {
    const mainContent = document.getElementById("main-content");
    mainContent.replaceChildren();

    for (let i = 0; i < posts.length; i++) {
        const postData = posts[i];
        const reactions = displayReactions(postData.post_id);

        const post = new Post(
            "../" + postData.content,
            postData.description,
            postData.post_id,
            reactions.likeCount,
            reactions.dislikeCount,
            reactions.userReaction,
            postData.tags,
            postData.username,
            postData.pfp ? "../" + postData.pfp : "../icons/profile-circle-2.svg"
        );

        const postContainer = post.displayPost();

        displayComments(postContainer, postData.post_id);
        mainContent.appendChild(postContainer);
    }
}




// ------------------ search by tag --------------------
function cleanTag(tag) {
    return tag.trim().replace(/^#/, "").toLowerCase();
}

function getTagList(tags) {
    if (!tags) return [];

    return tags
        .split(/\s+/)
        .map(tag => tag.trim())
        .filter(tag => tag !== "");
}

function filterPostsByTag(searchText) {
    const query = cleanTag(searchText);

    if (query === "") {
        displayMainPosts();
        return;
    }

    const matchingPosts = dbPosts.filter(post => {
        const tags = getTagList(post.tags);

        return tags.some(tag => cleanTag(tag).includes(query));
    });

    displayMainPosts(matchingPosts);
}

function setupTagSearch() {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    if (!searchForm || !searchInput) return;

    searchForm.addEventListener("submit", event => {
        event.preventDefault();
        filterPostsByTag(searchInput.value);
    });

    document.getElementById("main-content").addEventListener("click", event => {
        if (!event.target.classList.contains("tags")) return;

        event.preventDefault();
        searchInput.value = event.target.textContent;
        filterPostsByTag(searchInput.value);
    });

    const urlQuery = new URLSearchParams(window.location.search).get("query");
    if (urlQuery) {
        searchInput.value = urlQuery;
        filterPostsByTag(urlQuery);
    }
}

function showUploadTabOnError() {
    const error = new URLSearchParams(window.location.search).get("error");
    const uploadErrors = ["upload", "upload_size", "upload_type"];

    if (!uploadErrors.includes(error)) return;

    const uploadTab = document.getElementById("post-tab");
    const uploadPage = document.getElementById("post-page");

    if (!uploadTab || !uploadPage) return;

    new TabInteract(uploadTab).displayPage(uploadTab, uploadPage);
}


// ------------------ display comments --------------------

function displayComments(article, postId) {
    const commentsContainer = article.querySelector(".comments-container");
    const postComments = dbComments.filter(comment => comment.post_id == postId);

    for (let i = 0; i < postComments.length; i++) {
        const comment = new Comment(
            postComments[i].pfp ? "../" + postComments[i].pfp : "../icons/profile-circle-2.svg",
            postComments[i].username,
            postComments[i].content
        );
        commentsContainer.appendChild(comment.displayComment());
    }
}


// ------------------ display profile posts --------------------
function displayReactions(postId) {
    const postReactions = dbReactions.filter(
        row => row.post_id == postId);
    const likeCount = postReactions.filter(
        row => row.reaction === "like").length;
    const dislikeCount = postReactions.filter(
        row => row.reaction === "dislike").length;

    let userReaction = null;
    let currentUserReaction = postReactions.find(row => row.user_id == currentUserId);


    if (currentUserReaction) userReaction = currentUserReaction.reaction;

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
        const post = new ProfilePost(
           "../" + userPosts[i].content,
            userPosts[i].description,
            userPosts[i].post_id
        );
        const article = post.displayProfilePost();
        profilePosts.appendChild(article);
    }
}


// ------------------ display profile stats --------------------
function displayProfileStats() {
    const stats = document.querySelector(".banner-container");
    if (!stats) return;
    stats.replaceChildren();

    for (let i = 0; i < profileStats.length; i++) {
        const item = profileStats[i].displayStat();
        stats.appendChild(item);
    }
    document.getElementById("posts-count").textContent = userPosts.length;
}


// ------------------ display users --------------------
function displayUsers() {
    const usersList = document.querySelector(".users-list");

    for (let i = 0; i < dbUsers.length; i++) {
        const user = new User(
            dbUsers[i].username,
            dbUsers[i].pfp ? "../" + dbUsers[i].pfp : "../icons/profile-circle-2.svg",
            dbUsers[i].bio || "no bio yet."
        );

        const userItem = user.displayUser();
        usersList.appendChild(userItem);
    }
}
// ------------------ display notifications --------------------
function displayNotifications() {
    Notification.displayNotificationList([]);
}

// ----- calling functions -----
displayTopNav();
showUploadTabOnError();
displayMainPosts();
setupTagSearch();

displayProfilePosts();
displayProfileStats();
displayUsers();
displayNotifications();

new PostInteract(document.getElementById("main-content"));
