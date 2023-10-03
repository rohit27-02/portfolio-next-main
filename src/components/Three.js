import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

function MyThreeComponent() {

  useEffect(() => {
    let mixer;

    const clock = new THREE.Clock();
    const container = document.getElementById('container');

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize((window.innerWidth>768 ? window.innerWidth/2.8:window.innerWidth ), window.innerHeight/1.5);
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x101010);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(40,(window.innerWidth>768 ? window.innerWidth/2.8:window.innerWidth )/( window.innerHeight/1.5), 1, 100);
    camera.position.set(5, 2, 8);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load('/LittlestTokyo.glb', function (gltf) {

      const model = gltf.scene;
      model.position.set(0.6,1,0);
      let scale = window.innerWidth>768?0.01:0.008
      model.scale.set(scale,scale,scale);
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      mixer.clipAction(gltf.animations[0]).play();
      animate();


    }, undefined, function (e) {

      console.error(e);

    });


    function animate() {

      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      mixer.update(delta);

      controls.update();

      renderer.render(scene, camera);

    }


  }, []);

  return <div id='container' />;
}

export default MyThreeComponent;
