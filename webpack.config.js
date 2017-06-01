let path = require('path')
let webpack = require('webpack')

module.exports = {
	entry: {
		path: ['./app/app.js']
	},
	output: {
		path:path.resolve( __dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js|.jsx?$/,
				exclude:/node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["react", "babel-preset-stage-0", "babel-preset-es2015"]
				}
			}
		]
	}
}