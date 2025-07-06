# Prompt Title: GitHub Repository File Browser & Viewer

## Prompt

You are an expert front-end engineer tasked with delivering a **single-file** web application (`index.html`) that lets users enter any public GitHub repository (in `owner/repo` format), browse its entire file structure, and view file contents inline. Your solution must be framework-free (vanilla HTML, CSS, and JavaScript) and bundle-free, so it can be opened locally or hosted on GitHub Pages with zero build step.

 **Role & Objective**

* You are a front-end engineer
* Produce a **single, self-contained `index.html` file** (no external build tools) that lets a user enter any **public GitHub repository** in `owner/repo` format, 
* Browse the full directory tree, and view file contents inline with syntax highlighting.
* Solution is vanilla HTML, CSS, and JavaScript.
* It must be framework-free and bundle-free
* It can be opened locally or hosted on GitHub Pages with zero build step.

### Core Requirements

1. **Repository Input & Validation**

   * A text input for “owner/repo” with real-time validation (non-empty, matches `^[^/]+\/[^/]+$`).
   * A “Load” button that fetches the repo tree via `https://api.github.com/repos/{owner}/{repo}/git/trees/master?recursive=1`.
   * Display clear error messages for invalid format, 404 repo not found, or API rate-limit (HTTP 403).