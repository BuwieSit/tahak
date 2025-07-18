window.addEventListener('DOMContentLoaded', () => {

    const path = window.location.pathname;
    const depth = path.split('/').filter(Boolean).length;


    let prefix = './';
    if (depth === 2) prefix = '../';
    if (depth >= 3) prefix = '../../';
        
    const footer = document.getElementById('foot');

    const footerContent = 
            `<div class="foot-wrapper">
                <div class="foot-container socials">
                    <img src="${prefix}images/facebook.png" alt="fb" class="social-img">
                    <img src="${prefix}images/instagram.png" alt="ig" class="social-img">
                    <img src="${prefix}images/tiktok.png" alt="tiktok" class="social-img">
                    <img src="${prefix}images/twitter.png" alt="twt" class="social-img">
                </div>
                <div class="foot-container navigate">
                    <a href="" class="foot-links">About Us</a>
                    <a href="" class="foot-links">Contact Us</a>
                    <a href="" class="foot-links">Privacy Policy</a>
                    <a href="" class="foot-links">Terms & Conditions</a>
                    <a href="" class="foot-links">Create your Experience</a>
                </div>
            </div>

            <div class="foot-wrapper copyright">
                <p class="copyright-text">&copy; TahaK Tahanan sa Kalikasan 2025</p>
            </div>
            `;

    if (footer) {
        footer.innerHTML = footerContent;
    } else {
        console.error("No <footer> element found on the page.");
    }


});

