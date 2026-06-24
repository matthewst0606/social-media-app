/*
    --- postInteract.js ---
    Handles all click actions on a post's interaction bar:
    likes, dislikes, comments, shares, and user details.
*/
class PostInteract {
    constructor(interactList) { 
        // Uses one listener on the whole icon list instead of one listener per icon.
        interactList.addEventListener("click", this); 
    }

    handleEvent(e) {
        // Finds the icon list item that was clicked, even if the image inside it was clicked.
        let iconItem = e.target.closest("li");
        if (!iconItem) return;

        // Sends the click to the matching action based on the icon's class.
        if (iconItem.classList.contains("like")) this.like(iconItem);
        else if (iconItem.classList.contains("dislike")) this.dislike(iconItem);
        else if (iconItem.classList.contains("comment")) this.comment(iconItem);
        else if (iconItem.classList.contains("share")) this.share(iconItem);
        else if (iconItem.classList.contains("user")) this.user(iconItem);
    }


    like(li) {
        let post = li.closest(".post");
        let postId = post.dataset.postId;
        let wasSelected = li.classList.contains("selected");
        let formData = new FormData();
        
        // Sends the like change to PHP so it can be saved in the database.
        formData.append("post_id", postId);
        formData.append("reaction", wasSelected ? "remove" : "like");

        fetch("../../app/posts/interact.php", {
            method: "POST",
            body: formData
        });



        // Updates the page immediately so the user does not need to refresh.
        li.classList.toggle("selected");


        let like = li.classList.contains("selected")
        let likeCount = li.querySelector(".icon-interact-count");

        let dislike = post.querySelector(".dislike");
        let dislikeCount = dislike.querySelector(".icon-interact-count");


        if (likeCount) {
            let current = Number(likeCount.textContent);
            likeCount.textContent = like ? current + 1 : current - 1;
        }

        // A post can only have one reaction from the current user.
        if (dislike && dislike.classList.contains("selected")) {
            if (dislikeCount) {
                let current = Number(dislikeCount.textContent);
                dislikeCount.textContent = current - 1;
            }
            dislike.classList.remove("selected");
        }
    }



    dislike(li) {
        let post = li.closest(".post");
        let postId = post.dataset.postId;
        let wasSelected = li.classList.contains("selected");
        let formData = new FormData();
        
        // Sends the dislike change to PHP so it can be saved in the database.
        formData.append("post_id", postId);
        formData.append("reaction", wasSelected ? "remove" : "dislike");

        fetch("../../app/posts/interact.php", {
            method: "POST",
            body: formData
        });

        li.classList.toggle("selected");

        let dislike = li.classList.contains("selected")
        let dislikeCount = li.querySelector(".icon-interact-count");
        
        let like = post.querySelector(".like");
        let likeCount = like.querySelector(".icon-interact-count");

        if (dislikeCount) {
            let current = Number(dislikeCount.textContent);
            dislikeCount.textContent = dislike ? current + 1 : current - 1;
        }

        // A post can only have one reaction from the current user.
        if (like && like.classList.contains("selected")) {
            if (likeCount) {
                let current = Number(likeCount.textContent);
                likeCount.textContent = current - 1;
            }

            like.classList.remove("selected");
        }
    }

    comment(li) {
        // Opens or closes this post's comment section.
        li.classList.toggle("selected");  
        let post = li.closest(".post");
        if (!post) return;

        let commentWindow = post.querySelector(".comment-window");
        if (commentWindow) commentWindow.classList.toggle("hidden");
    }

    share(li) {
        // Opens the share window for this post.
        li.classList.toggle("selected");  
        let post = li.closest(".post");
        if (!post) return;

        let shareWindow = post.querySelector(".share-window");
        if (shareWindow) shareWindow.classList.toggle("hidden");

        let copyBtn = post.querySelector(".copy-link-btn");
        if (!copyBtn) return;

        let message = post.querySelector(".copy-message");
        if (message) message.classList.add("hidden");

        copyBtn.onclick = () => {
            let postLink = `${window.location.origin}${window.location.pathname}?post=${post.dataset.postId}`;
            navigator.clipboard.writeText(postLink);

            if (message) message.classList.remove("hidden");
        };
    }

    user(li) {
        // Opens or closes the small user info window for this post.
        li.classList.toggle("selected");  
        let post = li.closest(".post");
        if (!post) return;        

        let userWindow = post.querySelector(".post-user-window");
        if (userWindow) userWindow.classList.toggle("hidden");
    }
}
