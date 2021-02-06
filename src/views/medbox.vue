<template>
  <div>
    <!-- <a href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue">SCAN</a> -->
    <!-- <v-btn color="red" href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue">SCAN</v-btn> -->
    <v-btn color="green" href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue">SCAN</v-btn>
    {{QRresult}}

  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      ScanQRcodevalue: '',
      QRresult: ''
    }
  },
  methods: {
    oneChatCallBackQRScanner (ScanQRcodevalue) {
      alert(ScanQRcodevalue)
    }
  },
  updated () {
    alert('update')
    // this.oneChatCallBackQRScanner()
  }
}
</script>

<style lang="scss" scoped>

</style>
