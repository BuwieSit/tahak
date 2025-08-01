const selectedPackage = localStorage.getItem('package');
const bookTitle = document.querySelector('.booked-title');
const brochureContainer = document.querySelector('.main-content');

console.log('Selected package:', selectedPackage);

// Determine path prefix
const path = window.location.pathname;
const depth = path.split('/').filter(Boolean).length;

let prefix = './';
if (depth === 2) prefix = '../';
if (depth >= 3) prefix = '../../';

// Create sticky booking sidebar
const sideBooking = document.createElement('div');
sideBooking.className = 'side-book';
sideBooking.innerHTML = `
    <form>
        <div class="book-wrapper">
            <input type="date" name="startDate">
            <input type="date" name="endDate">
        </div>
        <select>
            <option>1 pax <i>(Kasama)</i></option>
            <option>2 pax <i>(Katipan)</i></option>
            <option>5 - 7 pax <i>(Kaagapay)</i></option>
        </select>
        <input type="text" name="name" placeholder="Your Name">
        <input type="number" name="number" placeholder="Contact Number">
        <input type="email" name="email" placeholder="Email">
        <textarea id="message" name="userMessage" rows="5" cols="40" placeholder="Enter your message here..."></textarea>
        <button type="submit" class="book-button">Get quote</button>
    </form>
`;

// Define image lists per package
const brochureImages = {
    'kapwa immersion journey': [
        `${prefix}images/DOLLARS/kapwa_1.png`,
        `${prefix}images/DOLLARS/kapwa_2.png`
    ],
    'ugnayan wellness retreat': [
        `${prefix}images/DOLLARS/ugnayan_1.png`,
        `${prefix}images/DOLLARS/ugnayan_2.png`
    ],
    'sama-sama wellness escape': [
        `${prefix}images/DOLLARS/sama_1.png`,
        `${prefix}images/DOLLARS/sama_2.png`
    ]
};

// Normalize package key
const packageKey = selectedPackage ? selectedPackage.trim().toLowerCase() : null;

// Generate brochures and add sticky booking form
if (packageKey && brochureImages[packageKey]) {
    brochureContainer.innerHTML = '';  // Clear existing content

    // Append each brochure image
    brochureImages[packageKey].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('brochure');
        brochureContainer.appendChild(img);
    });

    // Append sticky booking sidebar
    brochureContainer.appendChild(sideBooking);
} else {
    console.warn('No images found for package:', packageKey);
}

// Handle radio buttons
const radio = document.querySelectorAll('.form-radio');
radio.forEach(r => {
    r.addEventListener('click', () => {
        const key = r.value;
        console.log(key);
    });
});

function bookSubmit() {
    // Booking logic placeholder
}
