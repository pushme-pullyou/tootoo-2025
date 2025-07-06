// This file contains the JavaScript code for the ReadApp application.
// It handles fetching data from the GitHub API, rendering files,
// managing folder navigation, and implementing the authentication flow
// for GitHub Personal Access Tokens.

document.addEventListener("DOMContentLoaded", function () {
    const apiBaseUrl = "https://api.github.com/repos/heritage-happenings/heritage-happenings.github.io/contents";
    const tokenKey = "github_pat";
    let token = localStorage.getItem(tokenKey);

    const folderTree = document.getElementById("folderTree");
    const contentDisplay = document.getElementById("contentDisplay");

    function fetchFolderContents(path) {
        const headers = token ? { Authorization: `token ${token}` } : {};
        fetch(`${apiBaseUrl}/${path}`, { headers })
            .then(response => {
                if (response.status === 403) {
                    promptForToken();
                } else if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => renderFolderContents(data))
            .catch(error => showError(error));
    }

    function renderFolderContents(contents) {
        folderTree.innerHTML = "";
        contents.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.name;
            li.addEventListener("click", () => {
                if (item.type === "dir") {
                    fetchFolderContents(item.path);
                } else {
                    displayFileContent(item.path);
                }
            });
            folderTree.appendChild(li);
        });
    }

    function displayFileContent(filePath) {
        const headers = token ? { Authorization: `token ${token}` } : {};
        fetch(`${apiBaseUrl}/${filePath}`, { headers })
            .then(response => {
                if (response.status === 403) {
                    promptForToken();
                } else if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(file => {
                if (file.type === "file") {
                    renderFile(file);
                }
            })
            .catch(error => showError(error));
    }

    function renderFile(file) {
        if (file.name.endsWith(".md")) {
            contentDisplay.innerHTML = marked.parse(atob(file.content));
        } else if (file.name.endsWith(".txt") || file.name.endsWith(".csv")) {
            contentDisplay.textContent = atob(file.content);
        } else if (file.name.endsWith(".pdf")) {
            contentDisplay.innerHTML = `<iframe src="${file.download_url}" width="100%" height="600px"></iframe>`;
        } else if (file.name.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
            contentDisplay.innerHTML = `<img src="${file.download_url}" alt="${file.name}" style="max-width:100%;">`;
        } else {
            contentDisplay.innerHTML = `<a href="${file.download_url}" download>Download ${file.name}</a>`;
        }
    }

    function promptForToken() {
        const newToken = prompt("Please enter your GitHub Personal Access Token:");
        if (newToken) {
            localStorage.setItem(tokenKey, newToken);
            token = newToken;
            fetchFolderContents(""); // Retry fetching folder contents
        }
    }

    function showError(error) {
        contentDisplay.textContent = `Error: ${error.message}`;
    }

    // Initial fetch of the top-level folders
    fetchFolderContents("");
});