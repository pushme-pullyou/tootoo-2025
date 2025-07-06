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