**Prompt Title:** GitHub Repository File Browser & Viewer

**Prompt:**
You are an expert front-end engineer tasked with delivering a **single-file** web application (`index.html`) that lets users enter any public GitHub repository (in `owner/repo` format), browse its entire file structure, and view file contents inline. Your solution must be framework-free (vanilla HTML, CSS, and JavaScript) and bundle-free, so it can be opened locally or hosted on GitHub Pages with zero build step.

### Core Requirements

1. **Repository Input & Validation**

   * A text input for “owner/repo” with real-time validation (non-empty, matches `^[^/]+\/[^/]+$`).
   * A “Load” button that fetches the repo tree via `https://api.github.com/repos/{owner}/{repo}/git/trees/master?recursive=1`.
   * Display clear error messages for invalid format, 404 repo not found, or API rate-limit (HTTP 403).

2. **Tree Construction & Sorting**

   * Parse only blob entries into a nested JS object (`{ name,type,path,children }`).
   * Sort **folders first** (A→Z), then **files**: if filename begins with `YYYY-MM-DD`, sort by date descending (newest first), otherwise alphabetically A→Z.

3. **UI Layout & Styling**

   * Responsive split-pane: left sidebar (default 240px, resizable) for the tree, right pane for file viewer.
   * Sidebar: CSS details styling, hover effects, folder expand/collapse toggles (`<details>` or JS).
   * File viewer: monospaced font, line numbers, scrollable, adaptive height.

4. **File Loading & Display**

   * On file click, fetch `https://raw.githubusercontent.com/{owner}/{repo}/master/{path}`.
   * Show a loading spinner or progress indicator.
   * Render content as plain text. For common extensions (`.js, .html, .css, .md`), apply basic syntax highlighting (e.g., integrate a lightweight highlight.js CDN).

5. **History & UX Enhancements**

   * Maintain last 5 successful repo entries in `localStorage`, shown in a dropdown for quick reload.
   * Graceful fallback if `master` branch doesn’t exist: try `main`.
   * Mobile-friendly: collapse sidebar under 600 px width, show a toggle button.

6. **Error Handling & Accessibility**

   * ARIA roles for tree and tabs.
   * Keyboard navigation: arrow keys to navigate folders/files, Enter to open.
   * Informative error banners for network failures.

Produce a complete, self-contained `index.html` with all CSS and JS embedded. Ensure code is clean, modular (helper functions), and commented to explain key steps.
