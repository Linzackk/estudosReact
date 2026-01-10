const button = document.getElementById("btn-color");
const text = document.getElementById("color-text");
const colors = ["red", "blue", "green", "purple", "pink", "brown", "yellow"];
function chooseRandomColor() {
    const number = Math.floor(Math.random() * colors.length);
    const color = colors[number];
    if (!color)
        return "red";
    return color;
}
button.addEventListener("click", () => {
    const color = chooseRandomColor();
    document.body.style.backgroundColor = color;
    text.innerText = `${color}`;
});
export {};
//# sourceMappingURL=index.js.map