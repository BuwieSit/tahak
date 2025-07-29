function renderAccPopup() {
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
                popup = document.createElement('div');
                popup.classList.add('account-popup');

                popup.innerHTML = `
                    <form class="account-form acc-login" action="../accountHandler" method="post">
                        <p class="acc-title">Login</p>
                        <input type="text" class="login-username" name="username" placeholder="Username" required>
                        <input type="password" class="login-pass" name="password" placeholder="Password" required>
                        <button class="submit-button login-button" type="submit">Sign In</button>
                    </form>  

                    <form class="account-form acc-register reg-hide" action="../accountHandler.php" method="post">
                        <p class="acc-title">Register</p>
                        <input type="text" class="e reg-username" name="username" placeholder="Username" required>
                        <input type="email" class="reg-email" name="email" placeholder="Email" required>
                <input type="password" class="reg-pass" name="pass" placeholder="Password" required>
                        <button class="submit-button login-button" type="submit">Sign Up</button>
                    </form>   

                    <div class="change">
                        <img class="arrow" src="${prefix}images/arrow.png">
                        <p class="change-text">Register</p>
                    </div>

                    <img class="back-arrow" src="${prefix}images/back.png">
                `;

                document.body.appendChild(popup);
                setupPopupEvents(popup);
            } else {
                popup.classList.remove('accpopup-hide');
                popup.classList.add('accpopup-show');
            }
        });

        function setupPopupEvents(popup) {
            const login = popup.querySelector('.acc-login');
            const register = popup.querySelector('.acc-register');
            const changeAccess = popup.querySelector('.change');
            const changeArrow = popup.querySelector('.arrow');
            const changeText = popup.querySelector('.change-text');
            const backArrow = popup.querySelector('.back-arrow');

            popup.classList.remove('accpopup-hide');
            popup.classList.add('accpopup-show');
            login.classList.add('login-show');
            login.classList.remove('login-hide');
            register.classList.remove('reg-show');
            register.classList.add('reg-hide');
            changeText.textContent = 'Register';
            changeArrow.classList.remove('arrow-right-show');
            changeArrow.classList.add('arrow-left-show');

            backArrow.addEventListener('click', () => {
                popup.classList.remove('accpopup-show');
                popup.classList.add('accpopup-hide');
            });

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

            // --- REGISTER VALIDATION SECTION START ---
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message'); 
        errorDiv.style.display = 'none';
        register.appendChild(errorDiv);

            register.addEventListener('submit', function(e) {
                e.preventDefault();

                const username = register.querySelector('.reg-username').value.trim();
                const email = register.querySelector('.reg-email').value.trim();
                const password = register.querySelector('.reg-pass').value;

                let errorMsg = '';

                if (!username || !email || !password) {
                    errorMsg = 'Please fill in all fields.';
                } else if (!/^[a-zA-Z0-9]{3,20}$/.test(username)) {
                    errorMsg = 'Username must be 3-20 characters long and contain only letters and numbers.';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    errorMsg = 'Please enter a valid email address.';
                } else if (password.length <= 10) {
                    errorMsg = 'Password must be more than 10 characters.';
                }

                if (errorMsg) {
                    errorDiv.textContent = errorMsg;
                    errorDiv.style.display = 'block';
                } else {
                    errorDiv.style.display = 'none';
                    register.submit();
                }
            });

            // --- LOGIN VALIDATION SECTION START ---
            const loginErrorDiv = document.createElement('div');
            loginErrorDiv.classList.add('error-message');
            loginErrorDiv.style.display = 'none';
            login.appendChild(loginErrorDiv);

            login.addEventListener('submit', function(e) {
                e.preventDefault();

                const username = login.querySelector('.login-username').value.trim();
                const password = login.querySelector('.login-pass').value;

                if (!username || !password) {
                    loginErrorDiv.textContent = 'Please fill in all fields.';
                    loginErrorDiv.style.display = 'block';
                    return;
                }

                // Send credentials to PHP via fetch
                fetch('../accountHandler.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
                })
                .then(res => res.text())  // Get raw response text
                .then(response => {
                    response = response.trim();  // Trim whitespace safely here
                    console.log('PHP: ' + response);
                    if (response === 'success') {
                        loginErrorDiv.style.display = 'none';
                        // Redirect or reload page on successful login
                        window.location.reload();
                    } else if (response === 'no_account') {
                        loginErrorDiv.textContent = 'Account does not exist.';
                        loginErrorDiv.style.display = 'block';
                    } else if (response === 'wrong_credentials') {
                        loginErrorDiv.textContent = 'Incorrect username or password.';
                        loginErrorDiv.style.display = 'block';
                    } else {
                        loginErrorDiv.textContent = 'Unexpected error occurred.';
                        loginErrorDiv.style.display = 'block';
                    }
                })
                .catch(() => {
                    loginErrorDiv.textContent = 'Network error. Please try again.';
                    loginErrorDiv.style.display = 'block';
                });

            });
            // --- LOGIN VALIDATION SECTION END ---

        }
    });
}

// Auto-run when this file is imported
renderAccPopup();
