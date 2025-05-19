initGFO();

function initGFO() {


  window.addEventListener("hashchange", onHashChange, false);

}


function onHashChange() {

  console.log("location.hash.slice(1)", location.hash.slice(1));

  divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="readme.html" onload=update() height=100% width=100% ><iframe>`;

}

function update() {

  console.log( "", 33 );

  ifr.contentWindow.location.hash = COR.pathContent  + location.hash.slice(1);

}

