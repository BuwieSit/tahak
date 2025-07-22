const expButton = document.getElementById('introBtn');
const mainContent = document.getElementById('mainContent');

expButton.addEventListener('click', () => {

    mainContent.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

const inquireBtns = document.querySelectorAll('.package-button');

inquireBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.package-card');
    const title = card.querySelector('.package-title').textContent;

    localStorage.setItem('package', title);
    window.location.href = "../Booking/book.html";
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

const feature = document.querySelector('.feature-senses');
const senseCard = document.querySelectorAll('.senses-card');
const green = document.querySelector('.feature-green');

senseCard.forEach(card => {

  card.addEventListener('click', () => {
      const sense = card.id;
      
      console.log(sense);
      let featureContent = ``;
      card.style.pointerEvents = "none";

      if (sense === "sight") {
          feature.classList.remove('feature-hide');
          feature.classList.add('feature-show');

          featureContent = `
            <div class="feature-eye">
                <div class="eye-pupil"></div>
            </div>
          `;
          feature.innerHTML = featureContent;
          const eye = document.querySelector('.feature-eye');
          const pupil = document.querySelector('.eye-pupil');
          document.addEventListener('mousemove', (e) => {
              const rect = eye.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              let dx = e.clientX - centerX;
              let dy = e.clientY - centerY;
              const rx = rect.width / 2 - pupil.offsetWidth / 2;
              const ry = rect.height / 2 - pupil.offsetHeight / 2;
              const distance = Math.sqrt((dx * dx) / (rx * rx) + (dy * dy) / (ry * ry));
              if (distance > 1) {
                  dx /= distance;
                  dy /= distance;
              }

              pupil.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`; 
          }); 
          
      }

      if (sense === "hear") {
          if (feature.classList.contains("feature-show")) {
            feature.classList.remove("feature-show");
          }
          
          green.style.opacity = "1";
          green.style.background= "rgba(59, 122, 87, 0.5)";
          let birds = new Audio('../audios/birds.mp3');
          birds.play();
      }
      if (sense === "smell") {
          if (feature.classList.contains("feature-show")) {
            feature.classList.remove("feature-show");
          }
          green.style.opacity = "1";
          green.classList.add('green-video-cont');
          green.innerHTML = `
            <video class="green-video" autoplay loop src="https://video.wixstatic.com/video/d47472_58cce06729c54ccb935886c4b3647274/1080p/mp4/file.mp4" autoplay muted></video>
          `;
      }
      if (sense === "taste") {
        
      }
      if (sense === "touch") {
        
      }
      
      setTimeout(() => {
        card.style.pointerEvents = "all";
        if (feature) {
          feature.classList.remove('feature-show');
          feature.classList.add('feature-hide');
        }
        green.classList.remove('green-video-cont');
        green.style.opacity = "0";
        
      }, 5000)

  });

});

