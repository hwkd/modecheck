"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests environment variable against the rexexp (case insensitive).
 * @param value String value to construct regexp to compare against the environment variable.
 * @param envName Name of environment variable.
 */
function modeTest(value, envName) {
    const regexp = new RegExp(value, 'i');
    return regexp.test(process.env[envName]);
}
exports.modeTest = modeTest;
function isProduction() {
    return modeTest('production', 'NODE_ENV');
}
exports.isProduction = isProduction;
function isDevelopment() {
    return modeTest('development', 'NODE_ENV');
}
exports.isDevelopment = isDevelopment;
function isTest() {
    return modeTest('test', 'NODE_ENV');
}
exports.isTest = isTest;
function isDev() {
    return modeTest('dev', 'NODE_ENV');
}
exports.isDev = isDev;
function isProd() {
    return modeTest('prod', 'NODE_ENV');
}
exports.isProd = isProd;
