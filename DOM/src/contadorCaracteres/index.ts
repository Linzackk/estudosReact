const input = document.getElementById("text-input") as HTMLInputElement;
const text = document.getElementById("input-value") as HTMLParagraphElement;

input.addEventListener("input", () => {
    const enteredText = input.value;
    console.log(enteredText);
    text.textContent = enteredText;
})