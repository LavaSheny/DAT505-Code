## Test001-geometry ##
This project is to practise creating a composition that consists of multiple geometric objects. Each objects have different materials, positons and rotations.

#### Description ####
There is a wireframe `IcosahedronGeometry` and some `BoxGeometries` which rotate in different speeds in the scene. Two spheres stay in the center of screen.

#### Usage ####
```html
<script src="build/three.js"></script>
```

* The code creates a scene, a camera, geometries ( 9 objects in all ), and it adds the meshs to the scene. It then creates a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body element. Finally, it animates the meshs within the scene for the camera.

```javascript
var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;
var geometry6, material6, mesh6;
var geometry7, material7, mesh7;
var geometry8, material8, mesh8;
var geometry9, material9, mesh9;

function init(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 300, 10000 );

  renderer = new THREE.WebGLRenderer({antialias:true});

  renderer.setClearColor("#000000");

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );
}
```

* Create `BoxGeometry` and material. Then define mesh and positon.

```javascript
  geometry1 = new THREE.BoxGeometry(1000, 10, 10);
  material1 = new THREE.MeshBasicMaterial( { color: "#F5F5F5" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;
  mesh1.position.y = -100;
  scene.add( mesh1 );
```

* The ring form which is seated in the center of screen consist two `SphereGeometries`. Two `SphereGeometries` have different sizes and positons. The small sphere is in front of the large one and the large one is farther from screen ( position.z = -1100 ). Thus spheres seem like a ring form.

```javascript
  geometry7 = new THREE.BoxGeometry(1000, 10,10);
  material7 = new THREE.MeshBasicMaterial( { color: "#F5F5F5" } );
  mesh7 = new THREE.Mesh( geometry6, material6 );
  mesh7.position.z = -1000;
  mesh7.position.y = -100;
  scene.add( mesh7 );

  geometry8 = new THREE.SphereGeometry(35,35,35);
  material8 = new THREE.MeshNormalMaterial( { color: "#000000" } );
  mesh8 = new THREE.Mesh( geometry8, material8 );
  mesh8.position.z = -1100;
  mesh8.position.y = -110;
   scene.add( mesh8 );
```

* Create IcosahedronGeometry and wireframe material. Then define mesh and positon.

```javascript
  geometry9 = new THREE.IcosahedronGeometry( 200,1 );
  material9 = new THREE.MeshBasicMaterial( {wireframe : true} );
  mesh9 = new THREE.Mesh( geometry9, material9 );
  mesh9 = new THREE.EdgesHelper( mesh9,0xFF0000 );
  mesh9.position.z = -900;
  mesh9.position.y = -50;
  scene.add( mesh9 );
```

* Set the speed of rotation and different speeds rotate the mesh continuously. The meshs ( except spheres ) rotate rhythmic because their rotation speeds increase progressively.

```javascript
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0;
  mesh1.rotation.z += 0.01;

  mesh2.rotation.x += 0;
  mesh2.rotation.z += 0.02;

  mesh4.rotation.x += 0;
  mesh4.rotation.z += 0.03;

  mesh5.rotation.x += 0;
  mesh5.rotation.z += 0.04;

  mesh6.rotation.x += 0;
  mesh6.rotation.z += 0.05;

  mesh7.rotation.x += 0;
  mesh7.rotation.z += 0.06;

  mesh9.rotation.y += 0.01;
  mesh9.rotation.z += 0;
  renderer.setClearColor("#000000");

  renderer.render(scene, camera);
};
```
#### Links ####
[DAT505-Code Github](https://github.com/LavaSheny/DAT505-Code.git)
