import axios from 'axios'
/**
 * 对axios进行加工
 */
// axios.defaults.baseURL = 'http://127.0.0.1:8888/my/myblog/'
axios.defaults.baseURL = 'http://192.168.1.4:8888/my/myblog/'
axios.defaults.withCredentials=true
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers= {
//     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
//   }
export default axios
