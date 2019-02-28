/**
 * Tests environment variable against the rexexp (case insensitive).
 * @param value String value to construct regexp to compare against the environment variable.
 * @param envName Name of environment variable.
 */
export declare function modeTest(value: string, envName: string): boolean;
export declare function isProduction(): boolean;
export declare function isDevelopment(): boolean;
export declare function isTest(): boolean;
export declare function isDev(): boolean;
export declare function isProd(): boolean;
