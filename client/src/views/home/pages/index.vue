<template>
  <div id="app">
  </div>
</template>

<script>
// import THREE from 'three-js'
// import Detector from './assets/js/Detector'
// import GeometryUtils from './assets/js/GeometryUtils'
// import Stats from './assets/js/stats.min'
var {Detector} = require('@/assets/js/Detector.js')
// var { GeometryUtils } = require('./assets/js/GeometryUtils.js')
// var { Stats } = require('./assets/js/stats.min.js')

var THREE = require('three')
export default {
  name: 'app',
  data: function () {
    return {
      imgsrc: '../../../../assets/img/nx.jpg'
      // imgsrc: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/cube/Park3Med/nx.jpg'
    }
  },

  mounted () {
    // var scene = new THREE.Scene()

    // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    // var renderer = new THREE.WebGLRenderer()

    // renderer.setSize(window.innerWidth, window.innerHeight)

    // document.body.appendChild(renderer.domElement)
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
    if (!Detector.webgl) Detector.addGetWebGLMessage()
    var container
    var camera, scene, renderer
    var spheres = []
    var mouseX = 0; var mouseY = 0
    var windowHalfX = window.innerWidth / 2
    var windowHalfY = window.innerHeight / 2
    document.addEventListener('mousemove', onDocumentMouseMove, false)
    init()
    animate()
    function init () {
      container = document.createElement('div')
      document.body.appendChild(container)
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100000)
      camera.position.z = 3200
      scene = new THREE.Scene()
      scene.background = new THREE.CubeTextureLoader()
        .setPath('../../../assets/img/')
        .load(['https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/cube/Park3Med/nx.jpg',
          'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ])
      console.log(scene.background)
      var geometry = new THREE.SphereBufferGeometry(100, 32, 16)
      var material = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: scene.background, refractionRatio: 0.95 })
      material.envMap.mapping = THREE.CubeRefractionMapping
      for (var i = 0; i < 500; i++) {
        var mesh = new THREE.Mesh(geometry, material)
        mesh.position.x = Math.random() * 10000 - 5000
        mesh.position.y = Math.random() * 10000 - 5000
        mesh.position.z = Math.random() * 10000 - 5000
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1
        scene.add(mesh)
        spheres.push(mesh)
      }
      //
      renderer = new THREE.WebGLRenderer()
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(renderer.domElement)
      //
      window.addEventListener('resize', onWindowResize, false)
    }
    function onWindowResize () {
      windowHalfX = window.innerWidth / 2
      windowHalfY = window.innerHeight / 2
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    function onDocumentMouseMove (event) {
      mouseX = (event.clientX - windowHalfX) * 10
      mouseY = (event.clientY - windowHalfY) * 10
    }
    //
    function animate () {
      requestAnimationFrame(animate)
      render()
    }
    function render () {
      var timer = 0.0001 * Date.now()
      for (var i = 0, il = spheres.length; i < il; i++) {
        var sphere = spheres[ i ]
        sphere.position.x = 5000 * Math.cos(timer + i)
        sphere.position.y = 5000 * Math.sin(timer + i * 1.1)
      }
      camera.position.x += (mouseX - camera.position.x) * 0.05
      camera.position.y += (-mouseY - camera.position.y) * 0.05
      camera.lookAt(scene.position)
      renderer.render(scene, camera)
    }
  }
}
</script>

<style>

</style>
