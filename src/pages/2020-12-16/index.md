---
path: '/2020-12-16'
date: '2020-12-16'
title: 'Join and flatten arrays into a single master array'
tags: ['array', 'arrays', 'js', 'javascript']
categories: ['code']
excerpt: 'Join a bunch of arrays into a single master array...'
---

So the other day I needed to join a bunch of arrays into one single "MASTER" array. Here's what I did.

```js{numberLines: true}
var a = [1,2,3]
var b = ["a","b","c"]
var c = ["qwe","dfg","sad"]
var masterArray = a.concat(b, c)

console.log(masterArray) // [1, 2, 3, "a", "b", "c", "qwe", "dfg", "sad"]
```
