var camera, scene, renderer;
var mouseX = 0, mouseY = 0;
var container;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var controlID = 2;
var mouseMode,cameraMode;
var color1,color2,color3,color4,color5,color6;

// create an AudioListener
var listener = new THREE.AudioListener();
var listener1 = new THREE.AudioListener();
var listener2 = new THREE.AudioListener();

// create a global audio source
var sound = new THREE.Audio( listener );
var sound1 = new THREE.Audio( listener1 );
var sound2 = new THREE.Audio( listener1 );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
var audioLoader1 = new THREE.AudioLoader();
var audioLoader2 = new THREE.AudioLoader();

init();
animate();

function init() {
	   container = document.createElement( 'div' );
	   document.body.appendChild( container );

	   scene = new THREE.Scene();
	   scene.background = new THREE.Color( 0xffffff );
	   camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	   camera.position.set( 0, 0, 400 );
     scene.add( camera ); // since light is child of camera

	   scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
 var light = new THREE.PointLight( 0xffffff, 1 );
	   camera.add( light );
     // Create a sphere to drive cube to rotate
     sphere = new THREE.Mesh( new THREE.SphereGeometry( 5, 10, 10 ), new THREE.MeshNormalMaterial({transparent: true}) );
     scene.add( sphere );
     // Create cube to look at moving sphere and rotate to follow sphere's position
 var geometry = new THREE.BoxGeometry( 15, 15, 15 );
	   geometry.rotateX( Math.PI / 2 );
     // Set 6 face colors of cube
		 color1 = Math.random()*0xffffff;
		 color2 = Math.random()*0xffffff;
		 color3 = Math.random()*0xffffff;
		 color4 = Math.random()*0xffffff;
		 color5 = Math.random()*0xffffff;
		 color6 = Math.random()*0xffffff;
// Add colors to material independently
 var material = [];
     material[0] = new THREE.MeshBasicMaterial({ color: color1});
     material[1] = new THREE.MeshBasicMaterial({ color: color2});
     material[2] = new THREE.MeshBasicMaterial({ color: color3});
     material[3] = new THREE.MeshBasicMaterial({ color: color4});
     material[4] = new THREE.MeshBasicMaterial({ color: color5});
     material[5] = new THREE.MeshBasicMaterial({ color: color6});

for (var x = -150; x < 150; x += 5) { // Start from -150 and sequentially add one every 5 pixels
for (var y = -150; y < 150; y += 5) { // Start from -150 and sequentially add one every 5 pixels
 var mesh = new THREE.Mesh( geometry, material );
 	var sizeRand = Math.random() * 0.5;// Set random size of cubes
  	   mesh.scale.set(sizeRand,sizeRand,sizeRand);
       mesh.position.x = x;
       mesh.position.y = y;
       mesh.position.z = 0;
  		 scene.add( mesh );
	}
}
 // Define initial values of controller to control gui.
 var controller = new function(){
	   this.boxColor1 = color1;
	   this.boxColor2 = color2;
	   this.boxColor3 = color3;
	   this.boxColor4 = color4;
	   this.boxColor5 = color5;
	   this.boxColor6 = color6;
	   this.sphereOpacity = 1;
		 this.mouseMode = false;
		 this.cameraMode = false;
}

 // Create a new DAT.GUI
 var gui = new dat.GUI();
     gui.addColor( controller, 'boxColor1', color1 ).onChange( function() {
     mesh.material[0].color.setHex(controller.boxColor1);
     });
     gui.addColor( controller, 'boxColor2', color2 ).onChange( function() {
     mesh.material[1].color.setHex(controller.boxColor2);
     });
     gui.addColor( controller, 'boxColor3', color3 ).onChange( function() {
     mesh.material[2].color.setHex(controller.boxColor3);
     });
     gui.addColor( controller, 'boxColor4', color4 ).onChange( function() {
     mesh.material[3].color.setHex(controller.boxColor4);
     });
     gui.addColor( controller, 'boxColor5', color5 ).onChange( function() {
     mesh.material[4].color.setHex(controller.boxColor5);
     });
     gui.addColor( controller, 'boxColor6', color6 ).onChange( function() {
     mesh.material[5].color.setHex(controller.boxColor6);
     });
     gui.add( controller, 'sphereOpacity', 0, 1 ).onChange( function() {
     sphere.material.opacity = (controller.sphereOpacity);

		 // Set switch options
		 gui.add( controller, 'mouseMode', false, true ).onChange( function() {
     if(controller.mouseMode){
			 mouseMode = 1;
		 }
		 else{
			 mouseMode = 2;
		 }
     });
		 gui.add( controller, 'cameraMode', false, true ).onChange( function() {
     if(controller.cameraMode){
			 cameraMode = 1;
		 }
		 else{
			 cameraMode = 2;
		 }
	   });

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
  var time = Date.now() * 0.002;

	if(mouseMode == 1){// Let sphere move in a fixed path
		sphere.position.x = Math.sin( time * 0.3 ) * 100;
		sphere.position.y = Math.cos( time * 0.3 ) * 100;
		sphere.position.z = Math.cos( time * 0.3 ) * 100;
	}
else{// Control sphere moving with mouse
	  sphere.position.x =  mouseX;
		sphere.position.y = -mouseY;
		sphere.position.z = -mouseY;
}

  if(cameraMode == 1){// Control camera moving with mouse
		camera.position.x += ( mouseX - camera.position.x ) * .05;
		camera.position.y += ( - mouseY - camera.position.y ) * .05;
		camera.lookAt( scene.position );
		}
else{// Reset the postion of camera
    camera.position.set( 0, 0, 400 );
		camera.lookAt( scene.position );
}
  // Let all cubes look at sphere's postion independently
  for ( var i = 1, l = scene.children.length; i < l; i ++ ) {
					scene.children[ i ].lookAt( sphere.position );
				}
  // Play different sounds when the sphere moves to the specified location
  if ( sphere.position.z > 30 ) {
      audioLoader.load( 'audio/BongoAccent.mp3', function( buffer ) {
      sound.setBuffer( buffer );
      sound.setLoop( false );
      sound.setVolume( 0.5 );
      sound.play();
      });
      } else if ( sphere.position.z < -30 ){audioLoader1.load( 'audio/SingleRubofWashboard.mp3', function( buffer ) {
      sound1.setBuffer( buffer );
      sound1.setLoop( false );
      sound1.setVolume( 0.5 );
      sound1.play();
      });
      } else{audioLoader2.load( 'audio/CongaTap.mp3', function( buffer ) {
      sound2.setBuffer( buffer );
      sound2.setLoop( false );
      sound2.setVolume( 2 );
      sound2.play();
      });
      }
  renderer.setClearColor("#000000");
	renderer.render( scene, camera );
}

// Color converter
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

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}
