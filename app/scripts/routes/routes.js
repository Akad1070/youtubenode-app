'use strict';

/**
 * To handle the basic routes { Home - Signup - Login }
 */




/**
 * Load modules
 */

// Mine - Custom
const logger = require("../modules/logger");




// For the 404 Error
let notFound = function (req, res){
	// log error:
	logger.log('[API] 404 error: ' + req.url);
	res.render('errors/404', {
		status: 404,
		locals:{ title: 'Ressource Not Found 404 :(' }
  	});
};



// For the 500 Error
let serverError = function (err, req, res, next){
	// log error
	logger.warn('[API] ' + (err.status != 500) ? err.message : err.stack);

	// Send output based on type of request json vs html
	let accept = req.headers.accept || '';
	if (~accept.indexOf('json')) {
		res.json({ error: "There was a server error :(" }, err.status || 500 );
  	}else{
		res.render('errors/500', {
			msg : err.message,
			locals: { title: 'Oups, my bad ! An Internal Server Error occured :( ' },
			status: err.status || 500
	  });
	}
};



/**
 * Method included for Routes routines
 * 		- Log All request URL
 * 		- Check JWT for authorized route
 *
 */
var	gotReq = function (req,res,next) {
	// Log all req with the Type of method and the url
	logger.info('[Server] Got a '+req.method +' for ' + req.url);
	next();
};








exports = {
    error404        : notFound,
    error500        : serverError,
    beforeRequest   : gotReq
};