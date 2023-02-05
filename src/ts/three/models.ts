import * as THREE from "three";


const material = new THREE.MeshPhongMaterial();

const texture = new THREE.TextureLoader().load("../../assets/Gravel_001_BaseColor.jpg");

material.map = texture;

const bumpMap = new THREE.TextureLoader().load("src/assets/Gravel_001_Normal.jpg");

material.bumpMap = bumpMap;

const c1geometry = new THREE.BoxGeometry( 10, 10, 10 );
// const c1material = new THREE.MeshStandardMaterial( {color:"rgb(48,102,190)" } );
export const cube1 = new THREE.Mesh( c1geometry, material);

const c2geometry = new THREE.BoxGeometry( 5, 5, 5 );
const c2material = new THREE.MeshStandardMaterial( {color: "rgb(48,102,190)"} );
export const cube2 = new THREE.Mesh( c2geometry, c2material );

const c3geometry = new THREE.BoxGeometry( 7, 7, 7 );
const c3material = new THREE.MeshStandardMaterial( {color: "rgb(3,37,172)"} );
export const cube3 = new THREE.Mesh( c3geometry, c3material );

const c4geometry = new THREE.BoxGeometry( 6, 6, 6 );
const c4material = new THREE.MeshStandardMaterial( {color:"rgb(3,37,172)" } );
export const cube4 = new THREE.Mesh( c4geometry, c4material )