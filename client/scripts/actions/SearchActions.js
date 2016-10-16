import axios from 'axios';



import {routes} from '../../../server/utils/Config';



export function userSearch(keyword){
    return dispatch =>{
        //console.log(Config)
        return axios.get(routes.user.search, keyword);
    };
}


