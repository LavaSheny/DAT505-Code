//Global variables
var scene, camera, renderer;
var geometry, material, mesh;
var geometry1, material1, mesh1;
var color;

//Rotation converter
var de2ra= function (degree){
  return degree*(Math.PI/180);
};



function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );

  var light1 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light1);

  var light2 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light2);

  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry;
  geometry1 = new THREE.TorusGeometry;

 //255,255,255
  color= Math.random()*0xffffff;
  material = new THREE.MeshLambertMaterial({
    color:color,
    transparent: true
  });
  material1 = new THREE.MeshBasicMaterial( { color: "#000000" } );

//  material = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
//  material = new THREE.MeshNormalMaterial( );
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.set(0,220,-1000);
  mesh.scale.set(20, 400,20);
  // Add mesh to scene
  scene.add( mesh );

  mesh1 = new THREE.Mesh( geometry1, material );
  mesh1.position.set(0, -3, -1000);
  mesh1.scale.set(20, 20, 20, 20);
  scene.add( mesh1 );

  mesh2 = new THREE.Mesh( geometry1, material );
  mesh2.position.set(200, -280, -1000);
  mesh2.scale.set(15, 15, 15, 15);
  scene.add( mesh2 );

  mesh3 = new THREE.Mesh( geometry, material );
  mesh3.position.set(200,-90,-1000);
  mesh3.scale.set(12, 350,20);
  // Add mesh to scene
  scene.add( mesh3 );

  mesh4 = new THREE.Mesh( geometry, material );
  mesh4.position.set(300,70,-1000);
  mesh4.scale.set(20, 500,20);
  // Add mesh to scene
  scene.add( mesh4 );

  mesh5 = new THREE.Mesh( geometry1, material );
  mesh5.position.set(300, -200, -1000);
  mesh5.scale.set(20, 20, 20, 20);
  scene.add( mesh5 );

  mesh6 = new THREE.Mesh( geometry, material );
  mesh6.position.set(360,30,-1000);
  mesh6.scale.set(12, 170,20);
  mesh6.rotation.z = de2ra(45);
  // Add mesh to scene
  scene.add( mesh6 );

  mesh7 = new THREE.Mesh( geometry1, material );
  mesh7.position.set(430, -40, -1000);
  mesh7.scale.set(15, 15, 15, 15);
  mesh7.rotation.z = de2ra(45);
  scene.add( mesh7 );

  mesh8 = new THREE.Mesh( geometry, material );
  mesh8.position.set(250,130,-1000);
  mesh8.scale.set(12, 150,20);
  mesh8.rotation.z = de2ra(-45);
  // Add mesh to scene
  scene.add( mesh8 );

  mesh9 = new THREE.Mesh( geometry, material );
  mesh9.position.set(350,365,-1000);
  mesh9.scale.set(20, 150,20);
  mesh9.rotation.z = de2ra(-45);
  // Add mesh to scene
  scene.add( mesh9 );

  mesh10 = new THREE.Mesh( geometry, material );
  mesh10.position.set(350,260,-1000);
  mesh10.scale.set(12, 130,20);
  mesh10.rotation.z = de2ra(45);
  // Add mesh to scene
  scene.add( mesh10 );

  mesh11 = new THREE.Mesh( geometry, material );
  mesh11.position.set(393,165,-1000);
  mesh11.scale.set(12, 110,20);
  // Add mesh to scene
  scene.add( mesh11 );

  mesh12 = new THREE.Mesh( geometry1, material );
  mesh12.position.set(393, 95, -1000);
  mesh12.scale.set(15, 15, 15, 15);
  scene.add( mesh12 );

  mesh13 = new THREE.Mesh( geometry, material );
  mesh13.position.set(460,100,-1000);
  mesh13.scale.set(12, 190,20);
  mesh13.rotation.z = de2ra(45);
  // Add mesh to scene
  scene.add( mesh13 );

  mesh14 = new THREE.Mesh( geometry, material );
  mesh14.position.set(525,-45,-1000);
  mesh14.scale.set(12, 160,20);
  // Add mesh to scene
  scene.add( mesh14 );

  mesh15 = new THREE.Mesh( geometry1, material );
  mesh15.position.set(525, -140, -1000);
  mesh15.scale.set(15, 15, 15, 15);
  scene.add( mesh15 );

  mesh16 = new THREE.Mesh( geometry, material );
  mesh16.position.set(555,-20,-1000);
  mesh16.scale.set(12, 80,20);
  mesh16.rotation.z = de2ra(45);
  // Add mesh to scene
  scene.add( mesh16 );

  mesh17 = new THREE.Mesh( geometry, material );
  mesh17.position.set(583,-70,-1000);
  mesh17.scale.set(12, 50,20);
  // Add mesh to scene
  scene.add( mesh17 );

  mesh18 = new THREE.Mesh( geometry1, material );
  mesh18.position.set(583, -110, -1000);
  mesh18.scale.set(15, 15, 15, 15);
  scene.add( mesh18 );

  mesh19 = new THREE.Mesh( geometry, material );
  mesh19.position.set(145,-10,-1000);
  mesh19.scale.set(12, 210,20);
  // Add mesh to scene
  scene.add( mesh19 );

  mesh20 = new THREE.Mesh( geometry, material );
  mesh20.position.set(200,150,-1000);
  mesh20.scale.set(12, 160,20);
  mesh20.rotation.z = de2ra(-45);
  // Add mesh to scene
  scene.add( mesh20 );

  mesh21 = new THREE.Mesh( geometry1, material );
  mesh21.position.set(145, -130, -1000);
  mesh21.scale.set(15, 15, 15, 15);
  scene.add( mesh21 );

  mesh22 = new THREE.Mesh( geometry, material );
  mesh22.position.set(290,430,-1000);
  mesh22.scale.set(12, 260,20);
  mesh22.rotation.z = de2ra(-45);
  // Add mesh to scene
  scene.add( mesh22 );

  mesh23 = new THREE.Mesh( geometry, material );
  mesh23.position.set(200,290,-1000);
  mesh23.scale.set(12, 100,20);
  // Add mesh to scene
  scene.add( mesh23 );

  mesh24 = new THREE.Mesh( geometry1, material );
  mesh24.position.set(200, 230, -1000);
  mesh24.scale.set(15, 15, 15, 15);
  scene.add( mesh24 );

  mesh25 = new THREE.Mesh( geometry, material );
  mesh25.position.set(230,450,-1000);
  mesh25.scale.set(12, 260,20);
  mesh25.rotation.z = de2ra(-45);
  // Add mesh to scene
  scene.add( mesh25 );

  mesh26 = new THREE.Mesh( geometry, material );
  mesh26.position.set(140,320,-1000);
  mesh26.scale.set(12, 80,20);
  // Add mesh to scene
  scene.add( mesh26 );

  mesh27 = new THREE.Mesh( geometry1, material );
  mesh27.position.set(140, 270, -1000);
  mesh27.scale.set(15, 15, 15, 15);
  scene.add( mesh27 );





  mesh28 = new THREE.Mesh( geometry1, material );
  mesh28.position.set(-200, -280, -1000);
  mesh28.scale.set(15, 15, 15, 15);
  scene.add( mesh28 );

  mesh29 = new THREE.Mesh( geometry, material );
  mesh29.position.set(-200,-90,-1000);
  mesh29.scale.set(12, 350,20);
  // Add mesh to scene
  scene.add( mesh29 );

  mesh30 = new THREE.Mesh( geometry, material );
  mesh30.position.set(-300,70,-1000);
  mesh30.scale.set(20, 500,20);
  // Add mesh to scene
  scene.add( mesh30 );

  mesh31 = new THREE.Mesh( geometry1, material );
  mesh31.position.set(-300, -200, -1000);
  mesh31.scale.set(20, 20, 20, 20);
  scene.add( mesh31 );

  mesh32 = new THREE.Mesh( geometry, material );
  mesh32.position.set(-360,30,-1000);
  mesh32.scale.set(12, 170,20);
  mesh32.rotation.z = de2ra(-45);
  // Add mesh to scene
  scene.add( mesh32 );

  mesh33 = new THREE.Mesh( geometry1, material );
  mesh33.position.set(-430, -40, -1000);
  mesh33.scale.set(15, 15, 15, 15);
  mesh33.rotation.z = de2ra(-45);
  scene.add( mesh33 );

  mesh34 = new THREE.Mesh( geometry, material );
  mesh34.position.set(-250,130,-1000);
  mesh34.scale.set(12, 150,20);
  mesh34.rotation.z = de2ra(45);
  // Add mesh to scene
  scene.add( mesh34 );

  mesh35 = new THREE.Mesh( geometry, material );
  mesh35.position.set(-350,365,-1000);
  mesh35.scale.set(20, 150,20);
  mesh35.rotation.z = de2ra(45);
  // Add mesh to scene
  scene.add( mesh35 );

  mesh36 = new THREE.Mesh( geometry, material );
  mesh36.position.set(-350,260,-1000);
  mesh36.scale.set(12, 130,20);
  mesh36.rotation.z = de2ra(-45);
  // Add mesh to scene
  scene.add( mesh36 );

  mesh37 = new THREE.Mesh( geometry, material );
  mesh37.position.set(-393,165,-1000);
  mesh37.scale.set(12, 110,20);
  // Add mesh to scene
  scene.add( mesh37 );

  mesh38 = new THREE.Mesh( geometry1, material );
  mesh38.position.set(-393, 95, -1000);
  mesh38.scale.set(15, 15, 15, 15);
  scene.add( mesh38 );

  mesh39 = new THREE.Mesh( geometry, material );
  mesh39.position.set(-460,100,-1000);
  mesh39.scale.set(12, 190,20);
  mesh39.rotation.z = de2ra(-45);
  // Add mesh to scene
  scene.add( mesh39 );

  mesh40 = new THREE.Mesh( geometry, material );
  mesh40.position.set(-525,-45,-1000);
  mesh40.scale.set(12, 160,20);
  // Add mesh to scene
  scene.add( mesh40 );

  mesh41 = new THREE.Mesh( geometry1, material );
  mesh41.position.set(-525, -140, -1000);
  mesh41.scale.set(15, 15, 15, 15);
  scene.add( mesh41 );

  mesh42 = new THREE.Mesh( geometry, material );
  mesh42.position.set(-555,-20,-1000);
  mesh42.scale.set(12, 80,20);
  mesh42.rotation.z = de2ra(-45);
  // Add mesh to scene
  scene.add( mesh42 );

  mesh43 = new THREE.Mesh( geometry, material );
  mesh43.position.set(-583,-70,-1000);
  mesh43.scale.set(12, 50,20);
  // Add mesh to scene
  scene.add( mesh43 );

  mesh44 = new THREE.Mesh( geometry1, material );
  mesh44.position.set(-583, -110, -1000);
  mesh44.scale.set(15, 15, 15, 15);
  scene.add( mesh44 );

  mesh45 = new THREE.Mesh( geometry, material );
  mesh45.position.set(-145,-10,-1000);
  mesh45.scale.set(12, 210,20);
  // Add mesh to scene
  scene.add( mesh45 );

  mesh46 = new THREE.Mesh( geometry, material );
  mesh46.position.set(-200,150,-1000);
  mesh46.scale.set(12, 160,20);
  mesh46.rotation.z = de2ra(45);
  // Add mesh to scene
  scene.add( mesh46 );

  mesh47 = new THREE.Mesh( geometry1, material );
  mesh47.position.set(-145, -130, -1000);
  mesh47.scale.set(15, 15, 15, 15);
  scene.add( mesh47 );

  mesh48 = new THREE.Mesh( geometry, material );
  mesh48.position.set(-290,430,-1000);
  mesh48.scale.set(12, 260,20);
  mesh48.rotation.z = de2ra(45);
  // Add mesh to scene
  scene.add( mesh48 );

  mesh49 = new THREE.Mesh( geometry, material );
  mesh49.position.set(-200,290,-1000);
  mesh49.scale.set(12, 100,20);
  // Add mesh to scene
  scene.add( mesh49 );

  mesh50 = new THREE.Mesh( geometry1, material );
  mesh50.position.set(-200, 230, -1000);
  mesh50.scale.set(15, 15, 15, 15);
  scene.add( mesh50 );

  mesh51 = new THREE.Mesh( geometry, material );
  mesh51.position.set(-230,450,-1000);
  mesh51.scale.set(12, 260,20);
  mesh51.rotation.z = de2ra(45);
  // Add mesh to scene
  scene.add( mesh51 );

  mesh52 = new THREE.Mesh( geometry, material );
  mesh52.position.set(-140,320,-1000);
  mesh52.scale.set(12, 80,20);
  // Add mesh to scene
  scene.add( mesh52 );

  mesh53 = new THREE.Mesh( geometry1, material );
  mesh53.position.set(-140, 270, -1000);
  mesh53.scale.set(15, 15, 15, 15);
  scene.add( mesh53 );

//Add controller values for GUI
//Set preset values for controllers
  var controller = new function(){
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;
    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = 0;
    this.rotationX= 0;
    this.rotationY= 0;
    this.rotationZ= 0;

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
 f1.add(controller,'scaleX',0.5,500).onChange(function(){
    mesh.scale.x = (controller.scaleX);
 });
 f1.add(controller,'scaleY',0.5,500).onChange(function(){
    mesh.scale.y = (controller.scaleY);
 });
 f1.add(controller,'scaleZ',0.5,500).onChange(function(){
    mesh.scale.z = (controller.scaleZ);
 });

 f2.add(controller,'positionX',-1000,1000).onChange(function(){
   mesh.position.x = (controller.positionX);
 });
 f2.add(controller,'positionY',-1000,1000).onChange(function(){
   mesh.position.y = (controller.positionY);
 });
 f2.add(controller,'positionZ',-1000,1000).onChange(function(){
   mesh.position.z = (controller.positionZ);
 });

 f3.add(controller,'rotationX',-180,180).onChange(function(){
   //mesh.rotation.x = de2ra(controller.rotationX);
   mesh.rotation.x = de2ra(controller.rotationX);
 });
 f3.add(controller,'rotationY',-180,180).onChange(function(){
  // mesh.rotation.y = de2ra(controller.rotationY);
   mesh.rotation.y = de2ra(controller.rotationY);
 });
 f3.add(controller,'rotationZ',-180,180).onChange(function(){
   //mesh.rotation.z = de2ra(controller.rotationZ);
   mesh.rotation.z = de2ra(controller.rotationZ);
 });

 gui.addColor( controller, 'boxColor', color ).onChange( function() {
  mesh.material.color.setHex( dec2hex(controller.boxColor) );
});
 gui.add( controller, 'boxOpacity', 0.1, 3 ).onChange( function() {
  material.opacity = (controller.boxOpacity);
});

var gui = new dat.GUI();
var f4 = gui.addFolder('Scale');
var f5 = gui.addFolder('Position');
var f6 = gui.addFolder('Rotation');
f4.add(controller,'scaleX',0.5,500).onChange(function(){
  mesh1.scale.x = (controller.scaleX);
});
f4.add(controller,'scaleY',0.5,500).onChange(function(){
  mesh1.scale.y = (controller.scaleY);
});
f4.add(controller,'scaleZ',0.5,500).onChange(function(){
  mesh1.scale.z = (controller.scaleZ);
});
f5.add(controller,'positionX',-1000,1000).onChange(function(){
  mesh1.position.x = (controller.positionX);
});
f5.add(controller,'positionY',-1000,1000).onChange(function(){
  mesh1.position.y = (controller.positionY);
});
f5.add(controller,'positionZ',-1000,1000).onChange(function(){
  mesh1.position.z = (controller.positionZ);
});

f6.add(controller,'rotationX',-180,180).onChange(function(){
  //mesh.rotation.x = de2ra(controller.rotationX);
  mesh1.rotation.x = de2ra(controller.rotationX);
});
f6.add(controller,'rotationY',-180,180).onChange(function(){
 // mesh.rotation.y = de2ra(controller.rotationY);
  mesh1.rotation.y = de2ra(controller.rotationY);
});
f6.add(controller,'rotationZ',-180,180).onChange(function(){
  //mesh.rotation.z = de2ra(controller.rotationZ);
  mesh1.rotation.z = de2ra(controller.rotationZ);
});

}

//  mesh.rotation.x += 0.01; //Continuously rotate the mesh
//  mesh.rotation.y += 0.01;
var render = function () {
  requestAnimationFrame( render );
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
