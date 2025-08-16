const letters = "ABCDRFGHIJKLMNOPQRSTUVWXYZ";
const container = document.getElementById("letters");

for (let i = 0; i < 25; i++) {
    const span = document.createElement("span");
    span.className = "letter";
    span.textContent = letters[Math.floor(Math.random() * letters.length)];
    span.style.top = Math.random() * 100 + "vh";

    let xPos;
    if (Math.random() > 0.5) {
        xPos = Math.random() * 30;
    } else {
        xPos = 70 + Math.random() * 30;
    }
    span.style.left = xPod + "vw";
    span.style.fontSize = (15 + Math.random() * 25) + "px";
    span.style.animationDuration = (5 + Math.random() * 5) + "s";
    container.appendChild(span);
}
