# 선수지식 부트캠프 실습 안내

이번 시퀀스는 서버 코드를 작성하지 않습니다.  
대신 이후 모든 백엔드 실습에서 반복해서 쓰게 될 기본 손동작을 먼저 익힙니다.

## 학생이 완성할 흐름

1. GET 요청을 보내고 응답을 읽습니다.
2. POST 요청을 보내고 상태 코드를 확인합니다.
3. JSON body 값을 수정해봅니다.
4. 실습 레포를 clone 하고 새 branch를 만듭니다.
5. 변경을 add 하고 commit 합니다.
6. 간단한 표 예시로 DB 기본 구조를 설명합니다.

## 정답 기준

- GET 요청은 `200 OK`와 응답 body를 함께 확인합니다.
- POST 요청은 `201 Created`와 새 `id`를 함께 확인합니다.
- JSON body는 key와 value를 구분해서 읽습니다.
- branch는 작업 흐름을 분리하기 위해 만듭니다.
- PK는 row를 겹치지 않게 구분하는 대표 값입니다.

## 실행 비교 자료

- `answer/http/get-post-response.json`
- `answer/http/create-post-response.json`
- `answer/git/branch-why.txt`
- `answer/db/terms.txt`
