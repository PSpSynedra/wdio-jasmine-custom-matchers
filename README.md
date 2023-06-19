# wdio-jasmine-custom-matchers
A project do demonstrate a bug in the wdio jasmine integration.

# Running the test
After cloning the repository, you can easily run the test by entering the folloging commands:
```
npm install
npm run wdio
```

# Making the test succeed
To make the test succeed, you change the config option `injectGlobals` in `wdio.conf.js` from `true` to `false` by uncommenting line 3.
If you rerun the test it should succeed.
