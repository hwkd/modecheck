# modecheck

Cleaner way to check NODE_ENV or any other environment variable.

Compare:
```
if (_.toLower(process.env.NODE_ENV) === 'production') {...}
if (_.toLower(process.env.NODE_ENV) === 'development') {...}
if (_.toLower(process.env.NODE_ENV) === 'test') {...}

```
to:
```
if (isProduction()) {...}
if (isDevelopment()) {...}
if (isTest()) {...}
```

You can also pass the environment value yourself:
```
const env = process.env.NODE_ENV;
if (isProduction(env)) {...}
if (isDevelopment(env)) {...}
if (isTest(env)) {...}
```

Methods:
```
function isProduction(env?: string): boolean;   // /production/i.test(process.env.NODE_ENV);
function isDevelopment(env?: string): boolean;  // /development/i.test(process.env.NODE_ENV);
function isTest(env?: string): boolean;         // /test/i.test(process.env.NODE_ENV);
function isDev(env?: string): boolean;          // /dev/i.test(process.env.NODE_ENV);
function isProd(env?: string): boolean;         // /prod/i.test(process.env.NODE_ENV);
function modeTest(value: string, envNameOrValue: string, { useLocal?: boolean }): boolean; // checks if environment name `envName` matches `value` (case insensitive)
```

Example usage:
```
import { isProduction } from "modecheck";

const config = isProduction()
  ? { /* some production config     */ }
  : { /* some non-production config */ }
;

export default config;
```