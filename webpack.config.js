var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	entry: {
		vendors: [
			'react',
			'react-dom',
		],
		app: [
			path.join(__dirname, 'src', 'index.tsx')
		]
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js'
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.tsx', '.ts', '.js', '.less', '.css']
	},

	module: {
		rules: [{
			test: /\.js$/,
			enforce: 'pre',
			loader: 'source-map-loader'
		}, {
			test: /\.tsx?$/,
			enforce: 'pre',
			loader: 'tslint-loader',
			options: {
				emitErrors: true
			}
		}, {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loaders: ['babel-loader'],
		}, {
			test: /\.tsx?$/,
			loaders: ["babel-loader", "awesome-typescript-loader"]
		}, {
			test: /\.css$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
				options: {
					sourceMap: true
				}
			}]
		}, {
			test: /\.less$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
				options: {
					sourceMap: true
				}
			}, {
				loader: 'less-loader',
				options: {
					sourceMap: true
				}
			}]
		}, {
			test: /\.(jpg|png|woff|eot|ttf|svg|gif)$/,
        loader: "file-loader?name=[name].[ext]"
		}],
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors',
			filename: 'vendors.js'
		}),
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		}),
		new webpack.DefinePlugin({
			DEBUG: true
		}),
		new StyleLintPlugin({
			context: 'src',
			files: ['**/*.css', '**/*.less'],
		}),
	]
};
