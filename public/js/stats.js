/*
    --- stats.js ---
    Creates profile stat items, such as followers,
    following, likes, and post count.
*/
class Stats {
    // Stores the stat label, starting count, and HTML id
    constructor(label, count, id) {
        this.label = label;
        this.count = count;
        this.id = id;
    }

    // Builds one stat item for the profile banner
    displayStat() {
        const statItem = createElementWithClass("li", "banner-tab");
        const statLabel = createElementWithClass("span", "stat-label");
        const statCount = createElementWithClass("span", "count");

        statLabel.textContent = this.label;
        statCount.textContent = this.count;
        statCount.id = this.id;

        statItem.append(statLabel, statCount);
        return statItem;
    }
}