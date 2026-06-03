# 이론 정리

## 1. 왜 이 개념이 필요한가

이후 Spring Boot 실습에서는 API 요청을 보내고 응답을 읽는 일이 계속 반복됩니다.
HTTP 메서드, 상태 코드, JSON 형태가 낯설면 코드를 보기 전에 요청 도구에서 먼저 막히기 쉽습니다.

Git과 DB 용어도 마찬가지입니다.
브랜치 흐름과 table, row, column, PK를 이해해야 다음 실습에서 코드 변경 위치와 저장 구조를 따라갈 수 있습니다.

## 2. 기존 방식의 한계

요청 body만 보거나, 상태 코드만 보거나, Git 명령어만 외우면 실제 실습에서 흐름을 놓치기 쉽습니다.
이번 시퀀스에서는 도구 사용법을 나열하기보다 요청 의도, 응답 확인, 작업 분리, 데이터 구조를 하나의 준비 흐름으로 묶습니다.

## 3. 이번 시퀀스에서 선택한 접근

- HTTP는 GET/POST와 상태 코드 중심으로 봅니다.
- JSON은 key와 value를 바꿨을 때 요청 의미가 어떻게 달라지는지 봅니다.
- Git은 clone, branch, add, commit 순서로 손동작을 확인합니다.
- DB는 회원 표 예시로 table, row, column, PK를 연결합니다.

## 4. 핵심 개념

### HTTP 메서드와 상태 코드

`GET`은 주로 조회, `POST`는 주로 생성 요청에 사용합니다.
상태 코드는 서버가 요청을 어떻게 처리했는지 알려주는 숫자입니다.

### JSON

JSON은 데이터를 key와 value로 정리해서 보여주는 형식입니다.

```json
{
  "title": "A&I Bootcamp",
  "body": "JSON 값을 수정해봅니다.",
  "userId": 4
}
```

### Git branch

branch는 같은 레포 안에서 작업 줄기를 따로 나누는 도구입니다.
기본 브랜치를 바로 건드리지 않고 내 작업을 따로 남기는 감각을 익힙니다.

### DB table, row, column, PK

| id | name | email |
| --- | --- | --- |
| 1 | Mina | mina@aandi.dev |
| 2 | Jisoo | jisoo@aandi.dev |

- table: 데이터를 담는 큰 표입니다.
- row: 표의 한 줄 데이터입니다.
- column: 각 칸의 종류입니다.
- PK: 각 row를 겹치지 않게 구분하는 대표 값입니다.

## 5. 짧은 예제와 해설

```http
POST https://jsonplaceholder.typicode.com/posts
Content-Type: application/json
```

POST 요청은 새 데이터를 보내는 연습에 사용합니다.
이때 `Content-Type`과 JSON body가 맞아야 서버가 요청을 의도한 형식으로 해석합니다.

## 6. 다음 구현으로 연결되는 지점

다음 시퀀스에서는 HTTP 요청이 Controller로 들어오고, Service와 Repository를 거쳐 응답 DTO로 돌아갑니다.
이번 단계에서 요청과 응답, JSON, Git, DB 용어를 맞춰 두면 첫 Spring Boot 구현을 더 안정적으로 따라갈 수 있습니다.

<details>
<summary>멘토용 설명 포인트</summary>

- 정답 자료는 실행 결과를 대체하지 않고 비교 기준으로만 사용합니다.
- 상태 코드는 body와 함께 읽게 하고, Git branch는 현재 branch 확인까지 연결합니다.
- DB 용어는 추상 정의보다 회원 표의 row와 column을 직접 가리키게 합니다.

</details>
