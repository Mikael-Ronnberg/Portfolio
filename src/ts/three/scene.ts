import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as models from "../three/models";


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("back-drop") as HTMLCanvasElement,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);


scene.add( models.cube2, models.cube1, models.cube3, models.cube4 );

// const pointLight = new THREE.PointLight("rgb(255, 255, 255)", 2);
const directionalLight1 = new THREE.DirectionalLight( 0xffffff, 2 )
directionalLight1.position.set(12, 4, 10);
const directionalLight2 = new THREE.DirectionalLight( 0xffffff, 2 )
directionalLight1.position.set(-12, -4, -10);

// const ambientLight = new THREE.AmbientLight(0x3fffff);
scene.add(directionalLight1, directionalLight2);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

// scene prep

const bgColor =  new THREE.Color("rgb(255, 255, 255)")

scene.background = bgColor;

// obj positioning

models.cube1.position.set(-19, -8, 8);

models.cube2.position.set(7, -4, 22);

models.cube3.position.set(-8, 2, 10);

models.cube4.position.set(12, -13, 15);



function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    models.cube1.rotation.x += 0.01;
    models.cube1.rotation.y += 0.02;

    models.cube2.rotation.x += 0.01;
    models.cube2.rotation.y += 0.02;

    models.cube3.rotation.x += 0.01;
    models.cube3.rotation.y += 0.02;

    models.cube4.rotation.x += 0.01;
    models.cube4.rotation.y += 0.02;

    camera.position.y = t * 0.004;
    // camera.position.x = t * 0.007;
    // camera.position.z = t * 0.0003;
}

document.body.onscroll = moveCamera

export function animate() {
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