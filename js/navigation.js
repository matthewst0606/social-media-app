
class Navigation {
   constructor(icon, icon_alt, iconId) {
      this.icon = icon;
      this.icon_alt = icon_alt;
      this.iconId = iconId
   }

   // display each icon
    displayNav() {

        let img = document.createElement("img");
        let a = document.createElement("a");
        let li = document.createElement("li");

        img.src = this.icon;
        img.alt = this.icon_alt;

        this.labelTabs(li, a);
        a.appendChild(img);
        li.appendChild(a);
        return li; 
    }

    // label the class of each icon
    labelTabs(li, a, section) {
        li.classList.add("tab");
        a.classList.add("btn");

        switch (this.iconId) {
            case "friends-tab": 
                li.id = "friends-tab";
                break;
            case "post-tab":
                li.id = "post-tab";
                break;
            case "home-tab":
                li.id = "home-tab";
                li.classList.add("active");
                break;
            case "notifications-tab":
                li.id = "notifications-tab";
                break;
            case "profile-tab":
                li.id = "profile-tab";
                break;
            default: break;
        }
    }
} 


// handles clicking behavior on a post
class TabInteract {
    constructor(ul) { ul.addEventListener("click", this); }

    handleEvent(e) {
        let li = e.target.closest("li");

        if (!li) return;        
        if (li.id == "friends-tab") 
            this.page(li, document.querySelector("#friends-page"));
        else if (li.id == "post-tab") 
            this.page(li, document.querySelector("#post-page"));
        else if (li.id == "home-tab")
        {
            this.page(li, document.querySelector("#maincontent"));
            console.log("working #maincontent");
        }
        else if (li.id == "notifications-tab")
            this.page(li, document.querySelector("#notifications-page"));
        else if (li.id == "profile-tab")
            this.page(li, document.querySelector("#profile-page"));
        else return;
    }


    page(li, section) {
        let current = document.querySelector(".active");
        console.log("method is running...");
        let page = document.querySelector(".activePage");
        console.log("current tab:", current?.id);

console.log("old page:", page?.id);

console.log("new section:", section?.id);
        if (current && page) {
            current.classList.remove("active");
            page.classList.remove("activePage");
            page.classList.add("hidden");
            console.log("if statement");
        }

        li.classList.add("active");
        section.classList.remove("hidden");
        section.classList.add("activePage");

        console.log("end of method");
    }


    post(li) {
        let current = document.querySelector(".active");
        if (current) {
            current.classList.remove("active");
        }
        li.classList.add("active");
        
    }

    home(li) {
       let current = document.querySelector(".active");
        if (current) current.classList.remove("active");
        li.classList.add("active");


    }

    notifications(li) {
       let current = document.querySelector(".active");
        if (current) current.classList.remove("active");
        li.classList.add("active"); 
    }

    profile(li) {
       let current = document.querySelector(".active");
        if (current) current.classList.remove("active");
        li.classList.add("active");
    }
}


