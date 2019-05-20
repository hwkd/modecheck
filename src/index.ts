type Options = {
  useLocal?: boolean;
};

/**
 * Tests environment variable against the rexexp (case insensitive).
 * @param value String value to construct regexp to compare against the environment variable.
 * @param envNameOrValue Name of environment variable or local value.
 */
export function modeTest(
  value: string,
  envNameOrValue: string,
  { useLocal }: Options = {}
): boolean {
  const regexp = new RegExp(value, "i");
  const compareTo = useLocal ? envNameOrValue : process.env[envNameOrValue];
  return regexp.test(compareTo);
}

export function isProduction(localValue?: string): boolean {
  return modeTest("production", localValue || "NODE_ENV", {
    useLocal: localValue ? true : false
  });
}

export function isDevelopment(localValue?: string): boolean {
  return modeTest("development", localValue || "NODE_ENV", {
    useLocal: localValue ? true : false
  });
}

export function isTest(localValue?: string): boolean {
  return modeTest("test", localValue || "NODE_ENV", {
    useLocal: localValue ? true : false
  });
}

export function isDev(localValue?: string): boolean {
  return modeTest("dev", localValue || "NODE_ENV", {
    useLocal: localValue ? true : false
  });
}

export function isProd(localValue?: string): boolean {
  return modeTest("prod", localValue || "NODE_ENV", {
    useLocal: localValue ? true : false
  });
}
