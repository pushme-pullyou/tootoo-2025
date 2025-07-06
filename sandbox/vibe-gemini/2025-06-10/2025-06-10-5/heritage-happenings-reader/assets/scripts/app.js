// This file contains the main JavaScript code for the heritage-happenings-reader application.
// It initializes the application, handles user interactions, and manages the display of markdown files.

document.addEventListener('DOMContentLoaded', function() {
    const tokenInput = document.getElementById('github-token');
    const connectBtn = document.getElementById('connect-btn');
    const tokenSection = document.getElementById('token-setup');
    const fileListSection = document.getElementById('file-list');
    const fileViewerSection = document.getElementById('file-viewer');
    const filesList = document.getElementById('files');
    const contentDiv = document.getElementById('content');

    // Default repository settings
    const REPO_OWNER = 'heritage-happenings';
    const REPO_NAME = 'heritage-happenings-documents';

    connectBtn.addEventListener('click', async function() {
        const token = tokenInput.value.trim();
        if (!token) {
            alert('Please enter a GitHub token');
            return;
        }

        connectBtn.textContent = 'Connecting...';
        connectBtn.disabled = true;

        try {
            githubAPI.setToken(token);
            const isValid = await githubAPI.testConnection();
            
            if (isValid) {
                tokenSection.style.display = 'none';
                fileListSection.style.display = 'block';
                fileViewerSection.style.display = 'block';
                await loadFiles();
            } else {
                alert('Invalid token or connection failed');
            }
        } catch (error) {
            alert('Connection failed: ' + error.message);
        } finally {
            connectBtn.textContent = 'Connect';
            connectBtn.disabled = false;
        }
    });

    async function loadFiles() {
        try {
            const contents = await githubAPI.getRepoContents(REPO_OWNER, REPO_NAME);
            displayFiles(contents);
        } catch (error) {
            filesList.innerHTML = '<li>Error loading files: ' + error.message + '</li>';
        }
    }

    function displayFiles(files) {
        filesList.innerHTML = '';
        files.forEach(file => {
            if (file.type === 'file') {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#';
                a.textContent = file.name;
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    loadFileContent(file);
                });
                li.appendChild(a);
                filesList.appendChild(li);
            }
        });
    }

    async function loadFileContent(file) {
        try {
            contentDiv.innerHTML = 'Loading...';
            const content = await githubAPI.getFileContent(file.download_url);
            
            if (file.name.endsWith('.md')) {
                contentDiv.innerHTML = `<pre>${content}</pre>`;
            } else if (file.name.endsWith('.json')) {
                contentDiv.innerHTML = `<pre>${JSON.stringify(JSON.parse(content), null, 2)}</pre>`;
            } else {
                contentDiv.innerHTML = `<pre>${content}</pre>`;
            }
        } catch (error) {
            contentDiv.innerHTML = 'Error loading file: ' + error.message;
        }
    }
});

// Additional functions can be added here as needed for functionality