


function Post(photo, description) {
    this.photo = photo;
    this.description = description;
}

function Interact(likes, dislikes, comments, shares, user) {
    this.icon = icon;
    this.likes = likes;
    this.dislikes = dislikes;
    this.comments = comments;
    this.shares = shares;
    this.user = user;
}

function Icons(icon, icon_alt) {
    this.icon = icon;
    this.icon_alt = icon_alt;
}




function displayPost(photo, description) {
    let article = document.createElement("article");
    article.className = "post";


    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    let img = document.createElement("img");
    

    img.src = photo;
    img.alt = "Post image";
    figcaption.textContent = description;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    article.appendChild(figure);

}



function displayInteract(icon, icon_alt, likes, dislikes, comments, shares, user) {
    let ul = document.createElement("ul");
    ul.className = "interact";


    for (let i = 0; i < icon.length; i++) {
        var img = document.createElement("img");
        var a = document.createElement("a");
        var li = document.createElement("li");

        img.src = icon[i];
        img.alt = icon_alt[i];
        a.appendChild(img);
        li.appendChild(a);
        ul.appendChild(li);
    }


}

