<template>
<div>
  <v-app>
    <v-main>
      <router-view></router-view>
    {{result}}
    </v-main>
  </v-app>

</div>
</template>

<script>
var qrCode = document.getElementById('qrcode').value
console.log(document.getElementById('qrcode').value)
export default {
  name: 'App',
  props: ['test'],
  data () {
    return {
      result: qrCode
    }
  },
  mounted () {
  }
}

</script>
