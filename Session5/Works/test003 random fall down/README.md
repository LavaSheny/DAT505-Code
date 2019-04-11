test003 random fall down
========

This project is to practise setting cubes' array and give each cube independent textures, rotation speeds and scales. And set cubes move to the bottom and reset them back to the top to creat circulation.

#### Description ####
Array of cubes with different texture rotate slowly and fall to the bottom. The code resets them back to the top continually.

#### Usage ####
```html
<script src="build/three.min.js"></script>
```

* The code creates a scene, a camera, geometries, materials and mesh. It then creates a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body element. Set speed array and put randomValue in it to give cubes independent rotation speeds. `randomSelection = Math.round(Math.random()*4)+1;` is used to select round figures from 1( 0 + 1 = 1) to 4 and load textures for cubes. Create a camera and move the camera 'out' by 30 to avoid the cube generatc points appera in the field of vision.

```javascript
var camera, scene, renderer, geometry, material, mesh;
var texture;
var cubesNum = 10;

var cubes = [];
var speed = [];

function init() {
	scene = new THREE.Scene();
	geometry = new THREE.BoxGeometry( 10, 10, 10 );

	for (var i=0; i<cubesNum; i++){
		var randomValue = Math.random() * 0.5;
		speed.push(randomValue);

	var randomSelection = Math.round(Math.random()*4)+1;

	texture = new THREE.TextureLoader().load( "textures/texture"+randomSelection+".jpg" );
	material = new THREE.MeshBasicMaterial( { map: texture} );
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.y = -50;
	scene.add( mesh );
	cubes.push( mesh );
}

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 2, 1000 );
	camera.position.z = 30;
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
}
```

* Plug random values into formula that each cube has different rotation speeds and move the mesh towards the bottom of the screen. If the mesh passes the bottom of the screen, code makes it appear on the top. Also x position is randomized.

```javascript
function animate() {
	requestAnimationFrame( animate );

	for(var i=0; i<cubesNum; i++){
			cubes[i].rotation.x += speed[i] / 100;
			cubes[i].rotation.y += speed[i] / 80;
			cubes[i].position.y -= speed[i];

			if (cubes[i].position.y <- 30){
				cubes[i].position.y = 35;
				cubes[i].position.x = (Math.random()*-20) +10;
				cubes[i].scale.x = Math.random();
				cubes[i].scale.y = Math.random();
				cubes[i].scale.z = Math.random();
	}
}
	renderer.render( scene, camera );
}

init();
animate();
```

#### Links ####
[DAT505-Code Github](https://github.com/LavaSheny/DAT505-Code.git)
