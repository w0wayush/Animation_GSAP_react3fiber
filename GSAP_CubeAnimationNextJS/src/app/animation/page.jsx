"use client"

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import { gsap } from "gsap";

const AnimationPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Three.js Initialization
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000a0b);

    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, -1.7, 5);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    const light = new THREE.HemisphereLight(0xffffff, 0xaaaacc, 1);
    scene.add(light);

    // Add Rounded Box Geometry
    const geometry = new RoundedBoxGeometry(1, 1, 1, 5, 0.05);
    const material = new THREE.MeshMatcapMaterial({
      color: 0xffffff,
      matcap: new THREE.TextureLoader().load(
        "https://images.unsplash.com/photo-1626908013943-df94de54984c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2673&q=80"
      ),
    });

    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // GSAP Animation
    gsap.to(box.rotation, {
      y: Math.PI * 2,
      duration: 4,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.to(box.position, {
      y: 0.5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const render = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      <div className="footer">
        <div className="col">
          <a href="https://www.instagram.com/victorvergara.co/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://victorvergara.co/logo.svg"
              alt="logo"
              style={{ width: "2.5rem", transition: "opacity 0.5s" }}
              onMouseOver={(e) => (e.target.style.opacity = 0.5)}
              onMouseOut={(e) => (e.target.style.opacity = 1)}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default AnimationPage;
