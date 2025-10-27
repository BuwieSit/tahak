const selectedPackage = localStorage.getItem('package');
const brochureContainer = document.querySelector('.main-content');

console.log('Selected package:', selectedPackage);

// Determine path prefix
const path = window.location.pathname;
const depth = path.split('/').filter(Boolean).length;

let prefix = './';
if (depth === 2) prefix = '../';
if (depth >= 3) prefix = '../../';

// Create side booking form (hidden by default)
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

const brochureImages = {
    'kapwa immersion journey': [
        `${prefix}images/PESO/kapwa_1.png`,
        `${prefix}images/PESO/kapwa_2.png`
    ],
    'ugnayan wellness retreat': [
        `${prefix}images/PESO/ugnayan_1.png`,
        `${prefix}images/PESO/ugnayan_2.png`
    ],
    'sama-sama wellness escape': [
        `${prefix}images/PESO/sama_1.png`,
        `${prefix}images/PESO/sama_2.png`
    ]
};

// Normalize package key
const packageKey = selectedPackage ? selectedPackage.trim().toLowerCase() : null;

if (packageKey && brochureImages[packageKey]) {
    brochureContainer.innerHTML = ''; 

    brochureImages[packageKey].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('brochure');
        brochureContainer.appendChild(img);

        // Click to show or hide booking sidebar
        img.addEventListener('click', () => {
            sideBooking.style.display = 
                sideBooking.style.display === 'block' ? 'none' : 'block';
        });
    });

    brochureContainer.appendChild(sideBooking);
} else {
    console.warn('No images found for package:', packageKey);
}
