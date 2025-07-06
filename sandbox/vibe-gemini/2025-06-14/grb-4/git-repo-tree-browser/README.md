# GitHub Repository Tree Browser

## Overview
The GitHub Repository Tree Browser is a simple web application that allows users to explore the structure of GitHub repositories in a hierarchical tree view. It utilizes the GitHub API to fetch repository data and presents it in an intuitive interface, enabling users to navigate through folders and select files easily.

## Core Requirements
- Fetch and display the structure of a GitHub repository using the GitHub API.
- Navigate through folders and select files, with the selected file path reflected in the URL hash.
- Responsive design that works well on both desktop and mobile devices.

## Application Structure
- **Layout**: A split-pane design with a resizable left sidebar and a main content area.
- **Styling**: Modern GitHub-inspired light theme with smooth hover effects and transitions.
- **Responsiveness**: Mobile-friendly with collapsible sidebar and touch-optimized controls.

## GitHub API Integration
- Utilizes the GitHub Git Trees API with the `?recursive=1` parameter for fetching repository data in a single call.
- Includes a text field for repository input in the "owner/repository" format with validation.
- Maintains a history of recent repositories using localStorage.

## Features
- Displays files and folders using HTML `<details>` elements for collapsible structures.
- Contextual emoji icons for different file types.
- Sorting logic prioritizing folders, date-prefixed items, and alphabetical order.
- Visual hierarchy with proper indentation and expand/collapse indicators.
- Search functionality for real-time filtering of files and folders.

## Navigation
- Click to select files, updating the `location.hash` to reflect the selected file's path.
- Auto-expand parent folders when selecting nested files.
- Keyboard navigation support for enhanced accessibility.

## Data Management
- Efficient tree structure for traversal and lookup.
- Persistence of recent repositories and UI state in localStorage.

## User Experience Enhancements
- Intuitive keyboard shortcuts and smooth animations for a better user experience.
- Touch-friendly interface for mobile users.

## Setup Instructions
1. Clone the repository to your local machine.
2. Open `index.html` in a web browser to run the application.
3. Enter a GitHub repository in the "owner/repository" format to begin exploring.

## Usage Guidelines
- Use the search bar to filter files and folders.
- Click on folders to expand or collapse their contents.
- Select files to view their path in the URL hash.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.