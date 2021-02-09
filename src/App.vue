<template>
<div>
  <v-app>
    <v-main>
      <router-view></router-view>
      <div>REAL QR SCAN</div>
      <div id="qrcodecallback"></div>
      <div>this is result</div>
      <div>{{result}}</div>
    </v-main>
  </v-app>

</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      result: document.getElementById('qrcodecallback').innerHTML
    }
  }
}
</script>
