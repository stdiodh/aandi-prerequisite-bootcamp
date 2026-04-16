# 선수지식 부트캠프 구현 안내

## 오늘 학생이 완성할 최종 흐름

오늘 실습이 끝나면 학생은 아래 흐름을 직접 따라갈 수 있어야 합니다.

1. GET 요청을 보내고 응답을 읽습니다.
2. POST 요청을 보내고 상태 코드를 확인합니다.
3. JSON body 값을 수정해봅니다.
4. 실습 레포를 clone 하고 새 branch를 만듭니다.
5. 변경을 add 하고 commit 합니다.
6. 간단한 표 예시로 DB 기본 구조를 설명합니다.

## 학생이 직접 진행할 순서

1. GET 요청 보내기
2. POST 요청 보내기
3. JSON body 수정하기
4. `git clone`
5. `git checkout -b`
6. `git add / git commit`
7. DB 기본 구조 설명하기

오늘은 결과보다 손의 순서를 먼저 익히는 것이 중요합니다.

## 단계별 실습 안내

### Step 1. GET 요청 보내기

- `starter/postman/prerequisite-bootcamp.postman_collection.json`을 엽니다.
- `GET /posts/1` 요청을 선택합니다.
- 요청을 보내고 응답 본문과 상태 코드를 함께 봅니다.

실습 힌트:
- 지금은 응답 내용보다도 `200 OK`가 같이 보이는지 먼저 확인해보세요.
- "서버가 어떤 데이터를 돌려줬는가"를 한 문장으로 말해보세요.

### Step 2. POST 요청 보내기

- 같은 컬렉션에서 `POST /posts` 요청을 엽니다.
- 기본 body로 먼저 요청을 보냅니다.
- 응답 상태 코드와 응답 body를 읽습니다.

실습 힌트:
- GET은 가져오는 느낌이고, POST는 보내서 만드는 느낌인지 스스로 비교해보세요.
- 응답에 새 id가 붙는지 같이 보세요.

### Step 3. JSON body 수정하기

- `starter/json/create-post-request.json` 파일을 엽니다.
- `title`, `body`, `userId` 값을 바꿔봅니다.
- 바꾼 값으로 다시 POST 요청을 보냅니다.

실습 힌트:
- 한 번에 모든 값을 바꾸기보다 한 항목씩 바꿔보는 편이 차이를 보기 쉽습니다.
- 지금은 JSON 문법을 완벽히 외우는 것보다 "무엇을 바꿨는지"를 설명할 수 있으면 충분합니다.

### Step 4. git clone

- 실습용 레포를 clone 합니다.
- clone 이 끝나면 폴더가 생겼는지 확인합니다.

실습 힌트:
- clone 은 "원격 레포를 내 컴퓨터로 가져오는 것"이라고 설명해보세요.
- 아직 작업을 나누는 단계는 아니고, 먼저 받아오는 단계입니다.

### Step 5. git checkout -b

- clone 한 폴더로 이동합니다.
- `git checkout -b feat/<이름>` 명령으로 새 branch를 만듭니다.

실습 힌트:
- branch를 만드는 이유를 한 문장으로 적어보세요.
- 중요한 포인트는 "기본 줄기를 지키면서 내 작업을 따로 만든다"입니다.

### Step 6. git add / git commit

- 간단한 텍스트 파일 하나를 수정합니다.
- `git add .` 또는 파일 경로를 사용해 staging 합니다.
- `git commit -m "docs: practice git flow"`처럼 commit 합니다.

실습 힌트:
- add 는 "커밋할 파일을 고르는 단계"입니다.
- commit 은 "이번 작업 묶음을 기록하는 단계"입니다.

### Step 7. DB 기본 구조 설명

- `starter/db/members-table-diagram.txt`를 엽니다.
- 표를 보면서 table, row, column, PK를 말로 설명합니다.

실습 힌트:
- PK는 "절대 겹치면 안 되는 구분값"이라고 설명해보세요.
- row는 한 사람의 정보 한 줄이라고 말하면 이해가 쉽습니다.

## 각 단계의 확인 포인트

- Step 1: 상태 코드와 응답 본문을 같이 읽을 수 있는가
- Step 2: GET과 POST의 역할 차이를 말할 수 있는가
- Step 3: JSON body에서 값을 직접 수정할 수 있는가
- Step 4: clone 이 로컬 복사라는 점을 설명할 수 있는가
- Step 5: branch를 왜 따로 만드는지 말할 수 있는가
- Step 6: add 와 commit의 차이를 설명할 수 있는가
- Step 7: table, row, column, PK를 회원 예시로 설명할 수 있는가

## 학생 체크 질문

- GET 요청은 보통 언제 쓰나요?
- POST 요청 뒤에 왜 `201 Created`를 기대할 수 있나요?
- JSON body에서 값을 바꾸면 어떤 점이 달라지나요?
- branch를 만들지 않으면 어떤 점이 불편할까요?
- PK가 없으면 어떤 문제가 생길까요?

## 강사용 확인 포인트

- 학생이 응답 본문만 읽고 끝내지 않고 상태 코드까지 보는지 확인합니다.
- 학생이 JSON 키와 값을 구분해서 말하는지 확인합니다.
- 학생이 `git checkout -b`의 의미를 단순 암기가 아니라 흐름으로 설명하는지 확인합니다.
- 학생이 DB 용어를 말만 외운 것이 아니라 표 예시와 연결하는지 확인합니다.

## 다음 시퀀스 연결 포인트

다음 시퀀스에서는 이제 실제로 요청과 응답을 직접 만드는 쪽으로 넘어갑니다.
오늘 익힌 GET, POST, JSON, 상태 코드 감각이 있어야 `01-request-response-and-memory-crud`에서 코드 흐름을 훨씬 덜 낯설게 볼 수 있습니다.
