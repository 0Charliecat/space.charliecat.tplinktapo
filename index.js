const fetch = require('node-fetch')
var url = "https://eu-wap.tplinkcloud.com"

async function tokenner(email, password) {
    var payload = {
            "method": "login",
            "params": {
                "appType": "Tapo_Ios",
                "cloudUserName": email,
                "cloudPassword": password,
                "terminalUUID": "0A950402-7224-46EB-A450-7362CDB902A2"
            }
        }

    var data = await fetch(url, { method: 'POST', body: payload });
    var json = await data.json();
    return json.result.token;
}