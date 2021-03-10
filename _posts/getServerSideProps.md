# getServerSideProps

Server-side Rendering 방식이다.

요청이 들어올 때마다 page를 생성한다.

요청하는 시간에 페이지가 생성되어야하는 경우 사용한다.

```
import { InferGetServerSidePropsType } from 'next'

type Data = { ... }

export const getServerSideProps = async () => {
  const res = await fetch('https://.../data')
  const data: Data = await res.json()

  return {
    props: {
      data,
    },
  }
}

function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // will resolve posts to type Data
}

export default Page
```