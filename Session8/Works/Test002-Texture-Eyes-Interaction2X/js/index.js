// MatCap-style image rendered on a sphere
// modify sphere UVs instead of using a ShaderMaterial

var camera, scene, renderer, mesh;
var image;
var mouseX = 0, mouseY = 0;
var container;

var object;

var objects = [];

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

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

	sphere = new THREE.Mesh( new THREE.SphereBufferGeometry( 10, 20, 20 ), new THREE.MeshNormalMaterial() );
	scene.add( sphere );
	var geometry = new THREE.CylinderBufferGeometry( 0, 10, 100, 12 );
	geometry.rotateX( Math.PI / 2 );
	var material = new THREE.MeshNormalMaterial();

	var eyegeometry = new THREE.SphereGeometry( 30, 32, 16 );
	var eyematerial = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		specular: 0x050505,
		shininess: 50,
		map: THREE.ImageUtils.loadTexture('images/eye.png'),
	});

	var faceVertexUvs = eyegeometry.faceVertexUvs[ 0 ];
  for ( i = 0; i < faceVertexUvs.length; i ++ ) {
	var uvs = faceVertexUvs[ i ];
	var face = eyegeometry.faces[ i ];
	for ( var j = 0; j < 3; j ++ ) {
		uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
		uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
	}
}


	for (var i = 0; i < 70; i++) {
	/*var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("ring.mtl", function(materials){

		materials.preload();

    var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);

  		objLoader.load("ring.obj", function(mesh){
  			mesh.traverse(function(node){
  				if( node instanceof THREE.Mesh ){
  					node.castShadow = true;
  					node.receiveShadow = true;
  				}
  			});
        var sizeRand = Math.random() * 0.5;
        mesh.scale.set(sizeRand,sizeRand,sizeRand);
        mesh.position.set(Math.random()*200-100, Math.random()*200-100, Math.random()*200-100);
        //mesh.rotation.y = -Math.PI/Math.random()*4;

        scene.add(mesh);
        objects.push(mesh); //Add to the array so that we can access for raycasting
  		});
  	});*/
		var mesh = new THREE.Mesh( eyegeometry, eyematerial );
					var sizeRand = Math.random() * 0.5;
	        mesh.scale.set(sizeRand,sizeRand,sizeRand);
	        mesh.position.set(Math.random()*200-100, Math.random()*200-100, Math.random()*200-100);
					scene.add( mesh );
	}

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
	var time = Date.now() * 0.0005;
				sphere.position.x = Math.sin( time * 0.5 ) * 100;
				sphere.position.y = Math.cos( time * 0.5 ) * 100;
				sphere.position.z = Math.cos( time * 0.3 ) * 100;
				/*sphere.position.x = mouseX;
				sphere.position.y = -mouseY;*/
				for ( var i = 1, l = scene.children.length; i < l; i ++ ) {
					scene.children[ i ].lookAt( sphere.position );
				}

				/*camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;
				camera.lookAt( scene.position );*/

	renderer.render( scene, camera );
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
