M02-Materials Test
========

This project is to practise defining different Materials and adding different textures to different geometries.

#### Description ####
There are 12 objects rotating on the screen and a background object `helper` with VideoTexture. Video control gui is located in the lower left corner.

#### Usage ####

* Specify video path in the index.html.

```html
</head>
<body onload="draw();">
<video id="video" autoplay controls >

<source src="textures/sintel.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>
<script src="build/three.min.js"></script>
<script src="/js/OrbitControls.js"></script>
<script src="/js/Detector.js"></script>！
<script src="js/index.js"></script>
</body>
```
* The code creates a scene, a camera, gui, states, controls and configures lights. It then creates a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body element.

```javascript
var scene = new THREE.Scene();
var gui, stats, controls;
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 300, 10000 );
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#000000");
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);
var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

function initGui() {
gui = {
};
var datGui = new dat.GUI();
}
function initStats() {
        stats = new Stats();
        document.body.appendChild(stats.dom);
    }

function initControls() {
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableZoom = true;
        controls.autoRotate = false;
        controls.autoRotateSpeed = 0.5;
        controls.minDistance = 1;
        controls.maxDistance = 2000;
        controls.enablePan = true;
    }
```

* Create geometries (13 objects in all) and material with textures. Then define mesh positon. One of the objects `helper` which is used as background had been add VideoTexture.

```javascript
var geometry1 = new THREE.BoxGeometry(100, 100, 100);
var geometry2 = new THREE.PlaneGeometry(1920,1080);
var geometry3 = new THREE.SphereGeometry(100, 100, 100);
var geometry4 = new THREE.OctahedronGeometry(100, 0);

// MATERIAL 1:
var texture1 = new THREE.TextureLoader().load('textures/crate.gif');
var material3 = new THREE.MeshBasicMaterial( { map: texture1 } );

var texture1 = new THREE.TextureLoader().load('textures/crate.gif');
var material8 = new THREE.MeshBasicMaterial( { map: texture1 } );

var texture4 = new THREE.TextureLoader().load('textures/land_ocean_ice_cloud_2048.jpg');
var material1 = new THREE.MeshBasicMaterial( { map: texture4 } );

var texture5 = new THREE.TextureLoader().load('textures/earth_specular_2048.jpg');
var material6 = new THREE.MeshBasicMaterial( { map: texture5 } );

var texture6 = new THREE.TextureLoader().load('textures/lavatile.jpg');
var material5 = new THREE.MeshBasicMaterial( { map: texture6 } );

var texture6 = new THREE.TextureLoader().load('textures/lavatile.jpg');
var material10 = new THREE.MeshBasicMaterial( { map: texture6 } );

//MATERIAL 2:
var material2 = new THREE.MeshNormalMaterial();
var material7 = new THREE.MeshNormalMaterial();
var material11 = new THREE.MeshNormalMaterial();
var material4 = new THREE.MeshNormalMaterial();
var material9 = new THREE.MeshNormalMaterial();
var material12 = new THREE.MeshNormalMaterial();

var helper = new THREE.AxesHelper(50);
scene.add(helper);
var video = document.querySelector("#video");
var texture3 = new THREE.VideoTexture(video);
    texture3.wrapS = texture3.wrapT = THREE.ClampToEdgeWrapping;
    texture3.minFilter = THREE.LinearFilter;
var material13 = new THREE.MeshBasicMaterial( { map: texture3 } );

var mesh1 = new THREE.Mesh( geometry3, material1 );
mesh1.position.z = -1000;
mesh1.position.y = 100;
...
scene.add( mesh1 );
...
scene.add( mesh13 );
```

* Define rotation speed. `rot+1` or `rot+2` is used to set orientation of an object when it begins to rotate. Code inits and updates the function plug-in unit to run VideoTexture.

```javascript
var rot = 0;
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1;
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot;
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot+2;
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot;
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot+2;
  mesh5.rotation.y = rot+2;

  mesh6.rotation.x = rot+1;
  mesh6.rotation.y = rot+1;

  mesh7.rotation.x = rot;
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot+2;
  mesh8.rotation.y = rot+2;

  mesh9.rotation.x = rot;
  mesh9.rotation.y = rot;

  mesh10.rotation.x = rot+2;
  mesh10.rotation.y = rot+2;

  mesh11.rotation.x = rot;
  mesh11.rotation.y = rot;

  mesh12.rotation.x = rot;
  mesh12.rotation.y = rot;

  function animate() {
      render();
      stats.update();
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
  }

  function draw() {
      if (!Detector.webgl) Detector.addGetWebGLMessage();
      initGui();
      initRender();
      initScene();
      initCamera();
      initLight();
      initModel();
      initControls();
      initStats();
      animate();
      window.onresize = onWindowResize;
  }
  renderer.render(scene, camera);
};

render();
```
#### Links ####
[DAT505-Code Github](https://github.com/LavaSheny/DAT505-Code.git)
