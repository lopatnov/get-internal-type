import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/get-internal-type.ts',
  output: [
    {
      file: pkg.main,
      format: 'iife',
      name: 'getInternalType',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],

plugins: [
    json(),
    typescript({
      typescript: require('typescript'),
    }),
    resolve(),
    commonjs()
  ],
}