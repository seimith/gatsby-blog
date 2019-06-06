---
path: '/2019-02-04'
date: '2019-02-04'
title: '(SCSS) Get-Map'
tags: ['scss', 'get-map', 'variables']
categories: ['code']
excerpt: 'Creating variables, or tokens, is pretty handy when you want to tidy up your styles...'
---

Creating variables, or tokens, is pretty handy when you want to tidy up your styles. You can create what I call a grouped variable.

```sass{numberLines: true}
$my-cool-variable: (
  light: #FFFFFF,
  medium: #CCCCCC,
  heavy: #000000,
);
```

You can then use the variable like this:

```sass{numberLines: true}
a {
  color: map-get($my-cool-variable, medium);
};
```
