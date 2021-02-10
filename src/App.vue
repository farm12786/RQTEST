<template>
  <div>
    <v-app>
      <v-main>

        <a href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue" target="_blank">
        <font size=+4>Scan QR Code to Open Box</font>
        </a>

        <div>QR Scan TEST</div>

        <!-- <div id="qrcode" ref="qrcode"></div>
        <div id="qrcode" ref="qrcode"></div> -->

        <v-btn color="success" @click="init">test button</v-btn>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      result: '',
      scan_job: '',
      time_scan: 4
    }
  },
  methods: {
    init () {
      document.getElementById('qrcode').innerHTML = 'LYSfc58faa73da0'
      this.result = document.getElementById('qrcode').innerHTML
      // console.log(this.result)
      this.openBoxByQRCode(this.result.toString())
    },
    openBoxByQRCode (qrcode) {
      console.log(qrcode)
      if (qrcode) {
        let payload = {}
        const data = { boxid: qrcode.toString(), oneid: this.oneid, time: new Date().getTime(), result: 'success' }

        // alert(ScanQRcodevalue);
        if (qrcode.toLowerCase().startsWith('lys')) {
          payload = { manufacturer_data: '0x' + qrcode.substr(3) }
        } else {
          payload = { name: qrcode }
        }
        this.unlockBLELock(payload)

        this.logtoHTML('Performing BLE scan for' + JSON.stringify(payload))

        this.log(data)
      }
    },
    unlockBLELock (mid) {
      this.scanDevice(mid, function (info) {
        this.logtoHTML(info)

        window.webkit.messageHandlers.OneChat_writeCharacteristicByUUID.postMessage({
          device_uuid: info.uuid,
          service_uuid: 'FF00',
          characteristic_uuid: 'FF01',
          data: '0006CC59513C4CAA6116D34BF71000B12EF8',
          data_type: 'hex'
        })
      })
    },
    scanDevice (filter = {}, callback) {
      try {
        if (filter.manufacturer_data) {
          this.scan_job.manufacturer_data = filter.manufacturer_data
          if (callback) {
            this.scan_job.callback = callback
          }
        } else if (filter.name) {
          this.scan_job.name = filter.name
          if (callback) {
            this.scan_job.callback = callback
          }
        }
        window.webkit.messageHandlers.scanDevice.postMessage(this.time_scan)
      } catch (error) {
        alert('scanDevice ' + error)
      }
    },
    logtoHTML (input) {
    // alert(input)
      let out = input
      if (typeof (input) === 'object') {
        try {
          out = JSON.stringify(input, undefined, 4)
        } catch (e) {
          alert(e)
        }
      }
      document.getElementById('devicelist').innerHTML = out + '<br>-------------------------------------------------<br>' + document.getElementById('devicelist').innerHTML
    },

    oneChatCallBackQRScanner (val) {
      document.getElementById('qrcodecallback').innerHTML = val
    }
  },
  mounted () {
    window.addEventListener('oneChatCallBackQRScanner', async (e) => {
      alert(e.detail.val)
    })
  }
}
</script>
