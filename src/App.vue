<template>
<div>
  <v-app>
    <v-main>
      <router-view></router-view>
      <a href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue" target="_blank">
      <font size=+4>Scan QR Code to Open Box</font>
      </a>

      <div>TESTTTTTTTTTTTT</div>
      <div id="qrcodecallback"></div>
      <div>this is result</div>
      <div>{{result}}</div>
    </v-main>
  </v-app>

</div>
</template>

<script>
var qrcode = document.getElementById('qrcodecallback').innerHTML
export default {
  name: 'App',
  data () {
    return {
      result: qrcode
    }
  },
  watch: {
    qrcode (newValue, oldValue) {
      this.result = newValue
    }
  }
}
</script>
