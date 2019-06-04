---
path: '/2018-01-15'
date: '2018-01-15'
title: 'Transform camelCase a Camel Case with Regex'
tags: ['snippet', 'regex', 'camelCase', 'javascript']
categories: ['code']
excerpt: "I'm quite terrible at regex, but lately I figured that I actually really need to learn it..."
---

I'm quite terrible at regex, but lately I figured that I actually really need to learn it.

Below is a snippet for transforming "camelCase" strings into "Camel Case" strings.

```js{numberLines: true}
var camelCaseWord = "camelCaseWord";
camelCaseWord.replace(/([A-Z])/g, ' $1').replace(/^[a-z]/g, function(firstLetter) {
  return firstLetter.toUpperCase()
});
```
