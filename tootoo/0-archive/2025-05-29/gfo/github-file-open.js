initGFO();

function initGFO() {

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

  console.log("hash", hash);

  if ((/\.(md|txt|ini)$/i.test(hash)) || hash === "LICENSE") {

    getHTMLfromURL(hash);

  } else if (/\.(jpg|jpeg|png|gif|svg|ico|bmp|tiff|webp)$/i.test(hash)) {

    console.log("img", hash);

    divMainContent.innerHTML = `<img src="${COR.pathContent}${hash}" ></img>`;

  } else {

    console.log("else", COR.urlPathContent + hash);

    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="${COR.urlPathContent}${hash}" ></iframe>`

  }

}


function getHTMLfromURL(url = location.hash.slice(1)) {

  console.log("url", COR.pathContent + url);

  showdown.setFlavor("github");
  const options = { openLinksInNewWindow: false, excludeTrailingPunctuationFromURLs: true, ghMention: true, simplifiedAutoLink: true, simpleLineBreaks: true, emoji: true };

  const xhr = new XMLHttpRequest();
  xhr.open("get", COR.pathContent + url, true);
  xhr.onload = () => {
    let txt = xhr.responseText;
    txt = txt.replace(/\<!--@@@/, " ).replace /\@@@-- >/, ");
    divMainContent.innerHTML = new showdown.Converter(options).makeHtml(txt);
    window.scrollTo(0, 0);
  };
  xhr.send(null);

  let title = url.split("/").pop()
    .split("-")
    .filter(x => x.length > 0)
    //.map((x) => (x.charAt(0).toUpperCase() + x.slice(1)))
    .join(" ");
  document.title = `${COR.menuTitle}: ` + title;

}