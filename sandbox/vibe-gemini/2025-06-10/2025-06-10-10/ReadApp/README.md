# ReadApp

## Overview
ReadApp is a single-page application designed to help seniors easily browse and view files in a GitHub Pages repository. The application provides a user-friendly interface that simplifies navigation and file access.

## User Stories
- As a senior, I want to easily navigate through files in a GitHub repository so that I can find the information I need.
- As a user, I want to view file contents directly in the application without needing to leave the page.
- As a user, I want to expand and collapse folders to manage my view of the repository's structure.

## Functional Requirements
- The application must display a list of files and folders from a specified GitHub Pages repository.
- Users should be able to click on folders to expand or collapse their contents.
- Users should be able to click on files to view their contents in the application.
- The application should handle 403 errors gracefully, providing informative messages to users.
- The application must manage authentication with GitHub's API to access private repositories if necessary.

## Technical Constraints
- The application must be built using HTML, CSS, and JavaScript.
- The design should be responsive and accessible, catering to the needs of senior users.
- The application should utilize GitHub's API for fetching repository data.

## Acceptance Criteria
- The application loads the repository structure correctly.
- Users can expand and collapse folders without issues.
- File contents are displayed correctly when a file is selected.
- Error handling is implemented for unauthorized access attempts.
- The application is visually appealing and easy to navigate for seniors.