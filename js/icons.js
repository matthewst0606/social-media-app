class Icons {
    constructor(icon, iconAlt, iconClass) {
        this.icon = icon;
        this.iconAlt = iconAlt;
        this.iconClass = iconClass;
    }

    // display each icon
    displayIcon() {
        console.log("icon.js running");
        let img = document.createElement("img");
        let a = document.createElement("a");
        let li = document.createElement("li");

        img.src = this.icon;
        img.alt = this.iconAlt;

        this.labelIcon(li);

        a.appendChild(img);
        li.appendChild(a);
        return li;
    }

    // label the class of each icon
    labelIcon(li) {
        switch (this.iconClass) {
            case "like": 
                li.classList.add("like");
                break;
            case "dislike":
                li.classList.add("dislike");
                break;
            case "comment":
                li.classList.add("comment");
                break;
            case "share":
                li.classList.add("share");
                break;
            case "user":
                li.classList.add("user");
                break;
            default:
                break;
        }
    }
}
