const selectedPackage = localStorage.getItem('package');
const bookTitle = document.querySelector('.booked-title');
const brochure = document.querySelectorAll('.brochure');
//bookTitle.textContent = selectedPackage;

 const path = window.location.pathname;
    const depth = path.split('/').filter(Boolean).length;

    let prefix = './';
    if (depth === 2) prefix = '../';
    if (depth >= 3) prefix = '../../';

if (selectedPackage && selectedPackage.trim().toLowerCase() === 'kapwa immersion journey') {
    // Set multiple brochure images
    const kapwaImages = [
        `${prefix}images/DOLLARS/kapwa_1.png`,
        `${prefix}images/DOLLARS/kapwa_2.png` // Add more if needed
    ];

    // Set each brochure image src
    brochure.forEach((img, index) => {
        if (kapwaImages[index]) {
            img.src = kapwaImages[index];
        }
    });
}


const radio = document.querySelectorAll('.form-radio');
const label = document.querySelectorAll('.radio-label');


radio.forEach(r => {

    r.addEventListener('click', () => {
        const key = r.value;
        console.log(key);


    });

});

function bookSubmit() {

}

