const path = require('path');
const sharedConfig = require('./webpack.shared.js');

module.exports = {
    target: 'web',
    entry: './src/client.js',
    output: {
        path: path.resolve(__dirname, 'build/public'),
        filename: 'client.js',
    },
    ...sharedConfig,
};
