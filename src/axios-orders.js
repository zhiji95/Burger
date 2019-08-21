import axios from 'axios'
const CONFIG = require('./secret.json')

const instance = axios.create({
  baseURL: CONFIG.fireBaseUrl
})

export default instance