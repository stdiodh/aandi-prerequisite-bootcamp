# 선수지식 부트캠프 실습 안내

이번 시퀀스는 서버 코드를 작성하지 않습니다.
대신 이후 모든 백엔드 실습에서 반복해서 쓰게 될 기본 손동작을 먼저 익힙니다.

## 실습에서 완성할 흐름

1. GET 요청을 보내고 응답을 읽습니다.
2. POST 요청을 보내고 상태 코드를 확인합니다.
3. JSON body 값을 수정해봅니다.
4. 실습 레포를 clone 하고 새 branch를 만듭니다.
5. 변경을 add 하고 commit 합니다.
6. 간단한 표 예시로 DB 기본 구조를 설명합니다.

## 단계별 실습

### Step 1. GET 요청 보내기

- `starter/postman/prerequisite-bootcamp.postman_collection.json`을 엽니다.
- `GET /posts/1` 요청을 선택합니다.
- 요청을 보내고 응답 body와 상태 코드를 함께 봅니다.

확인할 것:

- `200 OK`가 보이는가
- 응답에 `id`, `title`, `body`, `userId`가 보이는가

### Step 2. POST 요청 보내기

- 같은 컬렉션에서 `POST /posts` 요청을 엽니다.
- 기본 body로 먼저 요청을 보냅니다.
- 응답 상태 코드와 응답 body를 읽습니다.

확인할 것:

- `201 Created`가 보이는가
- 보낸 값이 응답에 다시 보이는가
- 새 `id`가 붙는가

### Step 3. JSON body 수정하기

- `starter/json/create-post-request.json`을 엽니다.
- `title`, `body`, `userId` 값을 바꿉니다.
- 바꾼 값으로 다시 POST 요청을 보냅니다.

확인할 것:

- 어떤 key를 바꿨는지 설명할 수 있는가
- 바꾼 value가 응답에 반영되는가

### Step 4. Git clone

- 실습용 레포를 clone 합니다.
- clone 후 폴더가 생겼는지 확인합니다.

확인할 것:

- clone이 원격 레포를 내 컴퓨터로 가져오는 작업이라는 점을 설명할 수 있는가

### Step 5. Git branch 만들기

- clone 한 폴더로 이동합니다.
- `git checkout -b feat/<name>` 명령으로 새 branch를 만듭니다.

확인할 것:

- branch를 만드는 이유를 한 문장으로 말할 수 있는가

### Step 6. Git add / commit

- 간단한 텍스트 파일 하나를 수정합니다.
- `git add .` 또는 파일 경로를 사용해 staging 합니다.
- `git commit -m "docs: practice git flow"`처럼 commit 합니다.

확인할 것:

- add와 commit의 차이를 설명할 수 있는가

### Step 7. DB 기본 구조 설명

- `starter/db/members-table-diagram.txt`를 엽니다.
- 표를 보면서 table, row, column, PK를 설명합니다.

확인할 것:

- PK가 row를 구분하는 값이라는 점을 말할 수 있는가

## 참고 구현 비교

이 브랜치에는 참고 자료를 두지 않습니다.
수업 후 `00-answer` 브랜치에서 응답 예시, Git 설명, DB 용어 정리를 비교합니다.
