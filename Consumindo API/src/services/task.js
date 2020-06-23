import {http} from './api';

export default {

    listar:() => {
        return http.get('/tasks');
    },
    salvar:(todos) => {
        return http.post('/tasks',todos);
    }

}