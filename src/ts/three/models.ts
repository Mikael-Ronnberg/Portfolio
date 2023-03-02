import * as THREE from "three";


const material = new THREE.MeshPhongMaterial();
const texture = new THREE.TextureLoader().load("img/Metal_ArtDeco_Tiles_001_basecolor.jpg");
material.map = texture;
const displacementMaterial = new THREE.TextureLoader().load("img/Metal_ArtDeco_Tiles_001_metallic.jpg");
material.displacementMap = displacementMaterial;
const color1 = new THREE.Color("rgb(10, 54, 157)");
const normalTexture = new THREE.TextureLoader().load("img/Metal_ArtDeco_Tiles_001_normal.jpg");
material.normalMap = normalTexture;
material.color = color1;
// material.normalScale.set(2, 2);
material.displacementScale = .2, .2;
material.displacementBias = -.125, -.125;

const c1geometry = new THREE.BoxGeometry( 10, 10, 10 );
export const cube1 = new THREE.Mesh( c1geometry, material );


export const material2 = new THREE.MeshPhysicalMaterial({});
const roughText = new THREE.TextureLoader().load("img/Metal_006_basecolor.jpg")
const normalMap2 = new THREE.TextureLoader().load("img/Metal_006_normal.jpg")
const specularTexture = new THREE.TextureLoader().load("img/Metal_006_roughness.jpg");
const color2 = new THREE.Color("rgb(135, 135, 135)");

material2.color = color2;
material2.map = roughText;
material2.normalMap = normalMap2;
material2.roughnessMap = specularTexture;
material2.metalnessMap = specularTexture;
material2.reflectivity = 0, 10;
material2.metalness = 0 , 2;

const c2geometry = new THREE.BoxGeometry( 5, 5, 5 );
// const c2material = new THREE.MeshStandardMaterial( {color: "rgb(48,102,190)"} );
export const cube2 = new THREE.Mesh( c2geometry, material2 );

const c3geometry = new THREE.BoxGeometry( 7, 7, 7 );
const c3material = new THREE.MeshStandardMaterial( {color: "rgb(135, 135, 135)"} );
export const cube3 = new THREE.Mesh( c3geometry, material2 );

const c4geometry = new THREE.BoxGeometry( 6, 6, 6 );
const c4material = new THREE.MeshStandardMaterial( {color:"rgb(32,37,22)" } );
export const cube4 = new THREE.Mesh( c4geometry, material)