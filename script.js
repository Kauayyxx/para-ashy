const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('audio');
const heartContainer = document.getElementById('heartContainer');
const messages = document.getElementById('messages');

let intervaloCorações;
let intervaloILove;

// Inicia a música e começa os efeitos
playBtn.addEventListener('click', () => {
  audio.play();
  playBtn.style.display = 'none';

  // Corações
  intervaloCorações = setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💜';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${16 + Math.random() * 20}px`;
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 300);

  // I LOVE piscando no fundo junto
  intervaloILove = setInterval(() => {
    const love = document.createElement('div');
    love.classList.add('teAmo');
    love.innerText = 'I LOVE <3';
    love.style.left = `${Math.random() * 100}%`;
    love.style.top = `${Math.random() * 100}%`;
    messages.appendChild(love);
    setTimeout(() => love.remove(), 2000);
  }, 500);
});

// Quando toca na tela, aparece "Te amo"
document.addEventListener('click', (e) => {
  if (playBtn.style.display !== 'none') return;

  const msg = document.createElement('div');
  msg.classList.add('teAmo');
  msg.innerText = 'Te amo';
  msg.style.left = `${e.clientX}px`;
  msg.style.top = `${e.clientY}px`;
  messages.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
});
