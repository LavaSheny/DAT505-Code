//Global variables
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
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.BoxGeometry(1000, 10, 10);
  material1 = new THREE.MeshBasicMaterial( { color: "#F5F5F5" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;
  mesh1.position.y = -100;

  // Add mesh to scene
  scene.add( mesh1 );

// Create a Cube Mesh with basic material ---------
  geometry2 = new THREE.BoxGeometry(1000, 10, 10);
  material2 = new THREE.MeshBasicMaterial( { color: "#F5F5F5" } );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.z = -1000;
  mesh2.position.y = -100;

// Add mesh to scene
  scene.add( mesh2 );

// Create a Cube Mesh with basic material ---------
  geometry3 = new THREE.SphereGeometry(50, 50, 50);
  material3 = new THREE.MeshBasicMaterial( { color: "#F5F5F5" } );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1200;
  mesh3.position.y = -120;

// Add mesh to scene
  scene.add( mesh3 );

// Create a Cube Mesh with basic material ---------
  geometry4 = new THREE.BoxGeometry(1000, 10, 10);
  material4 = new THREE.MeshBasicMaterial( { color: "#F5F5F5" } );
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4.position.z = -1000;
  mesh4.position.y = -100;

// Add mesh to scene
  scene.add( mesh4 );

// Create a Cube Mesh with basic material ---------
  geometry5 = new THREE.BoxGeometry(1000, 10,10);
  material5 = new THREE.MeshBasicMaterial( { color: "#F5F5F5" } );
  mesh5 = new THREE.Mesh( geometry5, material5 );
  mesh5.position.z = -1000;
  mesh5.position.y = -100;

// Add mesh to scene
  scene.add( mesh5 );

// Create a Cube Mesh with basic material ---------
  geometry6 = new THREE.BoxGeometry(1000, 10,10);
  material6 = new THREE.MeshBasicMaterial( { color: "#F5F5F5" } );
  mesh6 = new THREE.Mesh( geometry6, material6 );
  mesh6.position.z = -1000;
  mesh6.position.y = -100;

// Add mesh to scene
  scene.add( mesh6 );

// Create a Cube Mesh with basic material ---------
  geometry7 = new THREE.BoxGeometry(1000, 10,10);
  material7 = new THREE.MeshBasicMaterial( { color: "#F5F5F5" } );
  mesh7 = new THREE.Mesh( geometry6, material6 );
  mesh7.position.z = -1000;
  mesh7.position.y = -100;

// Add mesh to scene
  scene.add( mesh7 );

// Create a Cube Mesh with basic material ---------
  geometry8 = new THREE.SphereGeometry(35,35,35);
  material8 = new THREE.MeshNormalMaterial( { color: "#000000" } );
  mesh8 = new THREE.Mesh( geometry8, material8 );
  mesh8.position.z = -1100;
  mesh8.position.y = -110;

// Add mesh to scene
//{color}
   scene.add( mesh8 );

// Create a Cube Mesh with basic material ---------
  geometry9 = new THREE.IcosahedronGeometry( 200,1 );
  material9 = new THREE.MeshBasicMaterial( {wireframe : true} );
  mesh9 = new THREE.Mesh( geometry9, material9 );
  mesh9 = new THREE.EdgesHelper( mesh9,0xFF0000 );
  mesh9.position.z = -900;
  mesh9.position.y = -50;

// Add mesh to scene
  scene.add( mesh9 );

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0; //Continuously rotate the mesh
  mesh1.rotation.z += 0.01;

  mesh2.rotation.x += 0; //Continuously rotate the mesh
  mesh2.rotation.z += 0.02;

  mesh4.rotation.x += 0; //Continuously rotate the mesh
  mesh4.rotation.z += 0.03;

  mesh5.rotation.x += 0; //Continuously rotate the mesh
  mesh5.rotation.z += 0.04;

  mesh6.rotation.x += 0; //Continuously rotate the mesh
  mesh6.rotation.z += 0.05;

  mesh7.rotation.x += 0; //Continuously rotate the mesh
  mesh7.rotation.z += 0.06;

  mesh9.rotation.y += 0.01; //Continuously rotate the mesh
  mesh9.rotation.z += 0;

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
