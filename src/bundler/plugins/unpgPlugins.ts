import * as esbuild from 'esbuild-wasm';
const BASE_PATH = "https://unpkg.com"

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /(^index\.js$)/ }, () => {
        return { path: "index.js", namespace: "a" }
      })

      build.onResolve({ filter: /^\.+\// }, (args: any) => {
        return {
          namespace: "a",
          path: new URL(args.path, BASE_PATH + args.resolveDir + "/").href
        }
      })

      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return {
          namespace: "a",
          path: `${BASE_PATH}/${args.path}`
        }
      });
    },
  };
};