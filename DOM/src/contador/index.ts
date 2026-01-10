const btnMinus = document.getElementById("btn-minus") as HTMLButtonElement

const btnPlus = document.getElementById("btn-plus") as HTMLButtonElement

const counter = document.getElementById("counter-value") as HTMLParagraphElement;

let counterValue = Number(counter.textContent);


function increaseCounter() {
    counterValue++;   
    counter.textContent = String(counterValue);
}

function decreaseCounter() {
    if (counterValue === 0) return;
    counterValue-- ;
    counter.textContent = String(counterValue);
}

btnPlus.addEventListener("click", increaseCounter);
btnMinus.addEventListener("click", decreaseCounter);