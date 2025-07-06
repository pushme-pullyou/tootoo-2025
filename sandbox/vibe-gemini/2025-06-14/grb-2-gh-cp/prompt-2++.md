Good ~ see index-1.html

theo-armour: Follow this prompt

# GitHub Repository Tree Browser

This project is a single-page web application that allows users to explore GitHub repositories in a hierarchical tree view. It provides advanced navigation and management features, making it easy to browse through files and folders within a repository.

## Overview

The GitHub Repository Tree Browser is designed to fetch and display the structure of a GitHub repository using the GitHub API. Users can navigate through folders, select files, and view the selected file path in the URL hash. The application is built with a modern, responsive design that works well on both desktop and mobile devices.

## Core Requirements

### Application Structure

- **Layout**: A split-pane design with a resizable left sidebar (default width: 20rem) and a main content area.
- **Styling**: A clean, modern GitHub-like theme with smooth hover effects and transitions.
- **Responsiveness**: The application is mobile-friendly, featuring a collapsible sidebar and touch-optimized controls.

### GitHub API Integration

- **Data Source**: Utilizes the GitHub Git Trees API with the `?recursive=1` parameter for fetching the entire repository structure in a single call.
- **Repository Input**: A text field that accepts the "owner/repository" format with validation.
- **History Management**: A dropdown list populated from localStorage under the "github-repos" key, storing the last 10 accessed repositories.
- **Error Handling**: Comprehensive feedback for network failures, invalid repositories, and API rate limits.
- **Loading States**: Visual indicators during API calls to inform users of progress.

### File Tree Features

- **Display & Organization**: Uses HTML `<details>` elements for collapsible folder structures.
- **Icons**: Displays contextual emoji icons for different file types (e.g., 📁 for folders, 📜 for .js files).
- **Sorting Logic**: Folders are displayed before files, with date-prefixed items sorted newest first and remaining items sorted alphabetically.
- **Visual Hierarchy**: Proper indentation and expand/collapse indicators for clarity.
- **Initial State**: All folders are closed upon loading.

### Navigation & Selection

- **File Selection**: Clicking a file updates the `location.hash` to reflect the selected file path.
- **Hash Routing**: The application parses the URL hash on load to auto-select and reveal target files.
- **Visual Feedback**: Selected files are highlighted with a blue background.
- **Auto-expand**: Parent folders automatically open when selecting nested files.
- **Scroll Management**: Selected files are scrolled into view automatically.

### Advanced Controls

- **Toggle All**: A button to expand or collapse all folder details simultaneously.
- **Search Functionality**: Real-time filtering of files and folders with highlighting and auto-expanding.
- **Hide/Show Items**: Right-click context menu options to hide or show folders/files.
- **Statistics Display**: Live count of total folders and files displayed at the bottom of the sidebar.

### Keyboard Navigation

- **Arrow Keys**: Navigate between files using the Up/Down keys; collapse/expand folders with Left/Right keys.
- **Search Shortcut**: Press `/` to focus on the search input; `Escape` clears the search.
- **Repository Loading**: Press `Enter` in the repository input to trigger loading.
- **Accessibility**: Supports tab navigation and proper focus management.

### Data Management

- **Storage Strategy**: Uses a map-based tree structure for efficient traversal and lookup.
- **Persistence**: Stores recent repositories, hidden items, search preferences, and UI state in localStorage.
- **Performance**: Designed for a single API call architecture with client-side filtering and sorting.

### User Experience Enhancements

- **Context Menus**: Right-click options for hiding/showing items and copying paths.
- **Keyboard Shortcuts**: Intuitive key bindings for major functions.
- **Visual Feedback**: Smooth animations, loading spinners, and status messages.
- **Error Recovery**: Clear error messages with suggested actions.
- **Mobile Support**: Touch-friendly interface with gesture support.

### Technical Specifications

- **Architecture**: Built using ES6 class-based vanilla JavaScript.
- **Styling**: Utilizes CSS Grid/Flexbox with custom properties for theming.
- **API Integration**: Employs the modern Fetch API with proper error handling.
- **State Management**: Implements hash-based routing with browser history support.
- **Data Structure**: Uses nested Map objects for efficient tree operations.

## Expected Outcome

The result is a polished, production-ready file browser that allows for seamless exploration of GitHub repositories, featuring enterprise-level navigation, keyboard accessibility, and mobile responsiveness—all contained within a single HTML file.

Workspace: 
Sure, here's a GitHub sample project to help you get started on creating a repository tree view extension: [Tree View Sample](https://github.com/microsoft/vscode-extension-samples/blob/main/tree-view-sample)

Create Workspace...

Hint: You can [regenerate this project without using this sample](command:workbench.action.chat.open?%5B%22%40workspace%20%2Fnew%20Follow%20this%20prompt%0D%0A%0D%0A%23%20GitHub%20Repository%20Tree%20Browser%0D%0A%0D%0AThis%20project%20is%20a%20single-page%20web%20application%20that%20allows%20users%20to%20explore%20GitHub%20repositories%20in%20a%20hierarchical%20tree%20view.%20It%20provides%20advanced%20navigation%20and%20management%20features%2C%20making%20it%20easy%20to%20browse%20through%20files%20and%20folders%20within%20a%20repository.%0D%0A%0D%0A%23%23%20Overview%0D%0A%0D%0AThe%20GitHub%20Repository%20Tree%20Browser%20is%20designed%20to%20fetch%20and%20display%20the%20structure%20of%20a%20GitHub%20repository%20using%20the%20GitHub%20API.%20Users%20can%20navigate%20through%20folders%2C%20select%20files%2C%20and%20view%20the%20selected%20file%20path%20in%20the%20URL%20hash.%20The%20application%20is%20built%20with%20a%20modern%2C%20responsive%20design%20that%20works%20well%20on%20both%20desktop%20and%20mobile%20devices.%0D%0A%0D%0A%23%23%20Core%20Requirements%0D%0A%0D%0A%23%23%23%20Application%20Structure%0D%0A%0D%0A-%20**Layout**%3A%20A%20split-pane%20design%20with%20a%20resizable%20left%20sidebar%20(default%20width%3A%2020rem)%20and%20a%20main%20content%20area.%0D%0A-%20**Styling**%3A%20A%20clean%2C%20modern%20GitHub-like%20theme%20with%20smooth%20hover%20effects%20and%20transitions.%0D%0A-%20**Responsiveness**%3A%20The%20application%20is%20mobile-friendly%2C%20featuring%20a%20collapsible%20sidebar%20and%20touch-optimized%20controls.%0D%0A%0D%0A%23%23%23%20GitHub%20API%20Integration%0D%0A%0D%0A-%20**Data%20Source**%3A%20Utilizes%20the%20GitHub%20Git%20Trees%20API%20with%20the%20%60%3Frecursive%3D1%60%20parameter%20for%20fetching%20the%20entire%20repository%20structure%20in%20a%20single%20call.%0D%0A-%20**Repository%20Input**%3A%20A%20text%20field%20that%20accepts%20the%20%22owner%2Frepository%22%20format%20with%20validation.%0D%0A-%20**History%20Management**%3A%20A%20dropdown%20list%20populated%20from%20localStorage%20under%20the%20%22github-repos%22%20key%2C%20storing%20the%20last%2010%20accessed%20repositories.%0D%0A-%20**Error%20Handling**%3A%20Comprehensive%20feedback%20for%20network%20failures%2C%20invalid%20repositories%2C%20and%20API%20rate%20limits.%0D%0A-%20**Loading%20States**%3A%20Visual%20indicators%20during%20API%20calls%20to%20inform%20users%20of%20progress.%0D%0A%0D%0A%23%23%23%20File%20Tree%20Features%0D%0A%0D%0A-%20**Display%20%26%20Organization**%3A%20Uses%20HTML%20%60%3Cdetails%3E%60%20elements%20for%20collapsible%20folder%20structures.%0D%0A-%20**Icons**%3A%20Displays%20contextual%20emoji%20icons%20for%20different%20file%20types%20(e.g.%2C%20%F0%9F%93%81%20for%20folders%2C%20%F0%9F%93%9C%20for%20.js%20files).%0D%0A-%20**Sorting%20Logic**%3A%20Folders%20are%20displayed%20before%20files%2C%20with%20date-prefixed%20items%20sorted%20newest%20first%20and%20remaining%20items%20sorted%20alphabetically.%0D%0A-%20**Visual%20Hierarchy**%3A%20Proper%20indentation%20and%20expand%2Fcollapse%20indicators%20for%20clarity.%0D%0A-%20**Initial%20State**%3A%20All%20folders%20are%20closed%20upon%20loading.%0D%0A%0D%0A%23%23%23%20Navigation%20%26%20Selection%0D%0A%0D%0A-%20**File%20Selection**%3A%20Clicking%20a%20file%20updates%20the%20%60location.hash%60%20to%20reflect%20the%20selected%20file%20path.%0D%0A-%20**Hash%20Routing**%3A%20The%20application%20parses%20the%20URL%20hash%20on%20load%20to%20auto-select%20and%20reveal%20target%20files.%0D%0A-%20**Visual%20Feedback**%3A%20Selected%20files%20are%20highlighted%20with%20a%20blue%20background.%0D%0A-%20**Auto-expand**%3A%20Parent%20folders%20automatically%20open%20when%20selecting%20nested%20files.%0D%0A-%20**Scroll%20Management**%3A%20Selected%20files%20are%20scrolled%20into%20view%20automatically.%0D%0A%0D%0A%23%23%23%20Advanced%20Controls%0D%0A%0D%0A-%20**Toggle%20All**%3A%20A%20button%20to%20expand%20or%20collapse%20all%20folder%20details%20simultaneously.%0D%0A-%20**Search%20Functionality**%3A%20Real-time%20filtering%20of%20files%20and%20folders%20with%20highlighting%20and%20auto-expanding.%0D%0A-%20**Hide%2FShow%20Items**%3A%20Right-click%20context%20menu%20options%20to%20hide%20or%20show%20folders%2Ffiles.%0D%0A-%20**Statistics%20Display**%3A%20Live%20count%20of%20total%20folders%20and%20files%20displayed%20at%20the%20bottom%20of%20the%20sidebar.%0D%0A%0D%0A%23%23%23%20Keyboard%20Navigation%0D%0A%0D%0A-%20**Arrow%20Keys**%3A%20Navigate%20between%20files%20using%20the%20Up%2FDown%20keys%3B%20collapse%2Fexpand%20folders%20with%20Left%2FRight%20keys.%0D%0A-%20**Search%20Shortcut**%3A%20Press%20%60%2F%60%20to%20focus%20on%20the%20search%20input%3B%20%60Escape%60%20clears%20the%20search.%0D%0A-%20**Repository%20Loading**%3A%20Press%20%60Enter%60%20in%20the%20repository%20input%20to%20trigger%20loading.%0D%0A-%20**Accessibility**%3A%20Supports%20tab%20navigation%20and%20proper%20focus%20management.%0D%0A%0D%0A%23%23%23%20Data%20Management%0D%0A%0D%0A-%20**Storage%20Strategy**%3A%20Uses%20a%20map-based%20tree%20structure%20for%20efficient%20traversal%20and%20lookup.%0D%0A-%20**Persistence**%3A%20Stores%20recent%20repositories%2C%20hidden%20items%2C%20search%20preferences%2C%20and%20UI%20state%20in%20localStorage.%0D%0A-%20**Performance**%3A%20Designed%20for%20a%20single%20API%20call%20architecture%20with%20client-side%20filtering%20and%20sorting.%0D%0A%0D%0A%23%23%23%20User%20Experience%20Enhancements%0D%0A%0D%0A-%20**Context%20Menus**%3A%20Right-click%20options%20for%20hiding%2Fshowing%20items%20and%20copying%20paths.%0D%0A-%20**Keyboard%20Shortcuts**%3A%20Intuitive%20key%20bindings%20for%20major%20functions.%0D%0A-%20**Visual%20Feedback**%3A%20Smooth%20animations%2C%20loading%20spinners%2C%20and%20status%20messages.%0D%0A-%20**Error%20Recovery**%3A%20Clear%20error%20messages%20with%20suggested%20actions.%0D%0A-%20**Mobile%20Support**%3A%20Touch-friendly%20interface%20with%20gesture%20support.%0D%0A%0D%0A%23%23%23%20Technical%20Specifications%0D%0A%0D%0A-%20**Architecture**%3A%20Built%20using%20ES6%20class-based%20vanilla%20JavaScript.%0D%0A-%20**Styling**%3A%20Utilizes%20CSS%20Grid%2FFlexbox%20with%20custom%20properties%20for%20theming.%0D%0A-%20**API%20Integration**%3A%20Employs%20the%20modern%20Fetch%20API%20with%20proper%20error%20handling.%0D%0A-%20**State%20Management**%3A%20Implements%20hash-based%20routing%20with%20browser%20history%20support.%0D%0A-%20**Data%20Structure**%3A%20Uses%20nested%20Map%20objects%20for%20efficient%20tree%20operations.%0D%0A%0D%0A%23%23%20Expected%20Outcome%0D%0A%0D%0AThe%20result%20is%20a%20polished%2C%20production-ready%20file%20browser%20that%20allows%20for%20seamless%20exploration%20of%20GitHub%20repositories%2C%20featuring%20enterprise-level%20navigation%2C%20keyboard%20accessibility%2C%20and%20mobile%20responsiveness%E2%80%94all%20contained%20within%20a%20single%20HTML%20file.%22%5D) or use this [setting](command:workbench.action.openSettings?%5B%22github.copilot.chat.useProjectTemplates%22%5D) to configure the behavior.

theo-armour: single index.html file. Plain vanilla JavaScript. No Node. Runs on GitHubPages.

Workspace: Sure, here's a proposed directory structure for a plain JavaScript project with a single index.html file:



Create Workspace...

theo-armour: 

# GitHub Repository Tree Browser

Create a simple, single file web application that displays GitHub repository files in a hierarchical tree view and shows the selected file path in the location hash.

## Requirements

### Basic Structure

- Left sidebar (20rem width, resizable) containing the file tree
- Right content area displaying the current location.hash
- Clean, modern GitHub-like styling with proper hover effects

### GitHub API Integration

- Use GitHub's Git Trees API with `?recursive=1` to fetch entire repository structure in one call
- Input field for repository name in format "owner/repository"
- repositories previously selected are available from dropdown list using  "github-repos" in localStorage
- Proper error handling for invalid repositories or API failures

### File Tree Display

- Display folders and files using HTML `<details>` elements for collapsible folders
- Onload, files are not open
- Show appropriate emoji icons for different file types (📁 folders, 📜 JS, 🌐 HTML, 🎨 CSS, 📝 MD, etc.)
- Sort items with folders first, then files alphabetically
- Visual hierarchy with folder and file indentation and expand/collapse arrows
- Single button toggles between open all or close all details tags
- Files starting with dates (example: 2025-06-11 ) are sorted with newest date first
- Ability to hide selected folders and files
- folder and file statistics displayed at bottom of menu

### Navigation Behavior

- if location.hash, file in the hash is visible and selected in the menu
- When user clicks on a file, update `location.hash` to `repository/path/to/file`
- Highlight selected file with blue background
- Display current hash value in the main content area
- No file content loading - just show the hash path

### Key Features

- Single API call on repository load (no lazy loading)
- Responsive design that works on desktop and mobile
- Keyboard support: Enter to load repository
- In menu: cursor keys selects next/previous file, jump to next folder as needed, currently selected file is always visible
- Visual feedback with loading states and error messages

## Technical Implementation

- Vanilla JavaScript with ES6 classes
- CSS Grid/Flexbox for layout
- Fetch API for GitHub integration
- Hash-based routing for file selection
- Map data structure for efficient file storage

The result should be a clean, fast file browser that focuses solely on navigation and path display without any file content viewing capabilities.


# GitHub Repository Tree Browser

Create a comprehensive, single-file web application that displays GitHub repository files in a hierarchical tree view with advanced navigation and management features.

## Core Requirements

### Application Structure

- **Layout**: Split-pane design with resizable left sidebar (default 20rem width) and main content area
- **Styling**: Modern GitHub-inspired light theme with smooth hover effects and transitions
- **Responsiveness**: Mobile-friendly with collapsible sidebar and touch-optimized controls

### GitHub API Integration

- **Data Source**: GitHub Git Trees API with `?recursive=1` parameter for single-call repository fetching
- **Repository Input**: Text field accepting "owner/repository" format with validation
- **History Management**: Dropdown populated from localStorage "github-repos" key (max 10 recent repositories)
- **Error Handling**: Comprehensive feedback for network failures, invalid repositories, and API rate limits
- **Loading States**: Visual indicators during API calls with progress feedback

### File Tree Features

#### Display & Organization

- **Structure**: HTML `<details>` elements for collapsible folder hierarchy
- **Icons**: Contextual emoji icons (📁 folders, 📜 .js, 🌐 .html, 🎨 .css, 📝 .md, 📊 .json, 🐍 .py, etc.)
- **Sorting Logic**: 
  - Folders before files at each level
  - Date-prefixed items (YYYY-MM-DD format) sorted newest first
  - Remaining items alphabetically sorted
- **Visual Hierarchy**: Proper indentation with expand/collapse indicators
- **Initial State**: All folders closed on load

#### Navigation & Selection

- **File Selection**: Click to select files, update `location.hash` to `repository/path/to/file`
- **Hash Routing**: Parse URL hash on load to auto-select and reveal target files
- **Visual Feedback**: Selected file highlighted with blue background
- **Auto-expand**: Parent folders automatically open when selecting nested files
- **Scroll Management**: Selected files automatically scrolled into view

#### Advanced Controls

- **Toggle All**: Single button to expand/collapse all folder details simultaneously
- **Search Functionality**: Real-time file/folder filtering with highlight and auto-expand
- **Hide/Show Items**: Right-click context menu to hide folders/files, with toggle to reveal hidden items
- **Statistics Display**: Live count of total folders and files at sidebar bottom

### Keyboard Navigation

- **Arrow Keys**: Up/Down to navigate between files, Left/Right to collapse/expand current folder
- **Search Shortcut**: `/` key to focus search input, `Escape` to clear search
- **Repository Loading**: `Enter` key in repository input to trigger load
- **Accessibility**: Tab navigation support and proper focus management

### Data Management

- **Storage Strategy**: Map-based tree structure for efficient traversal and lookup
- **Persistence**: 
  - Recent repositories in localStorage
  - Hidden items per repository in localStorage (`hidden-${repo}` keys)
  - Search preferences and UI state
- **Performance**: Single API call architecture with client-side filtering and sorting

### User Experience Enhancements

- **Context Menus**: Right-click options for hiding/showing items and copying paths
- **Keyboard Shortcuts**: Intuitive key bindings for all major functions
- **Visual Feedback**: Smooth animations, loading spinners, and status messages
- **Error Recovery**: Clear error messages with suggested actions
- **Mobile Support**: Touch-friendly interface with gesture support

### Technical Specifications

- **Architecture**: ES6 class-based vanilla JavaScript
- **Styling**: CSS Grid/Flexbox with CSS custom properties for theming
- **API Integration**: Modern Fetch API with proper error handling
- **State Management**: Hash-based routing with browser history support
- **Data Structure**: Nested Map objects for efficient tree operations

### Content Display

- **Main Area**: Shows current `location.hash` value and repository information
- **No File Content**: Application focuses on navigation only - no file content loading
- **Status Information**: Display current repository, selected file path, and tree statistics

## Expected Outcome

A polished, production-ready file browser that provides GitHub repository exploration with enterprise-level navigation features, keyboard accessibility, and mobile responsiveness - all contained in a single HTML file.

Workspace: Sure, here’s a proposed directory structure for a JavaScript GitHub repository tree browser app:



Create Workspace...

theo-armour: single index.html file

GitHub Copilot: ```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GitHub Repository Tree Browser</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    :root {
      --sidebar-width: 20rem;
      --accent: #0366d6;
      --bg: #fafbfc;
      --fg: #24292e;
      --hover: #f6f8fa;
    }
    * { box-sizing: border-box; margin:0; padding:0 }
    body, html { height:100%; font-family: sans-serif; color: var(--fg); }
    .container { display: flex; height:100%; }
    aside { 
      width: var(--sidebar-width); 
      border-right: 1px solid #ddd; 
      background: var(--bg); 
      display: flex; flex-direction: column; 
      resize: horizontal; overflow: auto;
    }
    .controls {
      padding: 0.5rem; display: flex; gap:0.5rem; flex-wrap: wrap;
    }
    .controls input, .controls select {
      flex:1; padding: 0.3rem; border:1px solid #ccc; border-radius:4px;
    }
    .controls button {
      padding: 0.3rem 0.6rem; border:none; background: var(--accent); color:#fff; border-radius:4px; cursor:pointer;
    }
    #treeContainer { flex:1; overflow:auto; padding:0.5rem; }
    details { margin-left:1rem; }
    summary { cursor: pointer; padding:2px 4px; border-radius:3px; }
    summary:hover { background: var(--hover); }
    .file { display: block; padding:2px 4px; margin-left:2rem; cursor:pointer; border-radius:3px; }
    .file:hover { background: var(--hover); }
    .selected { background: rgba(3,102,214,0.1); }
    .hidden { display:none; }
    .error { color: red; padding:0.5rem; }
    #stats { padding:0.5rem; font-size:0.9rem; border-top:1px solid #ddd; }
    main { flex:1; padding:1rem; overflow:auto; }
    #spinner { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(255,255,255,0.9); padding:1rem; border:1px solid #ccc; border-radius:4px; }
  </style>
</head>
<body>
  <div class="container">
    <aside>
      <div class="controls">
        <input id="repoInput" placeholder="owner/repo">
        <select id="repoHistory"></select>
        <button id="loadBtn">Load</button>
        <button id="toggleBtn">Toggle All</button>
      </div>
      <div id="treeContainer"></div>
      <div id="stats"></div>
    </aside>
    <main>
      <div id="content">Current hash: <code id="hashDisplay"></code></div>
    </main>
  </div>
  <div id="spinner" class="hidden">Loading…</div>
  <div id="error" class="error hidden"></div>

  <script>
    const repoInput = document.getElementById('repoInput');
    const repoHistory = document.getElementById('repoHistory');
    const loadBtn = document.getElementById('loadBtn');
    const toggleBtn = document.getElementById('toggleBtn');
    const treeContainer = document.getElementById('treeContainer');
    const stats = document.getElementById('stats');
    const spinner = document.getElementById('spinner');
    const errorBox = document.getElementById('error');
    const hashDisplay = document.getElementById('hashDisplay');

    let currentRepo = '';
    let fileMap = new Map();
    let allDetailsOpen = false;

    function showSpinner(show) { spinner.classList.toggle('hidden', !show); }
    function showError(msg) { errorBox.textContent = msg; errorBox.classList.toggle('hidden', !msg); }
    function saveHistory(repo) {
      if (!repo) return;
      let list = JSON.parse(localStorage.getItem('github-repos')||'[]');
      list = list.filter(r=>r!==repo);
      list.unshift(repo);
      if (list.length>10) list.pop();
      localStorage.setItem('github-repos', JSON.stringify(list));
      loadHistory();
    }
    function loadHistory() {
      repoHistory.innerHTML = '<option value="">History</option>';
      JSON.parse(localStorage.getItem('github-repos')||'[]').forEach(r=>{
        const opt = document.createElement('option');
        opt.value = r; opt.textContent = r;
        repoHistory.appendChild(opt);
      });
    }
    function buildTree(data) {
      treeContainer.innerHTML = '';
      stats.textContent = '';
      fileMap.clear();
      // nest items
      const root = {children: new Map()};
      data.forEach(item=>{
        const parts = item.path.split('/');
        let node = root;
        parts.forEach((p,i)=>{
          if (!node.children.has(p)) {
            node.children.set(p, { children: new Map(), isFile: i===parts.length-1 && item.type==='blob', path: parts.slice(0,i+1).join('/') });
          }
          node = node.children.get(p);
        });
      });
      function sorter(a,b) {
        const aDate = /^\d{4}-\d{2}-\d{2}/.test(a[0]);
        const bDate = /^\d{4}-\d{2}-\d{2}/.test(b[0]);
        if (a[1].children.size && !b[1].children.size) return -1;
        if (!a[1].children.size && b[1].children.size) return 1;
        if (aDate && bDate) return b[0].localeCompare(a[0]);
        if (aDate||bDate) return aDate? -1:1;
        return a[0].localeCompare(b[0]);
      }
      function recurse(node, container) {
        Array.from(node.children).sort(sorter).forEach(([name,child])=>{
          if (child.children.size) {
            const d = document.createElement('details');
            const s = document.createElement('summary');
            s.textContent = '📁 '+name;
            d.appendChild(s);
            container.appendChild(d);
            recurse(child,d);
          } else {
            const f = document.createElement('div');
            f.className = 'file';
            f.textContent = emoji(name)+' '+name;
            f.dataset.path = child.path;
            f.addEventListener('click',()=>selectFile(child.path));
            container.appendChild(f);
            fileMap.set(child.path, f);
          }
        });
      }
      recurse(root, treeContainer);
      updateStats();
    }
    function emoji(name) {
      if (name.endsWith('.js')) return '📜';
      if (name.endsWith('.html')) return '🌐';
      if (name.endsWith('.css')) return '🎨';
      if (name.endsWith('.md')) return '📝';
      if (name.endsWith('.json')) return '📊';
      return '📄';
    }
    function updateStats() {
      const files = treeContainer.querySelectorAll('.file').length;
      const folders = treeContainer.querySelectorAll('details').length;
      stats.textContent = `${folders} folders, ${files} files`;
    }
    function toggleAll() {
      allDetailsOpen = !allDetailsOpen;
      treeContainer.querySelectorAll('details').forEach(d=> d.open = allDetailsOpen);
    }
    function selectFile(path) {
      hashDisplay.textContent = `#${currentRepo}/${path}`;
      location.hash = `${currentRepo}/${path}`;
      treeContainer.querySelectorAll('.file.selected').forEach(el=>el.classList.remove('selected'));
      const el = fileMap.get(path);
      if (el) {
        el.classList.add('selected');
        el.scrollIntoView({block:'nearest'});
        // open parents
        let parent = el.parentElement;
        while (parent && parent.tagName==='DETAILS') {
          parent.open = true;
          parent = parent.parentElement;
        }
      }
    }
    async function loadRepo(repo) {
      if (!repo) return;
      currentRepo = repo;
      showError('');
      showSpinner(true);
      treeContainer.innerHTML = '';
      try {
        // try main, then master
        let res = await fetch(`https://api.github.com/repos/${repo}/git/trees/main?recursive=1`);
        if (!res.ok) res = await fetch(`https://api.github.com/repos/${repo}/git/trees/master?recursive=1`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        buildTree(data.tree);
        saveHistory(repo);
        applyHash();
      } catch (err) {
        showError('Error: '+err.message);
      } finally {
        showSpinner(false);
      }
    }
    function applyHash() {
      const h = location.hash.slice(1);
      if (!h) return;
      const [repo,...rest] = h.split('/');
      const path = rest.join('/');
      if (repo===currentRepo && fileMap.has(path)) {
        selectFile(path);
      }
    }

    loadBtn.addEventListener('click',()=>loadRepo(repoInput.value.trim()));
    repoHistory.addEventListener('change',()=>loadRepo(repoHistory.value));
    toggleBtn.addEventListener('click',toggleAll);
    repoInput.addEventListener('keydown', e=>{
      if (e.key==='Enter') loadRepo(repoInput.value.trim());
    });
    window.addEventListener('hashchange',applyHash);
    loadHistory();
    applyHash();
  </script>
</body>
</html>
```