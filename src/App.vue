<template>
<div>
  <v-app>
    <v-main>
      <router-view></router-view>
      <a href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue" target="_blank">
      <font size=+4>Scan QR Code to Open Box</font>
      </a>
      <!-- <div>this is result :</div> -->
      <!-- <div>{{result}}</div> -->
      <div>MIXIN TEST</div>
      <button>123546</button>
    </v-main>
  </v-app>

</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // result: qrCode
    }
  },
  updated () {
    alert('update')
    this.oneChatCallBackQRScanner()
  }
}

</script>
