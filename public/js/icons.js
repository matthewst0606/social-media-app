/*
    --- icons.js ---
    Defines the Icons class which is used to create
    a list of clickable icon items used for post actions
    (like, dislike, comment, share, view user)
*/
class Icons {
    constructor(icon, iconAlt, iconClass) {
        this.icon = icon;
        this.iconAlt = iconAlt;
        this.iconClass = iconClass;
    }

    // display each icon
    displayIcon() {
        let li = document.createElement("li");
        let a = document.createElement("a");
        let img = document.createElement("img");
        let span = document.createElement("span");

        img.src = this.icon;
        img.alt = this.iconAlt;

        a.appendChild(img);
        li.appendChild(a);

        if (this.iconClass === "like" || this.iconClass === "dislike") {
            span.classList.add("icon-interact-count");
            span.textContent = 0;
            li.appendChild(span);
        }

        li.classList.add(this.iconClass); 
        return li;
    }
}
