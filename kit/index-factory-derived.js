/**
    Module: @NPM_SCOPE/PACKAGE_NAME
    Author: AUTHOR_NAME
*/

/*jshint esversion: 6 */

"use strict";

var parentFactory = require(PARENT_PACKAGE);

module.exports.create = function (spec) {
    if(!spec) {
        return null;
    }
    // private 
    let _package = "@NPM_SCOPE/PACKAGE_NAME";
    var _parent = parentFactory.create(spec);
    if(!_parent) {
        return null;
    }
    return Object.assign( _parent, {
        // public 
        package: function() {
            return _package;
        },
        health: function() {
            return "OK";
        }
    });
};