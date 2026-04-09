function Post(photo, description) {
    this.photo = photo;
    this.description = description;
}

function Interact(likes, dislikes, comments, shares, user) {
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