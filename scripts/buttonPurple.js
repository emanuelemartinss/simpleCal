let themeButton = document.getElementById('buttonPurple');
let iconTheme = document.getElementById('iconPurple');

let body = document.querySelector('body');

themeButton.addEventListener('click', function () {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    iconTheme.classList.toggle('fa-solid');
    iconTheme.classList.toggle('fa-poo-storm');
});
