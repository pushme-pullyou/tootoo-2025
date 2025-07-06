// This file contains the JavaScript code that handles the functionality of the ReadApp application.
// It includes features such as folder expansion/collapse, file rendering, handling 403 errors,
// and managing the authentication flow with GitHub's API.

const apiBaseUrl = 'https://api.github.com/repos/heritage-happenings/heritage-happenings.github.io/contents/';
const fileContainer = document.getElementById('file-container');
const errorContainer = document.getElementById('error-container');

async function fetchFiles(path = '') {
    try {
        const response = await fetch(apiBaseUrl + path);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const files = await response.json();
        renderFiles(files);
    } catch (error) {
        handleError(error);
    }
}

function renderFiles(files) {
    fileContainer.innerHTML = '';
    files.forEach(file => {
        const fileElement = document.createElement('div');
        fileElement.classList.add('file-item');
        fileElement.textContent = file.name;

        if (file.type === 'dir') {
            fileElement.classList.add('folder');
            fileElement.addEventListener('click', () => {
                fetchFiles(file.path);
            });
        } else {
            fileElement.addEventListener('click', () => {
                viewFile(file.download_url);
            });
        }

        fileContainer.appendChild(fileElement);
    });
}

function viewFile(url) {
    window.open(url, '_blank');
}

function handleError(error) {
    errorContainer.textContent = `Error: ${error.message}`;
}

document.addEventListener('DOMContentLoaded', () => {
    fetchFiles();
});