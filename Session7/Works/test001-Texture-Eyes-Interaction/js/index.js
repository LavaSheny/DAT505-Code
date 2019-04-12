// MatCap-style image rendered on a sphere
// modify sphere UVs instead of using a ShaderMaterial

var camera, scene, renderer;
var image;
var mouseX = 0, mouseY = 0;
var container, stats;
var eyesNum = 5;
var eyes = [];
var xPos = [];
var yPos = [];
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 0, 150 );
  scene.add( camera ); // since light is child of camera

	scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );

	// Create a SphereGeometry with PhongMaterial
	var geometry = new THREE.SphereGeometry( 30, 32, 16 );

	var material = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		specular: 0x050505,
		shininess: 50,
		// Load a texture
		map: THREE.ImageUtils.loadTexture('images/eye.png'),
	});


  // modify UVs to accommodate MatCap texture
	var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
	for ( i = 0; i < faceVertexUvs.length; i ++ ) {
		var uvs = faceVertexUvs[ i ];
		var face = geometry.faces[ i ];
		for ( var j = 0; j < 3; j ++ ) {
			uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
			uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
		}
	}
 // set eye positions and scales
		for (var i = 0; i < eyesNum; i++) {
			mesh = new THREE.Mesh( geometry, material );

			xPos[i] = Math.random() * 100 - 50;
			yPos[i] = Math.random() * 100 - 50;

			//console.log(xPosMap[1]);

			mesh.position.x = xPos[i];
			mesh.position.y = yPos[i];
			var randSize = Math.random() * 0.8;
			mesh.scale.x = randSize;
			mesh.scale.y = randSize;
			mesh.scale.z = randSize;
	scene.add( mesh );
	eyes.push( mesh );
}

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	console.log(window.innerHeight)
	for (var i = 0; i < eyesNum; i++){
	eyes[i].rotation.x = mouseY/window.innerHeight*2;
	eyes[i].rotation.y = mouseX/window.innerWidth*2;
}
	// Render everything using the created renderer, scene, and camera
	renderer.render( scene, camera );
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}
