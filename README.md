# 00 선수지식 부트캠프

이 브랜치는 `00-answer` 참고 비교 브랜치입니다.
Spring Boot 코드를 작성하기 전에 HTTP, JSON, Postman, Git, DB 기본 용어를 손으로 익히는 준비 단계의 기준 자료를 담습니다.

## 이 시퀀스에서 다루는 문제

다음 Spring Boot 실습에서는 요청을 보내고, 응답을 읽고, Git branch를 오가며, DB 저장 구조를 계속 설명합니다.
이 선수지식이 흔들리면 코드 문제가 아닌 요청 도구, Git 흐름, 용어 문제에서 먼저 막힙니다.

## 학습 목표

- GET과 POST 요청의 목적 차이를 설명합니다.
- 상태 코드와 response body를 함께 읽습니다.
- JSON body에서 key와 value를 구분합니다.
- Git branch를 만드는 이유와 add/commit 흐름을 설명합니다.
- table, row, column, PK를 표 예시로 설명합니다.

## 멘티 시작 흐름

먼저 starter 브랜치에서 요청과 Git 명령을 직접 실행합니다.
이 브랜치는 실습 후 기대 응답, Git 설명, DB 용어 설명을 비교할 때 사용합니다.

## 읽는 순서

1. [이론 정리](./docs/theory.md)
2. [실습 안내](./docs/implementation.md)
3. [체크리스트](./docs/checklist.md)
4. [참고 구현 가이드](./docs/answer-guide.md)
5. [제공 자료 안내](./docs/assets.md)

## 실행 / 테스트 방법

이 시퀀스는 서버 코드를 실행하지 않습니다.
대신 아래 명령과 요청 도구 실행 여부를 확인합니다.

```bash
java -version
git --version
```

## 완료 기준

- GET/POST 요청 결과를 상태 코드와 body로 함께 설명합니다.
- JSON body 값을 바꿔 요청 의미가 달라지는 지점을 설명합니다.
- Git branch 생성과 commit 흐름을 직접 실행했습니다.
- DB 기본 용어를 회원 표 예시와 연결합니다.

<details>
<summary>멘토용 진행 포인트</summary>

## 수업 전 확인

- answer 자료를 먼저 보여주지 않고 starter 실습 결과를 먼저 확인합니다.
- Postman 컬렉션, HTTP 예시, Git 명령 자료, DB 표 자료가 준비되어 있는지 확인합니다.

## 수업 중 질문

- "이 요청은 왜 GET인가요, POST인가요?"
- "상태 코드와 body는 각각 무엇을 알려주나요?"
- "branch를 만들지 않으면 어떤 작업이 섞일 수 있나요?"

## 리뷰 기준

- 멘티가 기대 응답을 외우기보다 직접 실행한 결과와 비교합니다.
- Git 명령어 이름보다 clone -> branch -> add -> commit 순서를 설명합니다.
- DB 용어는 정의만 말하지 않고 표의 한 줄과 한 칸을 직접 짚습니다.

</details>
