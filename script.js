// Background Animation with Particles
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fit window size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle Class
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  // Draw each particle
  draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Update particle position
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Remove particles that go out of canvas
    if (this.size > 0.2) this.size -= 0.1;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.size = 0;
    }
  }
}

// Create particles on mouse move
let particles = [];
canvas.addEventListener('mousemove', (e) => {
  const xPos = e.x;
  const yPos = e.y;
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(xPos, yPos));
  }
});

// Animate particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle, index) => {
    particle.update();
    particle.draw();
    if (particle.size <= 0) {
      particles.splice(index, 1);
    }
  });
  requestAnimationFrame(animateParticles);
}

animateParticles();


