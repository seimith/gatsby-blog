---
path: '/2016-08-05'
date: '2016-08-05'
title: 'Edit Github Author For Past Commits'
tags: ['snippet', 'shortcuts']
categories: ['code']
excerpt: 'So a whiles back I was working on a project on my new laptop...'
---

So a whiles back I was working on a project on my new laptop. However, I totally forgot to set the Github username and email. This meant that all the authors on my commits were not recognized as me.

Luckily, Github always has a solution.

First, clone your repository. Then, do the below.

```bash{numberLines: true}
git filter-branch --env-filter '

OLD_EMAIL="your-laptop-name@your-laptop-name-MacBook-Pro.local"
CORRECT_NAME="your-name"
CORRECT_EMAIL="your@name.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
  export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
  export GIT_AUTHOR_NAME="$CORRECT_NAME"
  export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

After you do that, force update your project.

```
git push --force --tags origin 'refs/heads/*'
```

And there you have it. Your repository should reflect new authors.
