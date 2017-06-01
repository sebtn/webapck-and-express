let path = require('path')

module.exports = {
	entry: '',
	output: {
		path: __dirname,
		filename: '',
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
					presets: ['es2015 ',  'react']
				},
				test: /\.js|.jsx?$/,
				exclude:/node_modules/
			}
		]
	}
}