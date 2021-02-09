<template>
<div>
  <v-app>
    <v-main>
      <router-view></router-view>
      <div>this is result :</div>
      <div>{{result}}</div>
    </v-main>
  </v-app>

</div>
</template>

<script>
var qrCode = document.getElementById('qrcode').value
console.log(document.getElementById('qrcode').value)
export default {
  name: 'App',
  data () {
    return {
      result: qrCode
    }
  },
  watch: {
    qrCode (newvalue, oldvalue) {
      console.log('this is watcher')
      console.log(newvalue)
      console.log(oldvalue)
    }
  }
}

</script>
