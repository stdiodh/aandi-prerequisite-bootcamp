# 체크리스트

## 1. 기능 확인

- [ ] GET 요청의 기대 상태 코드와 response body를 설명합니다.
- [ ] POST 요청의 기대 상태 코드와 새 `id`를 설명합니다.
- [ ] JSON body에서 바꾼 key와 value를 설명합니다.
- [ ] Git branch를 만들고 현재 branch를 확인합니다.

## 2. 코드 구조 확인

이번 시퀀스는 서버 코드 구조를 만들지 않습니다.
대신 다음 시퀀스에서 사용할 요청/응답, Git, DB 용어의 기준을 확인합니다.

## 3. 실패 케이스 확인

- [ ] 상태 코드와 body 중 하나만 보고 판단하지 않습니다.
- [ ] JSON key와 value를 혼동하지 않습니다.
- [ ] branch를 만든 뒤 현재 branch 확인을 생략하지 않습니다.
- [ ] PK를 "중요한 값"이 아니라 row를 구분하는 값으로 설명합니다.

## 4. 설명할 수 있어야 하는 것

- [ ] GET과 POST의 목적 차이
- [ ] `200`, `201`, `400`, `404`의 의미
- [ ] JSON request body와 response body 차이
- [ ] branch를 나누는 이유
- [ ] table, row, column, PK의 의미

## 5. 남은 한계와 다음 시퀀스 연결

이번 시퀀스는 Spring Boot 코드를 구현하지 않습니다.
다음 시퀀스에서는 여기서 확인한 요청과 응답을 Controller, Service, Repository 코드 흐름으로 연결합니다.

<details>
<summary>멘토용 리뷰 기준</summary>

- 통과 기준: 멘티가 직접 실행한 결과를 answer 자료와 비교해 설명합니다.
- 보완 필요 기준: 요청 결과를 외우거나, Git branch 흐름을 명령어 이름만으로 설명하면 손동작을 다시 확인합니다.
- 질문 예시: "POST 응답의 새 id는 request body에서 온 값인가요, 서버가 돌려준 값인가요?"
- answer 브랜치 비교 포인트: HTTP 응답 예시, branch 설명, DB 용어 기준 자료를 멘티 설명과 비교합니다.

</details>
