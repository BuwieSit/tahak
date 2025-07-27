const loader = document.getElementById('loaderCont');
window.onload = () => {
    loader.classList.add('hide-loader');
};
 
you 

const actionBtn = document.querySelector('.action-button');
actionBtn.addEventListener('click', () => {

    window.location.href = './PackageFolder/packages.html';
});