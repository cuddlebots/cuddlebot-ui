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


## Project File Organization

- `app/` source files for the web application
- `docs/` documentation
- `hooks/` Apache Cordova hooks directory
- `node_modules` Node.js modules directory
- `platforms/` Apache Cordova platforms directory
- `plugins/` Apache Cordova plugins directory
- `tasks/` Gulp task scripts
- `test/` Karma test files
- `www/` Compiled application files, used by Cordova to package the
  application
- `config.xml` Apache Cordova configuration file
- `gulpfile.js` Gulp configuration script
- `karma.conf.js` Karma configuration script
- `LICENSE.txt` Project licence
- `README.md` A getting started guide
- `webpack.conf.js` WebPack configuration script, part of the build system

## License

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.


[cordova]: http://cordova.apache.org
[react]: http://facebook.github.io/react/
[gulp]: http://gulpjs.com
[nodejs]: http://nodejs.org
[npmjs]: https://www.npmjs.org
[android_guide]: docs/android.md
