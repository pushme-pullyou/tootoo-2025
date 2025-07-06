# Prompt

Task

* Build a single HTML file with included JavaScript and CSS
* The app provides a wild and wacky way to browse and view all the markdown and other files in the repo

Conditions

* Files in all folders are browseable and viewable
* markdown files are rendered in HTML
* The audience is people ove 80 years old
* Design for the visually imparied
* The file is to hosted and run on GitHub Pages
* ReadApp works on computers, tablets and phones
* request and save authorization token and save in local storage
* Browsing area to left, and viewing area to right
* Font: 14pt Verdana or larger
* Access token request by prompt only ig 403 error occurs
* Visible folders: Blog, Dining Service, Heritage Documents, contents all other folders are hidden

On GitHub

* User: heritage-happenings
* repo: heritage-happenings.github.io
* Branch: master
* Title: "Heritage Happenings"

## Prompt 2

# Heritage Happenings — Prompt

## 1. Overview  
Build a single-page “ReadApp” (HTML/CSS/JS) that lets seniors (80+) browse and view **all** files in this GitHub Pages repo—in a fun, highly readable way.

---

## 2. User Stories  
1. As an 80-year-old user, I can expand/collapse folders to find documents.  
2. I can click any file (MD, TXT, CSV, etc.) and see it rendered or highlighted.  
3. If I hit a permission error (403), the app prompts me for a GitHub access token and stores it.  
4. I can use the app on desktop, tablet or phone without layout breakage.

---

## 3. Functional Requirements  
- **Single file**: One `index.html` with embedded JS & CSS—no build step.  
- **Repo traversal**:  
  - Show only top-level folders: `Blog`, `Dining Service`, `Heritage Documents`.  
  - Recursively list their subfolders & files; hide all other folders.  
- **File rendering**:  
  - Markdown → HTML (headings, lists, code blocks).  
  - Plain text → monospace block.  
  - Images/→ inline preview or download link.  
  - PDFs view in iframe
- **Auth flow**:  
  - On 403, prompt for Personal Access Token, save in `localStorage`, retry.  
  - Include `Authorization: token …` in subsequent API calls.

---

## 4. UI / UX / Accessibility  
- **Layout**:  
  - Left pane (30%): folder/file tree.  
  - Right pane (70%): content viewer.  
  - Responsive: panes stack on narrow screens.  
- **Typography & contrast**:  
  - Base font: 14 pt Verdana or larger, high-contrast.  
  - Buttons/links: ≥ 44 px tappable area.  
  - Visible focus outlines for keyboard users.  
- **“Wild & Wacky” garnish**:  
  - Gentle animations or friendly icons—prioritize readability.

---

## 5. Technical Constraints  
- Vanilla JS (ES6+), no external dependencies.  
- Use GitHub REST API v3 only.  
- Entire code & styles embedded in `index.html`.  
- Must run at `heritage-happenings.github.io` → `master` branch.
- Make the API for blobs and folders only once

---

## 6. Acceptance Criteria  

- [ ] Browse permitted folders/files without reloads.  
- [ ] Markdown renders correctly (headings, lists, links).  
- [ ] 403 triggers single token prompt; token persists.  
- [ ] Layout adapts to desktop, tablet, and phone.  
- [ ] Meets font size & contrast requirements.

## Prompt 3

# Heritage Happenings — Enhanced ReadApp Prompt

## 0. Project Context
- **Target Application:** ReadApp
- **GitHub User:** `heritage-happenings`
- **Repository:** `heritage-happenings.github.io`
- **Branch:** `master`
- **Deployment URL:** `https://heritage-happenings.github.io/` (once `index.html` is in the `master` branch root)

## 1. Overview
Build a single-page "ReadApp" (HTML/CSS/JS) designed for seniors (80+ years old) to easily browse and view files within specified folders of the `heritage-happenings.github.io` GitHub Pages repository. The application must prioritize high readability, accessibility, and a user-friendly, potentially "fun," experience without compromising usability.

---

## 2. User Stories
1.  As an 80-year-old user, I can intuitively expand and collapse folder structures to navigate and find documents.
2.  As an 80-year-old user, I can click on any listed file (e.g., Markdown, TXT, CSV, image, PDF) and have its content displayed in a readable format within the app, or be provided with a clear download option if direct rendering is not feasible.
3.  As a user, if the application encounters a permission error (HTTP 403) when fetching files, I am prompted once to enter a GitHub Personal Access Token (PAT), which is then securely stored in my browser's `localStorage` for future sessions.
4.  As a user, I can comfortably use the ReadApp on my desktop computer, tablet, or smartphone, with the layout adjusting automatically for optimal viewing.

---

## 3. Functional Requirements

-   **Single File Application**:
    -   The entire application must be contained within a single `index.html` file, with all JavaScript and CSS embedded.
    -   No build steps or external framework dependencies are permitted.
-   **Repository Traversal & Display**:
    -   The application will fetch and display content exclusively from the following top-level folders within the `heritage-happenings.github.io` repository: `Blog`, `Dining Service`, `Heritage Documents`.
    -   It must recursively list all subfolders and files within these specified top-level folders.
    -   All other files and folders at the root level or within other top-level folders must be hidden and inaccessible through the app.
-   **File Rendering and Handling**:
    -   **Markdown (`.md`)**: Rendered as HTML, correctly displaying headings, lists (ordered and unordered), links, bold/italic text, and code blocks.
    -   **Plain Text (`.txt`, `.csv`, etc.)**: Displayed within a `<pre>` tag or similar monospace block to preserve formatting.
    -   **Images (`.jpg`, `.jpeg`, `.png`, `.gif`, `.svg`)**: Displayed inline if possible. If an image is too large or problematic for inline display, provide a clear download link.
    -   **PDFs (`.pdf`)**: Displayed within an `<iframe>` for inline viewing.
    -   **Other File Types**: For file types not explicitly handled above, display a clear download link.
-   **Authentication Flow**:
    -   On encountering an HTTP 403 (Forbidden) error during a GitHub API request, the application must:
        -   Prompt the user to enter a GitHub Personal Access Token (PAT).
        -   Store the provided PAT in `localStorage`.
        -   Automatically retry the failed request using the new token.
    -   Subsequent GitHub API calls must include the `Authorization: token YOUR_PAT_HERE` header if a token is stored.
    -   The token prompt should only appear once per session unless the token becomes invalid.
-   **API Usage**:
    -   Utilize the GitHub REST API v3 exclusively for fetching directory structures and file content.
    -   Optimize API calls: Fetch directory listings (tree objects) and file contents (blobs) efficiently. Cache responses where appropriate (e.g., in memory) to avoid redundant API calls for the same resource during a user session. Each unique folder's content and each unique file's content should ideally be fetched only once.

---

## 4. UI / UX / Accessibility

-   **Layout**:
    -   **Two-Pane View (Desktop/Tablet)**:
        -   Left Pane (approx. 30% width): Displays the navigable folder/file tree for the permitted directories.
        -   Right Pane (approx. 70% width): Displays the content of the selected file.
    -   **Responsive Design**:
        -   On narrow screens (e.g., mobile phones), the panes should stack vertically (e.g., tree view above content view, or an accordion-style navigation).
-   **Typography & Contrast**:
    -   **Base Font**: Verdana (or a similarly clear sans-serif font), minimum 14pt size.
    -   **High Contrast**: Ensure sufficient color contrast between text and background to meet WCAG AA guidelines.
-   **Interaction & Accessibility**:
    -   **Tappable Areas**: Buttons, links, and other interactive elements must have a minimum tappable area of 44x44 CSS pixels.
    -   **Keyboard Navigation**: All interactive elements must be navigable and operable using a keyboard.
    -   **Visible Focus**: Implement clear and visible focus indicators for keyboard users.
    -   **ARIA Attributes**: Use appropriate ARIA (Accessible Rich Internet Applications) attributes to enhance accessibility for screen reader users.
-   **“Wild & Wacky” Garnish (Optional Enhancement)**:
    -   Subtle, gentle animations or friendly icons may be incorporated to add a touch of personality.
    -   These elements **must not** compromise readability, performance, or accessibility. Prioritize clarity and ease of use for the target audience. Avoid distracting or overly complex visual effects.

---

## 5. Technical Constraints

-   **JavaScript**: Vanilla JavaScript (ES6+ features are acceptable). No external JS libraries or frameworks (e.g., jQuery, React, Vue, Angular).
-   **CSS**: Plain CSS. No CSS preprocessors or frameworks (e.g., SASS, Bootstrap) requiring a build step.
-   **API**: GitHub REST API v3 only.
-   **Hosting**: The `index.html` file must be runnable directly from the `master` branch of the `heritage-happenings.github.io` repository when served via GitHub Pages.
-   **Error Handling**: Implement basic, user-friendly error messages for common issues (e.g., network errors, file not found beyond the 403 PAT handling).

---

## 6. Acceptance Criteria

-   [ ] **AC1: Folder Navigation**: Users can expand and collapse the specified top-level folders (`Blog`, `Dining Service`, `Heritage Documents`) and their subfolders to browse files without page reloads.
-   [ ] **AC2: File Viewing - Markdown**: Markdown files (`.md`) render correctly in the content pane, displaying headings, lists, links, bold/italic text, and code blocks.
-   [ ] **AC3: File Viewing - Plain Text**: Plain text files (`.txt`, `.csv`) are displayed in a monospace font, preserving basic formatting, in the content pane.
-   [ ] **AC4: File Viewing - Images**: Image files (`.jpg`, `.png`, etc.) are displayed inline, or a download link is provided.
-   [ ] **AC5: File Viewing - PDFs**: PDF files (`.pdf`) are viewable within an iframe in the content pane.
-   [ ] **AC6: Authentication**: An HTTP 403 error triggers a single prompt for a GitHub PAT; the token is stored in `localStorage` and used for subsequent API calls.
-   [ ] **AC7: Responsive Layout**: The application layout adapts correctly to desktop, tablet, and mobile phone screen sizes, ensuring readability and usability on all devices.
-   [ ] **AC8: Accessibility - Typography & Contrast**: Base font size is at least 14pt Verdana (or equivalent), and color contrast meets WCAG AA standards.
-   [ ] **AC9: Accessibility - Interaction**: All interactive elements have a minimum 44px tappable area and visible keyboard focus indicators.
-   [ ] **AC10: API Optimization**: GitHub API calls for directory listings and file content are optimized to avoid redundant requests for the same resource within a session.
-   [ ] **AC11: Single File Structure**: The entire application (HTML, CSS, JS) is contained within a single `index.html` file.
-   [ ] **AC12: "Wild & Wacky" Garnish**: If implemented, visual garnishes are subtle, do not impede usability or readability, and are appropriate for the target audience.
-   [ ] **AC13: Error Handling**: Basic, user-friendly messages are shown for non-403 API errors or if a file cannot be loaded.
```<!-- filepath: c:\Users\tarmo\OneDrive\Documents\GitHub\pushme-pullyou-tootoo-2025\sandbox\2025-06-10\prompt.md -->

## Prompt #4

# Heritage Happenings — Enhanced ReadApp Prompt

## 0. Project Context
- **Target Application:** ReadApp
- **GitHub User:** `heritage-happenings`
- **Repository:** `heritage-happenings.github.io`
- **Branch:** `master`
- **Deployment URL:** `https://heritage-happenings.github.io/` (once `index.html` is in the `master` branch root)

## 1. Overview
Build a single-page "ReadApp" (HTML/CSS/JS) designed for seniors (80+ years old) to easily browse and view files within specified folders of the `heritage-happenings.github.io` GitHub Pages repository. The application must prioritize high readability, accessibility, and a user-friendly, potentially "fun," experience without compromising usability.

---

## 2. User Stories
1.  As an 80-year-old user, I can intuitively expand and collapse folder structures to navigate and find documents.
2.  As an 80-year-old user, I can click on any listed file (e.g., Markdown, TXT, CSV, image, PDF) and have its content displayed in a readable format within the app, or be provided with a clear download option if direct rendering is not feasible.
3.  As a user, if the application encounters a permission error (HTTP 403) when fetching files, I am prompted once to enter a GitHub Personal Access Token (PAT), which is then securely stored in my browser's `localStorage` for future sessions.
4.  As a user, I can comfortably use the ReadApp on my desktop computer, tablet, or smartphone, with the layout adjusting automatically for optimal viewing.

---

## 3. Functional Requirements

-   **Single File Application**:
    -   The entire application must be contained within a single `index.html` file, with all JavaScript and CSS embedded.
    -   No build steps or external framework dependencies are permitted.
-   **Repository Traversal & Display**:
    -   The application will fetch and display content exclusively from the following top-level folders within the `heritage-happenings.github.io` repository: `Blog`, `Dining Service`, `Heritage Documents`.
    -   It must recursively list all subfolders and files within these specified top-level folders.
    -   All other files and folders at the root level or within other top-level folders must be hidden and inaccessible through the app.
-   **File Rendering and Handling**:
    -   **Markdown (`.md`)**: Rendered as HTML, correctly displaying headings, lists (ordered and unordered), links, bold/italic text, and code blocks.
    -   **Plain Text (`.txt`, `.csv`, etc.)**: Displayed within a `<pre>` tag or similar monospace block to preserve formatting.
    -   **Images (`.jpg`, `.jpeg`, `.png`, `.gif`, `.svg`)**: Displayed inline if possible. If an image is too large or problematic for inline display, provide a clear download link.
    -   **PDFs (`.pdf`)**: Displayed within an `<iframe>` for inline viewing.
    -   **Other File Types**: For file types not explicitly handled above, display a clear download link.
-   **Authentication Flow**:
    -   On encountering an HTTP 403 (Forbidden) error during a GitHub API request, the application must:
        -   Prompt the user to enter a GitHub Personal Access Token (PAT).
        -   Store the provided PAT in `localStorage`.
        -   Automatically retry the failed request using the new token.
    -   Subsequent GitHub API calls must include the `Authorization: token YOUR_PAT_HERE` header if a token is stored.
    -   The token prompt should only appear once per session unless the token becomes invalid.
-   **API Usage**:
    -   Utilize the GitHub REST API v3 exclusively for fetching directory structures and file content.
    -   Optimize API calls: Fetch directory listings (tree objects) and file contents (blobs) efficiently. Cache responses where appropriate (e.g., in memory) to avoid redundant API calls for the same resource during a user session. Each unique folder's content and each unique file's content should ideally be fetched only once.

---

## 4. UI / UX / Accessibility

-   **Layout**:
    -   **Two-Pane View (Desktop/Tablet)**:
        -   Left Pane (approx. 30% width): Displays the navigable folder/file tree for the permitted directories.
        -   Right Pane (approx. 70% width): Displays the content of the selected file.
    -   **Responsive Design**:
        -   On narrow screens (e.g., mobile phones), the panes should stack vertically (e.g., tree view above content view, or an accordion-style navigation).
-   **Typography & Contrast**:
    -   **Base Font**: Verdana (or a similarly clear sans-serif font), minimum 14pt size.
    -   **High Contrast**: Ensure sufficient color contrast between text and background to meet WCAG AA guidelines.
-   **Interaction & Accessibility**:
    -   **Tappable Areas**: Buttons, links, and other interactive elements must have a minimum tappable area of 44x44 CSS pixels.
    -   **Keyboard Navigation**: All interactive elements must be navigable and operable using a keyboard.
    -   **Visible Focus**: Implement clear and visible focus indicators for keyboard users.
    -   **ARIA Attributes**: Use appropriate ARIA (Accessible Rich Internet Applications) attributes to enhance accessibility for screen reader users.
-   **“Wild & Wacky” Garnish (Optional Enhancement)**:
    -   Subtle, gentle animations or friendly icons may be incorporated to add a touch of personality.
    -   These elements **must not** compromise readability, performance, or accessibility. Prioritize clarity and ease of use for the target audience. Avoid distracting or overly complex visual effects.

---

## 5. Technical Constraints

-   **JavaScript**: Vanilla JavaScript (ES6+ features are acceptable). No external JS libraries or frameworks (e.g., jQuery, React, Vue, Angular).
-   **CSS**: Plain CSS. No CSS preprocessors or frameworks (e.g., SASS, Bootstrap) requiring a build step.
-   **API**: GitHub REST API v3 only.
-   **Hosting**: The `index.html` file must be runnable directly from the `master` branch of the `heritage-happenings.github.io` repository when served via GitHub Pages.
-   **Error Handling**: Implement basic, user-friendly error messages for common issues (e.g., network errors, file not found beyond the 403 PAT handling).

---

## 6. Acceptance Criteria

-   [ ] **AC1: Folder Navigation**: Users can expand and collapse the specified top-level folders (`Blog`, `Dining Service`, `Heritage Documents`) and their subfolders to browse files without page reloads.
-   [ ] **AC2: File Viewing - Markdown**: Markdown files (`.md`) render correctly in the content pane, displaying headings, lists, links, bold/italic text, and code blocks.
-   [ ] **AC3: File Viewing - Plain Text**: Plain text files (`.txt`, `.csv`) are displayed in a monospace font, preserving basic formatting, in the content pane.
-   [ ] **AC4: File Viewing - Images**: Image files (`.jpg`, `.png`, etc.) are displayed inline, or a download link is provided.
-   [ ] **AC5: File Viewing - PDFs**: PDF files (`.pdf`) are viewable within an iframe in the content pane.
-   [ ] **AC6: Authentication**: An HTTP 403 error triggers a single prompt for a GitHub PAT; the token is stored in `localStorage` and used for subsequent API calls.
-   [ ] **AC7: Responsive Layout**: The application layout adapts correctly to desktop, tablet, and mobile phone screen sizes, ensuring readability and usability on all devices.
-   [ ] **AC8: Accessibility - Typography & Contrast**: Base font size is at least 14pt Verdana (or equivalent), and color contrast meets WCAG AA standards.
-   [ ] **AC9: Accessibility - Interaction**: All interactive elements have a minimum 44px tappable area and visible keyboard focus indicators.
-   [ ] **AC10: API Optimization**: GitHub API calls for directory listings and file content are optimized to avoid redundant requests for the same resource within a session.
-   [ ] **AC11: Single File Structure**: The entire application (HTML, CSS, JS) is contained within a single `index.html` file.
-   [ ] **AC12: "Wild & Wacky" Garnish**: If implemented, visual garnishes are subtle, do not impede usability or readability, and are appropriate for the target audience.
-   [ ] **AC13: Error Handling**: Basic, user-friendly messages are shown for non-403 API errors or if a file cannot be loaded.