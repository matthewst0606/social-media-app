// -------------- post class --------------
class Post {
    constructor(photo, description, postId,
                likeCount, dislikeCount, userReaction, tags, username, pfp) {
        this.photo = photo;
        this.description = description;
        this.postId = postId;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.userReaction = userReaction;
        this.tags = tags;
        this.username = username;
        this.pfp = pfp;


    }

    // -------------- display entire post --------------
    displayPost() {
        const postItem = createElementWithClass("article", "post");
        const postContainer = createElementWithClass("figure", "figContainer");

        const mainPhoto = createImage(this.photo, "post-photo", "mainPhoto");
        const photoDescription = this.displayDescription();
        const photoTags = this.displayTags();
        const reactList = this.displayInteractions();

        const commentSection = new CommentForm(this.postId);
        const commentsContainer = commentSection.displayCommentsContainer();
        const commentForm = commentSection.displayForm();
        const commentWindow = createElementWithClass("section", "comment-window", "hidden");
        const shareWindow = this.displayShareWindow();
        const userWindow = this.displayUserWindow();

        postItem.dataset.postId = this.postId;
        commentWindow.append(commentsContainer, commentForm)
        postContainer.append(mainPhoto, photoDescription);
        postItem.append(postContainer, photoTags, reactList, commentWindow, shareWindow, userWindow);
        return postItem;
    }




     // -------------- display post description --------------
    displayDescription() {
        let description = createElementWithClass("figcaption", "description");
        setText(description, this.description);
        return description;
    }

    displayTags() {
        let tagList = createElementWithClass("section", "tag-list");
        const tags = getTagList(this.tags);

        for (let i = 0; i < tags.length; i++) {
            let tag = createElementWithClass("a", "tags");
            setText(tag, tags[i]);
            tag.href = `?query=${encodeURIComponent(tags[i])}`;
            tagList.appendChild(tag);
        }

        return tagList;
    }

    // -------------- display post interaction elements --------------
    displayInteractions() {
        let iconList = createElementWithClass("ul", "post-interact");

        for (let i = 0; i < icons.length; i++) {
            let icon = icons[i].displayIcon();

            if (icon.classList.contains("like")) {

                icon.querySelector(".icon-interact-count").textContent = this.likeCount;
                if (this.userReaction === "like")
                    { icon.classList.add("selected"); }
            }

            if (icon.classList.contains("dislike")) {
                icon.querySelector(".icon-interact-count").textContent = this.dislikeCount;
                if (this.userReaction === "dislike")
                    { icon.classList.add("selected"); }
            }

            iconList.appendChild(icon);
        }

        return iconList;
    }

    // -------------- display share window --------------
    displayShareWindow() {
        const shareWindow = createElementWithClass("article", "share-window", "hidden");
        const title = createElementWithClass("h3", "share-title");
        const copyBtn = createElementWithClass("button", "copy-link-btn");
        const message = createElementWithClass("p", "copy-message", "hidden");

        setText(title, "Share this post");
        setText(copyBtn, "Copy Link");
        copyBtn.type = "button";
        setText(message, "Link copied!");

        shareWindow.append(title, copyBtn, message);
        return shareWindow;
    }


    // -------------- display user window --------------
    displayUserWindow () {
        const userWindow = createElementWithClass("article", "post-user-window", "hidden");
        const pfp = createElementWithClass("img", "pfp");
        const username = createElementWithClass("span", "username");

        pfp.src = this.pfp;
        username.textContent = this.username;

        userWindow.append(pfp, username);
        return userWindow;
    }
}
