const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;

let x = 50, y = 200, dx = 2, dy = 2;

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
    if (x + 20 > canvas.width || x - 20 < 0) dx = -dx;
    if (y + 20 > canvas.height || y - 20 < 0) dy = -dy;
}
setInterval(drawCircle, 10);
