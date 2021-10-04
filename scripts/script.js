// Toggle Light&Dark
let body = document.querySelector('body');
let toggle = document.querySelector('.toggle');
let form = document.querySelector('.searchForm');
// Username,Link, Joined
let userName = document.querySelector('.userName');
let userLink = document.querySelector('.userLink');
let userJoined = document.querySelector('.userDate');
let avatar = document.querySelector('.avatar');
// Bio
let bio = document.querySelector('.bio');
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
    let value = document.querySelector('input').value;
    console.log(value);
    fetch(`../${value}.json`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            userName.innerHTML = data.name;
            userLink.href = data.html_url;
            avatar.src = data.avatar_url;
            userJoined.innerHTML = data.created_at;
            repos.innerHTML = data.public_repos;
            following.innerHTML = data.followers;
            followers.innerHTML = data.following;
            city.innerHTML = data.location;
            website.innerHTML = data.blog;
            website.href = data.blog;
            company.innerHTML = data.company;
            if (data.bio === null) {
                bio.innerHTML = 'No bio in description';
            } else {
                bio.innerHTML = data.bio;
            }

            if (data.twitter_username == null) {
                twitter.innerHTML = 'Not Available';
            } else {
                twitter.innerHTML = data.twitter_username;
            }
        });
});
