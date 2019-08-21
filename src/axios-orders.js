import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-7d33a.firebaseio.com/'
})

export default instance