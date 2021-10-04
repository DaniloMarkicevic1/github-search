// Toggle Light&Dark
let body = document.querySelector('body');
let toggle = document.querySelector('.toggle');
let form = document.querySelector('.searchForm');

// Links
let city = document.querySelector('.location');
let website = document.querySelector('.website');
let company = document.querySelector('.company');
let twitter = document.querySelector('.twitter');
// Stats
let repos = document.querySelector('.repos');
let followers = document.querySelector('.following');
let following = document.querySelector('.followers');

// Toggle
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

// fetch(`https://api.github.com/users/octocat`)
//     .then((response) => response.json())
// .then((data) => {
// repos.innerHTML = data.repos;
// followers.innerHTML = data.followers;
// following.innerHTML = data.following;
// city.innerHTML = data.
// website.innerHTML = data.
// company.innerHTML = data.
// twitter.innerHTML = data.
//     data.resources;
// });
