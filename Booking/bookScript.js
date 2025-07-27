const selectedPackage = localStorage.getItem('package');
const bookTitle = document.querySelector('.booked-title');
bookTitle.textContent = selectedPackage;


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

