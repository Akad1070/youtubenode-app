import axios from 'axios';



import {routes} from '../../../server/utils/Config';



export function userSignInRequest(userData){
    return dispatch =>{
        //console.log(Config)
        return axios.post(routes.user.signIn.local, userData);
    };
}


export function userSignInGoogleRequest(response) {
    console.log(response);
   
    return dispatch =>{
        return axios.post(routes.user.signIn.googleAuth, response.tokenObj);
    };
    
}


export function userSignInGoogleRequestFailed(response){
    console.log(response);
}


export function logOut(){
    
}