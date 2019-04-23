Test001-Texture-Eyes-Interaction2X
========

This project is to practise calculating how to extract values and compare them with the objects' rotation of example.

#### Description ####
There are 5 eyes on the screen, one is a target in the center of screen that other eyes look at it continuously. Two example eyes are lacated on the top left and bottom left of the screen. In order to make other eyes look at moving mouse, I should calculate the range of mouseX and mouseY of the remaining two eyes.

#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
<script src="build/OBJLoader.js"></script>
<script src="build/MTLLoader.js"></script>
```

* The code creates a scene, a camera, a light, image of geometries, define window size, initial values of mouseX and mouseY. It then creates container as element `div`,  a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body container.

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

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xffffff );

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set( 0, 0, 400 );
  scene.add( camera ); // since light is child of camera

	scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );
}
```

*  Create sphere to drive cubes to rotate and create eyegeometries which have texture to create eye array.

```javascript
sphere = new THREE.Mesh( new THREE.SphereBufferGeometry( 10, 20, 20 ), new THREE.MeshNormalMaterial() );
scene.add( sphere );
var eyegeometry = new THREE.SphereGeometry( 30, 32, 16 );
var eyematerial = new THREE.MeshPhongMaterial( {
	color: 0xffffff,
	specular: 0x050505,
	shininess: 50,
	map: THREE.ImageUtils.loadTexture('images/eye.png'),
});
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
for (var i = 0; i < 70; i++) {
	var mesh = new THREE.Mesh( eyegeometry, eyematerial );
				var sizeRand = Math.random() * 0.5;
				mesh.scale.set(sizeRand,sizeRand,sizeRand);
				mesh.position.set(Math.random()*200-100, Math.random()*200-100, Math.random()*200-100);
				scene.add( mesh );
}
```

* Let sphere move automatically over time.

```javascript
	var time = Date.now() * 0.0005;
				sphere.position.x = Math.sin( time * 0.5 ) * 100;
				sphere.position.y = Math.cos( time * 0.5 ) * 100;
				sphere.position.z = Math.cos( time * 0.3 ) * 100;
```

* Let each eye be the value of the scene array and let them look at the moving sphere independently.

```javascript
for ( var i = 1, l = scene.children.length; i < l; i ++ ) {
	scene.children[ i ].lookAt( sphere.position );
}
```


* Define screen size and implement mouse movement events.

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
```

#### Links ####
[DAT505-Code Github](https://github.com/LavaSheny/DAT505-Code.git)
