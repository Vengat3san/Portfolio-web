// nav.js — no frameworks, just small helpers
document.addEventListener('click', function(e){
  if(e.target.matches('[data-back]')){
    history.back();
  }
});
