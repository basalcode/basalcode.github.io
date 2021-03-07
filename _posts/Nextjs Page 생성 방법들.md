Next 프로젝트의 라우팅은 pages 디렉토리를 루트 경로로, 파일이름과 관련된 경로명을 가지게 된다.

# Pre-rendering

기본적으로, Next.js는 모든 페이지를 pre-render(미리 렌더링)한다.

이는 JS는 클라이언트측에서 이루어지는 대신 모든 HTML 페이지를 미리 생성하는 것을 말한다.

pre-rendering은 SEO와 성능의 향상을 할 수 있게 해준다.

생성된 모든 HTML은 페이지에 필요한 가장 최소한의 JS코드와 연결되어있고, 페이지가 브라우저에 로드 되는 시점에 완전히 활성화된다.(이러한 과정을 hydration이라고 한다.)

# Pre-rendering

Next.js는 2가지 종류의 Pre-rendering이 있다.

Static Generation과 Server-side Rendering이 바로 그것인데.

차이점은 언제 HTML 페이지가 생성 되느냐이다.

Static Generation (권장됨): HTML 페이지가 빌드타임에 정적 생성으로  생성되어 요청시 재사용된다.

Server-side Rendering: HTML이 요청할 때마다 생성된다.

Next.js 는 두가지의 방법을 선택 할 수 있게 해준다.

대부분을 Static Generation 의 페이지로 생성하고 Server-side Rendering을 사용할 수 있다.

Static Generation이 권장되는 이유는 더 좋은 성능과 CDN에 추가적인 설정없이 cache 할 수 있기 때문이다.

하지만 Server-side rendering이 유일한 옵션일 때가 있다.

또한, 위의 두가지 방법과 함께, Client-side Rendering도 사용할 수 있는데, 이는 웹 페이지의 어떤 부분이 완전히 Client-side JS 로 렌더링 되어야할 떄가 그렇다.

# Static Generation을 사용해야 할 때

1. 마케팅 페이지
2. 블로그 포스트
3. e-커머스 상품 목록
4. 도움말 또는 관련문서

사용자의 요청이전에 이 페이지를 생성해둘것인가에 대한 대답이 그렇다라면, Static Generation을 사용하자.