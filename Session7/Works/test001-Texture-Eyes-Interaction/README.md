test001-Texture-Eyes-Interaction
========

This project is to practise setting eyes' array to let them look in the same direction.

#### Description ####
There are 5 eyes on random positons of screen, they look at mouse in the same direction continuously.

#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
```

* The code creates a scene, a camera, a light, geometries with image, define window size, initial values of mouseX and mouseY. It then creates container as element `div`,  a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body container.

```javascript
var camera, scene, renderer;
var image;
var mouseX = 0, mouseY = 0;
var container, stats;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );


	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 0, 150 );
  scene.add( camera );

	scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );
  var geometry = new THREE.SphereGeometry( 30, 32, 16 );

  var material = new THREE.MeshPhongMaterial( {
    color: 0xffffff,
    specular: 0x050505,
    shininess: 50,
    map: THREE.ImageUtils.loadTexture('images/eye.png'),
  });
}
```

* Define the faces of eyes' texture.

```javascript
var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
for ( i = 0; i < faceVertexUvs.length; i ++ ) {
  var uvs = faceVertexUvs[ i ];
  var face = geometry.faces[ i ];
  for ( var j = 0; j < 3; j ++ ) {
    uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
    uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
  }
}
```

* Set array of eyes and positons to let all meshs have independent random positon and scale. The `eyesNum` determine the number of array. `randSize` is used to keep `x, y, z` of  mesh scale changing in same value.

```javascript
var eyesNum = 5;
var eyes = [];
var xPos = [];
var yPos = [];

for (var i = 0; i < eyesNum; i++) {
	  mesh = new THREE.Mesh( geometry, material );

		xPos[i] = Math.random() * 100 - 50;
		yPos[i] = Math.random() * 100 - 50;

		mesh.position.x = xPos[i];
		mesh.position.y = yPos[i];
		var randSize = Math.random() * 0.8;
		mesh.scale.x = randSize;
		mesh.scale.y = randSize;
		mesh.scale.z = randSize;
	scene.add( mesh );
	eyes.push( mesh );
}
```

* Define eyes array to be rotated by mouse and the `mousemove` event. `windowHalf` is used to limit the range of eye rotation angle that the back of the eyes does not rotate to the front.

```javascript
function render() {
	console.log(window.innerHeight)
	for (var i = 0; i < eyesNum; i++){
	eyes[i].rotation.x = mouseY/window.innerHeight*2;
	eyes[i].rotation.y = mouseX/window.innerWidth*2;
}
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
```

#### Links ####
[DAT505-Code Github](https://github.com/LavaSheny/DAT505-Code.git)
