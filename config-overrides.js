/* config-overrides.js */
const webpack = require('webpack');
module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {

        stream: false,
        "crypto": false,
    };
    config.stats = {
        children: true
    };
    return config;
}