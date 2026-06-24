/*
    --- user.js ---
    Creates user cards for the friends/users page.
    Each card shows the user's profile photo, username,
    bio, and follow button.
*/
class User {
    // Stores the user information needed to build a user card.
    constructor(username, pfp, bio) {
        this.username = username;
        this.pfp = pfp;
        this.bio = bio;
    }

    // Builds and returns one user card for the page.
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

        // Used so the default bio does not
        // get quotation marks around it
        const defaultBio = "no bio yet.";

        pfp.src = this.pfp;
        username.textContent = this.username;
        bio.textContent = this.bio === defaultBio ? this.bio : `"${this.bio}"`;
        followBtn.type = "button";
        followBtn.textContent = "follow";

        // Puts the card pieces together in the correct layout
        userHeader.append(pfp, username);
        userDetails.append(userHeader, followBtn);
        userContainer.append(userDetails);
        userCard.append(userContainer, bio);
        userItem.appendChild(userCard);
        return userItem;
    }
}
