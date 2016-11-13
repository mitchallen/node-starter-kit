/**
    Module: @NPM_SCOPE/PACKAGE_NAME
    Author: AUTHOR_NAME
*/

/*jshint esversion: 6 */

"use strict";

module.exports.create = (spec) => {
    if(!spec) {
        return null;
    }
    // private 
    let _package = "@NPM_SCOPE/PACKAGE_NAME";
    return {
        // public 
        package: () => _package,
        health: () => "OK"
    };
};