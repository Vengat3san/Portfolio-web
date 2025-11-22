// hearts.js - same file included on every page so background is persistent
function makeHeart(){
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = '💖';
  const size = 12 + Math.random()*28;
  h.style.fontSize = size + 'px';
  h.style.left = Math.random()*100 + 'vw';
  h.style.bottom = (-Math.random()*10) + 'vh';
  h.style.opacity = (0.5 + Math.random()*0.5).toFixed(2);
  document.querySelector('.hearts-layer').appendChild(h);
  setTimeout(()=>h.remove(), 14000);
}
let heartsInterval = setInterval(makeHeart, 650);
for(let i=0;i<6;i++) setTimeout(makeHeart, i*120);
