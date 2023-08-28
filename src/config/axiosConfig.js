import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://api.giphy.com/v1/stickers'
})

export default axiosClient;