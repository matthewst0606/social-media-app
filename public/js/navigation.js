
class NavIcon {
   constructor(icon, iconAlt, iconId) {
      this.icon = icon;
      this.iconAlt = iconAlt;
      this.iconId = iconId;
   }

   // display each icon
    displayNav() {
        let icon = document.createElement("img");
        let navBtn = document.createElement("a");
        let navTab = document.createElement("li");

        icon.src = this.icon;
        icon.alt = this.iconAlt;

        this.labelTabs(navTab, navBtn);
        navBtn.appendChild(icon);
        navTab.appendChild(navBtn);
        return navTab; 
    }

    // label the class of each icon
    labelTabs(navTab, navBtn) {
        navTab.classList.add("nav-tab");
        navBtn.classList.add("nav-btn");

        navTab.id = this.iconId;
        if (this.iconId === "home-tab") navTab.classList.add("active");

    }
} 


// handles clicking behavior on a post
class TabInteract {
    constructor(tabClick) { tabClick.addEventListener("click", this); }

    handleEvent(tabClick) {
        let tabBtn = tabClick.target.closest(".nav-tab");
        if (!tabBtn) return;        

        const tabs = {
            "friends-tab": "#friends-page",
            "post-tab": "#post-page",
            "home-tab": "#home-page",
            "notifications-tab": "#notifications-page",
            "profile-tab": "#profile-page"
        };

        const activePage = tabs[tabBtn.id];
        if (activePage) {
            this.displayPage(tabBtn, document.querySelector(activePage));
        }
    }

    displayPage(selectedTab, selectedPage) {
        let currentTab = document.querySelector(".active");
        let currentPage = document.querySelector(".active-page");

        if (currentTab && currentPage) {
            currentTab.classList.remove("active");
            currentPage.classList.remove("active-page");
            currentPage.classList.add("hidden");
        }

        selectedTab.classList.add("active");
        selectedPage.classList.remove("hidden");
        selectedPage.classList.add("active-page");
    }
}


