Test002-objLoader-Raycasting
========

This project is to practise adding `obj` and `mtl` to the scene. Define random color of `INTERSECTED.material.emissive`.

#### Description ####
Camera revolves around the array of objects and the color of objects will change random when the ray passes through objects from mouse and camera's position.

#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="build/OBJLoader.js"></script>
<script src="build/MTLLoader.js"></script>
```

* The code creates a scene, a camera, a light, raycaster and objects, define window size, and the properties of mouse. It also creates container as element `div`,  a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body container. Finally, it animates the objects within the scene for the camera.

```javascript
var container, stats;
var camera, scene, raycaster, renderer;

var mouse = new THREE.Vector2(), INTERSECTED;
var object;

init();
animate();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 10000 );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 1, 1, 1 ).normalize();
  scene.add( light );

  var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );
  raycaster = new THREE.Raycaster();
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );
}
```

* Load the model and material. Define the random sizes, numbers and rotations of objects by setting object array. Add meshs to the array so that we can access for raycasting.

```javascript
var objects = [];
for (var i=0; i<70; i++){
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("ring.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);

    objLoader.load("ring.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 0.5;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*200-100, Math.random()*200-100, Math.random()*200-100);
      mesh.rotation.y = -Math.PI/Math.random()*4;

      scene.add(mesh);
      objects.push(mesh);
    });
  });
}

```

* Set the moving trajectory of camera and make camera look at the center of scene continually.

```javascript
var radius = 100, theta = 0;
theta += 0.1;
camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
camera.lookAt( scene.position );
camera.updateMatrixWorld();
```

* Set raycaster to find intersections and defind that the color of material will change random when the ray passes through objects from mouse and camera's position.

```javascript
raycaster.setFromCamera( mouse, camera );
var intersects = raycaster.intersectObjects( objects, true );

if ( intersects.length > 0 ) {
  if ( INTERSECTED != intersects[ 0 ].object ) {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = intersects[ 0 ].object;
    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
    INTERSECTED.material.emissive.setHex( Math.random()*0xff0000 );
  }
} else {
  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  INTERSECTED = null;
}
```

#### Links ####
[DAT505-Code Github](https://github.com/LavaSheny/DAT505-Code.git)
