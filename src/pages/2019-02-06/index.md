---
path: '/2019-02-06'
date: '2019-02-06'
title: '(Swift) Creating a Custom Delegate'
tags: ['swift', 'uiview', 'UIViewController', 'mobile']
categories: ['code']
excerpt: 'Exposing a function from UIViewController A to a CUSTOM UIVIEW such that you can call it...'
---

Exposing a function from **UIViewController A** to a **CUSTOM UIVIEW** such that you can call it.

**CUSTOM UIVIEW**

```swift{numberLines: true}
import UIKit
import DesignSystem

protocol CustomViewDelegate: class {
    // make this class protocol so you can create `weak` reference
    func triggerSegueToGallery()
}

class AttachmentBar: UIView {
     weak var delegate: CustomViewDelegate?   // make this `weak` to avoid strong reference cycle b/w view controller and its views
     func triggerSegueToGallery() {
        delegate?.triggerSegueToGallery()
    }

     func someOtherFunc () {
       item.addTarget(self, action: #selector(triggerSegueToGallery), for: .touchUpInside)
     }
}
```

**UIViewController A**

```swift{numberLines: true}
import UIKit
import DesignSystem

class PublisherViewController: UIViewController, CustomViewDelegate {
    func triggerSegueToGallery() {
        self.performSegue(withIdentifier: "arbitraryIDForCollectionView", sender: self)
    }
}
```
