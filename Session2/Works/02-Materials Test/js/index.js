// -----------------------------------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene --------------------------
var scene = new THREE.Scene();
var gui, stats, controls;

// Create a basic perspective camera --------------
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 300, 10000 );

// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

//Initial dat.GUI
function initGui() {
gui = {
};
var datGui = new dat.GUI();
//Add property setting to GUI, gui.add(Object, Attributes, Minimum, Maximum)
}

//Initial performance plug-in
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




// ------------------------------------------------

// -----------------------------------------------------------------------------

// ------------------------------------------------
// Main Content
// ------------------------------------------------

// Create a Cube Mesh with basic material ---------
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

//Auxiliary tools
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

var mesh2 = new THREE.Mesh( geometry1, material2 );
mesh2.position.z = -1000;
mesh2.position.x = -100;
mesh2.position.y = 200;

var mesh3 = new THREE.Mesh( geometry1, material3 );
mesh3.position.z = -1000;
mesh3.position.x = -200;
mesh3.position.y = 100;

var mesh4 = new THREE.Mesh( geometry1, material4 );
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = 200;

var mesh5 = new THREE.Mesh( geometry4, material5 );
mesh5.position.z = -1000;
mesh5.position.x = 200;
mesh5.position.y = 100;

var mesh6 = new THREE.Mesh( geometry3, material6 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -100;

var mesh7 = new THREE.Mesh( geometry1, material7 );
mesh7.position.z = -1000;
mesh7.position.x = -100;
mesh7.position.y = 0;

var mesh8 = new THREE.Mesh( geometry1, material8 );
mesh8.position.z = -1000;
mesh8.position.x = -200;
mesh8.position.y = -100;

var mesh9 = new THREE.Mesh( geometry1, material9 );
mesh9.position.z = -1000;
mesh9.position.x = 100;
mesh9.position.y = 0;

var mesh10 = new THREE.Mesh( geometry4, material10 );
mesh10.position.z = -1000;
mesh10.position.x = 200;
mesh10.position.y = -100;

var mesh11 = new THREE.Mesh( geometry1, material11 );
mesh11.position.z = -1000;
mesh11.position.x = -100;
mesh11.position.y = -200;

var mesh12 = new THREE.Mesh( geometry1, material12 );
mesh12.position.z = -1000;
mesh12.position.x = 100;
mesh12.position.y = -200;

var mesh13 = new THREE.Mesh( geometry2, material13 );
mesh13.position.z = -1500;
mesh13.position.x = 0;
mesh13.position.y = 0;

// Add mesh to scene
scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );
scene.add( mesh12 );
scene.add( mesh13 );

var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1; //Continuously rotate the mesh
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot; //Continuously rotate the mesh
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot+2; //Continuously rotate the mesh
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot; //Continuously rotate the mesh
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot+2; //Continuously rotate the mesh
  mesh5.rotation.y = rot+2;

  mesh6.rotation.x = rot+1; //Continuously rotate the mesh
  mesh6.rotation.y = rot+1;

  mesh7.rotation.x = rot; //Continuously rotate the mesh
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot+2; //Continuously rotate the mesh
  mesh8.rotation.y = rot+2;

  mesh9.rotation.x = rot; //Continuously rotate the mesh
  mesh9.rotation.y = rot;

  mesh10.rotation.x = rot+2; //Continuously rotate the mesh
  mesh10.rotation.y = rot+2;

  mesh11.rotation.x = rot; //Continuously rotate the mesh
  mesh11.rotation.y = rot;

  mesh12.rotation.x = rot; //Continuously rotate the mesh
  mesh12.rotation.y = rot;

  function animate() {
      render();

      //Update performance plug-in
      stats.update();

      controls.update();

      renderer.render(scene, camera);

      requestAnimationFrame(animate);
  }

  function draw() {
      //Judge compatibility
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
  // Render the scene
  renderer.render(scene, camera);
};

render(); //Run the function render
