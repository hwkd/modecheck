export declare enum NodeEnv {
    PRODUCTION = 0,
    DEVELOPMENT = 1,
    TEST = 2
}
declare type Options = {
    env?: string;
    target?: string;
};
/**
 * Tests environment variable against the rexexp (case insensitive).
 * @param values String value to construct regexp to compare against the environment variable.
 * @param options Config options.
 * @param options.env Uses this if `target` doesn't exist.
 * @param options.target Value to compare. Uses this if exists.
 */
export declare function modeTest(value: string | string[], { env, target }?: Options): boolean;
export declare function isProduction(target?: string): boolean;
export declare function isDevelopment(target?: string): boolean;
export declare function isTest(target?: string): boolean;
export declare function getNodeEnv(): NodeEnv;
export {};
