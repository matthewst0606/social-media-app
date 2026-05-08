


// ----- helpers -----
function createElementWithClass(tagName, ...classNames) {
    const element = document.createElement(tagName);
    element.classList.add(...classNames);
    return element;
}

function setText(element, text) {
    element.textContent = text;
    return element;
}

function createImage(src, alt, ...classNames) {
    const image = createElementWithClass("img", ...classNames);
    image.src = src;
    image.alt = alt;
    return image;
}

function createHiddenInput(name, value) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    return input;
}
