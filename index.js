/**
 * Created by Rodey on 2017/4/7.
 */
'use strict';

const fs = require('fs'),
    util = require('util'),
    concatCSS = require('gulp-concat-css'),
    PluginError = require('plugin-error');

const PLUGIN_NAME = 'gulp-merge-css';

let mergeCSS = function(options) {
    let opts = util._extend({}, options || {});
    let destFile = opts['name'] || opts['fileName'] || 'app.css';

    let stream;
    try {
        stream = concatCSS(destFile, options);
    } catch (e) {
        throw new Error(new PluginError(PLUGIN_NAME, ''));
    }

    return stream;
};

module.exports = mergeCSS;
