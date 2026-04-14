

//

for (let i = 0; i < posts.length; i++) {
    var article = posts[i].displayPost();
    document.getElementById("maincontent").appendChild(article);
}

new Interact(document.getElementById("maincontent"));




