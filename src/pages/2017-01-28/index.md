---
path: '/2017-01-28'
date: '2017-01-28'
title: '(Swift) Adding Audio'
tags:  ['swift', 'audio', 'snippet', 'AudioToolbox']
categories: ['code']
excerpt: 'You want some music in swift?!'
---

Utilize `AudioToolbox` and make a class, `Sound`, to pass in the filename of you audio file and it's type.

**Tools:**

- Swift 3.0
- Xcode Version 8.0

```swift{numberLines: true}
import AudioToolbox

class Sound {

    var soundEffect: SystemSoundID = 0
    init (name: String, type: String) {
        let path  = Bundle.main.path(forResource: name, ofType: type)!
        let pathURL = NSURL(fileURLWithPath: path)
        AudioServicesCreateSystemSoundID(pathURL as CFURL, &soundEffect)
    }

    func play() {
        AudioServicesPlaySystemSound(soundEffect)
    }
}
```

Then, call it like so:
```
Sound(name: "NameOfMyAudioFile", type: "wav").play()
```
