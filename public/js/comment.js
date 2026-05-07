/*
    --- comment.js ---
    Defines classes used for displaying comments
    and creating the comment form for each post.
*/

class Comment {
    constructor(pfp, username, content) {
        this.pfp = pfp;
        this.username = username;
        this.content = content;
    }

    displayComment() {
        let commentContainer = this.createArticle();
        let topRow = this.createTopRow();
        let pfp = this.displayPfp();
        let username = this.displayUsername();
        let comment = this.displayContent();

        topRow.append(pfp, username);
        commentContainer.append(topRow, comment);

        return commentContainer;
    }


    // ----- helpers -----
    createArticle() {
        let article = document.createElement("article");
        article.classList.add("commentSection");
        return article;
    }

    createTopRow() {
        let section = document.createElement("section");
        section.classList.add("commentTopRow");
        return section;
    }

    displayPfp() {
        let img = document.createElement("img");
        img.classList.add("pfp");
        img.src = this.pfp;
        return img;
    }

    displayUsername() {
        let span = document.createElement("span");
        span.classList.add("username");
        span.textContent = this.username;
        return span;
    }

    displayContent() {
        let p = document.createElement("p");
        p.classList.add("content");
        p.textContent = this.content;
        return p;
    }

}


class CommentForm {
    constructor(postId) {
        this.postId = postId;
    }

    displayForm() {
        let commentForm = this.createCommentForm();
        let postIdInput = this.getPostIdInput();
        let commentInput = this.createCommentInput();
        let commentSubmit = this.createCommentSubmit();

        commentForm.append(postIdInput, commentInput, commentSubmit);
        return commentForm;
    }

    // ----- helpers -----
    displayCommentsContainer() {
        let commentsContainer = document.createElement("section");
        commentsContainer.classList.add("comments-container", "hidden");
        return commentsContainer;
    }

    createCommentForm() {
        let form = document.createElement("form");
        form.classList.add("comment-form", "hidden");
        form.action = "../../app/comments/comment.php";
        form.method = "post";
        return form;
    }

    getPostIdInput() {
        let postIdInput = document.createElement("input");
        postIdInput.type = "hidden";
        postIdInput.name = "post_id";
        postIdInput.value = this.postId;
        return postIdInput;
    }

    createCommentInput() {
        let commentInput = document.createElement("input");
        commentInput.classList.add("searchbox");
        commentInput.type = "text";
        commentInput.name = "comment_text";
        commentInput.placeholder = "add a comment";
        return commentInput;
    }

    createCommentSubmit() {
        let submit = document.createElement("button");
        submit.classList.add("submit-btn", "comment-submit");
        submit.type = "submit";
        submit.textContent = "Comment";
        return submit;
    }


}
