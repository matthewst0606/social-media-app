
// represents one comment
class Comment {
    constructor(pfp, username, contents) {
        this.pfp = pfp;
        this.username = username;
        this.contents = contents;
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
        span.textContent(this.username);
        return span;
    }

    displayContents() {
        let p = document.createElement("p");
        p.classList.add("contents");
        p.textContent = this.contents;
        return p;
    }


    displayComment() {
        let article = document.createElement("article");
        let a = document.createElement("a");

        let ul = document.createElement("ul");


        article.classList.add("commentSection");
        a.classList.add("pfpContainer");
        ul.classList.add("commentContainer");

        let img = this.displayPfp();
        let span = this.displayUsername();
        let p = this.displayContents();

        a.appendChild(img);
        a.appendChild(span);
        ul.appendChild(p);

 
        article.appendChild(ul);
        return article;
    }


}










/* 
    shows comment section for one post,
    listen for events,
    store/filter comments,
    render comments.
*/
class CommentManager {
    constructor(event) { 
        event.addEventListener("click", this);

    }

    // event is when the comment button is clicked
    handleEvent(e) {

    }

    //calls display comment
    displayCommentSection() {

    }

    // add comment event
    addComment() {

    }

}

