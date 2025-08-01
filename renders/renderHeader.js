window.addEventListener('DOMContentLoaded', () => {

    const path = window.location.pathname;
    const depth = path.split('/').filter(Boolean).length;
    let prefix = './';
    if (depth === 2) prefix = '../';
    if (depth >= 3) prefix = '../../';
        
    const header = document.getElementById('head');

    const headerContent = 
            `<img class="tahak-logo" src="${prefix}images/tahak_logo.png">
                <ul class="nav-list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Packages</li>
                </ul>
                    <div class="logo-cont">
                    <h1>TahaK</h1>
                    </div>
                <ul class="nav-list">
                            <li class="create-btn">Create Experience</li>
                            <li>Partners</li>
                            <li>FAQs</li>
                </ul> 
            <div class="lang-select-wrapper">
                <div class="lang-selected">
                    <img class="lang-icon" src="${prefix}images/uk.png" alt="Selected Language">
                </div>
                <ul class="lang-dropdown hidden">
                    <li class="lang-option"><img class="lang-icon" src="${prefix}images/uk.png" alt="English"></li>
                    <li class="lang-option"><img class="lang-icon" src="${prefix}images/korea.png" alt="French"></li>
                    <li class="lang-option"><img class="lang-icon" src="${prefix}images/france.png" alt="German"></li>
                    <li class="lang-option"><img class="lang-icon" src="${prefix}images/japan.png" alt="Japanese"></li>
                    <li class="lang-option"><img class="lang-icon" src="${prefix}images/philippines.png" alt="Filipino"></li>
                </ul>
            </div>
            <img class="user-icon" src="${prefix}images/user.png">

            `;

    if (header) {
        header.innerHTML = headerContent;
    } else {
        console.error("No <header> element found on the page.");
    }



    const navlist = document.querySelectorAll('.nav-list li');

    function normalize(str) {
        return str.trim().toLowerCase();
    }

    navlist.forEach(nav => {
        nav.addEventListener('click', () => {
            const key = normalize(nav.textContent);
            console.log(key);

            switch (key) {
                case 'home':
                    window.location.href = `${prefix}index.html`;
                    break;
                case 'about':
                    window.location.href = `${prefix}AboutFolder/about.html`;
                    break;
                case 'packages':
                    window.location.href = `${prefix}PackageFolder/packages.html`;
                    break;
                case 'create experience':
                    window.location.href = `${prefix}CreateFolder/create.html`;
                    break;      
                case 'partners':
                    window.location.href = `${prefix}PartnersFolder/partners.html`;
                    break; 
                case 'faqs':
                    window.location.href = `${prefix}FaqsFolder/faqs.html`;
                    break;           
            }
        });

    });


    const userTrigger = document.querySelector('.tahak-logo');

    userTrigger.addEventListener('click', () => {
        window.location.href = `${prefix}AccountPage/user.html`;
    });
    
    const langSelect = document.querySelector('.lang-selected');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const selectedLangIcon = langSelect.querySelector('img');

    // Toggle dropdown visibility
    langSelect.addEventListener('click', () => {
        langDropdown.classList.toggle('hidden');
    });

    // Select language and update icon
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const newSrc = option.querySelector('img').src;
            selectedLangIcon.src = newSrc;
            langDropdown.classList.add('hidden');

            // Optional: set selected language logic here
            console.log("Language selected:", newSrc);
        });
    });


});
