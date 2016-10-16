import express from     'express';

import {routes}  from '../utils/Config';
import * as User from '../dao/User';
import {validateInput} from '../utils/Util';


const apiRoute = express.Router();



apiRoute.route(routes.user.signIn.local).post((req,res,next)=>{
	const {errors, isValid } = validateInput(req.body);
	
	if(!isValid){
		console.log(isValid);
		res.status(400).json(errors);
	}else{
		// Write the User's method to connect via GoogleAPI
		User.signinLocal();
	}
});

apiRoute.post(routes.user.signIn.googleAuth, (req,res) =>{
	
	console.log(req.body);
	console.log(User)
	
});
	
	
	
	


export default apiRoute;