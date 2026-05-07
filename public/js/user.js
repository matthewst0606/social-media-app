/*
    --- user.js ---
    This file 
*/

class User {
    constructor(username, pfp) {
        this.username = username;
        this.pfp = pfp;
    }

    displayItem() {
        const li = document.createElement("li");
        const article = document.createElement("article");
        article.classList.add("user-card");

        let div = document.createElement("div");
        div.classList.add("user-container");

        // displays the pfp
        let pfp = document.createElement("img");
        pfp.classList.add("user-card-pfp");
        pfp.src = this.pfp;

        // displays the username
        const username = document.createElement("h3");
        username.classList.add("user-card-username");
        username.textContent = this.username;


        div.append(pfp, username);

        // // displays the user id
        // const userId = document.createElement("p");
        // userId.classList.add("user-card-id");
        // userId.textContent = this.userId;


        // // view profile button 
        // const viewProfile = document.createElement("button");
        // viewProfile.classList.add("user-card-btn");
        // viewProfile.type = "button";
        // viewProfile.textContent = "view profile";

        // follow button 
        const button = document.createElement("button");
        button.classList.add("user-card-btn");
        button.type = "button";
        button.textContent = "follow";
        

        article.append(div, button);
        li.appendChild(article);
        return li;
    }




    displayUserCard() {

    }

}


