# A&I Prerequisite Bootcamp

> 이후 백엔드 실습에서 막히지 않도록 HTTP, JSON, Postman, Git, DB 기초를 먼저 손으로 익혀보는 준비 단계입니다.

## 이 시퀀스는 무엇인가요

이 레포는 스프링 기능을 구현하는 실습이 아닙니다.
앞으로 나올 서버 구현 실습 전에 꼭 필요한 감각을 먼저 맞추는 부트캠프입니다.

오늘은 아래 흐름만 분명하게 잡으면 충분합니다.

1. 요청을 보냅니다.
2. 응답을 읽습니다.
3. JSON 값을 바꿔봅니다.
4. Git 브랜치를 만들어봅니다.
5. DB 표 구조를 말로 설명해봅니다.

## 문서 안내

- [이론 문서](./docs/theory.md)
- [구현 안내](./docs/implementation.md)
- [정답 가이드](./docs/answer-guide.md)
- [체크리스트](./docs/checklist.md)
- [제공 자료 안내](./docs/assets.md)

## 오늘 실습 순서

1. Postman으로 GET 요청 보내기
2. Postman으로 POST 요청 보내기
3. JSON body 값 수정하기
4. `git clone` 해보기
5. `git checkout -b` 해보기
6. `git add`, `git commit` 해보기
7. table, row, column, PK 설명해보기

구현 순서는 위 순서를 그대로 유지합니다.
이번 실습에서는 서버 구조 코드를 만들지 않습니다.

## 준비물

- Postman 또는 API 요청 도구
- Git이 설치된 로컬 환경
- 텍스트 편집기 또는 IDE
- 수업 중 사용할 발표 화면 또는 메모 도구

## 미리 제공되는 자료

- `starter/postman/prerequisite-bootcamp.postman_collection.json`
- `starter/http/get-post.http`
- `starter/http/create-post.http`
- `starter/json/create-post-request.json`
- `starter/git/command-flow.txt`
- `starter/db/members-table-diagram.txt`

학생은 위 자료를 바탕으로 연습하고, 정답 비교는 `docs/answer-guide.md`와 `answer/` 폴더를 함께 봅니다.

## starter / answer 구조

```text
starter/
  postman/
  http/
  json/
  git/
  db/

answer/
  http/
  git/
  db/
```

`starter/`는 학생이 실습할 때 바로 열어볼 자료입니다.
`answer/`는 강사나 학생이 빠르게 비교할 때 쓰는 기준 자료입니다.

## 실습을 마치면 할 수 있어야 하는 것

- GET과 POST의 차이를 말할 수 있습니다.
- JSON body를 직접 수정할 수 있습니다.
- 상태 코드를 보고 성공/실패를 구분할 수 있습니다.
- `git clone`, `git checkout -b`, `git add`, `git commit`을 해볼 수 있습니다.
- branch를 왜 따로 만드는지 설명할 수 있습니다.
- table, row, column, PK를 예시로 설명할 수 있습니다.
