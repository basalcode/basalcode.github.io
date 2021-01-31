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

# arr.indexOf(searchElement[, fromIndex])

searchElement 인자가 위치한 배열의 첫 인덱스를 리턴해준다. (배열의 앞부터 탐색)

# arr.lastIndexOf(searchElement[, fromIndex])

searchElement 인자가 위치한 배열의 첫 인덱스를 리턴해준다. (배열의 뒤부터 탐색)

# arr.map(callback(currentValue[, index[, array]])[, thisArg])

배열을 순회하면서 callback 함수에 현재 인덱스의 값을 넣어 연산한 결과로 현재 배열을 채워 새로운 배열을 리턴한다.

# array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

start 인덱스의 요소부터 deleteCount 만큼의 요소를 삭제하고 item의 값으로 치환한다.

array.splice() 를 하게 되면 복제된 새 배열이 나온다.