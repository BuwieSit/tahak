const expButton = document.getElementById('introBtn');
const mainContent = document.getElementById('mainContent');

expButton.addEventListener('click', () => {
    console.log("clicked");

    mainContent.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
const cards = document.querySelectorAll('.stage-card');
const popupContainer = document.querySelector('.popup-container');
const stagePopup = document.querySelector('.stage-popup');
const popupInner = document.querySelector('.popup-inner');
const popupFront = document.querySelector('.popup-front');
const popupBack = document.querySelector('.popup-back');
const frontText = document.querySelector('.front-text');
const backText = document.querySelector('.back-text');

let popupTimeout;
let remainingTime = 5000;
let timeoutStart;

// Utility to reset countdown to 5 seconds
function resetPopupTimeout() {
  clearTimeout(popupTimeout);
  timeoutStart = Date.now();
  remainingTime = 5000;

  popupTimeout = setTimeout(() => {
    popupContainer.style.display = 'none';
    stagePopup.classList.remove('flipped');
    document.body.classList.remove('popup-open');
  }, remainingTime);
}

cards.forEach(card => {
  card.addEventListener('click', () => {
    const bg = window.getComputedStyle(card).backgroundImage;
    const desc = card.querySelector('.stage-desc').textContent;

    popupFront.style.backgroundImage = bg;
    popupBack.style.backgroundImage = bg; 
    frontText.textContent = desc;
    backText.textContent = `${desc} — This is the detailed explanation of this stage.`;

    popupContainer.style.display = 'block';
    stagePopup.classList.remove('flipped');
    document.body.classList.add('popup-open');

    resetPopupTimeout(); // reset 5s every time
  });
});

// Flip on popup click + reset timer
stagePopup.addEventListener('click', () => {
  stagePopup.classList.toggle('flipped');
  resetPopupTimeout(); // refresh countdown when flipping
});

// Click outside to close
document.addEventListener('click', (e) => {
  const isClickInside = stagePopup.contains(e.target);
  const isCard = e.target.closest('.stage-card');

  if (!isClickInside && !isCard) {
    clearTimeout(popupTimeout);
    popupContainer.style.display = 'none';
    stagePopup.classList.remove('flipped');
    document.body.classList.remove('popup-open');
  }
});
