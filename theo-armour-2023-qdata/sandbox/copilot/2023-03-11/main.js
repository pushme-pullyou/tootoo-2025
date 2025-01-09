var json;
const file1 = "omha-nb-zneth.xml";

function getFileFromGitHubPrivateRepoAndDisplay ( repo, file, token ) {
	var xhr = new XMLHttpRequest();
	xhr.open( 'GET', 'https://api.github.com/repos/' + repo + '/contents/' + file );
	xhr.setRequestHeader( 'Authorization', 'token ' + token );
	xhr.onload = function () {
		var response = JSON.parse( xhr.responseText );
		var content = atob( response.content );
		divContent.innerHTML = content;
	};
	xhr.send();
}

function getSampleGbXMLFile () {
	var xhr = new XMLHttpRequest();
	xhr.open( 'GET', 'https://raw.githubusercontent.com/ladybug-tools/spider/master/gbxml-sample-files/omha-nb-zneth.xml' );
	//xhr.open( 'GET', 'https://raw.githubusercontent.com/ladybug-tools/spider/master/gbxml-sample-files/bristol-clifton-downs-fixed.xml' );
	xhr.onload = function () {
		// var string = xhr.responseText;
		// var text = unencodeUTF16( string )
		var text = xhr.responseText;
		var parser = new DOMParser();
		var xml = parser.parseFromString( text, 'text/xml' );
		json = xmlToJson( xml );
		divContent.innerHTML = JSON.stringify( json, null, 2 );
	};
	xhr.send();
}


function unencodeUTF16 ( string ) {
	var output = '';
	for ( var i = 0; i < string.length; i++ ) {
		var code = string.charCodeAt( i );
		if ( code < 0xD800 || code > 0xDFFF ) {
			output += string.charAt( i );
		} else {
			var low = string.charCodeAt( ++i );
			code = ( ( code - 0xD800 ) * 0x400 ) + ( low - 0xDC00 ) + 0x10000;
			output += String.fromCharCode( code );
		}
	}
	return output;
}

// not working
function openGbXMLFileAndTranslateToJSON ( file = file1 ) {
	var reader = new FileReader();
	reader.onload = function () {
		var text = reader.result;
		var parser = new DOMParser();
		var xml = parser.parseFromString( text, 'text/xml' );
		//document.body.innerText = xml;
		var json = xmlToJson( xml );
		document.body.innerHTML = JSON.stringify( json, null, 2 );

	};
	reader.readAsText( file );
}


function getThreeJsMeshFromGbXMLFile ( file ) {
	var reader = new FileReader();
	reader.onload = function () {
		var text = reader.result;
		var parser = new DOMParser();
		var xml = parser.parseFromString( text, 'text/xml' );
		var json = xmlToJson( xml );
		var geometry = jsonToThree( json );
		var material = new THREE.MeshNormalMaterial();
		var mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );
	};
	reader.readAsText( file );
}

const url1 = "https://raw.githubusercontent.com/ladybug-tools/spider/master/gbxml-sample-files/omha-nb-zneth.xml";

function getThreeJsMeshFromGbXMLURL ( url = url1 ) {
	var xhr = new XMLHttpRequest();
	xhr.open( 'GET', url );
	xhr.onload = function () {
		var text = xhr.responseText;
		var parser = new DOMParser();
		var xml = parser.parseFromString( text, 'text/xml' );
		json = xmlToJson( xml );
		var geometry = jsonToThree( json );
		var material = new THREE.MeshNormalMaterial();
		var mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );
	};
	xhr.send();
}


function xmlToJson ( xml ) {
	var obj = {};
	if ( xml.nodeType == 1 ) {
		if ( xml.attributes.length > 0 ) {
			obj[ '@attributes' ] = {};
			for ( var j = 0; j < xml.attributes.length; j++ ) {
				var attribute = xml.attributes.item( j );
				obj[ '@attributes' ][ attribute.nodeName ] = attribute.nodeValue;
			}
		}
	} else if ( xml.nodeType == 3 ) {
		obj = xml.nodeValue;
	}
	if ( xml.hasChildNodes() ) {
		for ( var i = 0; i < xml.childNodes.length; i++ ) {
			var item = xml.childNodes.item( i );
			var nodeName = item.nodeName;
			if ( typeof ( obj[ nodeName ] ) == 'undefined' ) {
				obj[ nodeName ] = xmlToJson( item );
			} else {
				if ( typeof ( obj[ nodeName ].push ) == 'undefined' ) {
					var old = obj[ nodeName ];
					obj[ nodeName ] = [];
					obj[ nodeName ].push( old );
				}
				obj[ nodeName ].push( xmlToJson( item ) );
			}
		}
	}
	return obj;
}




function jsonToThree ( json ) {
	console.log( "json", json );
	obj = new THREE.Object3D();
	material = new THREE.MeshNormalMaterial();

	var geometry = new THREE.Geometry();
	//var vertices = json[ 'gbXML' ][ 'Campus' ][ 'Building' ][ 'Space' ][ 'PlanarGeometry' ];

	surfaces = json.gbXML.Campus.Surface;
	console.log( "surfaces", surfaces );
	surfaces.forEach( function ( surface ) {

		var geometry = new THREE.Geometry();

		surface.PlanarGeometry.PolyLoop.CartesianPoint.forEach( function ( point ) {

			console.log( "point", point );
			vec = new THREE.Vector3().fromArray( [ + point.Coordinate[ 0 ][ "#text" ], + point.Coordinate[ 1 ][ "#text" ], + point.Coordinate[ 2 ][ "#text" ] ] );
			console.log( "vec", vec );
			geometry.vertices.push( vec );

		} );

		// geometry.computeFaceNormals();
		// geometry.computeVertexNormals();
		var mesh = new THREE.Mesh( geometry, material );

		obj.add( mesh );
	} );
	console.log( "obj", obj );

	// var faces = json[ 'gbXML' ][ 'Campus' ][ 'Building' ][ 'Space' ][ 'PlanarGeometry' ][ 'PolyLoop' ][ 'Opening' ][ 'PlanarGeometry' ][ 'PolyLoop' ][ 'CartesianPoint' ];
	// faces.forEach( function ( face ) {
	// 	geometry.faces.push( new THREE.Face3( face[ '@attributes' ][ 'x' ], face[ '@attributes' ][ 'y' ], face[ '@attributes' ][ 'z' ] ) );
	// } );

	// return geometry;
	scene.add( obj );

}



init();
//animate();

function init () {

	//aTitle.innerHTML = document.title = location.href.split( "/" ).pop();

	// aTitle.innerHTML = document.title ? document.title : location.href.split( '/' ).pop().slice( 0, - 5 ).replace( /-/g, ' ' );
	// release.innerHTML = document.head.querySelector( "[ name=date ]" ).content;

	const fov = 40;
	const aspect = window.innerWidth / window.innerHeight;
	const near = 1;
	const far = 1000;
	camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.set( -100, -100, 100 );
	camera.up.set( 0, 0, 1 );

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xcce0ff );
	//scene.fog = new THREE.Fog( 0xcce0ff, 550, 800 );
	scene.add( camera );

	renderer = new THREE.WebGLRenderer( { antialias: true, alpha: false } );
	//renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	controls = new THREE.OrbitControls( camera, renderer.domElement );
	//controls.autoRotate = true;
	controls.autoRotateSpeed = 2;
	controls.enableDamping = true;
	controls.enablePan = true;
	controls.dampingFactor = 0.08;
	controls.minDistance = 1;
	controls.maxDistance = 500;

	window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener( 'orientationchange', onWindowResize, false );
	window.addEventListener( 'keyup', function () { controls.autoRotate = false; }, false );
	renderer.domElement.addEventListener( 'click', function () { controls.autoRotate = false; }, false );

	axesHelper = new THREE.AxesHelper( 50 );
	scene.add( axesHelper );

	geometry = new THREE.BoxGeometry( 50, 50, 50 );
	material = new THREE.MeshNormalMaterial();
	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

}


function onWindowResize () {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	//console.log( 'onWindowResize  window.innerWidth', window.innerWidth );

}


// function animate () {

// 	requestAnimationFrame( animate );
// 	renderer.render( scene, camera );
// 	controls.update();
// }

renderer.setAnimationLoop( _ => {
	renderer.render( scene, camera );
	controls.update();
} );


