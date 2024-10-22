const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "appHeader",
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "appHeader",
      filename: "remoteEntry.js",
      exposes: {
        "./HeaderComponent": "./src/app/header/header.component.ts",
      },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "18",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "18",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "18",
        },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
