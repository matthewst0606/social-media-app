/*
    --- user.js ---
    This file 
*/

class User {
    constructor(username, pfp, bio) {
        this.username = username;
        this.pfp = pfp;
        this.bio = bio;
    }

    displayUser() {
        const userItem = createElementWithClass("li", "user-item");
        const userCard = createElementWithClass("article", "user-card");
        const userContainer = createElementWithClass("div", "user-container");
        const userHeader = createElementWithClass("div", "user-header");
        const userDetails = createElementWithClass("div", "user-details");
        const pfp = createElementWithClass("img", "user-card-pfp");
        const username = createElementWithClass("h3", "user-card-username");
        const bio = createElementWithClass("p", "user-card-bio");
        const followBtn = createElementWithClass("button", "user-card-btn");
        const defaultBio = "no bio yet.";

        pfp.src = this.pfp;
        username.textContent = this.username;
        bio.textContent = this.bio === defaultBio ? this.bio : `"${this.bio}"`;
        followBtn.type = "button";
        followBtn.textContent = "follow";

        userHeader.append(pfp, username);
        userDetails.append(userHeader, followBtn);
        userContainer.append(userDetails);
        userCard.append(userContainer, bio);
        userItem.appendChild(userCard);
        return userItem;
    }
}
