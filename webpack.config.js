const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		script: './src/js/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist/js'
	},
	module: {
		rules: [
		// {
		// 	test: /\.scss$/,
		// 	use: ExtractTextPlugin.extract({
		// 		fallback: 'style-loader',
		// 		use: ['css-loader', 'sass-loader']
		// 	})
		// },
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
			}
		},
		// { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
		// { test: /\.(ttf|eot|png|jpg|gif)$/, loader: 'file-loader' },
		]
	},
	plugins: [
	// new ExtractTextPlugin('style.css', { allChunks: true }),
	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		Popper: ['popper.js', 'default']
	})
	]
};