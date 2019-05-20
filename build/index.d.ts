declare type Options = {
    useLocal?: boolean;
};
/**
 * Tests environment variable against the rexexp (case insensitive).
 * @param value String value to construct regexp to compare against the environment variable.
 * @param envNameOrValue Name of environment variable or local value.
 */
export declare function modeTest(value: string, envNameOrValue: string, { useLocal }?: Options): boolean;
export declare function isProduction(localValue?: string): boolean;
export declare function isDevelopment(localValue?: string): boolean;
export declare function isTest(localValue?: string): boolean;
export declare function isDev(localValue?: string): boolean;
export declare function isProd(localValue?: string): boolean;
export {};
