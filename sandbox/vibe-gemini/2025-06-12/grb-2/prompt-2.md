**Prompt Title:** *Generate a Single-File GitHub Repository Browser & Viewer*

---

### Prompt Text (copy–paste into ChatGPT or another LLM)

 **Role & Objective**
 You are a senior front-end engineer. Produce a **single, self-contained `index.html` file** (no external build tools) that lets a user enter any **public GitHub repository** in `owner/repo` format, browse the full directory tree, and view file contents inline with syntax highlighting.

 **Constraints**

* **No frameworks** – vanilla HTML, CSS, and JavaScript only.
* **No bundler / build step** – everything embedded in one file so it runs locally or on GitHub Pages.
* Use only public CDNs for tiny helper libraries (e.g., Highlight.js).
* Must work on both desktop and mobile screens ≤ 600 px wide.

**Functional Requirements**

1. **Repository Input & Validation**

* Text field for `owner/repo`; live-validate with regex `^[^/]+\/[^/]+$`.
* “Load” button fetches:
    `https://api.github.com/repos/{owner}/{repo}/git/trees/master?recursive=1`.
* If `master` is missing, retry `main`.
* Surface clear messages for:
* invalid input,
* `404` repo not found,
* `403` rate-limit.
* Maintain a dropdown of the **last five successful repos** via `localStorage ("gh-repo-hist")`.

2. **Tree Construction & Sorting**

* From the tree API response, keep only **blob** entries.
* Convert flat list into a nested structure `({name,type,path,children[]})`.
* **Sort rules** inside each folder:

    1. Folders (`type: "tree"`) first, A→Z.
    2. Files:

        * If filename starts with `YYYY-MM-DD`, sort by that date **descending** (newest first).
        * Otherwise sort alphabetically A→Z.
3. **UI & Layout**

* Split-pane flex layout:

    * **Left sidebar** (default 240 px, resizable) – file tree.
    * **Right pane** – file viewer.
* Collapse sidebar behind a hamburger button when viewport ≤ 600 px.
* Use semantic elements + ARIA roles (`role="tree"`, `treeitem`, etc.).
* **Keyboard navigation:** `↑/↓` move focus in tree; `Enter` opens file; ←/→ expand/collapse `<details`.
4. **File Loading & Display**

* On file click, fetch raw content via:
    `https://raw.githubusercontent.com/{owner}/{repo}/{branch}/{path}`.
* Show a spinner while loading.
* Render content inside a `<pre<code` block with line numbers (CSS counters).
* For extensions `.js, .html, .css, .md, .json, .ts`, run Highlight.js (`<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/…"`).
5. **Error Handling & Accessibility**

* Global banner for network/API errors (dismisses after 5 s).
* Escape HTML when injecting file text.
* Visually hidden focus ring for keyboard users.
6. **Code Style**

* Keep JS in an IIFE.
* Break logic into tiny helpers (`validateRepo`, `fetchTree`, `buildNested`, `sortEntries`, `renderTree`, `loadFile`, etc.).
* Comment non-obvious lines.
* Use `const`/`let`, template literals, and arrow functions.

 **Deliverable**
 Return **only** the complete `/index.html` file in one fenced code block.
 It should pass HTML 5 validation, have no console errors, and fulfill every item above.
