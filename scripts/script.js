let body = document.querySelector('body');
let toggle = document.querySelector('.toggle');
let form = document.querySelector('.searchForm');

toggle.addEventListener('click', (e) => {
    if (body.classList.value === 'dark') {
        toggle.innerHTML =
            'dark <img src="./assets/icon-moon.svg" alt="moon" />';
        body.classList.add('light');
    } else {
        toggle.innerHTML = 'light <img src="./assets/icon-sun.svg" alt="sun"/>';
        body.classList.remove('light');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});
