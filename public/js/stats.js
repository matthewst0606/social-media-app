class Stats {
    constructor(label, count, id) {
        this.label = label;
        this.count = count;
        this.id = id;
    }

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