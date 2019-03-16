var renderer, scene, camera;
var cubes = [];
var randomRotationX = [];
var randomRotationY = [];

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
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
    for (var x = -35; x < 40; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -35; y < 40; y += 5) {

      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.z = y;
      //mesh.scale.y = 0.5;
    //  mesh.rotation.x = Math.random() * 2 * Math.PI;;
      console.log( "First" + Math.random() * 2 * Math.PI);
      console.log( "Second" + Math.random() * 2 * Math.PI);
      //mesh.rotation.y = Math.random() * 2 * Math.PI;;
      //mesh.rotation.z = Math.random() * 2 * Math.PI;;
      //Create random values for x and y, and store them
  var randomValueX = (Math.random() * 0.1)- 0.05;
  var randomValueY = (Math.random() * 0.1)- 0.05;
      randomRotationX.push(randomValueX);
      randomRotationY.push(randomValueY);

      scene.add(mesh);
      cubes.push(mesh);
    }
}

  document.body.appendChild(renderer.domElement);
}
var rot = 0;
function drawFrame(ts){
  requestAnimationFrame(drawFrame);
  rot += 0.01;
  cubes.forEach(function(c,i){
  /*  c.rotation.x += randomRotationX[i];
    c.rotation.y += randomRotationY[i];*/
    c.scale.y = Math.sin(ts/500*Math.PI + c.position.x*4.95 + c.position.z/10) +1;
  });

  renderer.render(scene, camera);
}

init();
drawFrame();
