const selectedPackage = localStorage.getItem('package');
const bookTitle = document.querySelector('.booked-title');
bookTitle.textContent = selectedPackage;

