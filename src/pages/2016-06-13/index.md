---
path: '/2016-06-13'
date: '2016-06-13'
title: 'Looping Through Files'
tags: ['snippet', 'bash', 'loop']
categories: ['code']
excerpt: 'So the other day I needed to loop...'
---

So the other day I needed to loop though some files that included a specific string.
This is how I went through my files and rename it.

```bash{numberLines: true}
n *_60.png
  do
      mv "$file"  "${file/.png/@2x.png}"
  done
```

