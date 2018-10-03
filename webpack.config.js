const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextPlugin('k-main.css');

const cssLoaders = [
	{loader: 'css-loader'},  
	{loader: 'sass-loader'}
];

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'k-assignment.js'
  },
  module: {
	rules: [{
				test: /\.scss$/, 
				use: extractSASS.extract({
					use: cssLoaders,
					fallback: 'style-loader'
				})
			},
	  		{
	  			test: /\.hbs$/, loader: "handlebars-loader"
	  		}
		]
	},
	plugins: [extractSASS],
};