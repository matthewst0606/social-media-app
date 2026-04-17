

const topnav = document.getElementById("topnav");
let ul = document.createElement("ul");
ul.classList.add("tabcontainer");
for (let i = 0; i < topNav.length; i++) {
    var li = topNav[i].displayNav();
    ul.appendChild(li);
}
topnav.appendChild(ul);
new TabInteract(document.getElementById("topnav"));



for (let i = 0; i < posts.length; i++) {
    var article = posts[i].displayPost();
    document.getElementById("maincontent").appendChild(article);
}
new Interact(document.getElementById("maincontent"));




