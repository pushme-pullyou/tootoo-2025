# GitHub Repository Tree Browser

## Overview

Create a simple, single file web application that displays GitHub repository files in a hierarchical tree view and shows the selected file path in the location hash.

## Core Requirements

The GitHub Repository Tree Browser is designed to fetch and display the structure of a GitHub repository using the GitHub API. You navigate through folders, select files, and view the selected file path in the URL hash. The application is built with a modern, responsive design that works well on both desktop and mobile devices.

## Application Structure

- **Layout**: A split-pane design with a resizable left sidebar (default width: 20rem) and a main content area.
- **Styling**: Modern GitHub-inspired light theme with smooth hover effects and transitions
- **Responsiveness**: Mobile-friendly with collapsible sidebar and touch-optimized controls

## GitHub API Integration

- **Data Source**: GitHub Git Trees API with `?recursive=1` parameter for single-call repository fetching
- **Repository Input**: A text field that accepts the "owner/repository" format with validation.
- **History Management**: Dropdown populated from localStorage "github-repos" key (max 10 recent repositories)
- **Error Handling**: Proper error handling for invalid repositories or API failures
-- **Loading States**: Visual indicators during API calls with progress feedback

## File Tree Features

- **Display & Organization**: Uses HTML `<details>` elements for collapsible folder structures.
- **Icons**: Displays contextual emoji icons for different file types (e.g., 📁 for folders, 📜 for .js files).
- **Sorting Logic**: 
  - Folders before files at each level
  - Date-prefixed items (YYYY-MM-DD format) sorted newest first
  - Remaining items alphabetically sorted
- **Visual Hierarchy**: Proper indentation and expand/collapse indicators
- **Open/Close Toggle**:Single button toggles between open all or close all details tags
- **Initial State**: All folders are closed upon loading.
- **Statistics**: Folder and file statistics displayed at bottom of menu

## Navigation & Selection

- **File Selection**: Click to select file, update `location.hash`to the selected file relative path.
- **Hash Routing**: Parse URL hash on load to auto-select and reveal target files
- **Visual Feedback**: Highlight selected file with blue background.
- **Auto-expand**: Parent folders automatically open when selecting nested files.
- **Scroll Management**: Selected files automatically scrolled into view

- Display current hash value in the main content area
- No file content loading - just show the hash path

## Advanced Controls

- **Search Functionality**: Real-time filtering of files and folders with highlighting and auto-expanding.
- **Toggle All**: Single button to expand/collapse all folder details simultaneously
- **Statistics Display**: Live count of total folders and files at sidebar bottom

## Keyboard Navigation

- **Arrow Keys**: Up/Down to navigate between files, Left/Right to collapse/expand current folder
- **Search Shortcut**: `/` key to focus search input, `Escape` to clear search
- **Repository Loading**: `Enter` key in repository input to trigger load
- **Accessibility**: Tab navigation support and proper focus management

## Data Management

- **Storage Strategy**: Map-based tree structure for efficient traversal and lookup
- **Persistence**: 
  - Recent repositories in localStorage
  - Hidden items per repository in localStorage (`hidden-${repo}` keys)
  - Search preferences and UI state
- **Performance**: Single API call architecture with client-side filtering and sorting
- **Branch Detection**: Detect default branch from the API instead of assuming “main” or “master.”

## User Experience Enhancements

- **Keyboard Shortcuts**: Intuitive key bindings for major functions.
- **Visual Feedback**: Smooth animations, loading spinners, and status messages.
- **Mobile Support**: Touch-friendly interface with gesture support.

## Technical Specifications

- **Architecture**: ES6 class-based vanilla JavaScript
- **Styling**: CSS Grid/Flexbox with CSS custom properties for theming
- **API Integration**: Modern Fetch API with proper error handling
- **State Management**: Hash-based routing with browser history support
- **Data Structure**: Nested Map objects for efficient tree operations

## Content Display

- **Main Area**: Shows current `location.hash` value and repository information
- **No File Content**: Application focuses on navigation only - no file content loading
- **Status Information**: Display current repository, selected file path, and tree statistics

## Expected Outcome

The result should be a clean, fast file browser that focuses solely on navigation and path display without any file content viewing capabilities — all contained within a single HTML file.
