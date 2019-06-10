# modecheck

Cleaner way to check NODE_ENV or any other environment variable.

Compare:

```
var env = _.toLower(process.env.NODE_ENV);
if (env === 'production' || env === 'prod') {...}
if (env === 'development' || env === 'dev') {...}
if (env === 'test') {...}

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
function isProduction(value?: string): boolean;   // /production/i.test(value || process.env.NODE_ENV) || /prod/i.test(value || process.env.NODE_ENV);
function isDevelopment(value?: string): boolean;  // /development/i.test(value || process.env.NODE_ENV) || /dev/i.test(value || process.env.NODE_ENV);
function isTest(value?: string): boolean;         // /test/i.test(process.env.NODE_ENV);
function modeTest(value: string || string[], { env: string, target: string }): boolean; // checks if environment specified by `env` (default "NODE_ENV") matches `value` (case insensitive)
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
