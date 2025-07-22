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
                    <img src="${prefix}images/facebook.png" alt="fb" class="social-img" id="fb">
                    <img src="${prefix}images/instagram.png" alt="ig" class="social-img" id="ig">
                    <img src="${prefix}images/tiktok.png" alt="tiktok" class="social-img" id="tk">
                    <img src="${prefix}images/twitter.png" alt="twt" class="social-img" id="twt">
                </div>
                <div class="foot-container navigate">
                    <a href="${prefix}AboutFolder/about.html" class="foot-links">About Us</a>
                    <a href="${prefix}ContactFolder/contact/html" class="foot-links">Contact Us</a>
                    <a  class="foot-links">Privacy Policy</a>
                    <a class="foot-links">Terms & Conditions</a>
                    <a href="${prefix}CreateFolder/create.html" class="foot-links">Create your Experience</a>
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

    const social = document.querySelectorAll('.social-img');
    social.forEach(soc => {

        soc.addEventListener('click', () => {
            const socType = soc.id;
            switch (socType) {
                case "fb":
                    window.open("https://www.facebook.com/profile.php?id=61578753895819", '_blank').focus();
                    break;
                case "ig":
                    window.open("https://www.instagram.com/tahak.kalikasan/", '_blank').focus();
                    break;
                case "tk":
                    window.open("https://www.tiktok.com/@tahak.kalikasan", '_blank').focus();
                    break;
                case "twt":
                    window.open("https://x.com/tahak_kalikasan", '_blank').focus();
                    break;
                default:
                    console.log("No such link");
                    break;
            }
        });
    });

});


