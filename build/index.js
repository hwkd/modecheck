"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NodeEnv;
(function (NodeEnv) {
    NodeEnv[NodeEnv["PRODUCTION"] = 0] = "PRODUCTION";
    NodeEnv[NodeEnv["DEVELOPMENT"] = 1] = "DEVELOPMENT";
    NodeEnv[NodeEnv["TEST"] = 2] = "TEST";
})(NodeEnv = exports.NodeEnv || (exports.NodeEnv = {}));
/**
 * Tests environment variable against the rexexp (case insensitive).
 * @param values String value to construct regexp to compare against the environment variable.
 * @param options Config options.
 * @param options.env Uses this if `target` doesn't exist.
 * @param options.target Value to compare. Uses this if exists.
 */
function modeTest(value, { env, target } = {}) {
    if (Array.isArray(value)) {
        return value.reduce((result, value) => {
            return modeTest(value, { env, target }) || result;
        }, false);
    }
    else {
        const regexp = new RegExp(value, "i");
        const compareTo = target || process.env[env];
        return regexp.test(compareTo);
    }
}
exports.modeTest = modeTest;
function isProduction(target) {
    return modeTest(["prod", "production"], {
        env: "NODE_ENV",
        target
    });
}
exports.isProduction = isProduction;
function isDevelopment(target) {
    return modeTest(["dev", "development"], {
        env: "NODE_ENV",
        target
    });
}
exports.isDevelopment = isDevelopment;
function isTest(target) {
    return modeTest("test", {
        env: "NODE_ENV",
        target
    });
}
exports.isTest = isTest;
function getNodeEnv() {
    const env = String(process.env.NODE_ENV || "").toLowerCase();
    switch (env) {
        case "prod":
        case "production":
            return NodeEnv.PRODUCTION;
        case "dev":
        case "development":
            return NodeEnv.DEVELOPMENT;
        case "test":
            return NodeEnv.TEST;
        default:
            return NodeEnv.DEVELOPMENT;
    }
}
exports.getNodeEnv = getNodeEnv;
