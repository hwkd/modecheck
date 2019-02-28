# modecheck

Cleaner way to check NODE_ENV or any other environment variable.  

Compare:
```
if (process.env.NODE_ENV === 'production') {...}
```
to
```
if (isProduction()) {...}
```

Methods:
```
function isProduction(): boolean;   // /production/i.test(process.env.NODE_ENV);
function isDevelopment(): boolean;  // /development/i.test(process.env.NODE_ENV);
function isTest(): boolean;         // /test/i.test(process.env.NODE_ENV);
function isDev(): boolean;          // /dev/i.test(process.env.NODE_ENV);
function isProd(): boolean;         // /prod/i.test(process.env.NODE_ENV);
```