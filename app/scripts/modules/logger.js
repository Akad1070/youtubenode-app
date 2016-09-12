
/**
 * =============================
 *
 * My own Logger to log messages for the application.
 * This is a simple wrapper for the "winston" logger.
 *
 * =============================
 *
 * Attributes : /
 *
 * Methods :
 *		- info(message)
 *		- warn(message)
 *		- error(message)
 *
 * Events : /
 *
 * =============================
 */


/**
 * Load modules
 */

// Built-in
const winston = require('winston');



/**
 * Initialize logger
 */

const logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({colorize: true,prettyPrint: true, timestamp: true})
	],
	exceptionHandlers: [
		new (winston.transports.Console)({colorize: true, timestamp: true})
	],
	exitOnError: false
});



/**
 * Exports
 */

// Methods
exports = module.exports = logger;