const input = document.getElementById("text-input");
const text = document.getElementById("input-value");
input.addEventListener("input", () => {
    const enteredText = input.value;
    console.log(enteredText);
    text.textContent = enteredText;
});
export {};
//# sourceMappingURL=index.js.map