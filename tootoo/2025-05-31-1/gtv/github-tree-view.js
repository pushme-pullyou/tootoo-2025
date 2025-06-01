const user = COR.user;
const repo = COR.repo;
const branch = COR.branch;

const filterFolders = COR.filterFolders;
const ignoreFiles = COR.ignoreFiles;

const baseUrl = 'https://api.github.com';

async function fetchGitHubRepoContents(user, repo) {

  const response = await fetch(`${baseUrl}/repos/${user}/${repo}/git/trees/${branch}?recursive=1`);  //{ headers }
  const { tree } = await response.json();
  const div = document.getElementById('divNavTreeView');

  const createTree = (items, parentPath) => {
    const folderContents = document.createElement('div');
    folderContents.className = 'folder-contents';

    const trees = items.filter(item => item.type === 'tree');
    const blobs = items.filter(item => item.type === 'blob');

    trees.forEach(item => {
      const details = document.createElement('details');
      const summary = document.createElement('summary');

      // Format folder names: replace hyphens with spaces
      const folderName = item.path.replace(parentPath, '');
      summary.textContent = formatDisplayName(folderName, true);

      // Add a special class for top-level folders
      if (parentPath === '') {
        details.classList.add('top-level-folder');
      }

      details.appendChild(summary);

      const childItems = tree.filter(child => child.path.startsWith(item.path + '/') && child.path.split('/').length === item.path.split('/').length + 1);
      details.appendChild(createTree(childItems, item.path + '/'));

      folderContents.appendChild(details);

    });

    // Add a horizontal rule between folders and files if both exist
    if (trees.length > 0 && blobs.length > 0) {
      const hr = document.createElement('hr');
      folderContents.appendChild(hr);
    }

    // Check if this is a "blog" folder by looking at the parent folder name
    const isBlogFolder = parentPath === '' ? false :
      parentPath.split('/').some(part => part === 'blog') ||
      (parentPath.split('/').length === 1 && parentPath.replace('/', '') === 'date-samples');

    // Sort blobs if this is a date-samples folder and files have date format
    let sortedBlobs = blobs;
    if (isBlogFolder) {
      const datePattern = /^\d{4}-\d{2}-\d{2}/;
      const hasDateFiles = blobs.some(item => {
        const fileName = item.path.replace(parentPath, '');
        return datePattern.test(fileName);
      });

      if (hasDateFiles) {
        sortedBlobs = [...blobs].sort((a, b) => {
          const fileNameA = a.path.replace(parentPath, '');
          const fileNameB = b.path.replace(parentPath, '');

          const dateMatchA = fileNameA.match(datePattern);
          const dateMatchB = fileNameB.match(datePattern);

          // If both have date format, sort by date (newest first)
          if (dateMatchA && dateMatchB) {
            return dateMatchB[0].localeCompare(dateMatchA[0]);
          }

          // If only one has date format, prioritize the dated one
          if (dateMatchA && !dateMatchB) return -1;
          if (!dateMatchA && dateMatchB) return 1;

          // If neither has date format, sort alphabetically
          return fileNameA.localeCompare(fileNameB);
        });
      }
    }    sortedBlobs.forEach(item => {      const fileName = item.path.replace(parentPath, '');
      const fileLink = document.createElement('a');
      fileLink.textContent = formatDisplayName(fileName);
      fileLink.setAttribute('data-file-path', item.path);
      fileLink.setAttribute('tabindex', '0');
      
      // Set href and behavior based on file type
      if (isViewableFile(item.path)) {
        // For viewable files, use normal anchor behavior with hash
        fileLink.href = `#${item.path}`;
        // No click handler needed - let normal anchor behavior work
      } else {
        // For non-viewable files, prevent navigation and just highlight
        fileLink.href = `javascript:void(0)`;
        fileLink.addEventListener('click', (event) => {
          event.preventDefault();
          // Highlight non-viewable file
          const fileLinks = document.querySelectorAll('.file-container a:first-child');
          fileLinks.forEach(link => link.classList.remove('file-selected'));
          event.target.classList.add('file-selected');
        });
      }

      const readmeLink = document.createElement('a');
      readmeLink.innerHTML = COR.iconExternalLink;
      readmeLink.href = `${COR.pathApps}readme.html#${COR.pathContent}${item.path}`;
      readmeLink.target = '_blank';

      const fileContainer = document.createElement('p');
      fileContainer.appendChild(fileLink);
      fileContainer.appendChild(document.createTextNode(" "));
      fileContainer.appendChild(readmeLink);
      fileContainer.className = 'file-container';
      folderContents.appendChild(fileContainer);
    });

    return folderContents;
  };

  let topLevelItems = tree.filter(item => {
    const pathParts = item.path.split('/');
    return pathParts.length === 1;
  });

  topLevelItems = topLevelItems.filter(item => {
    if (item.type === 'blob') {
      return !ignoreFiles.includes(item.path);
    } else {
      // Folders
      return !filterFolders.includes(item.path);
    }
  });
  div.appendChild(createTree(topLevelItems, ''));

  setFileVisible();
  setupKeyboardNavigation();

}

// Open parent details elements to make the file-container visible
function setFileVisible() {
  const fileContainers = document.querySelectorAll('.file-container');
  //console.log("fileContainers", fileContainers);
  for (const container of fileContainers) {
    const link = container.querySelector('a');
    if (link && link.getAttribute('href') === '#' + parent.location.hash.slice(1)) {
      let parentNode = container.parentNode;
      while (parentNode && parentNode.id !== "detNavMenu") {
        if (parentNode.tagName === 'DETAILS') {
          parentNode.open = true;
        }
        parentNode = parentNode.parentNode;
      }
      // Set focus to the link
      link.focus();
      break;
    }
  }

}

// Add keyboard navigation functionality
function setupKeyboardNavigation() {
  const navTreeView = document.getElementById('divNavTreeView');
  if (!navTreeView) return;

  // Make the tree view focusable
  navTreeView.setAttribute('tabindex', '0');

  navTreeView.addEventListener('keydown', (event) => {
    const fileLinks = navTreeView.querySelectorAll('.file-container a:first-child');
    if (fileLinks.length === 0) return;

    const currentFocused = document.activeElement;
    let currentIndex = -1;

    // Find current focused file link
    for (let i = 0; i < fileLinks.length; i++) {
      if (fileLinks[i] === currentFocused) {
        currentIndex = i;
        break;
      }
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (currentIndex < fileLinks.length - 1) {
          fileLinks[currentIndex + 1].focus();
        } else {
          fileLinks[0].focus(); // Wrap to first
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (currentIndex > 0) {
          fileLinks[currentIndex - 1].focus();
        } else {
          fileLinks[fileLinks.length - 1].focus(); // Wrap to last
        }
        break;      case 'Enter':
        event.preventDefault();
        if (currentFocused && currentFocused.tagName === 'A') {
          const filePath = currentFocused.getAttribute('data-file-path');
          console.log("Enter key pressed for file:", filePath);
          
          if (filePath && isViewableFile(filePath)) {
            // For viewable files, navigate normally
            location.hash = filePath;
          } else {
            // For non-viewable files, just highlight
            const fileLinks = document.querySelectorAll('.file-container a:first-child');
            fileLinks.forEach(link => link.classList.remove('file-selected'));
            currentFocused.classList.add('file-selected');
          }
        }
        break;

      case 'Home':
        event.preventDefault();
        fileLinks[0].focus();
        break;

      case 'End':
        event.preventDefault();
        fileLinks[fileLinks.length - 1].focus();
        break;
    }
  });
}

// Add helper function to determine if a file is viewable
function isViewableFile(fileName) {
  // Check for viewable file extensions
  return /\.(md|txt|ini|html|htm|json|css|js|xml|LICENSE)$/i.test(fileName) ||
         /\.(jpg|jpeg|png|gif|svg|ico|bmp|tiff|webp)$/i.test(fileName) ||
         fileName === "LICENSE";
}

function formatDisplayName(fileName, isFolder = false) {
  // Replace hyphens with spaces
  let displayName = fileName.replace(/-/g, ' ');

  // Remove .md extension if present
  if (displayName.toLowerCase().endsWith('.md')) {
    displayName = displayName.slice(0, -3);
  }

  return displayName;

}

fetchGitHubRepoContents(user, repo);
setupKeyboardNavigation();
