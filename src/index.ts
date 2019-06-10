export enum NodeEnv {
  PRODUCTION,
  DEVELOPMENT,
  TEST
}

type Options = {
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
export function modeTest(
  value: string | string[],
  { env, target }: Options = {}
): boolean {
  if (Array.isArray(value)) {
    return value.reduce((result, value) => {
      return modeTest(value, { env, target }) || result;
    }, false);
  } else {
    const regexp = new RegExp(value, "i");
    const compareTo = target || process.env[env];
    return regexp.test(compareTo);
  }
}

export function isProduction(target?: string): boolean {
  return modeTest(["prod", "production"], {
    env: "NODE_ENV",
    target
  });
}

export function isDevelopment(target?: string): boolean {
  return modeTest(["dev", "development"], {
    env: "NODE_ENV",
    target
  });
}

export function isTest(target?: string): boolean {
  return modeTest("test", {
    env: "NODE_ENV",
    target
  });
}

export function getNodeEnv(): NodeEnv {
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
