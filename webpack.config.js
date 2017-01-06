const path = require("path");
module.exports = {
    context : __dirname + "/app",

    entry : {
        javascript : "./scripts/app.js",
        html : "./index.html"
    },

    resolve : {
        extensions : ['', '.js', '.jsx', '.json'],
        root : path.resolve(__dirname, './app/scripts')
    },

    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                exclude : /node_modules/ ,
                loaders : ["react-hot", "babel-loader"]
            },
            {
                test : /\.html$/,
                loader : "file?name=[name].[ext]"
            }
        ]
    },

    output : {
        filename : "app.js",
        path : __dirname + "/dist"
    }
}