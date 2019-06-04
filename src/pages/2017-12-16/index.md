---
path: '/2017-12-16'
date: '2017-12-16'
title: 'Troubleshoot ESLint $ Errors'
tags: ['eslint', 'javascript', 'troubleshoot', 'error', 'tip']
categories: ['code']
excerpt: ''
---

```
error  '$' is not defined  no-undef
```

```js{numberLines: true}
env: {
  browser: true,
  es6: true,
  jquery: true <== You need this.
}
```
