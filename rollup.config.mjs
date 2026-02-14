import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import uglify from "@lopatnov/rollup-plugin-uglify";

import pkg from "./package.json" with { type: "json" };

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

const plugins = [
  json(),
  typescript({
    tsconfig: "./tsconfig.json",
    declaration: true,
    declarationMap: true
  }),
  resolve({
    preferBuiltins: true
  }),
  commonjs()
];

export default [
  {
    input: pkg.source,

    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
        outro: "module.exports = exports.default;\nObject.assign(module.exports, exports);"
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true
      }
    ],

    external,
    plugins
  },
  {
    input: "src/umd-entry.ts",

    output: {
      file: pkg.browser,
      format: "umd",
      name: pkg.umdName,
      sourcemap: true,
      exports: "default"
    },

    external,
    plugins
  },
  {
    input: "src/umd-entry.ts",

    output: {
      file: "dist/get-internal-type.umd.min.js",
      format: "umd",
      name: pkg.umdName,
      exports: "default"
    },

    external,
    plugins: [...plugins, uglify()]
  }
];
