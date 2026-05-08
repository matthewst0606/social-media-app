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
        let commentContainer = createElementWithClass("article", "commentSection");
        let topRow = createElementWithClass("section", "commentTopRow");
        let pfp = createElementWithClass("img", "pfp");
        let username = createElementWithClass("span", "username");
        let comment = createElementWithClass("p", "content");

        pfp.src = this.pfp;
        setText(username, this.username);
        setText(comment, this.content);


        topRow.append(pfp, username);
        commentContainer.append(topRow, comment);
        return commentContainer;
    }
}




class CommentForm {
    constructor(postId) {
        this.postId = postId;
    }


    displayCommentsContainer() {
        return createElementWithClass("section", "comments-container");
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
    createCommentForm() {
        let form = createElementWithClass("form", "comment-form");
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
        let commentInput = createElementWithClass("input", "searchbox");
        commentInput.type = "text";
        commentInput.name = "comment_text";
        commentInput.placeholder = "add a comment";
        return commentInput;
    }

    createCommentSubmit() {
        let submit = createElementWithClass("button", "submit-btn", "comment-submit");
        submit.type = "submit";
        setText(submit, "Comment");
        return submit;
    }
}
