---
path: '/2016-12-24'
date: '2016-12-24'
title: '(Swift) Make UILabel Conform to Length of Text'
tags: ['swift', 'uilabel', 'snippet']
categories: ['code']
excerpt: "Here's a snippet of how you can make your UILabel conform to the width of your text."
---

Here's a snippet of how you can make your UILabel conform to the width of your text.

!["Simulator of UILabel conforming to width of text"](img2.png "Simulator of UILabel conforming to width of text")

You want to use `.sizeToFit()` on your UILabel, otherwise you'd have to hardcode  your label's width in the `CGRect`.

```swift{numberLines: true}
import UIKit

class ViewController: UIViewController {
  override func viewDidLoad() {
    super.viewDidLoad()

    let myCoolUILabel = UILabel()
    myCoolUILabel.text = "My Cool Label"
    myCoolUILabel.backgroundColor = UIColor.orange
    myCoolUILabel.frame = CGRect(x: 100, y: 100, width: 30, height: 30)
    myCoolUILabel.sizeToFit()
    self.view.addSubview(myCoolUILabel)
  }
}
```
So, no more of this:

!["Simulator of UILabel not conforming to width of text"](img1.png "Simulator of UILabel not conforming to width of text")
