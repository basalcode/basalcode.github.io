---
title: "Object와 delete"
categories: post
---

Object 내부의 값을 제거하고 싶다면 delete 연산을 사용하자.

```jsx
let object = {
    target: 'Hello',
    notTarget: 12345
}

delete object.target;
```