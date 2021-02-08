<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <a href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue" target="_blank">
      <font size=+4>Scan QR Code to Open Box</font>
    </a>
    <button>123456789</button>
    </v-main>
  </v-app>
</template>

<script>
function oneChatCallBackQRScanner (ScanQRcodevalue) {
  // alert(ScanQRcodevalue);
  if (ScanQRcodevalue === '') {
    alert('data empty ')
  } else {
    alert('Scan Success!')
    alert(ScanQRcodevalue)
  }
}
export default {
  name: 'App',
  data () {
    return {
      qrtest: ''
    }
  },
  methods: {
    // oneChatCallBackQRScanner (ScanQRcodevalue) {
    //   // alert(ScanQRcodevalue);
    //   if (ScanQRcodevalue === '') {
    //     alert('data empty ')
    //   } else {
    //     alert('Scan Success!')
    //     alert(ScanQRcodevalue)
    //   }
    // }
  },
  updated () {
    oneChatCallBackQRScanner()
  }
}
</script>
