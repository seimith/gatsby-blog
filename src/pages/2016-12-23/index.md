---
path: '/2016-12-23'
date: '2016-12-23'
title: '(Swift) zIndex zPosition'
tags: ['swift', 'zPosition', 'snippet']
categories: ['code']
excerpt: "It's a bird! No it's the z-plane property..."
---

I'm a web person, and I almost always think web first.

With CSS there's a property called `z-index` and it's responsible for positioning elements on the `z plane`.

In iOS, there's an analogous property on the layer of elements that you can augment called, `zPostion`.

```swift{numberLines: true}
yourThingHere.layer.zPosition = 1
```
