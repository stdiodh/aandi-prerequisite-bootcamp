# A&I Prerequisite Bootcamp

이 브랜치는 `00-implementation` starter입니다.
Spring Boot 코드를 작성하기 전에 HTTP, JSON, Postman, Git, DB 기본 용어를 손으로 익히는 준비 단계입니다.

## 이번 시퀀스에서 다루는 것

- GET과 POST 요청 보내기
- 상태 코드와 응답 body 읽기
- JSON body 값 수정하기
- Git branch를 만들고 commit 남기기
- table, row, column, PK를 표로 설명하기

## 문서

- [이론 문서](./docs/theory.md)
- [실습 안내](./docs/implementation.md)
- [체크리스트](./docs/checklist.md)

## 실습에서 직접 사용하는 자료

- `starter/postman/prerequisite-bootcamp.postman_collection.json`
- `starter/http/get-post.http`
- `starter/http/create-post.http`
- `starter/json/create-post-request.json`
- `starter/git/command-flow.txt`
- `starter/db/members-table-diagram.txt`

## 실습 순서

1. Postman으로 GET 요청을 보냅니다.
2. Postman으로 POST 요청을 보냅니다.
3. JSON body 값을 바꿔 다시 요청합니다.
4. Git 레포를 clone 하고 새 branch를 만듭니다.
5. 변경을 add, commit 합니다.
6. DB 표 구조를 말로 설명합니다.

수업 후에는 체크리스트로 직접 실행한 요청, Git 흐름, DB 용어 설명을 확인합니다.

<details>
<summary>멘토용 진행 포인트</summary>

## 수업 전 확인

- Postman 컬렉션과 HTTP 예시 파일을 열 수 있는지 확인합니다.
- Git 명령을 실행할 터미널과 Java/Git 버전 확인 환경을 준비합니다.

## 수업 중 질문

- GET과 POST의 차이를 요청 의도로 설명하게 합니다.
- 상태 코드와 response body를 함께 읽게 합니다.
- branch를 만든 뒤 현재 branch를 확인하게 합니다.

## 리뷰 기준

- 멘티가 요청 도구 화면에서 method, URL, status code, body를 구분합니다.
- `git clone`, branch 생성, add, commit의 순서를 말로 설명합니다.
- table, row, column, PK를 회원 표 예시로 설명합니다.

</details>
