# bearbom
### bearbom
🤹‍♀️ AFTER WORK - 넘쳐나는 취미 클래스를 한 눈에 !
사이트 바로가기 / Youtube 시연영상
베타버전 2021.05.13 ~ 사용자 피드백 및 개선작업 진행 중
개발기간 2021.04.25 ~ 2021.05.12


image

목차
프로젝트 소개
사용기술
배운 점
기능정보
진행과정
프로젝트 소개
넘쳐나는 취미 플랫폼 클래스들을 한 번에 모아볼 수 있는 사이트

유명 플랫폼 7개사 클래스 인기, 가격 한 번에 비교
구글/네이버/카톡 아이디로 간편하게 소셜 로그인
사용자별 관심 지역, 분야 설정 가능
🎯 Target

퇴근 후 뭐하지? 고민하는 2-30대 미혼 직장인
('20.03 직장인 소셜미디어 블라인드 설문조사 결과)
직장인 58% 재택근무 경험…90% “증가된 여가시간에 새 취미생활 하고파”
넘쳐나는 취미 플랫폼과 클래스 정보들로 혼란스러운 이들
👨‍👩‍👧‍👧 팀 구성
팀 소개 페이지로 이동하기
Front-end(React) : 3인
Back-end(Spring) : 3인 (Github Repo)
Designer : 1인 (UI/UX Wireframe)

🛠 Tools
- View (React with JavaScript, React-Router, antd, Styled-components)
- State Management (Redux, Redux-Thunk, Immer, Redux-actions)
- Build Tool (Create React App)
- Code Quality Tool (Prettier)
- Infrastructure (AWS S3, Route 53, Amazon CloudFront)
- Design Tool (Xd adobe)
- Other Tools (Git, Github, notion, Slack etc.)
🔎 I learned
🕹 기능정보
1. 소셜 로그인
구글, 네이버, 카카오 계정을 활용한 소셜 로그인 방식 적용
2. 회원 정보에 따른 클래스 추천 기능
비 로그인 시 로그인 후 이용할 수 있다는 안내 문구를 통해 유저 로그인 유도
로그인 후 회원정보를 설정할 수 있게 버튼 이동이 가능한 안내문구 사용
해당 유저가 관심 갖는 지역 및 카테고리 설정 시 각각 랜덤하게 12개의 클래스를 추천해줌
3. 카테고리별 클래스 조회
유명 플랫폼 7개사 클래스를 6종류의 카테고리로 분류했으며 무한스크롤 방식을 이용해 별도의 페이지 이동없이 계속해서 클래스를 조회할 수 있게 구현
클래스를 인기순, 가격 높은 순, 가격 낮은 순으로 정렬할 수 있고 온라인, 오프라인 클래스만 모아볼 수 있게 필터처리를 진행함
4. 클래스 검색 기능
유저가 특정 클래스를 조회할 수 있는 기능으로 검색키워드에 해당하는 클래스를 조회할 수 있음
카테고리별 클래스 조회 기능과 유사하게 구현했으며 정렬 및 필터처리까지 포함해 구현
