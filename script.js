// Portfolio loaded successfully
console.log("Bhavya Sri Portfolio Loaded!");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navigating to " + this.textContent);
    });
});