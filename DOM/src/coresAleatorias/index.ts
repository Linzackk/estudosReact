const button = document.getElementById("btn-color") as HTMLButtonElement;

const text = document.getElementById("color-text") as HTMLTextAreaElement

const colors: string[] = ["red", "blue", "green", "purple", "pink", "brown", "yellow" ]

function chooseRandomColor(): string {
    const number = Math.floor(Math.random() * colors.length)
    const color = colors[number];
    if (!color) return "red";
    return color;
}

button.addEventListener("click", () => {
    const color = chooseRandomColor()
    document.body.style.backgroundColor = color;
    text.innerText = `${color}`
})