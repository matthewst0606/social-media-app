class Post {
    constructor(photo, description, postId) {
        this.photo = photo;
        this.description = description;
        this.postId = postId;
    }

    displayPhoto() {
        console.log("post.js running");
        let img = document.createElement("img");
        img.classList.add("mainPhoto");
        img.src = this.photo;
        img.alt = "Post image";

        return img;
        // returns photo
    }

    displayDescription() {
        let figcaption = document.createElement("figcaption");
        figcaption.classList.add("description");
        figcaption.textContent = this.description;

        return figcaption;
    }

    displayPost() {
        let article = document.createElement("article");
        article.classList.add("post");
        let figure = document.createElement("figure");
        figure.classList.add("figContainer");
        let ul = document.createElement("ul");
        ul.classList.add("interact");

        let img = this.displayPhoto();
        let figcaption = this.displayDescription();

        figure.appendChild(img);
        figure.appendChild(figcaption);
        article.appendChild(figure);

        for (let i = 0; i < icons.length; i++) {
            let li = icons[i].displayIcon();            
            ul.appendChild(li);
        }

        article.appendChild(ul);
        return article;
    }
}
