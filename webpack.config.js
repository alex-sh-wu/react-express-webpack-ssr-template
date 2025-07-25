const path = require('path');
const sharedConfig = require('./webpack.shared.js');

module.exports = {
    target: 'web',
    entry: './src/ui/client.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'client.js',
    },
    ...sharedConfig,
};
