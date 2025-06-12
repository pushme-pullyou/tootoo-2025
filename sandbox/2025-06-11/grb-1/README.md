# 2025-06-11 GitHub Repository Browser


* heritage-happenings/heritage-happenings.github.io
* pushme-pullyou/tootoo-2025

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