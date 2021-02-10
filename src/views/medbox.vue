<template>
  <div>

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
