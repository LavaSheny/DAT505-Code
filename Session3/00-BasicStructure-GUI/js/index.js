//Global variables
var scene, camera, renderer;
var geometry, material, mesh;
var geometry1, material1, mesh1;
var color;

var rotationVariable = 0.;
var scaleVariable = 1;
//Rotation converter
var de2ra= function (degree){
  return degree*(Math.PI/180);
};



function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );


  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry(50, 50, 50);

 //255,255,255
  color= Math.random()*0xffffff;
  material = new THREE.MeshLambertMaterial({
    color:color,
    transparent: true
  });
//  material = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
//  material = new THREE.MeshNormalMaterial( );
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = -1000;
  // Add mesh to scene
  scene.add( mesh );

  mesh1 = new THREE.Mesh( geometry, material );
  mesh1.position.z = -1000;
  mesh1.position.x = 100;
  scene.add( mesh1 );


//Add controller values for GUI
//Set preset values for controllers
  var controller = new function(){
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;
    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = 0;
    this.rotationX= 0.;
    this.rotationY= 0.;
    this.rotationZ= 0.;

    this.boxColor= color;
    this.boxOpacity = 1;
  }

    lightingSystem();
//Create a new DAT.GUI
 var gui = new dat.GUI();
 //Define the folders' name
 var f1 = gui.addFolder('Scale');
 var f2 = gui.addFolder('Position');
 var f3 = gui.addFolder('Rotation');
 //Add the first controller (scaleX)
 f1.add(controller,'scaleX',0.5,5).onChange(function(){
   scaleVariable = (controller.scaleX);
 });
 f1.add(controller,'scaleY',0.5,5).onChange(function(){
   scaleVariable = (controller.scaleY);
 });
 f1.add(controller,'scaleZ',0.5,5).onChange(function(){
   scaleVariable = (controller.scaleZ);
 });

 f2.add(controller,'positionX',-100,100).onChange(function(){
   mesh.position.x = (controller.positionX);
 });
 f2.add(controller,'positionY',-100,100).onChange(function(){
   mesh.position.y = (controller.positionY);
 });
 f2.add(controller,'positionZ',-100,100).onChange(function(){
   mesh.position.z = (controller.positionZ);
 });

 f3.add(controller,'rotationX',-180,180).onChange(function(){
   //mesh.rotation.x = de2ra(controller.rotationX);
   rotationVariable = de2ra(controller.rotationX);
 });
 f3.add(controller,'rotationY',-180,180).onChange(function(){
  // mesh.rotation.y = de2ra(controller.rotationY);
   rotationVariable = de2ra(controller.rotationY);
 });
 f3.add(controller,'rotationZ',-180,180).onChange(function(){
   //mesh.rotation.z = de2ra(controller.rotationZ);
    rotationVariable = de2ra(controller.rotationZ);
 });

 gui.addColor( controller, 'boxColor', color ).onChange( function() {
  mesh.material.color.setHex( dec2hex(controller.boxColor) );
});
 gui.add( controller, 'boxOpacity', 0.1, 3 ).onChange( function() {
  material.opacity = (controller.boxOpacity);
});

var gui = new dat.GUI();
var f4 = gui.addFolder('Position');
f4.add(controller,'positionX',-100,100).onChange(function(){
  mesh1.position.x = (controller.positionX);
});
f4.add(controller,'positionY',-100,100).onChange(function(){
  mesh1.position.y = (controller.positionY);
});
f4.add(controller,'positionZ',-100,100).onChange(function(){
  mesh1.position.z = (controller.positionZ);
});
}


// Render Loop
var render = function () {
  requestAnimationFrame( render );
  mesh.rotation.x = rotationVariable;
  mesh1.rotation.x = rotationVariable;

  console.log(rotationVariable);
  mesh.rotation.y = rotationVariable;
  mesh1.rotation.y = rotationVariable;

  console.log(rotationVariable);
  mesh.rotation.z = rotationVariable;
  mesh1.rotation.z = rotationVariable;

  console.log(rotationVariable);

  mesh.scale.x = scaleVariable;
  mesh1.scale.x = scaleVariable;

  console.log(scaleVariable);
  mesh.scale.y = scaleVariable;
  mesh1.scale.y = scaleVariable;

  console.log(scaleVariable);
  mesh.scale.z = scaleVariable;
  mesh1.scale.z = scaleVariable;

  console.log(scaleVariable);

//  mesh.rotation.x += 0.01; //Continuously rotate the mesh
//  mesh.rotation.y += 0.01;

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};
//Color converter
function dec2hex(i) {
  var result = "0x000000";
  if (i >= 0 && i <= 15) { result = "0x00000" + i.toString(16); }
  else if (i >= 16 && i <= 255) { result = "0x0000" + i.toString(16); }
  else if (i >= 256 && i <= 4095) { result = "0x000" + i.toString(16); }
  else if (i >= 4096 && i <= 65535) { result = "0x00" + i.toString(16); }
  else if (i >= 65535 && i <= 1048575) { result = "0x0" + i.toString(16); }
  else if (i >= 1048575 ) { result = '0x' + i.toString(16); }
  if (result.length == 8){return result;}
}
function lightingSystem(){
  var object3d  = new THREE.DirectionalLight('white', 0.15);
  object3d.position.set(6,3,9);
  object3d.name = 'Back light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.35);
  object3d.position.set(-6, -3, 0);
  object3d.name   = 'Key light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.55);
  object3d.position.set(9, 9, 6);
  object3d.name = 'Fill light';
  scene.add(object3d);

  var spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( 3, 30, 3 );
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 2048;
  spotLight.shadow.mapSize.height = 2048;
  spotLight.shadow.camera.near = 1;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 45;
  scene.add( spotLight );
}

init();
render();
