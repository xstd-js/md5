[![npm (scoped)](https://img.shields.io/npm/v/@xstd/md5.svg)](https://www.npmjs.com/package/@xstd/md5)
![npm](https://img.shields.io/npm/dm/@xstd/md5.svg)
![NPM](https://img.shields.io/npm/l/@xstd/md5.svg)
![npm type definitions](https://img.shields.io/npm/types/@xstd/md5.svg)

## @xstd/md5

An `md5` function in javascript.

## 📦 Installation

```shell
yarn add @xstd/md5
# or
npm install @xstd/md5 --save
```


## API

```ts
function md5(input: string): string;
```

Performs a `md5` hash on a string. The result is a 32 characters length lowercase hexadecimal string.

**`md5` is considered weak and should be used only for compatibility with old devices or protocols.**
