const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");
const counter = document.getElementById("counter-value");
let counterValue = Number(counter.textContent);
function increaseCounter() {
    counterValue++;
    counter.textContent = String(counterValue);
}
function decreaseCounter() {
    if (counterValue === 0)
        return;
    counterValue--;
    counter.textContent = String(counterValue);
}
btnPlus.addEventListener("click", increaseCounter);
btnMinus.addEventListener("click", decreaseCounter);
export {};
//# sourceMappingURL=index.js.map