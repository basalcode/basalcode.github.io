

# SQL 인젝션 공격

: SQL 인젝션(SQL 삽입, SQL 주입으로도 불린다)은 코드 인젝션의 한 기법으로 클라이언트의 입력값을 조작하여 서버의 데이터베이스를 공격할 수 있는 공격방식

# 방어 방법

유저에게 받은 값을 직접 SQL로 넘기면 안 된다. 요즘에 쓰이는 거의 모든 데이터베이스 엔진은 유저 입력이 의도치 않은 동작을 하는 걸 방지하는 escape 함수와 prepared statement를 제공한다. prepared statement 는 변수를 문자열로 바꾸는것이라 안전하다.

[](https://namu.wiki/w/SQL%20injection)

# MySQL의 prepared statement

: npm에 올라온 mysql 가이드를 보면 SQL Injection을 방어하기 위한 2가지 방법을 제시하고 있다.

사용자의 입력을 받아서 바로 DB에 반영하지 않고 값을 escape 시킨 후 적용할 것.

In order to avoid SQL Injection attacks, you should always escape any user provided data before using it inside a SQL query. You can do so using the `mysql.escape()`, `connection.escape()` or `pool.escape()` methods:

```jsx
var userId = 'some user provided value';
var sql    = 'SELECT * FROM users WHERE id = ' + connection.escape(userId);
connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  // ...
});
```

Alternatively, you can use `?` characters as placeholders for values you would like to have escaped like this:

```jsx
connection.query('SELECT * FROM users WHERE id = ?', [userId], function (error, results, fields) {
  if (error) throw error;
  // ...
});
```
