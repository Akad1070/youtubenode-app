import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';



import {api}   from '../utils/Config';
 

/*
 const oAuth2Client = new google.auth.OAuth2(api.clientID, api.clientSecret, api.redirectUris);
 const Youtube = google.youtube({
    version: 'v3',
    auth: oAuth2Client
 });
// Retrieve tokens via token exchange explained above or set them: 
 
 console.log(google , Youtube, oAuth2Client);
*/





 
export function signinLocal(){
    
}

export function afterAuth(tokens){
    //oAuth2Client.setCredentials(tokens);
}


// Must be used as middleware
export function isAuth(req,res,next){
    // if user is already auth in the session, go next
    if (req.isAuthenticated())
        return next();

    // if not, redirect them to the home page
    res.redirect('/');
}
