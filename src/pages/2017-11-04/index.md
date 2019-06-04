---
path: '/2017-11-04'
date: '2017-11-04'
title: '(Swift) Programmatically Segue'
tags:  ['swift', 'segue', 'snippet']
categories: ['code']
excerpt: 'If you want to create segues programmatically, click here...'
---

Using the code from my previous post on segues, here's a snippet:

```swift{numberLines: true}
func segueToPublisher () {
  let customSegueGoToRightScene = CustomSegueGoToRightScene(identifier: "CustomSegueGoToRightScene", source: self, destination: PublisherViewController())
  customSegueGoToRightScene.perform()
}
```
