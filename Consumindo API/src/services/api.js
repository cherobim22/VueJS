import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://lucas.innovaweb.com.br/google',
    headers: {'Authorization': ''}
   
})
