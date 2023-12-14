import * as  THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {DoubleSide} from "three";
// import * as dat from 'dat.gui';
import * as dat from 'dat.gui';



const scene= new THREE.Scene();
const camera =new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGL1Renderer()
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const axisHelper=new THREE.AxesHelper(15);
scene.add(axisHelper);

const orbit =new OrbitControls(camera,renderer.domElement);

const boxGeometry= new THREE.BoxGeometry();
const cubeMaterial= new THREE.MeshBasicMaterial({color:0xFFFF00});
const cube =new THREE.Mesh(boxGeometry,cubeMaterial)
scene.add(cube);


const planeGeo=new THREE.PlaneGeometry(30,30);
const planeMaterial=new THREE.MeshBasicMaterial({color:0xFFFFFF,side:DoubleSide});
const plane =new THREE.Mesh(planeGeo,planeMaterial);
plane.rotation.x=-0.5 * Math.PI;
scene.add(plane);

const grid =new THREE.GridHelper(30);
scene.add(grid);

const sphereGeo=new THREE.SphereGeometry(5,40,40);
const sphereMat =new THREE.MeshBasicMaterial({color:0x0000FF,
wireframe:true});
const sphere= new THREE.Mesh(sphereGeo,sphereMat);
sphere.position.set(-4,8,4)
scene.add(sphere);

document.addEventListener('DOMContentLoaded', function () {
    const gui = new dat.GUI();
    console.log("hello");
    const options ={
    sphereColor:"#ffea00",
   };
    gui.addColor(options,'sphereColor').onChange(function(e){
    sphere.material.color.set(e);
    })
});

// const gui =new dat.GUI();
// const options ={
//     sphereColor:"#ffea00",
//
// };
//
// gui.addColor(options,'sphereColor').onChange(function(e){
//     sphere.material.color.set(e);
// })

function animate(){
    cube.rotation.x +=0.01;
    renderer.render(scene,camera);
    // Assuming 'yourObject' is your Three.js object (e.g., a mesh, group, etc.)

}

renderer.setAnimationLoop(animate);
camera.position.set(14,13,-25);
orbit.update();
orbit.dispatchEvent({ type: 'change' });





