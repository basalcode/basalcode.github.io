# getStaticProps

Static Generation 방식이다.

빌드 타임에 데이터를 가져온다.

- 기본코드

```jsx
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

- context 객체의 옵션
1. params: Dynamic Routes의 URL 파라메터값을 받는 객체이다. ex) [id].js  ⇒ { id: ... }
2. headless cms 와 관련된 옵션도 존재하나 나중에 찾아보도록 하자...
- return
1. props : 해당 컴포넌트로 전달될 props 객체이다.
2. notFound: 404 에러를 리턴하는 옵션이다.  true/false

    ```jsx
    export async function getStaticProps(context) {
      const res = await fetch(`https://.../data`)
      const data = await res.json()

      if (!data) {
        return {
          notFound: true,
        }
      }

      return {
        props: {}, // will be passed to the page component as props
      }
    }
    ```

3. redirect: 페이지를 리다이렉션 한다. 

    ```jsx
    export async function getStaticProps(context) {
      const res = await fetch(`https://...`)
      const data = await res.json()

      if (!data) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }

      return {
        props: {}, // will be passed to the page component as props
      }
    }
    ```

4. 나머지 옵션도 나중에 찾아보는 것으로 . . .

- 언제 사용해야하는가 ?
1. 사용자의 요청 이전 빌드타임에 페이지를 정적으로 생성해놓고 싶을 때
2. headless CMS 사용할 때
3. 사용자마다 달라지는 페이지가 아닌 public cache 가 가능한 페이지 일 때.
4. SEO로 인해 페이지가 렌더링 되어있어야할 때, 혹은 빨리 로딩이 되어야할 때