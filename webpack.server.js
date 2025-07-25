const path = require('path');
const sharedConfig = require('./webpack.shared.js');

module.exports = {
    target: 'node',
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.bundle.js',
        publicPath: 'http://localhost:3000/'
    },
    ...sharedConfig,
};
