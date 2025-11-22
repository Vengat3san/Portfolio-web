// hearts.js: lightweight heart scatter
function createHeart(){
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = '💖';
  const size = 10 + Math.random()*30;
  h.style.fontSize = size + 'px';
  h.style.left = Math.random()*100 + 'vw';
  h.style.bottom = (-Math.random()*10) + 'vh';
  h.style.opacity = (0.5 + Math.random()*0.5).toFixed(2);
  document.body.appendChild(h);
  setTimeout(()=> h.remove(), 12000);
}
let heartTimer = setInterval(createHeart, 700);
for(let i=0;i<6;i++) setTimeout(createHeart, i*120);
