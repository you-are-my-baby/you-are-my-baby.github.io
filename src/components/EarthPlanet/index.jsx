import React, { useRef, useEffect } from "react";
import earth from "../../assets/images/01-3.jpg";
import * as THREE from "three";

const Earth = () => {
    const mount = useRef(null);

    useEffect(() => {
        let width = mount.current.clientWidth;
        let height = mount.current.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor(0x00000000, 0);
        renderer.setSize(width, height);
        mount.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const texture = new THREE.TextureLoader().load(earth);
        const material = new THREE.MeshPhongMaterial({ map: texture });
        const earthMesh = new THREE.Mesh(geometry, material);
        scene.add(earthMesh);

        camera.position.z = 15;

        const animate = () => {
            requestAnimationFrame(animate);
            earthMesh.rotation.y += 0.003;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.domElement.remove();
        };
    }, []);

    return <div ref={mount} style={{ width: "100%", height: "70vh" }} />;
};

export default Earth;
