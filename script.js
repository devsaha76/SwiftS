const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
    span.style.left = xPos + "vw";
    span.style.fontSize = (15 + Math.random() * 25) + "px";
    span.style.animationDuration = (5 + Math.random() * 5) + "s";
    container.appendChild(span);
}

document.getElementById('gameForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const playerName = document.getElementById('playerName').value;
    const inputType = document.getElementById('inputType').value;
    const difficulty = document.getElementById('difficulty').value;
    const cateegory = document.getElementById('category').value;
    const queryParams = new URLSearchParams({
        name: playerName,
        type: inputType,
        difficulty: difficulty,
        cateegory: cateegory
    });
    window.location.href = `game.html?${queryParams.toString()}`;
})