initGFO();

function initGFO() {

  location.hash = COR.pathContent + COR.defaultFile;

  window.addEventListener("hashchange", onHashChange, false);

  onHashChange();

}

function onHashChange() {

  divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="readme.html" onload=update() height=100% width=100% ><iframe>`;

}

function update() {

  ifr.contentWindow.location.hash = COR.pathContent + location.hash.slice(1);

}

