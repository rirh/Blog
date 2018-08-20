<template>
  <div>
    <div id="crystal" />
    <div
      v-if="showFullScreenBtn&&showfull"
      class="full-navigation-header"
    >
      <Row>
        <Col
          span="2"
          style="text-align:center;color:#fff"
        >
        <Icon
          type="ios-expand"
          size="24"
          @click="full"
        />
        <span style="display:inline-block;font-size:14px;margin-left:5px">全屏浏览</span>
      </Col>
      </Row>
    </div>
    <div
      v-if="showFullScreenBtn&&showfull"
      class="getting-start"
    >
      <Row>
        <Col
          span="24"
          style="text-align:center;color:#fff"
        >
        <Icon
          type="ios-arrow-round-down"
          size="34"
          @click="full"
        />
      </Col>
      </Row>
      <br>
      <Row>
        <Col
          span="24"
          style="text-align:center;color:#fff"
        >
        <Button
          size="large"
          ghost
          @click="gettingStart"
        >点击开始</Button>
      </Col>
      </Row>
    </div>
  </div>

</template>

<script>
import { host } from '@/utils/config';

const { Detector } = require('./Detector.js');
const THREE = require('three');


export default {
  name: 'FullScreen',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showfull: true,
      caheshowfull: true,
    };
  },
  computed: {
    showFullScreenBtn() {
      return window.navigator.userAgent.indexOf('MSIE') < 0;
    },
  },
  mounted() {
    // var scene = new THREE.Scene()

    // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    // var renderer = new THREE.WebGLRenderer()

    // renderer.setSize(window.innerWidth, window.innerHeight)
    // const container = document.getElementById('crystal')

    // container.appendChild(renderer.domElement)
    // var geometry = new THREE.CubeGeometry(1, 1, 1)
    // var material = new THREE.MeshBasicMaterial({color: 0x00ff00})
    // var cube = new THREE.Mesh(geometry, material); scene.add(cube)
    // camera.position.z = 5
    // function render () {
    //   requestAnimationFrame(render)
    //   cube.rotation.x += 0.1
    //   cube.rotation.y += 0.1
    //   renderer.render(scene, camera)
    // }
    // render()
    // console.log(document.querySelectorAll('#box img'))
    if (!Detector.webgl) Detector.addGetWebGLMessage();
    let container;
    let camera; let scene; let
      renderer;
    const spheres = [];
    let mouseX = 0; let mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    init();
    animate();
    function init() {
      container = document.getElementById('crystal');
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100000);
      camera.position.z = 3200;
      scene = new THREE.Scene();
      //   scene.background = new THREE.CubeTextureLoader()
      scene.background = new THREE.CubeTextureLoader()
      // .load(

      //   [
      //     'http://localhost:3000/image?name=nx',
      //     'http://localhost:3000/image?name=px',
      //     'http://localhost:3000/image?name=ny',
      //     'http://localhost:3000/image?name=py',
      //     'http://localhost:3000/image?name=nz',
      //     'http://localhost:3000/image?name=pz'

        //     // '../../../../assets/img/nx.jpg',
        //     // 'https://raw.githubusercontent.com/Ctleryes/Blog/dev/client/public/assets/img/nx.jpg',
        //     // 'https://raw.githubusercontent.com/Ctleryes/Blog/dev/client/public/assets/img/px.jpg',
        //     // 'https://raw.githubusercontent.com/Ctleryes/Blog/dev/client/public/assets/img/py.jpg',
        //     // 'https://raw.githubusercontent.com/Ctleryes/Blog/dev/client/public/assets/img/ny.jpg',
        //     // 'https://raw.githubusercontent.com/Ctleryes/Blog/dev/client/public/assets/img/nz.jpg',
        //     // 'https://raw.githubusercontent.com/Ctleryes/Blog/dev/client/public/assets/img/pz.jpg'
        //   ])
        // scene.background.image = document.querySelectorAll('#box img')
        .setPath(`${host}/image?name=`)
        .load(['px', 'nx', 'py', 'ny', 'pz', 'nz']);
      console.log(scene);
      const geometry = new THREE.SphereBufferGeometry(100, 32, 16);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: scene.background, refractionRatio: 0.95 });
      material.envMap.mapping = THREE.CubeRefractionMapping;
      for (let i = 0; i < 500; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 10000 - 5000;
        mesh.position.y = Math.random() * 10000 - 5000;
        mesh.position.z = Math.random() * 10000 - 5000;
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;
        scene.add(mesh);
        spheres.push(mesh);
      }
      //
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
      //
      window.addEventListener('resize', onWindowResize, false);
    }
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
    //
    function animate() {
      requestAnimationFrame(animate);
      render();
    }
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
  },
  created() {
    let isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    isFullscreen = !!isFullscreen;
    document.addEventListener('fullscreenchange', () => {
      this.$emit('input', !this.value);
      this.$emit('on-change', !this.value);
      this.isfullscreenchange();
    });
    document.addEventListener('mozfullscreenchange', () => {
      this.$emit('input', !this.value);
      this.$emit('on-change', !this.value);
      this.isfullscreenchange();
    });
    document.addEventListener('webkitfullscreenchange', () => {
      this.$emit('input', !this.value);
      this.$emit('on-change', !this.value);
      this.isfullscreenchange();
    });
    document.addEventListener('msfullscreenchange', () => {
      this.$emit('input', !this.value);
      this.$emit('on-change', !this.value);
      this.isfullscreenchange();
    });

    this.$emit('input', isFullscreen);
  },
  methods: {
    isfullscreenchange() {
      this.showfull = !this.showfull;
    },
    gettingStart() {
      this.$emit('gettingStart');
    },
    full() {
      const main = document.body;
      if (this.value) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else if (main.requestFullscreen) {
        main.requestFullscreen();
      } else if (main.mozRequestFullScreen) {
        main.mozRequestFullScreen();
      } else if (main.webkitRequestFullScreen) {
        main.webkitRequestFullScreen();
      } else if (main.msRequestFullscreen) {
        main.msRequestFullscreen();
      }
    },
  },
};
</script>

<style scoped>
.full-navigation-header{
    position:absolute;
    left: 20px;
    top:20px;
    width: 100%;
}
.getting-start{
     position:absolute;
    left: 50%;
    top:60%;
    width: 200px;
    height: 50px;
    transform: translate(-60%,185%);
}
</style>
