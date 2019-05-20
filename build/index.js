"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests environment variable against the rexexp (case insensitive).
 * @param value String value to construct regexp to compare against the environment variable.
 * @param envNameOrValue Name of environment variable or local value.
 */
function modeTest(value, envNameOrValue, { useLocal } = {}) {
    const regexp = new RegExp(value, "i");
    const compareTo = useLocal ? envNameOrValue : process.env[envNameOrValue];
    return regexp.test(compareTo);
}
exports.modeTest = modeTest;
function isProduction(localValue) {
    return modeTest("production", localValue || "NODE_ENV", {
        useLocal: localValue ? true : false
    });
}
exports.isProduction = isProduction;
function isDevelopment(localValue) {
    return modeTest("development", localValue || "NODE_ENV", {
        useLocal: localValue ? true : false
    });
}
exports.isDevelopment = isDevelopment;
function isTest(localValue) {
    return modeTest("test", localValue || "NODE_ENV", {
        useLocal: localValue ? true : false
    });
}
exports.isTest = isTest;
function isDev(localValue) {
    return modeTest("dev", localValue || "NODE_ENV", {
        useLocal: localValue ? true : false
    });
}
exports.isDev = isDev;
function isProd(localValue) {
    return modeTest("prod", localValue || "NODE_ENV", {
        useLocal: localValue ? true : false
    });
}
exports.isProd = isProd;
