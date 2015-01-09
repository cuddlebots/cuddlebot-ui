# Cuddlebot UI

The Cuddlebot UI is implemented as an [Apache Cordova][cordova] application
using the [ReactJS][react] JavaScript library and [Gulp][gulp] build system. 

## Getting Started

The development environment depends on [Node.js][nodejs]. You'll find
instructions on how to install Node.js on your system from their 
[website][nodejs].

Once Node.js has been installed, additional dependencies are needed from
[NPM][npmjs], the package manager for Node.js. On Unix-like systems, issue
the following commands to install these dependencies:

```sh
npm install -g cordova gulp karma ripple
npm install
```

The first command installs global dependencies and places executables in
your `PATH`. The second command installs local project-specific dependences.
Should you have trouble accessing the `cordova`, `gulp`, `karma`, or
`ripple` commands, you may also execute the locally-installed executables
under `./node_modules/.bin`.

The following commands are configured in `package.json` for your
convenience:

```sh
# Run automated tests in Chrome using Karma
npm test
# Start the application in a browser using the Ripple emulator
npm start
# Start the application on an Android emulator
npm run emulate
```

Please see the [Android Getting Started Guide][android_guide] for
instructions on how to get started with Cordova on Android.

[cordova]: http://cordova.apache.org
[react]: http://facebook.github.io/react/
[gulp]: http://gulpjs.com
[nodejs]: http://nodejs.org
[npmjs]: https://www.npmjs.org
[android_guide]: docs/android.md
