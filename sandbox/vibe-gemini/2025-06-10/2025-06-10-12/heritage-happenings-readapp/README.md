# Heritage Happenings ReadApp

## Overview
The Heritage Happenings ReadApp is a single-page application designed specifically for seniors (80+ years old) to easily browse and view files from the `heritage-happenings.github.io` GitHub Pages repository. The application prioritizes high readability, accessibility, and a user-friendly experience.

## Features
- **Two-Pane Layout**: The application features a two-pane layout where the left pane displays a navigable folder/file tree, and the right pane shows the content of the selected file.
- **File Types Supported**:
  - Markdown files (`.md`) are rendered as HTML.
  - Plain text files (`.txt`, `.csv`) are displayed in a monospace format.
  - Images (`.jpg`, `.png`, etc.) are displayed inline or provided with download links.
  - PDF files (`.pdf`) are viewable within an iframe.
- **Responsive Design**: The layout adapts to different screen sizes, ensuring usability on desktop, tablet, and mobile devices.
- **Authentication Handling**: The app prompts for a GitHub Personal Access Token (PAT) if a permission error (HTTP 403) occurs, storing it securely for future sessions.

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/heritage-happenings/heritage-happenings.github.io.git
   ```
2. Navigate to the project directory:
   ```
   cd heritage-happenings-readapp
   ```
3. Open `index.html` in a web browser to run the application.

## Requirements
- The application must be contained within a single `index.html` file, with all JavaScript and CSS embedded.
- It should utilize the GitHub REST API v3 for fetching directory structures and file content.
- The project must be hosted on GitHub Pages, with the `index.html` file located in the root of the `master` branch.

## Accessibility Considerations
The ReadApp is designed with accessibility in mind, featuring:
- High-contrast text and background colors.
- A minimum font size of 14pt Verdana or equivalent.
- Tappable areas of at least 44x44 pixels for interactive elements.
- Clear focus indicators for keyboard navigation.

## Contribution
Contributions to improve the ReadApp are welcome. Please submit a pull request or open an issue for any suggestions or bug reports.