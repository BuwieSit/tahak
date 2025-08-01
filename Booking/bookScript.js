const selectedPackage = localStorage.getItem('package');
const bookTitle = document.querySelector('.booked-title');
const brochureContainer = document.querySelector('.main-content');

// Update booked title

// Get correct path prefix based on current location
const path = window.location.pathname;
const depth = path.split('/').filter(Boolean).length;

let prefix = './';
if (depth === 2) prefix = '../';
if (depth >= 3) prefix = '../../';

// Define image lists per package
const brochureImages = {
    'kapwa immersion journey': [
        `${prefix}images/DOLLARS/kapwa_1.png`,
        `${prefix}images/DOLLARS/kapwa_2.png`
        // Add more images here if needed
    ]
    // You can add other packages and images similarly
};

// Convert selected package name to lowercase
const packageKey = selectedPackage ? selectedPackage.trim().toLowerCase() : null;

if (packageKey && brochureImages[packageKey]) {
    // Clear existing brochures
    brochureContainer.innerHTML = '';

    // Generate new brochure <img> tags
    brochureImages[packageKey].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('brochure'); // Keep the class for styling
        brochureContainer.appendChild(img);
    });
}

// Handle radio buttons (your existing code)
const radio = document.querySelectorAll('.form-radio');
radio.forEach(r => {
    r.addEventListener('click', () => {
        const key = r.value;
        console.log(key);
    });
});

// Placeholder function
function bookSubmit() {
    // Add booking logic here
}
