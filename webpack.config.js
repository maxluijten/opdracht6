var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/calculate.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'foo.bundle.js'
    }
};
