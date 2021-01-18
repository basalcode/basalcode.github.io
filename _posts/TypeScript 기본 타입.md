# 기본 타입

## Boolean

```jsx
let isDone: boolean = false;
```

## Number

```jsx
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## String

```jsx
let color: string = "blue";
color = 'red';
```

## Array

```jsx
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

## Tuple

```jsx
// 튜플 타입으로 선언
let x: [string, number];
// 초기화
x = ["hello", 10]; // 성공
// 잘못된 초기화
x = [10, "hello"]; // 오류
```

## Enum

```jsx
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); // 값이 2인 'Green'이 출력됩니다.
```

## Any

```jsx
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // 성공, 분명히 부울입니다.
```

## Void

```jsx
function warnUser(): void {
    console.log("This is my warning message");
}
```

## Null & Undefined

```jsx
// 이 밖에 이 변수들에 할당할 수 있는 값이 없습니다!
let u: undefined = undefined;
let n: null = null;
```

## Never

```jsx
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
    throw new Error(message);
}

// 반환 타입이 never로 추론된다.
function fail() {
    return error("Something failed");
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
    while (true) {
    }
}
```

## Object

```jsx
declare function create(o: object | null): void;

create({ prop: 0 }); // 성공
create(null); // 성공

create(42); // 오류
create("string"); // 오류
create(false); // 오류
create(undefined); // 오류
```

출처: [https://typescript-kr.github.io/pages/basic-types.html#불리언-boolean](https://typescript-kr.github.io/pages/basic-types.html#%EB%B6%88%EB%A6%AC%EC%96%B8-boolean)
