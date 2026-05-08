// -------------- post class --------------
class Post {
    constructor(photo, description, postId, 
                likeCount, dislikeCount, userReaction) {
        this.photo = photo;
        this.description = description;
        this.postId = postId;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.userReaction = userReaction;

    }

    // -------------- display entire post --------------
    displayPost() {
        const postItem = createElementWithClass("article", "post");
        const postContainer = createElementWithClass("figure", "figContainer");

        const mainPhoto = createImage(this.photo, "post-photo", "mainPhoto");
        const photoDescription = this.displayDescription();

        const reactList = this.displayInteractions();
        
        const commentSection = new CommentForm(this.postId);
        const commentsContainer = commentSection.displayCommentsContainer();
        const commentForm = commentSection.displayForm();
        const commentWindow = createElementWithClass("section", "comment-window", "hidden");

        const userWindow = this.displayUserWindow();

        postItem.dataset.postId = this.postId;
        commentWindow.append(commentsContainer, commentForm)
        postContainer.append(mainPhoto, photoDescription);
        postItem.append(postContainer, reactList, commentWindow, userWindow);
        return postItem;
    }




     // -------------- display post description --------------
    displayDescription() {
        let description = createElementWithClass("figcaption", "description");
        setText(description, this.description);
        return description;
    }

    // -------------- display post interaction elements --------------
    displayInteractions() {
        let iconList = createElementWithClass("ul", "post-interact");

        for (let i = 0; i < icons.length; i++) {
            let icon = icons[i].displayIcon();

            if (icon.classList.contains("like")) {

                icon.querySelector(".icon-interact-count").textContent = this.likeCount;
                if (this.userReaction === "like") {
                    icon.classList.add("selected");
                }
            }

            if (icon.classList.contains("dislike")) {
                icon.querySelector(".icon-interact-count").textContent = this.dislikeCount;
                if (this.userReaction === "dislike") {
                    icon.classList.add("selected");
                }
            }

            iconList.appendChild(icon);
        }

        return iconList;
    }




    displayUserWindow () {
        const userWindow = createElementWithClass("article", "post-user-window", "hidden");
        const pfp = createElementWithClass("img", "pfp");
        const username = createElementWithClass("span", "username");

        userWindow.textContent = "test";
        pfp.src = this.pfp;
        username.textContent = this.username;
        
        userWindow.append(pfp, username);
        return userWindow;
    }



}
