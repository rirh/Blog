<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>

  </div>
</template>
<script>
// import axios from 'axios';

import { init } from '@/actions';

export default {
  name: 'App',
  mounted() {
    this.postInfo();
  },
  methods: {
    getIps(callback) {
      const ipDups = {};
      const RTCPeerConnection = window.RTCPeerConnection
       || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
      const mediaConstraints = {
        optional: [{ RtpDataChannel: true }],
      };
      let servers;
      let i = 0;
      if (window.webkitRTCPeerConnection) servers = { iceServers: [{ urls: 'stun:stun.services.mozilla.com' }] };
      const pc = new RTCPeerConnection(servers, mediaConstraints);
      pc.onicecandidate = (ice) => {
        if (ice.candidate) {
          console.log(ice);
          const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
          const ipAddr = ipRegex.exec(ice.candidate.candidate)[1];
          if (ipDups[ipAddr] === undefined) callback(ipAddr, i++);
          ipDups[ipAddr] = true;
        }
      };
      pc.createDataChannel('');
      pc.createOffer((result) => {
        pc.setLocalDescription(result, () => { });
      }, () => { });
    },

    postInfo() {
      this.getIps((ip) => {
        init({
          ip,
        }).then((res) => { console.log(res); });
      });
    },

  },


};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
   position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.router-layout {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
