
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
 *		- debug(message)
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
const {winston}	= require('winston');
const {path}	= require('path');



/**
 * Initialize logger
 */

const custom = {
	levels : { error: 0, warn: 1, info: 2, debug: 3, silly: 5 }
};

const logger = new (winston.Logger)({
	levels: custom.levels,
	transports: [
		new (winston.transports.Console)({colorize: true,prettyPrint: true, timestamp: true}),
		new (winston.transports.DailyRotateFile)({ 
			level: 'error',
			datePattern	: '.yyyy-MM-dd_HH-mm', // Use as suffix for the logFile
			filename	: path.join(__dirname, "logs", "logFile.log") // logFile prefix
		})
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