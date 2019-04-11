test001 control cube independent
========

This project is to practise setting cubes' array and control cube independently in the array.

#### Description ####
Array of cubes are arranged in x and y axes and code controls one of the cubes independently.

#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```

* The code creates a scene, a camera and `OrbitControls`. It then creates a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body element.

```javascript
var renderer, scene, camera;

function init() {
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
    console.log("Init end");
    console.log("DrawFrame Starts ******");
    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}
}
```

* Create a two dimensional grid of objects, and position them accordingly. Value starts from -10 and sequentially add one every 5 pixels. Create random values for x and y, and store them for giving values to independent rotation. Individually define cube color according to coordinate postion.`Math.random() * 2 * Math.PI` means that mesh rotates 360 degrees.

![cube color](https://github.com/LavaSheny/DAT505-Code/blob/master/Session5/Works/test001%20control%20cube%20independent/images/cube%20color.jpg)

```javascript
var randomRotationX = [];
var randomRotationY = [];
for (var x = -10; x <= 10; x += 5) {
for (var y = -10; y <= 10; y += 5) {

  var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
  if (x==-5 && y==-5){
    boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
  } else if (x==5 && y ==5){
    boxMaterial = new THREE.MeshLambertMaterial({color: 0xF8B195});
  } else {
    boxMaterial = new THREE.MeshLambertMaterial({color: 0x355C7D});
  }

  var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  mesh.position.x = x;
  mesh.position.z = y;
  mesh.rotation.x = Math.random() * 2 * Math.PI;;
  mesh.rotation.y = Math.random() * 2 * Math.PI;;
  mesh.rotation.z = Math.random() * 2 * Math.PI;;
var randomValueX = (Math.random() * 0.1)- 0.05;
  randomSpeedX.push(randomValueX);
  scene.add(mesh);
  cubes.push(mesh);
}
}
```

* Plug random values into formula that each cube has different random rotation speeds.
Code independently control part of the array `cubes[i]` by assigning values to it.

![cube(i)](https://github.com/LavaSheny/DAT505-Code/blob/master/Session5/Works/test001%20control%20cube%20independent/images/cube%5Bi%5D.jpg)

```javascript
var cubes = [];
function drawFrame(){
  requestAnimationFrame(drawFrame);

  for (var i = 0; i < 5; i ++){
    cubes[6].rotation.x += randomSpeedX[6];
    cubes[18].rotation.x += randomSpeedX[18];
  }
  renderer.render(scene, camera);
}
```

#### Links ####
[DAT505-Code Github](https://github.com/LavaSheny/DAT505-Code.git)
