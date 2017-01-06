const path = require("path");
const precss = require("precss");
const autoprefixer = require("autoprefixer");

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

    devtool : "inline-source-map",

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
            },
            {
                test : /\.scss$/,
                loader : "style!css?sourceMap!postcss!sass?sourceMap"
            }
        ]
    },

    postcss: function() {
        return [autoprefixer, precss];
    },

    output : {
        filename : "app.js",
        path : __dirname + "/dist"
    }
}