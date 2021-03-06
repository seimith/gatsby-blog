---
path: '/2017-01-30'
date: '2017-01-30'
title: '(Swift) Detect Typing'
tags:  ['swift', 'keyboard', 'handler', 'snippet']
categories: ['code']
excerpt: "Here's a snippet on how to detect typing on your Swift app"
---

Here's a snippet on how to detect typing on your `Swift` app. It's pretty simple because we're utilizing the `UITextViewDelegate` delegate. Aka, built in success - thank you `Swift`!

**Tools:**

- Swift 3.0
- Xcode Version 8.0

This snippet is pretty short. See below for some code that will print out text when you type.

```swift{numberLines: true}
import UIKit

class ViewController: UIViewController, UITextViewDelegate {

  // 1. Creating a UITextView
  let myTextArea = UITextView(frame: CGRect(x: 30, y: 30, width: 200, height: 200))

  override func viewDidLoad() {
    super.viewDidLoad()

    // 2. You need this; setting delegate to self
    myTextArea.delegate = self

    // 3. Adding color and adding my UITextView to my controller's view
    myTextArea.backgroundColor = UIColor.gray
    self.view.addSubview(myTextArea)
  }

  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
    // Dispose of any resources that can be recreated.
  }

  // 4. Detection; printing out the text typed
  func textViewDidChange (_ textView: UITextView) {
    // Your code here.
    print("===== Text:", textView.text)
  }
}
```
