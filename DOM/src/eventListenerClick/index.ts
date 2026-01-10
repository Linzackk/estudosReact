document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn-color") as HTMLButtonElement;

    button.addEventListener("click", () => {
        console.log("entrou no evento")
        const current = document.body.style.backgroundColor;
        
        document.body.style.backgroundColor = 
            current === "black" ? "white": "black";
    })
})

