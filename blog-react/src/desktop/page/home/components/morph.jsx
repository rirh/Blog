import React, { Component, Fragment } from 'react'
import u from "@/utils";
import * as THREE from "three";
import * as GLTFLoader from 'three-gltf-loader';
import { tiger_action_arr, emotes, states } from "./data";



export default class morph extends Component {
  componentDidMount() {
    this.isWebGl()
    let container, clock, mixer, actions, activeAction, previousAction;
    let camera, scene, renderer, model;
    let api = { state: 'Idle' };
    let height = window.innerHeight / 4;
    let width = window.innerWidth / 4;
    container = this.refs.container;

    init();
    animate();
    function init() {
      camera = new THREE.PerspectiveCamera(25, width / height, 0.25, 100);
      camera.position.set(8, 2, 10);
      camera.lookAt(new THREE.Vector3(0, 2, 0));
      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0xe0e0e0);
      scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);
      clock = new THREE.Clock();
      // lights
      var light = new THREE.HemisphereLight(0xffffff, 0x444444);
      light.position.set(0, 20, 0);
      scene.add(light);
      light = new THREE.DirectionalLight(0xffffff);
      light.position.set(0, 20, 10);
      scene.add(light);


      var loader = new GLTFLoader();
      loader.load('static/models/RobotExpressive.glb', function (gltf) {
        // loader.load('static/models/Soldier.glb', function (gltf) {
        model = gltf.scene;
        scene.add(model);
        createGUI(model, gltf.animations);
      }, undefined, function (e) {
        console.error(e);
      });
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.setClearColor(0xEEEEEE, 0.0);
      renderer.gammaOutput = true;
      renderer.gammaFactor = 2.2;
      container.appendChild(renderer.domElement);
      window.addEventListener('resize', onWindowResize, false);

    }

    function createGUI(model, animations) {


      mixer = new THREE.AnimationMixer(model);
      actions = {};
      for (var i = 0; i < animations.length; i++) {
        var clip = animations[i];
        var action = mixer.clipAction(clip);
        actions[clip.name] = action;
        if (emotes.indexOf(clip.name) >= 0 || states.indexOf(clip.name) >= 4) {
          action.clampWhenFinished = true;
          action.loop = THREE.LoopOnce;
        }
      }


      function restoreState() {
        mixer.removeEventListener('finished', restoreState);
        fadeToAction(api.state, 0.2);
      }


      activeAction = actions[api.state];
      activeAction.play();

      let cursor = 0;
      const length = tiger_action_arr.length - 1;
      const do_action = () => {
        const { action, dura } = tiger_action_arr[cursor];
        fadeToAction(action, dura)
        setTimeout(() => {
          if (cursor < length) {
            cursor += 1;
            do_action()
          } else {
            mixer.addEventListener('finished', restoreState);
          }
        }, dura * 10000 / 3)
      }
      do_action()
    }
    function fadeToAction(name, duration) {
      console.log(name, duration)
      previousAction = activeAction;
      activeAction = actions[name];
      if (previousAction !== activeAction) {
        previousAction.fadeOut(duration);
      }
      activeAction
        .reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(duration)
        .play();
    }
    function onWindowResize() {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    //
    function animate() {
      var dt = clock.getDelta();
      if (mixer) mixer.update(dt);
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

  }
  isWebGl() {
    if (u.isWebGLAvailable() === false) {
      window.document.body.appendChild(u.getWebGLErrorMessage());
    }
  }
  render() {
    return (
      <Fragment>
        <div ref="container" ></div>
      </Fragment>
    )
  }
}
