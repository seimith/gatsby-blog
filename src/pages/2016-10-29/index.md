---
path: '/2016-10-29'
date: '2016-10-29'
title: 'Unable to run gem install XYZ on OS X El Capitan'
tags: ['gem', 'el capitan', 'install', 'troubleshoot']
categories: ['code']
excerpt: 'This tutorial is about spinning UIViews. Why spinning things you might ask?'
---

If you've upgraded your computer to El Capitan and you're getting errors while trying to install some gems, this is due to  El Capitan's introduction of SIP (System Integrity Protection).

Read more about SIP here: [https://support.apple.com/en-us/HT204899][link]

The other day I was trying to run `gem install bundler` and got a permissions error. Not cool.

```bash{numberLines: true}
gem install bundler

Fetching: bundler-1.13.6.gem (100%)
ERROR:  While executing gem ... (Gem::FilePermissionError)
You don't have write permissions for the /usr/bin directory.
```

Try installing to your directory:

```bash{numberLines: true}
gem install bundler -n /usr/local/bin
```

[link]:https://support.apple.com/en-us/HT204899
