const path = require('path');

module.exports = {
	entry: {
		main: ["./src/client/main.js"]
	},
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "./dist/client")
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist/client'),
		port: 9000,
		proxy: {
			"/": "http://localhost:8888"
		},
		overlay: {
			errors: true,
			warnings: true
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader"
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].html"
						}
					},
					{
						loader: "extract-loader"
					},
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			}
		]
	}
}