/**
    Module: @NPM_SCOPE/PACKAGE_NAME
    Author: AUTHOR_NAME
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

/**
 * Module
 * @module PACKAGE_NAME
 */

/**
 * 
 * Factory module
 * @module PACKAGE_NAME-factory
 */

 /** 
 * Factory method 
 * It takes one spec parameter that must be an object with named parameters
 * @param {Object} options Named parameters object
 * @returns {module:PACKAGE_NAME}
 * @example <caption>Usage example</caption>
 * var factory = require("@NPM_SCOPE/PACKAGE_NAME");
 * var obj = factory.create({});
 */
module.exports.create = (spec) => {
    if(!spec) {
        return null;
    }
    // private 
    let _package = "@NPM_SCOPE/PACKAGE_NAME";
    return {
        // public
        /** Returns the package name
          * @function
          * @instance
          * @memberof module:PACKAGE_NAME
        */
        package: () => _package,
        /** Health check
          * @function
          * @instance
          * @memberof module:PACKAGE_NAME
          * @example <caption>Health check</caption>
          * obj.health.should.eql("OK");
        */
        health: () => "OK"
    };
};