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
                window.location.href = "./index.html";
                break;
            case 'about':
                window.location.href = "./AboutFolder/about.html";
                break;
            case 'packages':
                window.location.href = "./PackageFolder/packages.html";
                break;
            case 'create experience':
                window.location.href = "./CreateFolder/create.html";
                break;      
            case 'partners':
                window.location.href = "./PartnersFolder/partners.html";
                break; 
            case 'faqs':
                window.location.href = "./FaqsFolder/faqs.html";
                break;           
        }
    });

});


