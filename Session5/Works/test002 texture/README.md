test002 texture
========

This project is to practise setting cubes' array and let cubes' scales increasing continually in range.

#### Description ####
Array of cubes are arranged in x and y axes. They rotate and expand continually.

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
    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}
}
```

* Create a two dimensional grid of objects, and position them accordingly. Value starts from -10 and sequentially add one every 5 pixels. Create random round figures from `0` to `4` for textures to load random images, and define texture1 or texture2 for boxGeometry whose coordinate is (-5,-5) or (5,5). Texture3 is add to remaining boxGeometries. `Math.random() * 2 * Math.PI` means that mesh rotates 360 degrees. Set scale and rot array to store random values.

```javascript
var rotX = [];
var rotY = [];
var scaleX = [];
var scaleY = [];
var scaleZ = [];
for (var x = -10; x <= 10; x += 5) {
  for (var y = -10; y <= 10; y += 5) {

    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    var texture1 = new THREE.TextureLoader().load( "textures/texture" + Math.floor(Math.random()*4) +".jpg");
    var texture2 = new THREE.TextureLoader().load( "textures/texture" + Math.floor(Math.random()*4) +".jpg");
    var texture3 = new THREE.TextureLoader().load( "textures/texture" + Math.floor(Math.random()*4) +".jpg");

    var boxMaterial = new THREE.MeshLambertMaterial({map: texture1});

    if (x==-5 && y==-5){
      boxMaterial = new THREE.MeshLambertMaterial({map: texture1});
    } else if (x==5 && y ==5){
      boxMaterial = new THREE.MeshLambertMaterial({map: texture2});
    } else {
      boxMaterial = new THREE.MeshLambertMaterial({map: texture3});
    }

    var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
    mesh.position.x = x;
    mesh.position.z = y;
    mesh.rotation.x = Math.random() * 2 * Math.PI;;
    mesh.rotation.y = Math.random() * 2 * Math.PI;;
    mesh.rotation.z = Math.random() * 2 * Math.PI;;
    var rotValX = (Math.random() * 0.05) - 0.025;
    var rotValY = (Math.random() * 0.05) - 0.025;
    var scValX = Math.random() - 0.05;
    var scValY = Math.random() - 0.05;
    var scValZ = Math.random() - 0.05;
    rotX.push(rotValX);
    rotY.push(rotValY);
    scaleX.push(scValX);
    scaleY.push(scValY);
    scaleZ.push(scValZ);
    scaleCube.push(scValX);
    scene.add(mesh);
    cubes.push(mesh);
  }
}
```

* Plug random values into formula that each cube has different rotation speeds and scales which are increasing continually. Set `scaleCube[i]` to limit the growth of scales.

```javascript
var cubes = [];
var scaleCube = [];
function drawFrame(){
  requestAnimationFrame(drawFrame);
  scaleCube += 0.01;

  cubes.forEach(function(c, i) {
    c.rotation.x += rotX[i];
    c.rotation.y += rotY[i];
    c.scale.x += rotY[i];
    scaleCube[i] += scaleX[i];
    if ( scaleCube[i] >  scaleX[i] ) scaleCube[i] =  -scaleX[i];

  });
  renderer.render(scene, camera);
}
```

#### Links ####
[DAT505-Code Github](https://github.com/LavaSheny/DAT505-Code.git)
