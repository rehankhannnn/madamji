// Change this date to the beginning of your story (YYYY-MM-DD).
const relationshipStartDate = '2026-06-13';

const start = new Date(`${relationshipStartDate}T00:00:00`);
const today = new Date();
const days = Math.max(0, Math.floor((today - start) / 86400000));
document.getElementById('dayCount').textContent = days.toLocaleString();
document.getElementById('startDateText').textContent = start.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });

const reasons = [
  'You are the reason i feel alive.',
  'You make being myself feel wonderfully easy.',
  'Your heart is the warmest place I know.',
  'You notice the little things — and somehow make them matter more.',
  'You value every single moment we spend together.',
  'You make me want to be softer, kinder, and better.',
  'Your laugh is still my favorite sound, ik u dont like it, but I do huhh.',
  'You are my calm, my joy, and my home.',
  'You are such a baddie i love itt.',
  'You can slay every kind of outfit I can think of.'
];

const chocolates = document.getElementById('chocolates');
reasons.forEach((reason, index) => {
  const heart = document.createElement('button');
  heart.className = 'chocolate';
  heart.type = 'button';
  heart.setAttribute('aria-label', `Reveal reason ${index + 1}`);
  heart.addEventListener('click', () => {
    document.getElementById('reasonText').textContent = reason;
    heart.animate([{ transform: 'rotate(-45deg) scale(1)' }, { transform: 'rotate(-45deg) scale(1.25)' }, { transform: 'rotate(-45deg) scale(1)' }], { duration: 380 });
  });
  chocolates.appendChild(heart);
});

document.getElementById('kissButton').addEventListener('click', () => {
  document.getElementById('kissNote').textContent = 'Kisses delivered with all my love!';
  for (let i = 0; i < 18; i += 1) {
    const kiss = document.createElement('span');
    kiss.className = 'flying-kiss';
    kiss.textContent = i % 3 === 0 ? '💖' : '💋';
    kiss.style.left = `${42 + Math.random() * 16}vw`;
    kiss.style.top = `${68 + Math.random() * 10}vh`;
    kiss.style.setProperty('--x', `${(Math.random() - .5) * 330}px`);
    kiss.style.setProperty('--r', `${(Math.random() - .5) * 120}deg`);
    document.body.appendChild(kiss);
    kiss.addEventListener('animationend', () => kiss.remove());
  }
});

window.addEventListener('load', () => setTimeout(() => document.getElementById('loader').classList.add('hidden'), 650));

const memoryDialog = document.getElementById('memoryDialog');
const modalPhoto = document.getElementById('modalPhoto');
const memoryCaption = document.getElementById('memoryCaption');
const memoryEnvelope = document.getElementById('memoryEnvelope');

document.querySelectorAll('.memory').forEach((memory) => {
  memory.addEventListener('click', () => {
    const image = memory.querySelector('img');
    modalPhoto.src = image.currentSrc || image.src;
    modalPhoto.alt = image.alt;
    memoryCaption.textContent = memory.querySelector('p').textContent;
    memoryDialog.showModal();
    requestAnimationFrame(() => memoryEnvelope.classList.add('is-open'));
  });
});

function closeMemory() {
  memoryEnvelope.classList.remove('is-open');
  memoryDialog.close();
}

document.getElementById('memoryClose').addEventListener('click', closeMemory);
memoryDialog.addEventListener('click', (event) => {
  if (event.target === memoryDialog) closeMemory();
});
