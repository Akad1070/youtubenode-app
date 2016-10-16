 import path    from 'path';
 import webpack from 'webpack';
 
 
 
 export default {
     devtools : 'eval-source-map',
     entry : [
         'webpack-hot-middleware',
         path.join(__dirname,'client.js')
    ],
     output : {
         path : '/',
         publicPath : '/'
     },
     plugins : [
        new webpack.NoErrorsPlugin(), // Elegant error handler
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),   
    ],
     module : {
         loaders : [{
                test : /\.jsx?$/,
                include :  [
                  path.join(__dirname),
                  path.join(__dirname,'..','server','dao'),
                  path.join(__dirname,'..','server','utils')
                 ],
                loaders : ['react-hot', 'babel?presets[]=es2015&presets[]=react']
            }     
        ]
         
     },
     resolve : {
         extensions : ['', '.js']
     }
 }