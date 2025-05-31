initGFOE();

function initGFOE() {

  window.addEventListener("hashchange", onHashChange, false);

  onHashChange();

}


function onHashChange() {

  const hash = location.hash.slice(1);
  
  // Open parent details elements to make the file-container visible
  const fileContainers = document.querySelectorAll('.file-container');
  //console.log("fileContainers", fileContainers);
  for (const container of fileContainers) {
    const link = container.querySelector('a');
    if (link && link.getAttribute('href') === '#' + hash) {
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

  //console.log("hash", hash, "url", COR.pathContent);

  if (/\.(md|txt|ini)$/i.test(hash)) {
    
    if (hash.includes("@@")) {

      console.log("notesy", hash);
      
      hash = hash.slice(2);

      divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="${COR.pathApps}notesy.html" onload=ifr.contentWindow.location.hash="${hash}"><iframe>`;

    } else {

      console.log("getHTMLfromURL", hash);

      getHTMLfromURL(hash);

    }

  } else if (/\.(jpg|jpeg|png|gif|svg|ico|bmp|tiff|webp)$/i.test(hash)) {

    console.log("img", hash);

    divMainContent.innerHTML = `<img src="${COR.urlPathContent}${hash}" ></img>`;

  } else if (hash === "LICENSE") {

    console.log("getHTMLfromURL", hash);

    getHTMLfromURL(hash);

  } else {

    console.log("else", COR.urlPathContent + hash);

    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="${COR.urlPathContent}${hash}" ></iframe>`

  }

}


function getHTMLfromURL(url = location.hash.slice(1)) {

  //console.log("hash", COR.pathContent + COR.hash);

  showdown.setFlavor("github");
  const options = { openLinksInNewWindow: false, excludeTrailingPunctuationFromURLs: true, ghMention: true, simplifiedAutoLink: true, simpleLineBreaks: true, emoji: true };

  const xhr = new XMLHttpRequest();
  xhr.open("get", COR.pathContent + hash, true);
  xhr.onload = () => {
    let txt = xhr.responseText;
    txt = txt.replace(/\<!--@@@/, " ).replace /\@@@-- >/, ");
    divMainContent.innerHTML = new showdown.Converter(options).makeHtml(txt);
    window.scrollTo(0, 0);
  };
  xhr.send(null);

  let title = hash.split("/").pop()
    .split("-")
    .filter(x => x.length > 0)
    //.map((x) => (x.charAt(0).toUpperCase() + x.slice(1)))
    .join(" ");
  document.title = `${COR.menuTitle}: ` + title;

}