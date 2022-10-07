const crypto = require('crypto')

//CONFIG
const PUBLIC_KEY = process.env.POF_API_KEY_PUBLIC
const PRIVATE_KEY = process.env.POF_API_KEY_PRIVATE
const API_VERSION = process.env.POF_API_VERSION

export default function ({ $auth, $axios, redirect } ) {

  $axios.onRequest(config => {
    
    const method = config.method.toUpperCase();
    
    const uri = `/${API_VERSION}/ges${config.url}`;
    
    const CONCAT = method + uri;
    console.log(CONCAT);
    const API_SIGN = crypto.createHmac('sha1', PRIVATE_KEY).update(CONCAT, "utf-8").digest('hex');

    config.headers["x-public-key"] = PUBLIC_KEY;
    config.headers["x-datetime"] = datetime;
    config.headers["x-signature"] = API_SIGN;
    

  });

  $axios.onError(error => {
    console.log("Axios error : " + error)
    const code = parseInt(error.response && error.response.status)
    console.log("code : " + code)
    if (code === 401) {
      console.log("error 401");
      if(!error.response.config.url === "/sessions"){
        console.log("error 401 no login");
      }
    }
    if (code === 500) {
      console.log("error 500")
      if(error.response.config.url === "/sessions"){
        console.log("error 500 login");
      }
    }
  });

}
