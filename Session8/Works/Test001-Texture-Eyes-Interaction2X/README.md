Test001-Texture-Eyes-Interaction2X
========

This project is to practise calculating how to extract values and compare them with the objects' rotation of example.

#### Description ####
There are 5 eyes on the screen, one is a target in the center of screen that other eyes look at it continuously. Two example eyes are lacated on the top left and bottom left of the screen. In order to make other eyes look at moving mouse, I should calculate the range of mouseX and mouseY of the remaining two eyes.

#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
```

* The code creates a scene, a camera, a light, geometries with image, define window size, initial values of mouseX and mouseY. It then creates container as element `div`,  a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body container. Finally, it animates the meshs within the scene for the camera.

```javascript
var camera, scene, renderer, mesh;
var image;
var mouseX = 0, mouseY = 0;
var container;
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

* Modify UVs to accommodate MatCap texture.

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

* Set array of eyes, positons and map positons to let all meshs have independent positon and scale. The `eyesNum` determine the number of array.

```javascript
var eyesNum = 5;
var eyes = [];
var xPos = [];
var yPos = [];
var xPosMap = [];
var yPosMap = [];

for (var i = 0; i < eyesNum; i++) {
  mesh = new THREE.Mesh( geometry, material );

  xPos[i] = Math.random() * 100 - 50;
  yPos[i] = Math.random() * 100 - 50;

  xPos [0] = 0;
  yPos [0] = 0;

  xPos [1] = -50;
  yPos [1] = -50;

  xPos [2] = 50;
  yPos [2] = -50;

  xPos [3] = -50;
  yPos [3] = 50;

  xPos [4] = 50;
  yPos [4] = 50;

  xPosMap[i] = map_range(xPos[i], -50, 50, 0, window.innerWidth);
  yPosMap[i] = map_range(yPos[i], -50, 50, 0, window.innerHeight);

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

* Define the eyes rotation range which according to `map_range` to let eyes rotate and look at the moving mouse. For example, `x = 140` is the positon of the midpoint of the left eyes on the x-axis. It is a watershed to determine whether the eyes look left or right. `y = 810` is the positon of the midpoint of the downside eyes on the y-axis. It is a watershed to determine whether the eyes look up or down.

![eyes(1)](https://github.com/LavaSheny/DAT505-Code/blob/master/Session8/Works/Test001-Texture-Eyes-Interaction2X/images/Eye1.jpg)
![eyes(2)](https://github.com/LavaSheny/DAT505-Code/blob/master/Session8/Works/Test001-Texture-Eyes-Interaction2X/images/Eye2.jpg)
![eyes(3)](https://github.com/LavaSheny/DAT505-Code/blob/master/Session8/Works/Test001-Texture-Eyes-Interaction2X/images/Eye3.jpg)
![eyes(4)](https://github.com/LavaSheny/DAT505-Code/blob/master/Session8/Works/Test001-Texture-Eyes-Interaction2X/images/Eye4.jpg)

```javascript
function render() {
	for (var i = 0; i < eyesNum; i++) {

		eyes[0].rotation.y = map_range(mouseX, 0, window.innerWidth, -1.14, 1.14);
		eyes[0].rotation.x = map_range(mouseY, 0, window.innerHeight, -1.14, 1.14);

		if (mouseX<140) eyes[1].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
		else eyes[1].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
		if (mouseY<810) eyes[1].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
		else eyes[1].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);

		if (mouseX<140) eyes[3].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
		else eyes[3].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
		if (mouseY<35) eyes[3].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
		else eyes[3].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);

		if (mouseX<590) eyes[2].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.75);
		else eyes[2].rotation.y = map_range(mouseX, 590, window.innerWidth,  -0.75, 0.2);
		if (mouseY<810) eyes[2].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
		else eyes[2].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);

		if (mouseX<590) eyes[4].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.75);
		else eyes[4].rotation.y = map_range(mouseX, 590, window.innerWidth, -0.75, 0.2);
		if (mouseY<35) eyes[4].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
		else eyes[4].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);
  }
	renderer.render( scene, camera );
}
```

* Define the `mousemove` event and the formula of `map_range` to let the value of mouseX and mouseY can be put into the formula of `map_range`. `windowHalf` is used to limit the range of eye rotation angle that the back of the eyes does not rotate to the front.

```javascript
function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function map_range(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
```

#### Links ####
[DAT505-Code Github](https://github.com/LavaSheny/DAT505-Code.git)
