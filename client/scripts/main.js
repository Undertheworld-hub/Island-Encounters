import * as THREE from 'three';

document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login.html';
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(5, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const island = new THREE.Mesh(geometry, material);
    island.rotation.x = -Math.PI / 2;
    scene.add(island);

    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    // Fetch and display islands from the server
    fetch('/islands', {
        headers: {
            'Authorization': token
        }
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(islandData => {
            const islandGeometry = new THREE.PlaneGeometry(5, 5);
            const islandMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const otherIsland = new THREE.Mesh(islandGeometry, islandMaterial);
            otherIsland.position.set(islandData.position.x, 0, islandData.position.y);
            otherIsland.rotation.x = -Math.PI / 2;
            scene.add(otherIsland);
        });
    })
    .catch(error => console.error('Error fetching islands:', error));
});
