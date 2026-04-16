# 선수지식 부트캠프 정답 가이드

## GET 요청 예시와 해석

예시 요청:

```http
GET https://jsonplaceholder.typicode.com/posts/1
```

빠른 해석:

- 목적: 이미 있는 데이터를 조회합니다.
- 기대 상태 코드: `200 OK`
- 확인 포인트: 응답에 `id`, `title`, `body`, `userId` 같은 값이 보입니다.

## POST 요청 예시와 해석

예시 요청:

```http
POST https://jsonplaceholder.typicode.com/posts
Content-Type: application/json
```

빠른 해석:

- 목적: 새 데이터를 보내서 생성 흐름을 연습합니다.
- 기대 상태 코드: `201 Created`
- 확인 포인트: 보낸 JSON 값이 응답에 다시 보이고, 새 `id`가 함께 보일 수 있습니다.

## JSON request / response 예시

요청 예시:

```json
{
  "title": "A&I Bootcamp",
  "body": "Postman으로 POST 요청을 보내는 연습입니다.",
  "userId": 4
}
```

응답 예시:

```json
{
  "title": "A&I Bootcamp",
  "body": "Postman으로 POST 요청을 보내는 연습입니다.",
  "userId": 4,
  "id": 101
}
```

핵심은 아래 두 가지입니다.

- 요청 body는 내가 보내는 데이터입니다.
- 응답 body는 서버가 처리 후 돌려주는 데이터입니다.

## 대표 상태 코드 예시

- `200 OK`: 조회나 일반 처리 성공
- `201 Created`: 생성 성공
- `400 Bad Request`: 요청 형식 문제
- `404 Not Found`: 대상 없음

## Git 명령어와 의미

- `git clone <url>`: 원격 레포를 로컬로 가져옵니다.
- `git checkout -b feat/<name>`: 새 branch를 만들고 바로 이동합니다.
- `git add .`: commit 후보에 파일을 올립니다.
- `git commit -m "docs: practice git flow"`: 이번 작업 묶음을 기록합니다.

## branch를 나누는 이유

branch를 나누는 이유는 기본 작업 줄기를 안전하게 지키면서 내 변경을 따로 관리하기 위해서입니다.
쉽게 말하면 "공용 줄기를 바로 건드리지 않고 내 작업 공간을 따로 만드는 것"입니다.

## DB 예시 표

| id | name | email |
| --- | --- | --- |
| 1 | Mina | mina@aandi.dev |
| 2 | Jisoo | jisoo@aandi.dev |

빠른 해석:

- table: `members`
- row: `1 / Mina / mina@aandi.dev` 같은 한 줄
- column: `id`, `name`, `email`
- PK: `id`

## row / column / PK 설명

- row: 한 사람 데이터 한 줄입니다.
- column: 어떤 종류의 값을 담는 칸인지 나타냅니다.
- PK: 각 row를 겹치지 않게 구분하는 대표 값입니다.

## 자주 나오는 질문 짧은 답

- GET과 POST 차이는 무엇인가요?  
  GET은 주로 조회, POST는 주로 생성 요청에 씁니다.

- 왜 상태 코드도 같이 봐야 하나요?  
  요청이 성공했는지 실패했는지를 가장 빠르게 알려주기 때문입니다.

- branch를 왜 꼭 만들어야 하나요?  
  다른 작업과 섞이지 않게 내 변경을 안전하게 분리하기 위해서입니다.

- PK는 왜 필요한가요?  
  같은 table 안의 각 row를 정확히 구분하기 위해 필요합니다.
