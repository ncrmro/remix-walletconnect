const { withEsbuildOverride } = require("remix-esbuild-override");
const GlobalsPolyfills =
  require("@esbuild-plugins/node-globals-polyfill").default;

/**
 * esbuild override is required as buffer polyfill is needed
 */
withEsbuildOverride((option, { isServer }) => {
  option.plugins = [
    GlobalsPolyfills({
      buffer: true,
    }),
    ...option.plugins,
  ];

  return option;
});

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "cloudflare-pages",
  server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "functions/[[path]].js",
  // publicPath: "/build/",
};
