"use strict";

/**
 * =============================
 *
 * Set the route listening on, start/stop the api when the windows is ready ...
 *
 * =============================
 *
 * Attributes : /
 *
 * Methods :
 *		- start([callback])
 *		- stop([callback])
 *
 * Events : /
 *
 * =============================
 */



/**
 * Load modules
 */

// Built-in
const {express}   	= require("express");
const {bodyParser}	= require('body-parser');
const {path}      	= require('path');

// Custom
const logger    	= require('./logger');
const config    	= require('./config');


// Routes
const defRoute		= require('../routes/routes');
const userRoute		= require('../routes/user');


// App to handle the API operations
const app = express();






let _configureApi = function(callback){

    // Parse JSON bodies
	app.use(bodyParser.json());

	// Parse application/x-www-form-urlencoded so we can get data from POST and/or URL param
	app.use(bodyParser.urlencoded({ extended: true }));


	// Delivering Static Files (Node Acts Like Apache)
    app.use(express.static(path.join(__dirname,'/../../public')));


	// Error handlers
	// production error handler
	app.use(defRoute.checkErrorProd);

	// The directory for the template files
	app.set('views',path.join(__dirname,'/../../views'));
	
	// Define the rendering engine : jade
	//app.set('view engine', 'jade');
	
	if(callback)
		callback(null,"[API] API Configured")
}



let _configureRoutes = function (){

	// Middleware to use before process all requests
	app.use(defRoute.beforeRequest);


	// Route to call for the homepage
	app.get('/',defRoute.home);
    
    
    app.route('/login')
    	.get(defRoute.login)
    	.post(defRoute.loginPosted);
    
    
    app.get('/signup', defRoute.signup)
    	.get(userRoute.signup)
    	.post(userRoute.signupPosted);
    
    
    
    /**
	 *  Sub-Router handler for /vids
	 */
    let appVids = express.Router();
    
    
	/* The 404 Route (ALWAYS Keep this as the last route) */
	app.use(defRoute.error404); // 404 handler
	app.use(defRoute.error500); // 500 handler
}



/**
 * Exports
 */

// Methods

exports = {
	start :function (callback) {
		// Try to config the server
		_configureApi(function (err,msg){
			if(err) { // If any errors occurs, log it and call me back.
		    	logger.error(err.message);
		    	if (callback) return callback(err);
			}
	    	logger.info(msg);		// Log all info about the config 
			_configureRoutes(); 	// Config the routes
	
		});
	},
	
	stop	: function (callback) {
		
	}	
	
};