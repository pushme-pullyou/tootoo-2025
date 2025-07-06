// This file contains functions for interacting with the GitHub API. 
// It handles requests for file listings and content retrieval, 
// including the authorization token management and local storage functionality.

class GitHubAPI {
    constructor() {
        this.token = null;
        this.baseURL = 'https://api.github.com';
    }

    setToken(token) {
        this.token = token;
    }

    async testConnection() {
        try {
            const response = await fetch(`${this.baseURL}/user`, {
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            return response.ok;
        } catch (error) {
            console.error('Connection test failed:', error);
            return false;
        }
    }

    async getRepoContents(owner, repo, path = '') {
        try {
            const response = await fetch(`${this.baseURL}/repos/${owner}/${repo}/contents/${path}`, {
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch repo contents:', error);
            throw error;
        }
    }

    async getFileContent(downloadUrl) {
        try {
            const response = await fetch(downloadUrl, {
                headers: {
                    'Authorization': `token ${this.token}`
                }
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.text();
        } catch (error) {
            console.error('Failed to fetch file content:', error);
            throw error;
        }
    }
}

const githubAPI = new GitHubAPI();