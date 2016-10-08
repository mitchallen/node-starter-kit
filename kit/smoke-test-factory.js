/**
    Module: @NPM_SCOPE/PACKAGE_NAME
      Test: smoke-test-factory
    Author: AUTHOR_NAME
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../index-factory";

describe('module factory smoke test', function() {

    var _module = null;

    before(function(done) {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _module = require(modulePath);
        done();
    });

    after(function(done) {
        // Call after all tests
        done();
    });

    beforeEach(function(done) {
        // Call before each test
        done();
    });

    afterEach(function(done) {
        // Call after eeach test
        done();
    });

    it('module should exist', function(done) {
        should.exist(_module);
        done();
    })

    it('create method with no spec should return null', function(done) {
        var obj = _module.create();
        should.not.exist(obj);
        done();
    });

    it('health method should return ok', function(done) {
        var obj = _module.create({});
        should.exist(obj);
        obj.health().should.eql("OK");
        done();
    });
});