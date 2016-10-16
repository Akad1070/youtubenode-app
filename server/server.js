import express          from 'express';
import path             from 'path';
import bodyParser       from 'body-parser';
import webpack          from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';


import webpackConfig    from '../client/webpack.config.js';
import userRoute        from './routes/UserRoute';


const app = express();

let server;



function configureServer(cb){
    // Parse JSON bodies
    app.use(bodyParser.json());
    
    // Parse application/x-www-form-urlencoded so we can get data from POST and/or URL param
    app.use(bodyParser.urlencoded({ extended: true }));

    
    const compiler = webpack(webpackConfig);
    //
    app.use(webpackMiddleware(compiler, {
        hot : true,
        publicPath : webpackConfig.output.publicPath,
        noInfo : true // No verbosity from webpack
    }));
    
    
    app.use(webpackHotMiddleware(compiler));
    
    // Delivering Static Files : .css, .js (Node Acts Like Apache )
    console.log(path.join(__dirname,'..','client','public'));
    app.use(express.static(path.join(__dirname,'..','client','public')));


    // send all requests to index.html so browserHistory in React Router works
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname,'..','client','public','index.html'));
    })
        
    
    if(cb) return cb(null);
    
}



function configureRoutes(){
    // Route for /api/users
    app.use('/api/users',userRoute);


}







/**
 * Start the API Server
 * @param cb Callback function when the web server is listening
 */
 let start = function (cb){
    // Firstly, config the server
    configureServer(() => {
        configureRoutes();  // Then, connect all routes to /api
        
		// Only if the server isn't already listenning
        if(!server){
            server = app.listen(process.env.PORT || 8080,process.env.IP, ()=>{
                console.log('Server ON - Listenning on '+process.env.IP+':'+process.env.PORT);
                if(cb){
                    cb(null);
                }
            });
        }
    });
};


/**
 * Stop the API Server
 * @param Callback function when the web server is no more listening
 */
export function stop(cb){
    if (server && typeof server.close == 'function') {
		server.close();
        console.log('Server ON - Listenning on '+process.env.IP+':'+process.env.PORT);
		if (cb) cb();
	} else {
		//logger.warn('[Server] Cannot stop web server not yet init. listening on ' + config.server.host + ':' + process.env.PORT);
		if (cb) cb();
	}
    
}


start();