# 구현 가이드

이 시퀀스는 서버 코드를 작성하지 않습니다.
answer 브랜치에서는 starter에서 직접 실행한 결과를 비교할 기준 자료를 확인합니다.

## 1. 구현 전에 확인할 문제

다음 시퀀스부터는 API 요청, JSON body, Git branch, DB 용어가 계속 등장합니다.
따라서 지금은 코드를 작성하기보다 도구를 직접 실행하고 결과를 읽는 손동작을 맞춥니다.

## 2. 구현 순서

1. GET 요청을 보내고 상태 코드와 body를 읽습니다.
2. POST 요청에 JSON body를 담아 보냅니다.
3. JSON key와 value를 바꿔 요청 의미를 확인합니다.
4. Git clone, branch, add, commit 흐름을 실행합니다.
5. DB 표 예시로 table, row, column, PK를 설명합니다.
6. answer 자료와 실행 결과를 비교합니다.

## 3. Step 1. HTTP 응답 비교

### 해야 할 일

GET과 POST 요청을 실행한 뒤 answer 자료의 기대 응답과 비교합니다.

### 왜 이 작업을 하는가

응답 body만 보면 성공처럼 보여도 상태 코드가 실패일 수 있습니다.
반대로 상태 코드만 보면 어떤 데이터가 돌아왔는지 놓칠 수 있습니다.

### 확인 방법

- `answer/http/get-post-response.json`
- `answer/http/create-post-response.json`

## 4. Step 2. Git 흐름 비교

### 해야 할 일

clone, branch 생성, add, commit 흐름을 실행한 뒤 branch를 나누는 이유를 설명합니다.

### 왜 이 작업을 하는가

브랜치는 작업을 섞지 않고 분리하기 위한 기준입니다.
다음 시퀀스부터는 브랜치가 곧 실습 시작점과 비교 기준을 나누는 장치가 됩니다.

### 확인 방법

- `answer/git/branch-why.txt`

## 5. Step 3. DB 용어 비교

### 해야 할 일

회원 표 예시를 보며 table, row, column, PK를 직접 가리켜 설명합니다.

### 왜 이 작업을 하는가

다음 DB Access 시퀀스에서 Entity와 Repository를 다룰 때, 무엇을 저장하고 어떤 값으로 구분하는지 이해해야 합니다.

### 확인 방법

- `answer/db/terms.txt`

## 마지막 확인

```bash
java -version
git --version
```

서버 실행이나 Gradle 테스트는 없습니다.
요청 도구 실행 결과, Git 명령 흐름, DB 용어 설명이 이번 시퀀스의 검증 기준입니다.

<details>
<summary>멘토용 진행 포인트</summary>

- answer 자료를 먼저 읽게 하기보다 멘티의 실행 결과와 나란히 비교합니다.
- 상태 코드, body, Git branch, DB 용어 중 하나라도 설명이 비면 해당 손동작을 다시 실행하게 합니다.
- 다음 시퀀스와 연결할 때는 "HTTP 요청이 Controller로 들어간다"는 한 문장으로 마무리합니다.

</details>
