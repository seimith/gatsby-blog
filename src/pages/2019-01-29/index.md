---
path: '/2019-01-29'
date: '2019-01-29'
title: '(SCSS) Nesting with at-root'
tags: ['scss', 'at-root', '@at-root']
categories: ['code']
excerpt: 'Use `@at-root` to extend your styles.'
---

Use `@at-root` to extend your styles.

```sass{numberLines: true}
.Foo {
  color: green;

  &.Foo {
    &_bar {
      color: blue;
    }

    &_baz {
      color: red;
    }
  }

  &.is-stuff &_primary {
    color: green;
  }

  @at-root {
    %secret-foo {
      color: black;
    }
  }

  &-mod {
    @extend %secret-foo;

    color: yellow;
  }

  &-mod2 {
    @extend %secret-foo;

    color: orange;
  }
}
```
