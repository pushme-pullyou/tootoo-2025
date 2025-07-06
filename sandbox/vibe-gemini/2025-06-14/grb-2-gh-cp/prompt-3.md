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