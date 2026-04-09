
for (let i = 0; i < posts.length; i++) {
    displayPost(posts[i].photo, posts[i].description);

}



let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        buttons[i].classList.toggle("clicked");
    };
}



