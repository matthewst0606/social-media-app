class Notification {
    constructor(username, action, icon, createdAt) {
        this.username = username;
        this.action = action;
        this.icon = icon;
        this.createdAt = createdAt;
    }

    displayNotification() {
        const notificationItem = document.createElement("li");
        const card = this.createCard();
        const header = this.createHeader();
        const body = this.createBody();

        card.append(header, body);
        notificationItem.appendChild(card);

        return notificationItem;
    }

    static displayNotificationList(notifications) {
        const notificationList = document.querySelector(".notification-list");
        if (!notificationList) return;

        notificationList.replaceChildren();

        if (!notifications || notifications.length === 0) {
            notificationList.appendChild(Notification.createEmptyState());
            return;
        }

        for (let i = 0; i < notifications.length; i++) {
            const card = new Notification(
                notifications[i].username,
                notifications[i].action,
                notifications[i].icon,
                notifications[i].createdAt
            );

            notificationList.appendChild(card.displayNotification());
        }
    }

    // ----- helpers -----
    createCard() {
        const article = document.createElement("article");
        article.classList.add("notification-item");
        return article;
    }

    createHeader() {
        const header = document.createElement("header");
        header.classList.add("notification-header");

        if (this.icon) {
            header.appendChild(this.createIcon());
        }

        header.appendChild(this.createUser());
        return header;
    }

    createIcon() {
        const icon = document.createElement("img");
        icon.src = this.icon;
        icon.alt = "notification icon";
        icon.classList.add("notification-icon");
        return icon;
    }

    createUser() {
        const user = document.createElement("p");
        const strong = document.createElement("strong");

        strong.textContent = this.username;
        user.appendChild(strong);

        return user;
    }

    createBody() {
        const body = document.createElement("section");
        const message = document.createElement("p");
        const time = document.createElement("time");

        body.classList.add("notification-body");
        message.textContent = this.action;
        time.textContent = this.createdAt;

        body.append(message, time);

        return body;
    }

    static createEmptyState() {
        const emptyItem = document.createElement("li");
        const emptyState = document.createElement("article");
        const title = document.createElement("h3");
        const message = document.createElement("p");

        emptyState.classList.add("notification-empty");
        title.textContent = "No notifications yet";
        message.textContent = "New activity will appear here.";

        emptyState.append(title, message);
        emptyItem.appendChild(emptyState);

        return emptyItem;
    }
}
