# JWT란 무엇인가?

## Header

- 형식

```jsx
{
		"alg": "HS256", // JWT의 암호화 알고리즘을 말한다.
		"typ": "JWT" // 토큰의 타입
}
// Base64Url로 인코딩되어 JWT의 첫 부분이 된다.
```

## Payload

- 형식

```jsx
{
		"title": "제목",
		"author": "작성자",
		"description": "내용"
}
// 실제 전달하고자 하는 데이터가 들어있다.
```

- Payload에 담길 수 있는 데이터 종류
1. Registered Claims: iss(issuer), exp(expiration time), sub(subject), aud(audience) 등이 있고 등록해주는것이 권장된다.

    Claim 이름은 JWT 를 컴팩트하게 유지하기 위해 3글자로 한다.

    - 링크

        [RFC 7519 - JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519#section-4.1)

2. Public Claims: 

## Signature

- 형식

```jsx
1HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
// HMAC SHA256 알고리즘을 이용해 인코딩 한다면 위와 같은 Signature를 만들 수 있다.
```

- 사용이유

도중에 메세지가 변경되지 않았음을 확인하는데 사용되며, 발신인이 누군지를 알 수 있게 해주기 때문에 사용한다.

# JWT 구조

- 형식

Header.Payload.Signature

위와 같이 콤마로 구분된 토큰 값을 가진다.