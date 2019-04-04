import React, { Component, Fragment } from 'react'
import u from "@/utils";
import * as THREE from "three";
import * as GLTFLoader from 'three-gltf-loader';


export default class morph extends Component {
  componentDidMount() {
    this.isWebGl()
    let container, clock, mixer, actions, activeAction, previousAction;
    let camera, scene, renderer, model;
    let api = { state: 'Running' };
    container = this.refs.container;

    init();
    animate();
    function init() {
      camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.25, 100);
      camera.position.set(8, 2, 10);
      camera.lookAt(new THREE.Vector3(0, 2, 0));
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xe0e0e0);
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
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff, 0)
      renderer.gammaOutput = true;
      renderer.gammaFactor = 2.2;
      container.appendChild(renderer.domElement);
      window.addEventListener('resize', onWindowResize, false);

    }

    function createGUI(model, animations) {
      var states = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing'];
      var emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp'];
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
      // states
      // var statesFolder = gui.addFolder('States');
      // var clipCtrl = statesFolder.add(api, 'state').options(states);
      // clipCtrl.onChange(function () {
      //   console.log(api.state)
      //   fadeToAction(api.state, 0.5);
      // });
      // statesFolder.open();
      // emotes
      // var emoteFolder = gui.addFolder('Emotes');
      // function createEmoteCallback(name) {
      //   api[name] = function () {
      //     fadeToAction(name, 0.2);
      //     mixer.addEventListener('finished', restoreState);
      //   };
      //   emoteFolder.add(api, name);
      // }
      function restoreState() {
        mixer.removeEventListener('finished', restoreState);
        fadeToAction(api.state, 0.2);
      }
      // for (let i = 0; i < emotes.length; i++) {
      //   createEmoteCallback(emotes[i]);
      // }
      // emoteFolder.open();
      // expressions

      // face = model.getObjectByName('Head_2');
      // var expressions = Object.keys(face.morphTargetDictionary);

      // var expressionFolder = gui.addFolder('Expressions');
      // for (let i = 0; i < expressions.length; i++) {
      //   console.log(expressions[i],face)
      //   expressionFolder.add(face.morphTargetInfluences, i, 0, 1, 0.01).name(expressions[i]);
      // }
      activeAction = actions[api.state];
      activeAction.play();
      setInterval(() => { fadeToAction(emotes[Math.floor(Math.random() * (emotes.length - 1))], .2); mixer.addEventListener('finished', restoreState); }, 5000);
      // expressionFolder.open();
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
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
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
