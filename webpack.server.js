const path = require('path');

module.exports = {
    target: 'node',
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.bundle.js',
        publicPath: 'http://localhost:3000/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};
