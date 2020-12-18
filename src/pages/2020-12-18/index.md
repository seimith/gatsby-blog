---
path: '/2020-12-18'
date: '2020-12-18'
title: 'Find out if items in Array1 can be found in Array2'
tags: ['array', 'arrays', 'js', 'javascript']
categories: ['code']
excerpt: 'Join a bunch of arrays into a single master array...'
---

I have 2 arrays, and I wanted to find if there were some items that overlapped! This is how I did it:

```js{numberLines: true}
var Array1 = ["cat", "dog", "fish"]
var Array2 = ["apple", "cat", "poop"]
var list = []
Array1.some(item => {
  if (Array2.includes(item)) {
    list.push(item);
  }
})
console.log(list) // ["cat"]
```

or

```js{numberLines: true}
var doesItExist = (arrayA, arrayB) => {
  return arrayA.some(r=> arrayB.includes(r))
}
doesItExist(Array1, Array2) // true
```
