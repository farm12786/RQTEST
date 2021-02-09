<template>
<div>
  <v-app>
    <v-main>
      <router-view></router-view>
      <!-- <div>this is result :</div> -->
      <!-- <div>{{result}}</div> -->
      <div>MIXIN TEST</div>
      <div>{{result}}</div>
    </v-main>
  </v-app>

</div>
</template>

<script>
var qrCode = document.getElementById('qrcode').value
export default {
  name: 'App',
  data () {
    return {
      result: qrCode
    }
  }
}

</script>
