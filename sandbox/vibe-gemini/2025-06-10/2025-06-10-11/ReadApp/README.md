# ReadApp

## Overview
ReadApp is a single-page application designed specifically for seniors (80+ years old) to easily browse and view files from the `heritage-happenings.github.io` GitHub Pages repository. The application prioritizes high readability, accessibility, and a user-friendly experience.

## Project Structure
The project consists of the following files:

- **index.html**: The main entry point of the application, containing the layout for the folder/file tree and content display area.
- **css/styles.css**: The stylesheet for the application, defining layout, typography, colors, and responsive design elements.
- **js/app.js**: The JavaScript file that handles fetching data from the GitHub API, rendering files, managing folder navigation, and implementing authentication for GitHub Personal Access Tokens.
- **README.md**: This documentation file, providing an overview, setup instructions, and usage guidelines.

## Setup Instructions
1. Clone the repository from GitHub:
   ```
   git clone https://github.com/heritage-happenings/heritage-happenings.github.io.git
   ```
2. Navigate to the project directory:
   ```
   cd ReadApp
   ```
3. Open `index.html` in a web browser to run the application.

## Usage Guidelines
- Upon opening the application, users will see a folder/file tree on the left and the content display area on the right.
- Users can expand and collapse folders to navigate through the files.
- Clicking on a file will render its content in the display area.
- If a permission error occurs, users will be prompted to enter a GitHub Personal Access Token, which will be securely stored for future sessions.

## Accessibility Features
- The application is designed with high contrast and large font sizes to ensure readability for seniors.
- All interactive elements are accessible via keyboard navigation, and focus indicators are implemented for better usability.

## Contribution
Contributions to improve the application are welcome. Please submit a pull request or open an issue for discussion.