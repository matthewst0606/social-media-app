



function displayIcon(icon, icon_alt, ul) {
    let img = document.createElement("img");
    let a = document.createElement("a");
    let li = document.createElement("li");
    
    li.className = "button";

    img.src = icon;
    img.alt = icon_alt;

    a.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
}

function displayPost(photo, description, icon, icon_alt) {
    var article = document.createElement("article");
    let figure = document.createElement("figure");
    var img = document.createElement("img");
    let figcaption = document.createElement("figcaption");
    let ul = document.createElement("ul");
    
    article.className = "post";
    figure.className = "figContainer";
    img.className = "mainPhoto";
    figcaption.className = "description";
    ul.className = "interact"; 


    img.src = photo;
    img.alt = "Post image";
    figcaption.textContent = description;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    article.appendChild(figure);

    for (let i = 0; i < icons.length; i++) {
        displayIcon(icons[i].icon, icons[i].icon_alt, ul);
    }
    article.appendChild(ul)
    document.getElementById("maincontent").appendChild(article);
}











