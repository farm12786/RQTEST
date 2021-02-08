<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <a href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue" target="_blank">
      <font size=+4>Scan QR Code to Open Box</font>
    </a>
    <div>{{this.$store.state.qrtest}}</div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: ['test'],
  data () {
    return {
      qrtest: ''
    }
  }
}

</script>
