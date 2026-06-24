/*
    --- notification.js ---
    Builds notification cards for the notifications page.
    It can display a list of notifications or show an empty
    message when there is no activity yet.
*/
class Notification {
    // Stores the notification information used to build one card
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
        const article = createElementWithClass("article", "notification-item");
        return article;
    }

    createHeader() {
        const header = createElementWithClass("header", "notification-header");
        if (this.icon) header.appendChild(this.createIcon());

        header.appendChild(this.createUser());
        return header;
    }

    createIcon() {
        const icon = createImage(this.icon, "notification icon", "notification-icon");
        return icon;
    }

    createUser() {
        const user = document.createElement("p");
        const strong = document.createElement("strong");

        setText(strong, this.username);
        user.appendChild(strong);

        return user;
    }

    createBody() {
        const body = createElementWithClass("section", "notification-body");
        const message = document.createElement("p");
        const time = document.createElement("time");

        setText(message, this.action);
        setText(time, this.createdAt);

        body.append(message, time);

        return body;
    }

    static createEmptyState() {
        const emptyItem = document.createElement("li");
        const emptyState = createElementWithClass("article", "notification-empty");
        const icon = createImage("../icons/emoji-puzzled.svg", "no notifications", "notification-empty-icon");
        const title = document.createElement("h3");
        const message = document.createElement("p");

        setText(title, "No notifications yet");
        setText(message, "New activity will appear here.");

        emptyState.append(icon, title, message);
        emptyItem.appendChild(emptyState);

        return emptyItem;
    }
}
