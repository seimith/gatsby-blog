---
path: '/2018-02-24'
date: '2018-02-24'
title: 'Command to Compress and Password Protect'
tags: ['terminal', 'command', 'snippet', 'zip']
categories: ['code']
excerpt: "Lately I've been needing to send some folks password protected zip files..."
---

Lately I've been needing to send some folks password protected zip files. Below is a short and basic snippet that you can use to run in your terminal.

```bash{numberLines: true}
zip -er newFOLDER oldFolder
```

Once your run the above snippet, enter a password.

`oldFolder` is the folder with your contents

`newFOLDER` is the name of the outputed `zip` file of this command

The output  will be `newFOLDER.zip`
