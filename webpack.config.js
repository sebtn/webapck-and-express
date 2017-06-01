let path = require('path')
let webapack = require('webapack')

module.exports = {
	entry: 'app/app.js',
	output: {
		path: __dirname,
		filename: 'public/bundle.js',
	},
	resolve: {
		root: __dirname,
		alias: {},
		extensions: [' ',  '.js',  '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015 ',  'react', 'stage-0']
				},
				test: /\.js|.jsx?$/,
				exclude:/node_modules/
			}
		]
	}
}