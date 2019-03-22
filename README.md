# modecheck

Cleaner way to check NODE_ENV or any other environment variable.

Compare:
```
if (_.toLower(process.env.NODE_ENV) === 'production') {...}
if (_.toLower(process.env.NODE_ENV) === 'development') {...}
if (_.toLower(process.env.NODE_ENV) === 'test') {...}

```
to
```
if (isProduction()) {...}
if (isDevelopment()) {...}
if (isTest()) {...}
```

Methods:
```
function isProduction(): boolean;   // /production/i.test(process.env.NODE_ENV);
function isDevelopment(): boolean;  // /development/i.test(process.env.NODE_ENV);
function isTest(): boolean;         // /test/i.test(process.env.NODE_ENV);
function isDev(): boolean;          // /dev/i.test(process.env.NODE_ENV);
function isProd(): boolean;         // /prod/i.test(process.env.NODE_ENV);
function modeTest(value: string, envName: string): boolean; // checks if environment name `envName` matches `value` (case insensitive)
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