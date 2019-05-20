import { expect } from "chai";
import { modeTest, isProduction, isDevelopment, isTest } from "./index";

describe("Test specs", function() {
  it("should return true if process.env.NODE_ENV is set to `test`", function() {
    process.env.NODE_ENV = "test";
    expect(modeTest("test", "NODE_ENV")).to.equal(true);
  });

  it("isProduction() should return true if process.env.NODE_ENV is set to `production`", function() {
    process.env.NODE_ENV = "production";
    expect(isProduction()).to.equal(true);
  });

  it("isDevelopment() should return true if process.env.NODE_ENV is set to `development`", function() {
    process.env.NODE_ENV = "development";
    expect(isDevelopment()).to.equal(true);
  });

  it("isTest() should return true if process.env.NODE_ENV is set to `test`", function() {
    process.env.NODE_ENV = "test";
    expect(isTest()).to.equal(true);
  });

  it("should be case insensitive", function() {
    process.env.NODE_ENV = "Test";
    expect(modeTest("test", "NODE_ENV")).to.equal(true);
    expect(isTest()).to.equal(true);
    expect(isProduction()).to.equal(false);
    expect(isDevelopment()).to.equal(false);

    process.env.NODE_ENV = "Development";
    expect(modeTest("development", "NODE_ENV")).to.equal(true);
    expect(isDevelopment()).to.equal(true);
    expect(isProduction()).to.equal(false);
    expect(isTest()).to.equal(false);

    process.env.NODE_ENV = "Production";
    expect(modeTest("production", "NODE_ENV")).to.equal(true);
    expect(isProduction()).to.equal(true);
    expect(isDevelopment()).to.equal(false);
    expect(isTest()).to.equal(false);
  });

  it("should use parameters if parameters are provided", function() {
    expect(isTest("test")).to.equal(true);
    expect(isTest("lol")).to.equal(false);

    expect(isProduction("production")).to.equal(true);
    expect(isProduction("random")).to.equal(false);

    expect(isDevelopment("development")).to.equal(true);
    expect(isDevelopment("text")).to.equal(false);
  });
});
