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

## Git 명령어와 의미

- `git clone <url>`: 원격 레포를 로컬로 가져옵니다.
- `git checkout -b feat/<name>`: 새 branch를 만들고 바로 이동합니다.
- `git add .`: commit 후보에 파일을 올립니다.
- `git commit -m "docs: practice git flow"`: 이번 작업 묶음을 기록합니다.

## branch를 나누는 이유

branch를 나누는 이유는 기본 작업 줄기를 안전하게 지키면서 내 변경을 따로 관리하기 위해서입니다.

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
