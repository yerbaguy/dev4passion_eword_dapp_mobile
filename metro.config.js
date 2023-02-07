/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// const MetroConfig = require('@ui-kitten/metro-config');

// const evaConfig = {
//   evaPackage: '@eva-design/eva',
// };

 const nodeLibs = require("node-libs-react-native");
 nodeLibs.vm = require.resolve("vm-browserify");

//  module.exports = MetroConfig.create(evaConfig, {
//   resolver: {
//     extraNodeModules: nodeLibs
//   },
//   transformer: {
//     getTransformOptions: async() => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false
//       },
//     }),
//     getPolyfills: () => [
           
//       require.resolve('react-native/Libraries/polifills/console.js'),
//       require.resolve('react-native/Libraries/polifills/error-guard.js'),
//       require.resolve('react-native/Libraries/polifills/Number.es6.js'),
//       require.resolve('react-native/Libraries/polifills/console.js'),
//       require.resolve('react-native/Libraries/polifills/String.prototype.es6.js'),
//       require.resolve('react-native/Libraries/polifills/Array.prototype.es6.js'),
//       require.resolve('react-native/Libraries/polifills/Array.es6.js'),
//       require.resolve('react-native/Libraries/polifills/Object.es7.js'),

//     ] 
//   },
//  })




 module.exports = {
  resolver: {
        extraNodeModules: nodeLibs
      },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
        getPolyfills: () => [
           
      require.resolve('react-native/Libraries/polifills/console.js'),
      require.resolve('react-native/Libraries/polifills/error-guard.js'),
      require.resolve('react-native/Libraries/polifills/Number.es6.js'),
      require.resolve('react-native/Libraries/polifills/console.js'),
      require.resolve('react-native/Libraries/polifills/String.prototype.es6.js'),
      require.resolve('react-native/Libraries/polifills/Array.prototype.es6.js'),
      require.resolve('react-native/Libraries/polifills/Array.es6.js'),
      require.resolve('react-native/Libraries/polifills/Object.es7.js'),

    ] 
  },
};






// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };
