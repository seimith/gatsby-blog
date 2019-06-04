---
path: '/2018-03-03'
date: '2018-03-03'
title: 'Remove Mirage Logs'
tags: ['ember', 'mirage', 'snippet', 'console', 'logs']
categories: ['code']
excerpt: "These past couple of days I've been using Mirage, and the console will output a bunch of messages by default..."
---

These past couple of days I've been using Mirage, and the console will output a bunch of messages by default. To turn them off, use the following in your `config.js`:

```js{numberLines: true}
this.logging = false;
```
