const canvas = document.getElementById("pendulumCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = 300;
canvas.height = 300;

// Pendulum properties
const originX = canvas.width / 2;
const originY = 50;
const length = 150;
let angle = Math.PI / 4;
let angleVelocity = 0;
let angleAcceleration = 0;
const gravity = 0.05;

// Draw pendulum
function drawPendulum() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate pendulum position
  const bobX = originX + length * Math.sin(angle);
  const bobY = originY + length * Math.cos(angle);

  // Draw pendulum arm
  ctx.beginPath();
  ctx.moveTo(originX, originY);
  ctx.lineTo(bobX, bobY);
  ctx.strokeStyle = "#6a11cb";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw pendulum bob
  ctx.beginPath();
  ctx.arc(bobX, bobY, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#2575fc";
  ctx.fill();
}

// Update pendulum state
function updatePendulum() {
  angleAcceleration = (-gravity / length) * Math.sin(angle);
  angleVelocity += angleAcceleration;
  angleVelocity *= 0.99; // Damping
  angle += angleVelocity;
}

// Animation loop
function animate() {
  updatePendulum();
  drawPendulum();
  requestAnimationFrame(animate);
}

// Start animation
animate();
