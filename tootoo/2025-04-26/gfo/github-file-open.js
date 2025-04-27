const GFO = ( function () {

  const defaultFile = COR.defaultFile;

  // Set the flavor of the Markdown converter
  showdown.setFlavor( "github" );

  // Set the options for the Markdown converter
  const options = {
    backslashEscapesHTMLTags: true,
    completeHTMLDocument: false,
    disableForced4SpacesIndentedSublists: true,
    emoji: true,
    excludeTrailingPunctuationFromURLs: true,
    ghMention: true,
    noHeaderId: true,
    openLinksInNewWindow: false,
    simplifiedAutoLink: true,
    simpleLineBreaks: true,
    smoothLivePreview: true,
    strikethrough: true,
    tasklists: true,
  };

  // Listen for changes to the hash in the URL
  window.addEventListener( "hashchange", onHashChange, false );

  // If there's no hash in the URL, set it to the default file
  if ( !location.hash ) {
    location.hash = defaultFile;
  } else if ( location.hash === "#" ) {
    // Handle empty hash
    location.hash = defaultFile;
  } else {
    // Auto-load when script initializes (no need for extra button click)
    setTimeout(() => {
      onHashChange();
    }, 10);
  }
  
  // Support for window resizing to adjust iframe heights
  window.addEventListener("resize", () => {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach(iframe => {
      if (iframe.getAttribute("data-auto-height") === "true") {
        iframe.style.height = `${window.innerHeight * 0.95}px`;
      }
    });
  });

  function onHashChange () {
    // Show loading indicator in content div
    divMainContent.innerHTML = `<div class="loading">Loading content</div>`;

    // Get the URL from the hash and update the document title
    const url = location.hash.slice( 1 );

    setDocumentTitle( url );

    // Fetch the file and update the page content
    fetchFile( COR.pathContent + url, options );
  }

  function setDocumentTitle ( url ) {
    const title = url.split( "/" ).pop()
      .split( "-" )
      .filter( word => word.length > 0 )
      .map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) )
      .join( " " );

    document.title = title;
  }

  /**
   * Get file extension from URL or filename
   * @param {string} url - The URL or filename
   * @returns {string} The file extension in lowercase
   */
  function getExtension(url) {
    return url.includes( "." ) ? 
      url.toLowerCase().split( '.' ).pop() : 
      "";
  }

  function fetchFile ( url, options ) {
    fetch( url )
      .then( response => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        }
        return response.text();
      } )
      .then( txt => {
        const extension = getExtension(url);
        
        // Handle text-based content types
        if ( [ "", "LICENSE", "txt", "md", "markdown" ].includes( extension ) ) {
          // Process Markdown content
          txt = txt.replace( /\<!--@@@/, "" ).replace( /\@@@--\>/, "" );
          divMainContent.innerHTML = new showdown.Converter( options ).makeHtml( txt );
          
          // Process any code blocks for syntax highlighting if a library is available
          if (window.hljs) {
            document.querySelectorAll('pre code').forEach((block) => {
              hljs.highlightBlock(block);
            });
          }

        } else if ( [ "json" ].includes( extension ) ) {
          // Pretty print JSON
          try {
            const jsonObj = JSON.parse(txt);
            const formattedJson = JSON.stringify(jsonObj, null, 2);
            divMainContent.innerHTML = `<pre>${formattedJson}</pre>`;
          } catch (e) {
            divMainContent.innerHTML = `<pre>${txt}</pre>`;
          }

        } else if ( [ "gif", "jpg", "jpeg", "png", "svg" ].includes( extension ) ) {
          // Enhanced image handling with responsive options and loading indicator
          divMainContent.innerHTML = `
            <div style="text-align:center;">
              <img src="${ url }" 
                style="border:none;max-width:100%;height:auto;" 
                alt="${url.split('/').pop()}"
                onload="this.previousElementSibling?.remove()"
                onerror="this.onerror=null;this.src='';this.insertAdjacentHTML('afterend', '<p>Error loading image</p>');"
              >
              <div class="loading">Loading image...</div>
            </div>`;

        } else if ( [ "pdf" ].includes( extension ) ) {
          // Special handling for PDFs
          divMainContent.innerHTML = `<iframe src="${ url }#view=fit" 
            height="${ window.innerHeight * 0.9 }" 
            data-auto-height="true"
            style="border:none;width:100%;" 
            title="${url.split('/').pop()}"
            sandbox="allow-scripts allow-same-origin"></iframe>`;
            
        } else if ( [ "mp4", "webm", "ogg" ].includes( extension ) ) {
          // Video file handling
          divMainContent.innerHTML = `
            <div style="text-align:center;">
              <video controls style="max-width:100%;height:auto;">
                <source src="${ url }" type="video/${ extension === "mp4" ? "mp4" : extension === "webm" ? "webm" : "ogg" }">
                Your browser does not support the video tag.
              </video>
            </div>`;
            
        } else if ( [ "mp3", "wav" ].includes( extension ) ) {
          // Audio file handling
          divMainContent.innerHTML = `
            <div style="text-align:center;padding:2em;">
              <audio controls style="width:100%;">
                <source src="${ url }" type="audio/${ extension }">
                Your browser does not support the audio element.
              </audio>
              <p>${ url.split('/').pop() }</p>
            </div>`;
            
        } else if ( [ "csv", "tsv" ].includes( extension ) ) {
          // Simple CSV/TSV table display
          try {
            const separator = extension === "csv" ? "," : "\t";
            const lines = txt.split("\n").filter(line => line.trim() !== "");
            const headers = lines[0].split(separator);
            
            let tableHtml = '<div style="overflow-x:auto;"><table>';
            tableHtml += '<tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr>';
            
            for(let i = 1; i < lines.length; i++) {
              const cells = lines[i].split(separator);
              tableHtml += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
            }
            
            tableHtml += '</table></div>';
            divMainContent.innerHTML = tableHtml;
          } catch (e) {
            // Fallback to pre-formatted text
            divMainContent.innerHTML = `<pre>${txt}</pre>`;
          }
            
        } else {
          // Default iframe handler with loading message and error handler
          divMainContent.innerHTML = `
            <div class="loading">Loading content...</div>
            <iframe src="${ url }" 
              height="${ window.innerHeight * 0.95 }" 
              data-auto-height="true"
              style="border:none;width:100%;" 
              title="${url.split('/').pop()}"
              onload="this.previousElementSibling.style.display='none';"
              onerror="this.style.display='none';document.querySelector('.loading').innerHTML='Error loading content. This file type may not be viewable in the browser.';">
            </iframe>`;
        }

        window.scrollTo( 0, 0 );
      } )
      .catch( err => {
        console.error( "Error fetching file:", err );
        divMainContent.innerHTML = `<div style="padding:2em;color:red;">
          <h3>Error Loading File</h3>
          <p>There was a problem loading: ${url}</p>
          <p>Error: ${err.message || "Unknown error"}</p>
          <p><button onclick="GFO.onHashChange()">Try Again</button></p>
        </div>`;
      } );
  }

  /**
   * Load a file directly by URL
   * @param {string} url - The URL to load
   */
  function loadFile(url) {
    location.hash = url;
  }

  return {
    onHashChange,
    setDocumentTitle,
    fetchFile,
    loadFile,
    getExtension
  };
} )();

// Convenience function for quick testing
test = function () {
  console.log( "test" );
  location.hash = "test.md";
};