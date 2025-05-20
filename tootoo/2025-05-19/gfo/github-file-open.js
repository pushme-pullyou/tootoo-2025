initGFO();

function initGFO() {

  //location.hash = COR.pathContent + COR.defaultFile;

  window.addEventListener("hashchange", onHashChange, false);

  onHashChange();

}

function onHashChange() {

  console.log( "location.hash", location.hash );

  if ( location.hash.includes( "https://api.github.com")) {

    console.log( "notesy",  );

    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="../edit/notesy.html" onload=update() height=100% width=100% ><iframe>`;
  
  } else {

    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="readme.html" onload=update() height=100% width=100% ><iframe>`;

  }

}

function update() {

  ifr.contentWindow.location.hash = parent.location.hash;

}

