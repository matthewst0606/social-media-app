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
        let li = createElementWithClass("li", "react", this.iconClass);
        let a = document.createElement("a");
        let img = createImage(this.icon, this.iconAlt);

        a.appendChild(img);
        li.appendChild(a);

        if (this.iconClass === "like" || this.iconClass === "dislike") {
            let span = createElementWithClass("span", "icon-interact-count");
            setText(span, 0);
            li.appendChild(span);
        }
        
        return li;
    }
}
