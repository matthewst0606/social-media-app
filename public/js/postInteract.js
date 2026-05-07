/*
    --- postInteract.js ---
    desc
*/
class PostInteract {
    constructor(ul) { 
        ul.addEventListener("click", this); 
    }

    handleEvent(e) {
        let li = e.target.closest("li");
        if (!li) return;

        if (li.classList.contains("like")) this.like(li);
        else if (li.classList.contains("dislike")) this.dislike(li);
        else if (li.classList.contains("comment")) this.comment(li);
        else if (li.classList.contains("share")) this.share(li);
        else if (li.classList.contains("user")) this.user(li);
    }


    like(li) {
        let post = li.closest(".post");
        let postId = post.dataset.postId;
        let wasSelected = li.classList.contains("selected");
        let formData = new FormData();
        formData.append("post_id", postId);
        
        formData.append("reaction", wasSelected ? "remove" : "like");

        fetch("../../app/posts/interact.php", {
            method: "POST",
            body: formData
        });



        li.classList.toggle("selected");


        let like = li.classList.contains("selected")
        let likeCount = li.querySelector(".icon-interact-count");


        let dislike = post.querySelector(".dislike");
        let dislikeCount = dislike.querySelector(".icon-interact-count");


        if (likeCount) {
            let current = Number(likeCount.textContent);
            likeCount.textContent = like ? current + 1 : current - 1;
        }

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

        if (like && like.classList.contains("selected")) {
            if (likeCount) {
                let current = Number(likeCount.textContent);
                likeCount.textContent = current - 1;
            }

            like.classList.remove("selected");
        }
    }

    comment(li) {
        li.classList.toggle("selected");  

        let post = li.closest(".post");
        if (!post) return;

        let commentWindow = post.querySelector(".comment-window");
        if (commentWindow) commentWindow.classList.toggle("hidden");
    }

    share(li) {
        li.classList.toggle("selected");  

        let post = li.closest(".post");
        if (!post) return;
    }

    user(li) {
        li.classList.toggle("selected");  

        let post = li.closest(".post");
        if (!post) return;        

        let userWindow = post.querySelector(".post-user-window");
        if (userWindow) userWindow.classList.toggle("hidden");
    }
}
