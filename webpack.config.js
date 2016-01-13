var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {  
	entry: [
	  'webpack/hot/only-dev-server',
	  './src/client/js/app.js'
	],
	output: {
		path: './build',
		filename: "client-bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
			{ test: /\.css$/, loader: "style!css" }
		]
	},
	plugins: [
	  new HtmlWebpackPlugin()
	],
	

};