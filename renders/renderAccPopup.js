window.addEventListener('DOMContentLoaded', () => {
  
    const path = window.location.pathname;
    const depth = path.split('/').filter(Boolean).length;

  
    let prefix = './';
    if (depth === 2) prefix = '../';
    if (depth >= 3) prefix = '../../';

    const accTrigger = document.querySelector('.user-icon');

    accTrigger.addEventListener('click', () => {
       
        let popup = document.querySelector('.account-popup');

        if (!popup) {
            // Create popup
            popup = document.createElement('div');
            popup.classList.add('account-popup');

            popup.innerHTML = `
                <form class="account-form acc-login">
                    <p class="acc-title">Login</p>
                    <input type="text" class="login-username" name="login-username" placeholder="Username" required>
                    <input type="password" class="login-pass" name="login-pass" placeholder="Password" required>
                    <button class="submit-button login-button" type="submit">Sign In</button>
                </form>  

                <form class="account-form acc-register reg-hide">
                    <p class="acc-title">Register</p>
                    <input type="text" class="reg-username" name="reg-username" placeholder="Username" required>
                    <input type="email" class="reg-email" name="reg-email" placeholder="Email" required>
                    <input type="password" class="reg-pass" name="reg-pass" placeholder="Password" required>
                    <button class="submit-button login-button" type="submit">Sign Up</button>
                </form>   

                <div class="change">
                    <img class="arrow" src="${prefix}images/arrow.png">
                    <p class="change-text">Register</p>
                </div>

                <img class="back-arrow" src="${prefix}images/back.png">
            `;

            document.body.appendChild(popup);

            // Setup popup events after creation
            setupPopupEvents(popup);
        } else {
            // Show existing popup
            popup.classList.remove('accpopup-hide');
            popup.classList.add('accpopup-show');
        }

         console.log('clicked');
    });

    function setupPopupEvents(popup) {
        const login = popup.querySelector('.acc-login');
        const register = popup.querySelector('.acc-register');
        const changeAccess = popup.querySelector('.change');
        const changeArrow = popup.querySelector('.arrow');
        const changeText = popup.querySelector('.change-text');
        const backArrow = popup.querySelector('.back-arrow');

        // Show login initially
        popup.classList.remove('accpopup-hide');
        popup.classList.add('accpopup-show');
        login.classList.add('login-show');
        login.classList.remove('login-hide');
        register.classList.remove('reg-show');
        register.classList.add('reg-hide');
        changeText.textContent = 'Register';
        changeArrow.classList.remove('arrow-right-show');
        changeArrow.classList.add('arrow-left-show');

        // Close popup
        backArrow.addEventListener('click', () => {
            popup.classList.remove('accpopup-show');
            popup.classList.add('accpopup-hide');
        });

        // Toggle login/register
        changeAccess.addEventListener('click', () => {
            const loginVisible = login.classList.contains('login-show');

            login.classList.toggle('login-show', !loginVisible);
            login.classList.toggle('login-hide', loginVisible);

            register.classList.toggle('reg-show', loginVisible);
            register.classList.toggle('reg-hide', !loginVisible);

            changeText.textContent = loginVisible ? 'Login' : 'Register';
            changeArrow.classList.toggle('arrow-left-show', !loginVisible);
            changeArrow.classList.toggle('arrow-right-show', loginVisible);
        });
    }
});