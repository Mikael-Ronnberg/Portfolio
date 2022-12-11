import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("back-drop"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// cubes
const c1geometry = new THREE.BoxGeometry( 10, 10, 10 );
const c1material = new THREE.MeshStandardMaterial( {color:"rgb(48,102,190)" } );
const cube1 = new THREE.Mesh( c1geometry, c1material )

const c2geometry = new THREE.BoxGeometry( 5, 5, 5 );
const c2material = new THREE.MeshStandardMaterial( {color: "rgb(48,102,190)"} );
const cube2 = new THREE.Mesh( c2geometry, c2material );

const c3geometry = new THREE.BoxGeometry( 7, 7, 7 );
const c3material = new THREE.MeshStandardMaterial( {color: "rgb(3,37,172)"} );
const cube3 = new THREE.Mesh( c3geometry, c3material );

const c4geometry = new THREE.BoxGeometry( 6, 6, 6 );
const c4material = new THREE.MeshStandardMaterial( {color:"rgb(3,37,172)" } );
const cube4 = new THREE.Mesh( c4geometry, c4material )

scene.add( cube2, cube1, cube3, cube4 );

// balls


// light

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(113, 3, 3);

const ambientLight = new THREE.AmbientLight(0x3fffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

// scene prep

const bgColor =  new THREE.Color("rgb(60, 55, 68)")

scene.background = bgColor;

// obj positioning

cube1.position.x = -19;
cube1.position.y = -8;
cube1.position.z = 8;

cube2.position.x = 7;
cube2.position.y = -4;
cube2.position.z = 22;

cube3.position.x = -8;
cube3.position.y = 2;
cube3.position.z = 10;

cube4.position.x = 12;
cube4.position.y = -13;
cube4.position.z = 15;


function moveCamera() {

    const t = document.body.getBoundingClientRect().top;

    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.02;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.02;

    cube3.rotation.x += 0.01;
    cube3.rotation.y += 0.02;

    cube4.rotation.x += 0.01;
    cube4.rotation.y += 0.02;



    camera.position.y = t * 0.004;
    // camera.position.x = t * 0.007;
    // camera.position.z = t * 0.0003;
}

document.body.onscroll = moveCamera

function animate() {
    requestAnimationFrame(animate);


    controls.update();

    renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})