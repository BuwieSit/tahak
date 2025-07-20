const expButton = document.getElementById('introBtn');
const mainContent = document.getElementById('mainContent');

expButton.addEventListener('click', () => {
    console.log("clicked");

    mainContent.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
