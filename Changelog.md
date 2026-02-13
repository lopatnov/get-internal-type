# Changelog

## 2.0.0

- Migrated to Rollup 4, TypeScript 5.9, Jest 30
- Added ESM (`import`) and CJS (`require`) dual-package support via `exports` field
- Added UMD build for browsers
- Configured ESLint + Prettier
- Updated GitHub Actions to Node.js 18/20/22
- Dropped support for Node.js < 18

## 1.5.0

- Added `ArrayBuffer` and `DataView` type detection

## 1.4.1

- Added `Generator` and `GeneratorFunction` type detection

## 1.4.0

- Added `Promise` type detection

## 1.3.1

- Added `WeakMap` and `WeakSet` type detection

## 1.3.0

- Added typed arrays type detection (`Int8Array`, `Uint8Array`, etc.)

## 1.2.0

- Added `Map` and `Set` type detection

## 1.0.0

- Initial release with primitive types, objects, functions, arrays, dates, regexp, and errors
