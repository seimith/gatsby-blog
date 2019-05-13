---
path: '/2016-10-30'
date: '2016-10-30'
title: '(Swift) UIImage to Base64'
tags: ['swift', 'snippet']
categories: ['code']
excerpt: 'This tutorial is about spinning UIViews. Why spinning things you might ask?'
---

I recently had a project where I needed to convert my image to base64. With JavaScript it's relatively easy and since I was new to Swift I had no idea how to do this.

Below, I obtain my image as a `UIImage`, then convert it into NSData, and then into base64.

```swift{numberLines: true}
let image = ...UIImage(CGImage: cgImageRef!, scale: 1.0, orientation: UIImageOrientation.Right)...

// Turn UIImage into Base64
let imageNSData = UIImageJPEGRepresentation(image, 0.05)
let base64String = imageNSData!.base64EncodedStringWithOptions(.Encoding64CharacterLineLength)

print("Base64?", base64String)
```

You can use [http://codebeautify.org/base64-to-image-converter][link] to test the base64 image.

[link]: http://codebeautify.org/base64-to-image-converter
