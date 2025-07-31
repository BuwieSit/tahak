const loader = document.getElementById('loaderCont');

window.onload = () => {
    loader.classList.add('hide-loader');

    // Dynamically determine prefix for fetch
    const path = window.location.pathname;
    const depth = path.split('/').filter(Boolean).length;

    let prefix = './';
    if (depth === 2) prefix = '../';
    if (depth >= 3) prefix = '../../';

    fetch(`${prefix}getUserInfo.php`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                console.log('User not logged in');
            } else {
                const user_id = data.id;
                const seedPoints = data.seed;
                const userName = data.username;
                const email = data.email;
                const picture = data.profile;

                console.log("Fetched username:", userName);

                // Show username in top section
                const userNameDisplay = document.querySelector('.user-name');
                if (userNameDisplay) {
                    userNameDisplay.textContent = userName;
                }

                // Show username in user-details section
                const detailUsername = document.querySelector('.detail-username');
                if (detailUsername) {
                    detailUsername.textContent = userName;
                }

                // Show email
                const userEmail = document.querySelector('.user-email');
                if (userEmail) {
                    userEmail.textContent = email;
                }

                // Show seeds
                const seedCounter = document.querySelector('.seed-counter');
                if (seedCounter) {
                    seedCounter.textContent = `Seeds generated: ${seedPoints} Seeds`;
                }
            }
        })
        .catch(err => {
            console.error('Fetch error:', err);
        });
};
