const tapo = require("tp-link-tapo-connect")

tapo.loginDeviceByIp("k890164@gmail.com", "nocxu7-vycvyk-rehsuJ", "192.168.88.28").then((value) => {
     tapo.getDeviceInfo(value).then(console.log)
    })
