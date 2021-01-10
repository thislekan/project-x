to debug via browser, do the following

- add types: module to package.json
- change all absolute or all babel-module resolver files to their relative paths
- i.e `"config"` becomes `"../../config/index.js"`
- the above example include imported packages
- add debugger to any file you wish to debug
- run yarn debug
- open `chrome://inspect` on chrome
- click `open dedicated devtools for node`
- hit the route or start the process that will eventually fire the debugger
- happy debugging
