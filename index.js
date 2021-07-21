const tapo = require("tp-link-tapo-connect")
const key = require("./.password.json")

tapo.loginDeviceByIp(key.email, key.password, "192.168.88.28").then((value) => {
     tapo.getDeviceInfo(value).then(console.log)
    })
