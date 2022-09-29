import axios from 'axios'


const api = axios.create({
    baseURL: 'https://lm-participacoes.herokuapp.com/'
    /* baseURL: 'http://54.233.223.26:3030/' */
    /* baseURL: 'http://26.75.88.228:3030/' */
})

export default api;