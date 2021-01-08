# BGraph
In-memory browser-compatible Graph DB

## Dagoba Fork

BGraph began as a TypeScript rewrite of Dann Toliver's Dagoba: in-memory graph database - Copyright (c) Dann Toliver, 2015. Original implementation illustrated in the book 500 Lines or Less: http://aosabook.org/en/index.html

## Setup (Development)

1. Install
```bash
$ yarn install
```

2. To run example interface you must link `@uncharted/grafer` to your `package.json`. From `grafer`'s root directory run:
```bash
$ yarn build
$ yarn link
```

3. From bgraph's root directory run:

```bash
$ yarn link @uncharted-aske/grafer
```

4. Start development interface
```bash
$ yarn develop
```
