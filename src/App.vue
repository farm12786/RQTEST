<template>
  <div>
    <v-app>
      <v-main>
        <!-- <a href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue" target="_blank">
        <font size=+4>Scan QR Code to Open Box</font>
        </a> -->
        <div>
          COMPLETE BLE SCAN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        </div>
        <v-btn color="success" href="https://chat-api.one.th/go_api/api/v1/openScanQRcodeWithValue" target="_blank">Scan QR Code</v-btn>
        <v-btn color="success" @click="openBoxByQRCode(qrcodeResult)">Scan QR BLE</v-btn>
        <!-- <div>QR Scan TEST</div>
        <v-btn color="success" @click="init">test button</v-btn> -->
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
      qrcodeResult: '',
      result: '',
      scan_job: '',
      time_scan: 4,
      event: null,
      scandebug: false,
      BLEResult: null
    }
  },
  methods: {
    connectBLE (type, data) {
      if (type === 'get_device_service') {
        const obj = JSON.parse(data)

        for (let i = 0; i < obj.data.length; i++) {
          const d = obj.data[i]
          let mfdata = 'N/A'
          let m = {}; let mx

          if (d.manufacturer_data) {
            try {
              mx = d.manufacturer_data.replace(/[{} ]/g, '')
              const arr = mx.split(',')
              for (const c of arr) {
                const b = c.split('=')
                m[b[0]] = b[1]
              }

              if (m) {
                mfdata = m.bytes
              }

              if (this.scan_job.manufacturer_data && (this.scan_job.manufacturer_data === mfdata)) {
                window.webkit.messageHandlers.OneChat_stopScanDevice.postMessage()
                if (typeof (this.scan_job.callback) === 'function') {
                  this.scan_job.callback({
                    count: i,
                    name: d.bluetooth_name,
                    uuid: d.uuid,
                    manufacturer_data: d.manufacturer_data,
                    state: d.state,
                    rssi: d.rssi
                  })
                  this.clearScanJob()
                }
              }
            } catch (e) {
              m = 'error'
            }
          } else {
            // logtoHTML('-->'+d.bluetooth_name+'<--<br>');
            if (this.scan_job.name && (this.scan_job.name === d.bluetooth_name)) {
              this.logtoHTML('****** to write --><br>' + JSON.stringify({ type, data }))

              window.webkit.messageHandlers.OneChat_stopScanDevice.postMessage()
              if (typeof (this.scan_job.callback) === 'function') {
                this.scan_job.callback({
                  round: i,
                  name: d.bluetooth_name,
                  uuid: d.uuid,
                  manufacturer_data: d.manufacturer_data,
                  state: d.state,
                  rssi: d.rssi
                })
                this.clearScanJob()
              }
            }
          }
        }
      } else {
        if (type !== 'return_once_device' && type !== 'start_scan_bluetooth' && type !== 'write_characteristic_by_uuid' && type !== 'stop_scan_bluetooth') {
          // alert(JSON.stringify({type, data}, undefined, 4));
          this.scandebug = false
          this.logtoHTML(data)
        }
      }
    },

    openBoxByQRCode (qrcode) {
      alert('this is openBoxByQRCode')
      alert(qrcode)
      if (qrcode) {
        let payload = {}
        const data = { boxid: qrcode.toString(), oneid: this.oneid, time: new Date().getTime(), result: 'success' }
        alert('data :', data)
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
      alert('this is unlockBLELock')
      alert(mid)
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
      alert('this is scanDevice')
      alert('filter : ', filter)
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
      alert('this is logtoHTML')
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

    clearScanJob () {
      alert('this is clearScanJob')
      this.scan_job = {
        name: '',
        manufacturer_data: '',
        callback: ''
      }
    }

  },
  async mounted () {
    this.clearScanJob()
    window.addEventListener('oneChatCallBackQRScanner', async (e) => {
      alert('this is scan')
      this.qrcodeResult = e.detail.qrcode
      alert(this.qrcodeResult)
    })
    // window.addEventListener('oneChatBluetootchCallBackData', async (e) => {
    //   alert('this is ble')
    //   this.BLEResult = e.detail
    //   alert(this.BLEResult)
    //   this.connectBLE(e.detail.type, e.detail.data)
    // })
  }
}
</script>
