
/**
 * Tests environment variable against the rexexp (case insensitive).
 * @param value String value to construct regexp to compare against the environment variable.
 * @param envName Name of environment variable.
 */
export function modeTest(value: string, envName: string): boolean {
  const regexp = new RegExp(value, 'i');
  return regexp.test(process.env[envName]);
}

export function isProduction(): boolean {
  return modeTest('production', 'NODE_ENV');
}

export function isDevelopment(): boolean {
  return modeTest('development', 'NODE_ENV');
}

export function isTest(): boolean {
  return modeTest('test', 'NODE_ENV');
}

export function isDev(): boolean {
  return modeTest('dev', 'NODE_ENV');
}

export function isProd(): boolean {
  return modeTest('prod', 'NODE_ENV');  
}