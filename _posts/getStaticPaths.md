# getStaticPaths

Static Generation 방식이다.

특정 Dynamic Route (ex. /post/:id )를 데이터에 기반해서 Pre-rendering 한다.

Dynamic Route를 가지고 있지만 Pre-Rendering 되어야하는 경우에 사용한다.

- 예제 코드

```jsx
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
	    { params: { id: '2' } },
			...
    ],
    fallback: true or false // See the "fallback" section below
  };
}
```

- Paths
1. URL의 형식이 pages/posts/[postId]/[commentId] 라면 params에 postId, commentId 2개의 값이 들어있어야한다.
2. pages/[...slug]와 같은 라우팅을 사용하고 싶을 경우, slug: ['foo', 'bar']의 값을 넣어주면된다. pages/foo/bar 이런식으로 결과가 나옴.
- fallback
1. 반드시 존재해야한다.
2. false 이면 getStaticPaths에 의해 생성되어있지 않은 페이지는 404 페이지를 보여주게된다.
3. false 의 경우, 해당 path에 있는 페이지의 변화가 거의 없을 때 써야한다. 그렇지 않으면 재 빌드 해야만 추가된 페이지에 접근할 수 있게됨.

    ```jsx
    // pages/posts/[id].js

    function Post({ post }) {
      // Render post...
    }

    // This function gets called at build time
    export async function getStaticPaths() {
      // Call an external API endpoint to get posts
      const res = await fetch('https://.../posts')
      const posts = await res.json()

      // Get the paths we want to pre-render based on posts
      const paths = posts.map((post) => ({
        params: { id: post.id },
      }))

      // We'll pre-render only these paths at build time.
      // { fallback: false } means other routes should 404.
      return { paths, fallback: false }
    }

    // This also gets called at build time
    export async function getStaticProps({ params }) {
      // params contains the post `id`.
      // If the route is like /posts/1, then params.id is 1
      const res = await fetch(`https://.../posts/${params.id}`)
      const post = await res.json()

      // Pass post data to the page via props
      return { props: { post } }
    }

    export default Post
    ```

4. true 는 e 커머스와 같이 방대한 게시물이 존재하는 페이지들의 경우에 사용할 수 있다.
5. true 가 설정되어있을 경우, 
    1. getStaticPaths로 들어온 경로는 getStaticProps를 통해 빌드타임에 생성된다.
    2. 빌드타임에 생성되지 않은 페이지의 경우, 404 애러를 리턴하는 것이 아닌, SSR 를 통해서 서버에서 생성된 fallback 버전의 페이지를 보내준다.
    3. 새로운 요청이들어와서 생성된 페이지는 백그라운드에서 정적페이지의 영역에 추가되게 되는데 이는 getStaticProps를 통해서 이뤄진다. build pages 리스트에 빌드된 페이지가 추가된다는 얘기
    4. 클라이언트 사이드에서는 정적페이지를 받는것과 동일한 효과가 일어난 것처럼 보인다.
6. 규모가 엄청 큰 E commerce 사이트의 경우에 상품이 엄청많기 때문에 이 방대한 페이지를 모두 Pre-Render 하는 데에는 엄청난 시간이 소요된다. 따라서 이런 경우에 소규모의 페이지만 pre-render 하고 나머지는 동적으로 렌더링 될 수 있도록 하여 사용자가 요청했을 때에 렌더링되어 재요청시에는 다른 모든 유저에게 static rendered page를 보여주는 형식으로 구현할 수 있다.