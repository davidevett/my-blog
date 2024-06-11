const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
let mode = 'light';

themeSwitcher.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    } else {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
});

const userName = document.querySelector('#post-username');
const title = document.querySelector('#post-title');
const content = document.querySelector('#post-content');
const submitButton = document.querySelector('#submit');
const backButton = document.querySelector('#back-button');


function saveBlogPost() {
    const blogContent = {
        userName: userName.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };

    let blogPostArray = JSON.parse(localStorage.getItem('data')) || [];

    blogPostArray.push(blogContent);
    console.log(blogPostArray);
    localStorage.setItem('data', JSON.stringify(blogPostArray));
}

function createPost(post) {
    const main = document.querySelector('main');
    const divEl = document.createElement('div');
    const h2El = document.createElement('h2');
    const userNameEl = document.createElement('p');
    const titleEl = document.createElement('p');
    const contentEl = document.createElement('p');


    divEl.setAttribute('class', 'card');


    h2El.textContent = 'Blog Post';
    userNameEl.textContent = `User: ${post.userName}`;
    titleEl.textContent = `Title: ${post.title}`;
    contentEl.textContent = `Content: ${post.content}`;

    divEl.appendChild(h2El);
    divEl.appendChild(userNameEl);
    divEl.appendChild(titleEl);
    divEl.appendChild(contentEl);
    main.appendChild(divEl);
}


function renderPost() {

    const blogPostArray = JSON.parse(localStorage.getItem('data')) || [];

    blogPostArray.forEach(data => {
        createPost(data);
    });
}

if (submitButton) {
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        saveBlogPost();
         window.location.href = 'blog.html';
    });
}

if (window.location.pathname.includes('blog.html')) {
    renderPost();
}

if (backButton) {
    backButton.addEventListener('click', function (event) {
        window.location.href = 'index.html';
    });
}
