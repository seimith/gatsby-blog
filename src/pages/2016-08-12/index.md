---
path: '/2016-08-12'
date: '2016-08-12'
title: '(React-Native) Nesting Navigator inside TabBarIOS for ultimate history stack'
tags: ['react-native', 'snippet', 'ios']
categories: ['code']
excerpt: 'A few weeks ago I started working on react-native and...'
---

A few weeks ago I started working on react-native and I wanted to build an app that had a navigation bar and tabs. Each tab was supposed have it's own history stack and have a unique navigation bar.

In order for me to do that I nested `<Navigator/>` inside of `<TabBarIOS/>` such that every time I switch to a different tab the history of the other tabs remained scoped to their own space.

Code snippet to come soon...
