import axios from 'axios'

const instance = axios.create({
  baseURL: 'fake_url'
})

export default instance