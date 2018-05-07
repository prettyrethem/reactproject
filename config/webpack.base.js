let path = require('path')
let dir = process.cwd()
let baseConfig = {
    entry: {
        "bundle": dir + '/src/main'
    },
    output: {
        "path": dir + "/dist",
        "filename": "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg|eot|woff|ttf)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [],
    resolve: {
        extensions: ['.js', '.jsx'],
    }
}
module.exports=baseConfig