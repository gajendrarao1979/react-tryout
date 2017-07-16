module.exports = {

	entry: "./js/Client.js",
	output: {
        path: __dirname,
        filename: "ClientBundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
			{ 
                test: /\.js$/,
                exclude: "/node_modules/",
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                } 
            }
        ]
    }
}