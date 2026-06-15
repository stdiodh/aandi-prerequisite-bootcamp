# 선수지식 부트캠프 실습 안내

## 1. 해결할 문제

다음 Spring Boot 실습에서는 요청을 보내고, 응답을 읽고, Git branch에서 코드를 수정합니다.
이 준비가 되어 있지 않으면 코드보다 도구 사용에서 먼저 멈춥니다.

이번 실습은 서버 구현이 아니라 기본 손동작을 맞추는 단계입니다.

## 2. 진행 순서

1. `starter/http/get-post.http`로 GET 요청을 확인합니다.
2. `starter/http/create-post.http`로 POST 요청을 확인합니다.
3. `starter/json/create-post-request.json`에서 JSON 값을 바꿉니다.
4. `starter/git/command-flow.txt`를 보며 Git 작업 흐름을 따라갑니다.
5. `starter/db/members-table-diagram.txt`로 DB 표 구조를 설명합니다.

## 3. 핵심 예시

JSON body를 왜 보는지 먼저 정리합니다.
서버는 요청 body의 key와 value를 읽어 새 데이터를 만들기 때문입니다.

```json
{
  "title": "A&I Bootcamp",
  "body": "요청 body를 바꿉니다.",
  "userId": 4
}
```

이 예시는 POST 요청에서 어떤 값이 서버로 전달되는지 확인하는 문제를 해결합니다.
`title`, `body`, `userId`를 바꿔 보내면 요청 의미가 어떻게 달라지는지 볼 수 있습니다.

## 4. Git 흐름

작업을 왜 branch로 나누는지 먼저 정리합니다.
실습 변경을 기본 흐름과 분리해 기록하기 위해서입니다.

```bash
git checkout -b feat/prerequisite-practice
git add .
git commit -m "docs: practice prerequisite flow"
```

이 명령은 작업 줄기를 만들고, 변경 파일을 선택한 뒤, 하나의 기록으로 남기는 문제를 해결합니다.

## 5. 실행/확인

환경 확인 명령을 실행합니다.

```bash
java -version
git --version
```

요청 도구에서는 GET과 POST의 status code를 함께 확인합니다.
DB 표 예시에서는 table, row, column, PK를 한 줄씩 짚습니다.

## 6. 한계와 다음 개선 방향

이번 레포는 Spring Boot 코드를 작성하지 않습니다.
다음 레포에서 Controller, Service, Repository, DTO를 만나면 이번에 확인한 요청 method, JSON body, status code를 코드 흐름에 연결합니다.
