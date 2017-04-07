/**
 * Created by Rodey on 2017/4/7.
 */

var fs          = require('fs'),
    util        = require('util'),
    concatCSS   = require("gulp-concat-css"),
    PluginError = require('gulp-util').PluginError;

var PLUGIN_NAME = 'gulp-merge-css';


var mergeCSS = function(options){
    var opts = util._extend({}, options || {});
    var destFile = opts['name'] || opts['fileName'] || 'app.css';

    var stream;
    try{
        stream = concatCSS(destFile, options);
    }catch(e){
        throw new Error(new PluginError(PLUGIN_NAME, ''));
    }

    return stream;

};

module.exports = mergeCSS;