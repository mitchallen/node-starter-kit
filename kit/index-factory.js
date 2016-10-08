/**
    Module: @NPM_SCOPE/PACKAGE_NAME
    Author: AUTHOR_NAME
*/

/*jshint esversion: 6 */

"use strict";

module.exports.create = function (spec) {
    if(!spec) {
        return null;
    }
    // private 
    let _package = @NPM_SCOPE/PACKAGE_NAME
    return {
        health: function() {
            console.log( _package, " OK ", new Date());
        }
    }
};