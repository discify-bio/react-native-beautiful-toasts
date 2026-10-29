const path = require('path');
const escape = require('escape-string-regexp');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');

// The library root has its own node_modules with an older react-native.
// Peers must come from the example app only, otherwise React is loaded twice.
const peers = [
  '@react-native/assets-registry',
  ...Object.keys(pkg.peerDependencies),
];

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  watchFolders: [root],
  resolver: {
    blockList: peers.map(
      name =>
        new RegExp(`^${escape(path.join(root, 'node_modules', name))}\\/.*$`),
    ),
    extraNodeModules: Object.fromEntries(
      peers.map(name => [name, path.join(__dirname, 'node_modules', name)]),
    ),
    resolveRequest: (context, moduleName, platform) =>
      context.resolveRequest(
        context,
        moduleName === pkg.name ? path.join(root, 'src/index.ts') : moduleName,
        platform,
      ),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
