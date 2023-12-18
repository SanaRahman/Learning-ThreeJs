import * as  THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {DoubleSide} from "three";
import * as dat from '/node_modules/dat.gui/build/dat.gui.module.js';

const scene= new THREE.Scene();
const camera =new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGL1Renderer()
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const axisHelper=new THREE.AxesHelper(15);
scene.add(axisHelper);

const grid =new THREE.GridHelper(30);
grid.position.y=-4;
scene.add(grid);

const orbit =new OrbitControls(camera,renderer.domElement);

const boxGeometry= new THREE.BoxGeometry();
const cubeMaterial= new THREE.MeshBasicMaterial({color:0xFFFF00});
const cube =new THREE.Mesh(boxGeometry,cubeMaterial)
scene.add(cube);


const planeGeo=new THREE.PlaneGeometry(30,30);
const planeMaterial=new THREE.MeshStandardMaterial({color:0xFFFFFF,side:DoubleSide});
const plane =new THREE.Mesh(planeGeo,planeMaterial);
plane.rotation.x=-0.5 * Math.PI;
plane.position.y=-4;
scene.add(plane);




const sphereGeo=new THREE.SphereGeometry(5,40,40);
const sphereMat =new THREE.MeshStandardMaterial(
    {color:0x0000FF,
               wireframe:true});
const sphere= new THREE.Mesh(sphereGeo,sphereMat);
sphere.position.set(-4,8,4)
scene.add(sphere);

const gui =new dat.GUI();
const options ={
    sphereColor:"#ffea00",
    wireframe: true,
    speed : 0.01
};

const ambidentLight =new THREE.AmbientLight({color:0x333333});
scene.add(ambidentLight);

const alightHelper =new THREE.Amb
gui.addColor(options,'sphereColor').onChange(function(e){
    sphere.material.color.set(e);
});
gui.add(options, 'wireframe').onChange(function (e){
    sphere.material.wireframe=e;
})

gui.add(options,'speed',0,0.03,);

let step=0;

function animate(){
    cube.rotation.x +=0.1;
    renderer.render(scene,camera);
    step+=options.speed;
    sphere.position.y=10 * Math.abs(Math.sin(step));
}

renderer.setAnimationLoop(animate);
camera.position.set(14,13,-25);
orbit.update();
orbit.dispatchEvent({ type: 'change' });


