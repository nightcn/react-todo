var webpack = require('webpack');
var path = require('path');

process.noDeprecation = true

module.exports = {
	

	entry: [
	'script-loader!jquery/dist/jquery.min.js',
	'script-loader!foundation-sites/dist/js/foundation.min.js',
	'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			"window.jQuery": 'jquery'
		}),
		
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
	
		modules: [
			__dirname,
			path.join(__dirname, 'app/components'),
			path.join(__dirname, 'app/api'),
			'node_modules'

		],
		alias: {
			applicationStyles: 'app/styles/app.scss',
			actions: 'app/actions/actions.jsx',
			reducers: 'app/reducers/reducers.jsx',
			configureStore: 'app/store/configureStore.jsx'
		},
		extensions: ['.js', '.jsx', '.scss', '.css']
	},
	module: {

		rules: [

		{
			test: /\.(js|jsx)$/,
			exclude: [/node_modules/, /bower_components/],
			use: [{
					loader: 'babel-loader',
					options: { presets: ['react', 'es2015', 'stage-0'] }
			}]
			
		},

		{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'sass-loader',
					options: { includePaths: [
						path.resolve(__dirname, 'node_modules/foundation-sites/scss')
					]}
				}
			]
		}
		
		]
	},
	devtool: 'cheap-module-eval-source-map'

};