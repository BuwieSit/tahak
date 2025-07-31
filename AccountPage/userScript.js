// window.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.querySelector('.acc-login');
//     const regForm = document.querySelector('.acc-register');

//     const messageDiv = document.createElement('div');
//     messageDiv.classList.add('acc-message');
//     loginForm.parentElement.appendChild(messageDiv);

//     // Registration
//     regForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const username = regForm.querySelector('.reg-username').value.trim();
//         const email = regForm.querySelector('.reg-email').value.trim();
//         const password = regForm.querySelector('.reg-pass').value.trim();
//         const pictureInput = regForm.querySelector('.reg-picture');
//         const pictureFile = pictureInput.files[0];

//         if (!username || !email || !password) {
//             messageDiv.textContent = 'Please fill out all fields.';
//             return;
//         }

//         let picturePath = '';
//         if (pictureFile) {
//             picturePath = URL.createObjectURL(pictureFile); // Temporary URL for this session
//         }

//         const userData = {
//             username,
//             email,
//             password,
//             seeds: 0,
//             picture: picturePath
//         };

//         localStorage.setItem('userData', JSON.stringify(userData));

//         messageDiv.textContent = 'Registration successful! You can now log in.';
//         regForm.reset();
//     });

//     // Login
//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const username = loginForm.querySelector('.login-username').value.trim();
//         const password = loginForm.querySelector('.login-pass').value.trim();

//         const storedData = JSON.parse(localStorage.getItem('userData'));

//         if (storedData &&
//             storedData.username === username &&
//             storedData.password === password) {
//             messageDiv.textContent = `Welcome back, ${storedData.username}!`;
//             // Save login session flag or redirect to user page
//             localStorage.setItem('isLoggedIn', 'true');
//             window.location.href = 'userpage.html'; // Replace with your actual user page
//         } else {
//             messageDiv.textContent = 'Invalid username or password!';
//         }
//     });

//     console.log(localStorage);
// });

