# 선수지식 부트캠프 이론 정리

## 1. 요청을 보냈는데 무엇을 봐야 할까?

백엔드 실습은 요청을 보내고 응답을 읽는 장면이 계속 반복됩니다.
처음부터 Controller 코드를 보기 전에, method, status code, JSON body가 각각 무엇을 알려주는지 먼저 잡아야 합니다.

문제는 응답 body만 보고 성공으로 판단하기 쉽다는 점입니다.
서버는 body와 함께 status code로 처리 결과를 알려주므로, 요청을 볼 때는 method, URL, status code, body를 같이 읽어야 합니다.

## 2. 배경: 요청 의도와 응답 결과는 따로 봅니다

`GET`은 주로 조회 의도를 나타내고, `POST`는 새 데이터를 보내 생성하는 의도를 나타냅니다.
같은 URL처럼 보여도 method가 다르면 서버가 이해하는 요청 의미가 달라집니다.

상태 코드는 서버가 요청을 어떻게 처리했는지 알려줍니다.
`200 OK`는 조회 성공, `201 Created`는 생성 성공, `400 Bad Request`는 요청 형식 문제, `404 Not Found`는 대상을 찾지 못한 상황으로 읽습니다.

## 3. 선택한 방식: 작은 요청 예시로 먼저 손에 익힙니다

이번 시퀀스는 서버 코드를 만들지 않습니다.
대신 HTTP 요청 파일, JSON body 파일, Git 명령 흐름, DB 표 예시를 직접 열어보고 다음 Spring Boot 실습에서 반복될 기본 장면을 먼저 연습합니다.

```text
요청 보내기 -> 상태 코드 읽기 -> JSON 값 바꾸기 -> Git으로 작업 기록하기 -> 표 구조 설명하기
```

## 4. 핵심 코드로 연결하기

이번 레포에는 `src` 코드가 없습니다.
대신 실제 실습 자료가 다음 경로에 있습니다.

- `starter/http/get-post.http`: GET 요청과 응답 상태를 확인하는 예시입니다.
- `starter/http/create-post.http`: POST 요청으로 JSON body를 보내는 예시입니다.
- `starter/json/create-post-request.json`: 요청 body에서 바꿀 수 있는 값의 기준입니다.
- `starter/git/command-flow.txt`: clone, branch, add, commit 순서를 확인하는 자료입니다.
- `starter/db/members-table-diagram.txt`: table, row, column, PK를 표로 연결하는 자료입니다.

왜 이 파일을 보는지 먼저 정리합니다.
다음 시퀀스에서 `@GetMapping`, `@PostMapping`, DTO, Repository를 만나면 여기서 연습한 요청 의도와 데이터 모양이 그대로 이어지기 때문입니다.

```json
{
  "title": "A&I Bootcamp",
  "body": "JSON 값을 수정합니다.",
  "userId": 4
}
```

이 예시는 JSON body의 key와 value를 구분하는 문제를 해결합니다.
값을 바꾸면 같은 POST 요청이라도 서버에 전달하는 내용이 달라진다는 점을 확인할 수 있습니다.

## 5. 실행/테스트 결과로 확인할 것

자동 테스트 대신 아래 명령과 손동작을 확인합니다.

```bash
java -version
git --version
```

Postman이나 HTTP 요청 도구에서는 `GET`, `POST`, status code, JSON body를 확인합니다.
Git에서는 새 branch를 만들고, 변경을 add 한 뒤 commit으로 기록합니다.

## 6. 한계와 다음 개선 방향

이번 단계는 서버 내부 코드를 만들지 않습니다.
그래서 요청이 실제 Controller로 들어가는 과정은 다음 `spring-boot-rest-crud-lab`에서 확인합니다.

이번 레포의 완료 기준은 “정답을 외우는 것”이 아니라, 요청과 응답을 읽고 Git 작업을 기록할 수 있는 준비 상태를 만드는 것입니다.
