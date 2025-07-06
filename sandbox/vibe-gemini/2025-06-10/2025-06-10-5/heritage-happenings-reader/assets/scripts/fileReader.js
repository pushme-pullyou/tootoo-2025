// This file contains functions for reading and displaying markdown and other file types.
// It processes the files and converts them into a format suitable for viewing in the browser.

const fileReader = (() => {
    const readFile = (fileContent) => {
        // Convert markdown to HTML
        const converter = new showdown.Converter();
        return converter.makeHtml(fileContent);
    };

    const displayFile = (filePath, fileContent) => {
        const contentArea = document.getElementById('content');
        const htmlContent = readFile(fileContent);
        contentArea.innerHTML = `<h2>${filePath}</h2>${htmlContent}`;
    };

    const fetchFile = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const fileContent = await response.text();
            return fileContent;
        } catch (error) {
            console.error('Error fetching the file:', error);
        }
    };

    return {
        displayFile,
        fetchFile
    };
})();