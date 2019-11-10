import json from "rollup-plugin-json";
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";

import pkg from "./package.json";

export default [
  {
    input: "src/get-internal-type.ts",
    output: [
      {
        file: pkg.main,
        format: "umd",
        name: "getInternalType",
        sourcemap: true
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],

    plugins: [
      json(),
      typescript({
        typescript: require("typescript")
      }),
      resolve(),
      commonjs()
    ]
  },
  {
    input: pkg.main,
    output: {
      file: "dist/get-internal-type.min.js",
      format: "umd"
    },
    plugins: [uglify()]
  },
  {
    input: "polyfills/array.forEach.js",
    output: {
      file: "dist/polyfills/array.forEach.js",
      format: "iife"
    }
  },
  {
    input: "polyfills/array.forEach.js",
    output: {
      file: "dist/polyfills/array.forEach.min.js",
      format: "iife"
    },
    plugins: [uglify()]
  }
];
