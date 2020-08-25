import {http} from './api';

export default {

    listar:() => {
        return http.get('/auth/geturl');
    },
    salvar:(todos) => {
        return http.post('/tasks',todos);
    },
    google:()=>{
        return http.get('/tasks');
    }

}