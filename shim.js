import "node-libs-react-native/globals";
import { btoa } from "Base64";
import nodelUrl from 'url';


global.btoa = btoa;
global.URL = class URL {
  constructor(url) {
    return nodelUrl.parse(url);
  }
}


Object.defineProperty(Object, 'assign', {
  value: function assign(target, varArgs) {
    'use strict';
    if (target == null) {
       throw new TypeError("Cannot convert undefined or null to object");
    }

    let to = Object(target);

    for (let index = 1; index < arguments.length; index ++) {
          let nextSource = arguments[index];

          if (nextSource != null) {
            for (let nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
    }
    return to;
  },
  writable: true,
  configurable: true,
});




// if (typeof __dirname === 'undefined') global.__dirname = '/'
// if (typeof __filename === 'undefined') global.__filename = ''
// if (typeof process === 'undefined') {
//   global.process = require('process')
// } else {
//   const bProcess = require('process')
//   for (var p in bProcess) {
//     if (!(p in process)) {
//       process[p] = bProcess[p]
//     }
//   }
// }

// process.browser = false
// if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer

// // global.location = global.location || { port: 80 }
// const isDev = typeof __DEV__ === 'boolean' && __DEV__
// process.env['NODE_ENV'] = isDev ? 'development' : 'production'
// if (typeof localStorage !== 'undefined') {
//   localStorage.debug = isDev ? '*' : ''
// }

// // If using the crypto shim, uncomment the following line to ensure
// // crypto is loaded first, so it can populate global.crypto
// // require('crypto')
