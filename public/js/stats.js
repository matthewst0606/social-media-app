class Stats {
    constructor(label, count, id) {
        this.label = label;
        this.count = count;
        this.id = id;
    }

    displayStat() {
        const li = document.createElement("li");
        li.classList.add("banner-tab");

        const a = document.createElement("a");
        a.href = "#";
        a.classList.add("nav-btn");
        a.textContent = this.label;

        const p = document.createElement("p");
        p.classList.add("count");
        p.id = this.id;
        p.textContent = this.count;

        li.append(a, p);

        return li;
    }
}