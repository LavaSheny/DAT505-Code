test001 independent rotation
========

This project is to practise setting cubes' array and let each cube rotates independently in different speeds.

#### Description ####
Array of cubes are arranged in x and y axes and rotate independently in different speeds.

#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```

* The code creates a scene, a camera and `OrbitControls`. It then creates a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body element.

```javascript
var renderer, scene, camera;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);
  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  document.body.appendChild(renderer.domElement);
  controls = new THREE.OrbitControls(camera, renderer.domElement);
}
```

* Create a two dimensional grid of objects, and position them accordingly. Value starts from -35 and sequentially add one every 5 pixels. Create random values for x and y, and store them for giving values to independent rotation.

```javascript
var randomRotationX = [];
var randomRotationY = [];
for (var x = -35; x < 40; x += 5) {
for (var y = -35; y < 40; y += 5) {

  var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
  var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
  var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  mesh.position.x = x;
  mesh.position.z = y;
  mesh.rotation.x = Math.random() * 2 * Math.PI;;
  console.log( "First" + Math.random() * 2 * Math.PI);
  console.log( "Second" + Math.random() * 2 * Math.PI);
var randomValueX = (Math.random() * 0.1)- 0.05;
var randomValueY = (Math.random() * 0.1)- 0.05;
  randomRotationX.push(randomValueX);
  randomRotationY.push(randomValueY);

  scene.add(mesh);
  cubes.push(mesh);
}
}
```

* Plug random values into formula that each cube has different rotation speeds.

```javascript
var cubes = [];
function drawFrame(){
  requestAnimationFrame(drawFrame);

  cubes.forEach(function(c,i){
    c.rotation.x += randomRotationX[i];
    c.rotation.y += randomRotationY[i];
  });
}
```

#### Links ####
[DAT505-Code Github](https://github.com/LavaSheny/DAT505-Code.git)
