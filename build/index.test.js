"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("./index");
describe("Test specs", function () {
    it("should return true if process.env.NODE_ENV is set to `test`", function () {
        process.env.NODE_ENV = "test";
        chai_1.expect(index_1.modeTest("test", "NODE_ENV")).to.equal(true);
    });
    it("isProduction() should return true if process.env.NODE_ENV is set to `production`", function () {
        process.env.NODE_ENV = "production";
        chai_1.expect(index_1.isProduction()).to.equal(true);
    });
    it("isDevelopment() should return true if process.env.NODE_ENV is set to `development`", function () {
        process.env.NODE_ENV = "development";
        chai_1.expect(index_1.isDevelopment()).to.equal(true);
    });
    it("isTest() should return true if process.env.NODE_ENV is set to `test`", function () {
        process.env.NODE_ENV = "test";
        chai_1.expect(index_1.isTest()).to.equal(true);
    });
    it("should be case insensitive", function () {
        process.env.NODE_ENV = "Test";
        chai_1.expect(index_1.modeTest("test", "NODE_ENV")).to.equal(true);
        chai_1.expect(index_1.isTest()).to.equal(true);
        chai_1.expect(index_1.isProduction()).to.equal(false);
        chai_1.expect(index_1.isDevelopment()).to.equal(false);
        process.env.NODE_ENV = "Development";
        chai_1.expect(index_1.modeTest("development", "NODE_ENV")).to.equal(true);
        chai_1.expect(index_1.isDevelopment()).to.equal(true);
        chai_1.expect(index_1.isProduction()).to.equal(false);
        chai_1.expect(index_1.isTest()).to.equal(false);
        process.env.NODE_ENV = "Production";
        chai_1.expect(index_1.modeTest("production", "NODE_ENV")).to.equal(true);
        chai_1.expect(index_1.isProduction()).to.equal(true);
        chai_1.expect(index_1.isDevelopment()).to.equal(false);
        chai_1.expect(index_1.isTest()).to.equal(false);
    });
    it("should use parameters if parameters are provided", function () {
        chai_1.expect(index_1.isTest("test")).to.equal(true);
        chai_1.expect(index_1.isTest("lol")).to.equal(false);
        chai_1.expect(index_1.isProduction("production")).to.equal(true);
        chai_1.expect(index_1.isProduction("random")).to.equal(false);
        chai_1.expect(index_1.isDevelopment("development")).to.equal(true);
        chai_1.expect(index_1.isDevelopment("text")).to.equal(false);
    });
});
