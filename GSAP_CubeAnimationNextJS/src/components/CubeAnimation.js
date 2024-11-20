import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

export default function CubeAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Scene, Renderer, and Camera
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, -1.7, 5);

    // OrbitControls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true; // Smooth movement
    controls.dampingFactor = 0.1; // Control sensitivity
    controls.enableZoom = true;
    controls.enablePan = true;


    // Cube with Rounded Edges
    const cubeGeometry = new RoundedBoxGeometry(1, 1, 1, 5, 0.05);
    const cubeMaterial = new THREE.MeshMatcapMaterial({
      matcap: new THREE.TextureLoader().load(
        "https://images.unsplash.com/photo-1626908013943-df94de54984c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2673&q=80"
      ),
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // LightBar Class
    class LightBar {
      constructor(scene, index) {
        const amp = 0.5;
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const geometry = new THREE.CapsuleGeometry(
          0.02,
          0.5 + Math.random(),
          5,
          16
        );

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.y =
          -Math.random() * (amp / 2) + Math.random() * (amp / 2);
        this.mesh.position.x = -Math.sin(index * 0.5) * Math.PI;
        this.mesh.position.z = -Math.cos(index * 0.5) * Math.PI;

        scene.add(this.mesh);
      }
    }

    // Create Light Bars
    for (let i = 0; i <= 23; i++) {
      new LightBar(scene, i);
    }

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      scene.rotation.y = elapsedTime * 0.2;
      cube.rotation.x = elapsedTime * 0.3;
      cube.rotation.y = elapsedTime * 0.5;
      cube.position.y = Math.sin(elapsedTime * 0.5) * 0.2;

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: -1,
      }}
    />
  );
}
