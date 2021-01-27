---
title: "String 관련 함수 정리"
categories: post
---

# Array.isArray(obj)

obj 인자가 배열인지 판별한다.

# Array.from(arrayLike, [mapFn, [thisArg]])

배열과 비슷한 arrayLike인자(유사 배열, 반복 가능한 객체)를 배열로 변환한다.

해당 배열에 mapFn 콜백 인자를 통해 매핑할 수 있다.

매핑시 바인딩할 객체를 thisArg 인자를 통해 전달 할 수 있다.

# Array.of(element0[, element1[, ...[, elementN]]])

주어진 인자만큼의 배열을 생성한다.

# array.concat([value1[, value2[, ...[, valueN]]]])

주어진 배열에 인자로 주어진 배열을 덧붙인다.

# arr.some(callback[, thisArg])

콜백으로 주어진 함수에 배열의 인자를 모두 넣었을때 모두 참이 나온다면 true를 리턴한다.