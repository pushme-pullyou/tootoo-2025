# Heritage Happenings Browser

## Overview
The Heritage Happenings Browser is a web application designed to allow users to browse and view markdown and other files from the "heritage-happenings" GitHub repository. The application is specifically tailored for accessibility, targeting an audience over 80 years old, ensuring ease of use and readability.

## Features
- **File Browsing**: Users can navigate through the files in the "heritage-happenings" repository.
- **Markdown Rendering**: The application supports viewing markdown files with proper formatting.
- **Accessibility**: Designed with larger font sizes (14pt Verdana or larger) and a user-friendly layout to accommodate visually impaired users.

## Setup Instructions
1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/yourusername/heritage-happenings-browser.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd heritage-happenings-browser
   ```
3. **Open `index.html`**: You can open the `index.html` file in any modern web browser to start using the application.

## Usage Guidelines
- Upon opening the application, users will see a file browsing area on the left and a viewing area on the right.
- Clicking on a file will render its content in the viewing area.
- If a file fetch results in a 403 error, the application will prompt the user to enter a GitHub authorization token.

## Design Considerations
- The application is designed with accessibility in mind, featuring high-contrast colors and larger text sizes to aid visibility.
- User interactions are simplified to ensure that users can navigate the application with minimal effort.
- The layout is responsive, ensuring usability across different devices.

## Contribution
Contributions to improve the application are welcome. Please submit a pull request or open an issue for any suggestions or enhancements.