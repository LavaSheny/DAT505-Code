## 02 test ##
This project is to practise controlling the objects' positons and their color with gui to make up a pattern.

#### Description ####
The pattern consists of `TorusGeometry` and `BoxGeometry`. The two kinds of geometries have added 53 meshs in the scene in all and make up a circuit board pattern.

#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/dat.gui.min.js"></script>
```

* The code creates a scene, a camera, color, two lights, two geometries, and it adds the meshs to the scene. It then creates a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body element. Finally, it animates the meshs within the scene for the camera.

```javascript
var scene, camera, renderer;
var geometry, material, mesh;
var geometry1;
var color;

function init(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 300, 10000 );

  renderer = new THREE.WebGLRenderer({antialias:true});

  renderer.setClearColor("#000000");

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );

  var light1 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light1);

  var light2 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light2);
}
```

* Define `de2ra` to translate numbers into angles. Thus meshs can rotate by input degree.

```javascript
var de2ra= function (degree){
  return degree*(Math.PI/180);
};
```

* Create two kinds of geometries and define their material color ( can become transparent ). Then set their positons and scales. Finally, the code adds meshs ( there are 53 meshs in all ) to the scene.

```javascript
geometry = new THREE.BoxGeometry;
geometry1 = new THREE.TorusGeometry;
color= Math.random()*0xffffff;
material = new THREE.MeshLambertMaterial({
  color:color,
  transparent: true
});

mesh = new THREE.Mesh( geometry, material );
mesh.position.set(0,220,-1000);
mesh.scale.set(20, 400,20);
scene.add( mesh );
```

* Define initial values of controller to control gui.

```javascript
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
```

* Create gui and set `f1, f2, f3` options in gui folder. Define control range of each option. There are two gui in all that they are used to control two kinds of geometries to calculate the positon coordinates for each mesh.

```javascript
var gui = new dat.GUI();
var f1 = gui.addFolder('Scale');
var f2 = gui.addFolder('Position');
var f3 = gui.addFolder('Rotation');
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
 mesh.rotation.x = de2ra(controller.rotationX);
});
f3.add(controller,'rotationY',-180,180).onChange(function(){
 mesh.rotation.y = de2ra(controller.rotationY);
});
f3.add(controller,'rotationZ',-180,180).onChange(function(){
 mesh.rotation.z = de2ra(controller.rotationZ);
});
```

* Set `color` and `Opacity` options in gui folder to control meshs' color and their transparency.

```javascript
gui.addColor( controller, 'boxColor', color ).onChange( function() {
mesh.material.color.setHex( dec2hex(controller.boxColor) );
});
gui.add( controller, 'boxOpacity', 0.1, 3 ).onChange( function() {
material.opacity = (controller.boxOpacity);
});
};
```

* The code below is used to define the colors of different possibility that gui can control the meshs' color.

```javascript
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
```

#### Links ####
[DAT505-Code Github](https://github.com/LavaSheny/DAT505-Code.git)
