/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]-----
 *       (if additional are added, keep them at the very end!)
 */

import { assert as _assert, use } from 'chai';
import chaiHttp from 'chai-http';
var assert = _assert;
import server from '../server.js';
import { suite, test } from 'mocha';

const chaiServer = use(chaiHttp);

suite('Functional Tests', function () {
    suite('Routing Tests', function () {
        suite('GET /api/convert => conversion object', function () {
            test('Convert 10L (valid input)', function (done) {
                chaiServer
                    .request(server)
                    .get('/api/convert')
                    .query({ input: '10L' })
                    .end(function (err, res) {
                        assert.equal(res.status, 200);
                        assert.equal(res.body.initNum, 10);
                        assert.equal(res.body.initUnit, 'L');
                        assert.approximately(res.body.returnNum, 2.64172, 0.1);
                        assert.equal(res.body.returnUnit, 'gal');
                        done();
                    });
            });

            test('Convert 32g (invalid input unit)', function (done) {
                chaiServer
                    .request(server)
                    .get('/api/convert')
                    .query({ input: '32g' })
                    .end(function (err, res) {
                        assert.equal(res.status, 200);
                        assert.equal(res.body.initNum, 32);
                        assert.equal(res.body.initUnit, 'invalid unit');
                        assert.equal(res.body.returnNum, 'invalid number');
                        assert.equal(res.body.returnUnit, 'invalid unit');
                        done();
                    });
                //done();
            });

            test('Convert 3/7.2/4kg (invalid number)', function (done) {
                chaiServer
                    .request(server)
                    .get('/api/convert')
                    .query({ input: '3/7.2/4kg' })
                    .end(function (err, res) {
                        assert.equal(res.status, 200);
                        assert.equal(res.body.initNum, 'invalid number');
                        assert.equal(res.body.initUnit, 'kg');
                        assert.equal(res.body.returnNum, 'invalid number');
                        assert.equal(res.body.returnUnit, 'lbs');
                        done();
                    });
                //done();
            });

            test('Convert 3/7.2/4kilomegagram (invalid number and unit)', function (done) {
                chaiServer
                    .request(server)
                    .get('/api/convert')
                    .query({ input: '3/7.2/4kilomegagram' })
                    .end(function (err, res) {
                        assert.equal(res.status, 200);
                        assert.equal(res.body.initNum, 'invalid number');
                        assert.equal(res.body.initUnit, 'invalid unit');
                        assert.equal(res.body.returnNum, 'invalid number');
                        assert.equal(res.body.returnUnit, 'invalid unit');
                        done();
                    });
                //done();
            });

            test('Convert kg (no number)', function (done) {
                chaiServer
                    .request(server)
                    .get('/api/convert')
                    .query({ input: 'kg' })
                    .end(function (err, res) {
                        assert.equal(res.status, 200);
                        assert.equal(res.body.initNum, '1');
                        assert.equal(res.body.initUnit, 'kg');
                        assert.approximately(res.body.returnNum, 2.20462, 0.1);
                        assert.equal(res.body.returnUnit, 'lbs');
                        done();
                    });
                //done();
            });
        });
    });
});
