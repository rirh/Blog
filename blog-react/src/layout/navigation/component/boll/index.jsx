import React, { Component, Fragment } from 'react';
import * as THREE from "three";
import Detector from './detector';

class Boll extends Component {
    componentDidMount() {
    if (!Detector.webgl) Detector.addGetWebGLMessage();
    let container;
    let camera;
    let scene;
    let renderer;
    const spheres = [];
    let mouseX = 0;
    let mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
 
    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - windowHalfX) * 10;
      mouseY = (event.clientY - windowHalfY) * 10;
    }
    document.addEventListener("mousemove", onDocumentMouseMove, false);
    container = this.refs.container;

    function init() {
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        100000
      );
      camera.position.z = 3200;
      scene = new THREE.Scene();
      scene.background = new THREE.CubeTextureLoader()
        .setPath("static/image/")
        .load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);
      const geometry = new THREE.SphereBufferGeometry(100, 32, 16);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        envMap: scene.background,
        refractionRatio: 0.95
      });
      material.envMap.mapping = THREE.CubeRefractionMapping;
      const arrStr = [
        "TigerZH",
        "HU ZHI HUI",
        "welcome",
        "REACT APP" 
      ];
      const loader = new THREE.FontLoader();
      loader.load(
        "static/res/typefont.json",
        font => {
          arrStr.forEach(e => {
            const textGeo = new THREE.TextGeometry(e, {
              font,
              size: 300,
              height: 5,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 10,
              bevelSize: 8,
              bevelSegments: 5
            });
            const textMate = new THREE.MeshPhongMaterial({
              color: 0xff0000,
              envMap: scene.background,
              refractionRatio: 0.95
            });
            const textMesh = new THREE.Mesh(textGeo, textMate);
            textMesh.castShadow = true;
            textMesh.position.x = Math.random() * 10000 - 5000;
            textMesh.position.y = Math.random() * 10000 - 5000;
            textMesh.position.z = Math.random() * 10000 - 5000;
            textMesh.scale.z = Math.random() * 3 + 1;
            textMesh.scale.y = textMesh.scale.z;
            textMesh.scale.x = textMesh.scale.y;
            scene.add(textMesh);
            spheres.push(textMesh);
          });
        }
      );

      for (let i = 0; i < 400; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 10000 - 5000;
        mesh.position.y = Math.random() * 10000 - 5000;
        mesh.position.z = Math.random() * 10000 - 5000;
        mesh.scale.z = Math.random() * 3 + 1;
        mesh.scale.y = mesh.scale.z;
        mesh.scale.x = mesh.scale.y;

        scene.add(mesh);
        spheres.push(mesh);
      }

      //
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
      //
      window.addEventListener("resize", onWindowResize, false);
    }

    //

    function render() {
      const timer = 0.0001 * Date.now();
      for (let i = 0, il = spheres.length; i < il; i++) {
        const sphere = spheres[i];
        sphere.position.x = 5000 * Math.cos(timer + i);
        sphere.position.y = 5000 * Math.sin(timer + i * 1.1);
      }
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }
    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    init();
    animate();
       
    }
    render() {
        return (
            <Fragment>
                <div ref="container"></div>
            </Fragment>
        )
    }
}
export default Boll;