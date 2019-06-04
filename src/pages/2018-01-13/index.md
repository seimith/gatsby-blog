---
path: '/2018-01-13'
date: '2018-01-13'
title: 'Align Divs on a Line'
tags: ['html', 'css', 'divs', 'snippet', 'styles']
categories: ['code']
excerpt: "A few days ago I had to make a few divs of varying height. Unfortunately, they were looking a little wonky because they weren't aligning..."
---

A few days ago I had to make a few `divs` of varying height. Unfortunately, they were looking a little wonky because they weren't aligning. I made them `display: inline-block`, but what's going on?

Making my `divs` display as inline-block was to make my `divs` appear on the same line. However, it was not enough to make them straight.

TLDR; I had to align my divs, and below are two ways to do so!

```css{numberLines: true}
display: inline-block;
vertical-align: middle;
```

```css{numberLines: true}
display: inline-block;
white-space: nowrap;
overflow-x: auto;
```
