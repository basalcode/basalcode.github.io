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

# const newArr = arr.flat([depth])

다중 중첩구조의 배열을 평탄하게 이어붙인다.

# arr.unshift([...elementN])

배열의 첫번째 인덱스에 새로운 요소를 추가한다.

# arr.shift()

배열의 첫번째 인덱스에 있는 요소를 반환하고 배열에서 해당 요소를 제거한다.

# arr.push(element1[, ...[, elementN]])

배열의 마지막 인덱스에 새로운 요소를 추가한다.

# arr.pop()

배열의 마지막 인덱스에 있는 요소를 반환하고 배열에서 해당 요소를 제거한다.