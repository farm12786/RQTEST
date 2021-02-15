<template>
<div>
  1.324
  {{data}}
<!-- <a href="javascript:connectServiceByUUID();">connectServiceByUUID</a><br/>
<a href="javascript:readCharacteristicByUUID();">readCharacteristicByUUID</a><br/>
<a href="javascript:writeCharacteristicByUUID();">writeCharacteristicByUUID</a> -->
=================================================================
<p id="state"></p>
<span id="list_deveiceservice"></span>
<!-- {{checkuserAgent()}} -->
return_once_device
{{return_once_device}}
<h1> <a href="javascript:OneChat_scanDevice(5000);">scan Device</a> </h1> <br/>
<h1> <a href="javascript:OneChat_stopScanDevice('success');">stop scan</a> </h1> <br/>
<h1> <a href="javascript:OneChat_disconnectBluetoothAll('success');">disconnect</a> </h1> <br/>
<h1> <a href="javascript:OneChat_disconnectBluetoothByUUID('7800b317-e65c-3561-ab22-a9ef256fe7bb');">disconnectUUID ขนุน</a> </h1> <br/>
device list
{{device}}
================

<h1> <a href="javascript:OneChat_getPrimaryService('7800b317-e65c-3561-ab22-a9ef256fe7bb');">Device ขนุน</a> </h1> <br/>

<h1> <a href="javascript:OneChat_getPrimaryService('8174B682-CF07-48B7-94DB-A6785CA078D7');">Device พี่นัท</a> </h1> <br/>
<br/>
================

service list
{{service}}
<h1> <a href="javascript:OneChat_connectServiceByUUID('7800b317-e65c-3561-ab22-a9ef256fe7bb','5b5c170c-9637-4045-b9fe-cd89b0cf0214');">connectServiceByUUID ขนุน</a> </h1> <br/>
<h1> <a href="javascript:OneChat_getCharacteristic('5b5c170c-9637-4045-b9fe-cd89b0cf0214');">getCharacteristic ขนุน</a> </h1>
<h1> <a href="javascript:OneChat_getCharacteristic('ADE8438A-E94B-4B3D-9CB1-346D689CB5C7');">getCharacteristic พี่นัท</a> </h1> <br/>
================
charact list
{{charact}}

<h1> <a href="javascript:OneChat_readCharacteristic('00001800-0000-1000-8000-00805f9b34fb');">read Characteristic พี่นัท</a> </h1> <br/>
<h1> <a href="javascript:OneChat_writeCharacteristic('E0796F74-FAD3-4A6D-883B-722F584A394C','Hello jam','text');">write Characteristic ขนุน</a> </h1> <br/>
================

<h1> <a href="javascript:OneChat_readCharacteristicByUUID('8174B682-CF07-48B7-94DB-A6785CA078D7','ADE8438A-E94B-4B3D-9CB1-346D689CB5C7','00001800-0000-1000-8000-00805f9b34fb');">read CharacteristicUUID พี่นัท</a> </h1> <br/>

<h1> <a href="javascript:OneChat_writeCharacteristicByUUID('fcdbcd60-4ad4-3bfc-90e4-06145527d641','5b5c170c-9637-4045-b9fe-cd89b0cf0214', 'E0796F74-FAD3-4A6D-883B-722F584A394C','Hello jam','text');">write CharacteristicUUID ขนุน</a> </h1> <br/>
================

<!-- <h1> <a href="javascript:OneChat_readCharacteristic('5b5c170c-9637-4045-b9fe-cd89b0cf0214');">readCharacteristic</a> </h1> <br/> -->

<!-- <h1> <a :href="OneChat_getPrimaryService('5396fd99-033d-3dbc-b8c9-42df0cfe25ca')">Device พี่นัท</a> </h1> <br/> -->
<!-- <h1> <a href="javascript:OneChat_getPrimaryService('2732f23b-d4c9-3def-8359-36e63dfa9ca2');">Device 2732f23b พี่นัท</a> </h1> <br/> -->
<!-- <span id="listdevice"></span> -->
<!-- <h1> <a href="javascript:helloandroid('kiki');">scan Device</a> </h1> <br/> -->
<!-- <br/><h1> <a href="javascript:getPrimaryService();">select Device01</a> </h1> <br/>
<span id="listservice"></span>

<br/><h1> <a href="javascript:getCharacteristic();">select Service01</a> </h1> <br/>
<span id="listcharacteristic"></span>

<br/><h1> <a href="javascript:readCharacteristic();">read</a> </h1> <br/>

<br/><input type="text" id="write_characteristic" placeholder="กรอกข้อมูล" style="width: 50%; color: black; padding: 14px 20px; margin: 8px 0; border: 1px solid black; border-radius: 4px;">
<h1> <a href="javascript:writeCharacteristic();">write</a> </h1> <br/>
 -->

<a href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue" target="_blank">open qrcode</a>
<span id="dataQrcode"></span>

<!-- <v-btn @click="test()">test</v-btn ><br/> -->
<!-- <span id="listdevice"></span> -->

</div>
</template>

<script>

// var uuid_device02 = '12345678'

export default {
  data: function () {
    return {
      data: '',
      device: '',
      service: '',
      charact: '',
      return_once_device: ''
      // get token() {
      //   return localStorage.getItem('uuid_device01') || 0;
      // },
      // set token(value) {
      //   localStorage.setItem('uuid_device01', value);
      // }
    }
  },
  created () {
  },
  watch: {
  },
  computed: {
  },
  // components: {
  //   uuid_device01: uuid_device01
  // },
  mounted () {
    window.addEventListener('oneChatCallBackQRScanner', async (e) => {
      alert(e.detail.qrcode)
    })
    window.addEventListener('oneChatBluetoothCallBackData', async (e) => {
      this.data = e.detail
      var data = e.detail.data
      var type = e.detail.type
      alert(data)
      try {
        if (type === 'get_device_service') {
          this.device = this.data
          var obj = JSON.parse(this.data.data)
          alert(obj)
          // OneChat_getPrimaryService(obj.data[0].uuid)
          // var message = '<u>รายชื่ออุปกรณ์ </u><br/>'
          // this.uuid_device01 = obj[0].uuid
          // for (var i = 0; i < obj.length; i += 1) {
          //   message = message + '<p>' + obj[i].bluetooth_name + '</p>'
          // }
          // document.getElementById("listdevice").innerHTML=message;
        } else if (type === 'get_service') {
          this.service = this.data
        } else if (type === 'return_once_device') {
          this.return_once_device = this.data
        }
        //   var obj = this.data
        //   var message = '<u>รายชื่อบริการ </u><br/>'
        //   uuid_service01 = obj.uuid[0]
        //   for (var i = 0; i < obj.length; i += 1) {
        //     message = message + '<p>' + obj.uuid[i] + '</p>'
        //   }
        //   document.getElementById("listservice").innerHTML=message;
        // } else if (type == 'get_characteristic') {
        //   var obj = this.data
        //   var message = '<u>รายชื่อcharacteristic</u><br/>'
        //   for (var i = 0; i < obj.length; i += 1) {
        //     message = message + '<p>' + obj[i].uuid + '(' + obj[i].type + ')</p>'
        //     if (obj[i].type == 'read') {
        //       uuid_characteristic_read = obj[i].uuid
        //     } else if (obj[i].type == 'write') {
        //       uuid_characteristic_write = obj[i].uuid
        //     }
        //   }
        //   document.getElementById("listcharacteristic").innerHTML=message;
        // } else if (type == 'read_characteristic') {
        //   alert(this.data)
        // } else if (type == 'write_characteristic') {
        //   alert(this.data)
        // }
      } catch (error) {
        alert(error)
      }
    })
  },
  methods: {
    test () {
      // alert(type)
      // console.log(uuid_device02)
      // uuid_device02 = 'test123455'
      // console.log(uuid_device02)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
