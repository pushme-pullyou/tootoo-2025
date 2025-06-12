
Here’s a tighter, more action-oriented version of your spec:

---

**Build a standalone `index.html` file that lets you explore any GitHub repo as a collapsible, searchable tree with full keyboard and touch support.**

### 1. Layout & Theming

* **Split-pane UI**: Resizable left sidebar (default 20 rem) + main content area.
* **Modern GitHub style**: Light theme, smooth hover/transitions.
* **Responsive**: Collapsible sidebar on mobile; touch gestures for expand/collapse.

### 2. GitHub API Integration

* **Single-call fetch**: Use Git Trees API with `?recursive=1`.
* **Repo selector**: Validated “owner/repo” input; `Enter` key triggers load.
* **Auth prompt**: Ask for a token when accessing private repos.
* **History**: Keep last 10 repos in `localStorage.github-repos`; auto-load most recent.
* **Errors & Loading**: Clear status messages, spinners, and retry suggestions.

### 3. Tree View & Sorting

* **Hierarchy**: `<details>`/`<summary>` for folders; all closed by default.
* **Icons**: Emoji (📁, 📜, 🌐, 🎨, 📝, 📊, 🐍, etc.) for major extensions; generic icon otherwise.
* **Order**:

  1. Folders first
  2. Date-prefixed names (`YYYY-MM-DD-…`): newest→oldest
  3. Alphabetical fallback
* **Auto-expand**: Reveal path from `location.hash`; highlight selected file.

### 4. Interaction & Navigation

* **Click & Hash routing**: Click a file → update `location.hash`; load that on refresh.
* **Arrow keys**: ↑/↓ to move, ←/→ to collapse/expand.
* **Tab flow**: First focus enters the tree; `Esc` clears search.
* **Search**: `/` focuses filter; real-time, case-insensitive substring match; highlights and auto-opens results.
* **Toggle All**: One button to expand or collapse every folder.
* **Context menu**: Right-click to hide/show items; “Show hidden” toggle in toolbar.

### 5. State & Performance

* **Data model**: Nested `Map` for O(1) lookups.
* **Persistence**:

  * Recent repos
  * Hidden items per repo (`localStorage["hidden-"+repo]`)
  * UI state (search term, expanded nodes)
* **Rendering**: Single pass (no virtualization) for typical repo sizes.

### 6. Extras & UX

* **Stats bar**: Live count of folders/files at sidebar bottom.
* **Copy path**: Context-menu copies repo-relative path (e.g. `src/app.js`).
* **Gestures**: Pinch-zoom and swipe support on touch devices.
* **Accessibility**: Proper ARIA roles, focus indicators.

---

This version trims redundancy, uses consistent verbs, and groups related features side-by-side. Let me know if you’d like further tweaks!
