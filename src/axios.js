import axios from 'axios'
//http://192.168.1.4
//axios.defaults.baseURL = 'http://gescompta.lce-ci.com/public/api'
axios.defaults.baseURL = 'http://gescompta.lce-ci.com/public/api'
if (localStorage.getItem('token') != null) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
}
