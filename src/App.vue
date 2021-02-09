<template>
<div>
  <v-app>
    <v-main>
      <router-view></router-view>
      <div>REAL QR SCAN</div>
      <div id="qrcodecallback"></div>
    </v-main>
  </v-app>

</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      result: ''
    }
  }
}
</script>
