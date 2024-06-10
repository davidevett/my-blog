const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const header = document.querySelector('.header')
let mode = 'light';

themeSwitcher.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
});

const userName = document.querySelector('#post-username');
const title = document.querySelector('#post-title');
const content = document.querySelector('#post-content');
const submitButton = document.querySelector('#submit');
const body = document.body;
const main = document.body.main;
const divEl = document.createElement('div');
const h2El = document.createElement('h2');
const userNameEl = document.createElement('p');
const titleEl = document.createElement('p');
const contentEl = document.createElement('p');
const blogPostArray = []

function saveBlogPost() {

    const blogContent = {
        userName: userName.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };

    blogPostArray.push(blogContent)
    console.log(blogPostArray)
    localStorage.setItem('blogPostArray', JSON.stringify(blogPostArray));
};


function createPost() {
    divEl.setAttribute();
    h2El.setAttribute();
    userNameEl.setAttribute();
    titleEl.setAttribute();
    contentEl.setAttribute();

    main.appendChild(divEl);
    divEl.appendChild(h2El);
    divEl.appendChild(userNameEl);
    divEl.appendChild(titleEl);
    divEl.appendChild(contentEl);
}


function renderLastPost() {

    const lastContent = JSON.parse(localStorage.getItem('blogContent'));

    if (lastContent !== null) {
        document.getElementById('last-user').innerHTML = lastContent.userName;
        document.getElementById('last-title').innerHTML = lastContent.title;
        document.getElementById('last-Post').innerHTML = lastContent.content;
    }
};



submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    saveBlogPost();
    renderLastPost();
    createPost();
});

