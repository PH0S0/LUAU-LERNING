const button = document.getElementById("themeButton");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        button.textContent = "☀️ Tema claro";
    } else {
        button.textContent = "🌙 Tema escuro";
    }
});