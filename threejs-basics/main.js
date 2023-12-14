import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

let geometry = new THREE.BoxGeometry( 1, 1, 1 );
let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
let cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const recGeometry = new THREE.PlaneGeometry(3, 1); // Width, Height
const recMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide }); // Green color
const rectangle = new THREE.Mesh(recGeometry, recMaterial);
rectangle.position.set(3, 0, 0);
scene.add(rectangle);

const sqaGeometry = new THREE.PlaneGeometry(1.5, 1.5); // Width, Height
const sqaMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide }); // Green color
const square = new THREE.Mesh(sqaGeometry, sqaMaterial);
square.position.set(-6, 0, 0);
scene.add(square);

let geo = new THREE.CircleGeometry( 0.6, 32, 75 );
let mat = new THREE.MeshBasicMaterial( { color: 0xffff00 , side: THREE.DoubleSide} );
let circle = new THREE.Mesh( geo, mat ); scene.add( circle );
circle.position.set(-3,0,0);
scene.add(circle)

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    rectangle.rotation.x += 0.01;
    rectangle.rotation.y += 0.01;

    circle.rotation.x += 0.01;
    circle.rotation.y += 0.01;

    square.rotation.x += 0.01;
    square.rotation.y += 0.01;


    renderer.render( scene, camera );
}

animate();