// Toggle Light&Dark
let body = document.querySelector('body');
let toggle = document.querySelector('.toggle');
let form = document.querySelector('.searchForm');
let error = document.querySelector('.noResult');
// User Data
let avatar = document.querySelector('.avatar');
let userName = document.querySelector('.userName');
let userLink = document.querySelector('.userLink');
let userJoined = document.querySelector('.userDate');
let bio = document.querySelector('.bio');
// Links
let city = document.querySelector('.location');
let website = document.querySelector('.website');
let company = document.querySelector('.company');
let twitter = document.querySelector('.twitter');
let svgL = document.querySelector('.l1');
let svgC = document.querySelector('.svgC');
let svgW = document.querySelector('.svgW');
let svgT = document.querySelector('.svgT');
// Stats
let repos = document.querySelector('.repos');
let following = document.querySelector('.following');
let followers = document.querySelector('.followers');

let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
let dateString = (date) => {
    let string = new Date(date);
    let year = string.getFullYear().toString();
    let month = string.getMonth().toString();
    let day = string.getDay();

    return `Joined ${day} ${months[month]} ${year}`;
};
// Toggle Light&Dark Mode
toggle.addEventListener('click', (e) => {
    if (body.classList.value === 'dark') {
        toggle.innerHTML =
            'dark <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" fill="#697C9A" fill-rule="nonzero"/></svg>';
        body.classList.add('light');
    } else {
        toggle.innerHTML = `light <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"/></g></svg>
        `;
        body.classList.remove('light');
    }
});

form.addEventListener('submit', (e) => {
    let input = document.querySelector('#searchInput');
    e.preventDefault();
    // fetch(`../asdasd.json`)
    fetch(`https://api.github.com/users/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.message === 'Not Found') {
                error.innerHTML = 'No results';
                input.value = '';
            } else {
                if (!data.name) {
                    userName.innerHTML = data.login;
                } else {
                    userName.innerHTML = data.name;
                }
                input.value = '';
                error.innerHTML = '';
                userLink.href = data.html_url;
                userLink.textContent = `@${data.login}`;
                avatar.src = data.avatar_url;
                userJoined.innerHTML = dateString(data.created_at);
                repos.innerHTML = data.public_repos;
                followers.innerHTML = data.followers;
                following.innerHTML = data.following;
                if (data.location === null) {
                    city.innerHTML = 'Not Available';
                    city.classList.add('notAvailable');
                    svgL.classList.add('notAvailable');
                } else {
                    city.classList.remove('notAvailable');
                    svgL.classList.remove('notAvailable');
                    city.innerHTML = data.location;
                }
                if (!data.blog) {
                    website.classList.add('notAvailable');
                    svgW.classList.add('notAvailable');
                    website.innerHTML = 'Not Available';
                } else {
                    website.innerHTML = data.blog;
                    website.href = data.blog;
                    website.classList.remove('notAvailable');
                    svgW.classList.remove('notAvailable');
                }
                if (data.company === null) {
                    company.classList.add('notAvailable');
                    svgC.classList.add('notAvailable');
                    company.innerHTML = 'Not Available';
                } else {
                    company.classList.remove('notAvailable');
                    svgC.classList.remove('notAvailable');
                    company.innerHTML = data.company;

                    // company.href = `https://${data.company
                    //     .toLowerCase()
                    //     .replace(/\s/g, '')}.com`;
                }
                if (data.bio === null) {
                    bio.innerHTML = 'This profile has no bio';
                    bio.classList.add('no-bio');
                } else {
                    bio.innerHTML = data.bio;
                    bio.classList.remove('notAvailable');
                }
                if (data.twitter_username == null) {
                    twitter.classList.add('notAvailable');
                    svgT.classList.add('notAvailable');
                    twitter.innerHTML = 'Not Available';
                } else {
                    twitter.classList.remove('notAvailable');
                    svgT.classList.remove('notAvailable');
                    twitter.innerHTML = data.twitter_username;
                    twitter.href = `twitter.com/${data.twitter_username}`;
                }
            }
        });
});
