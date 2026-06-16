# A&I Prerequisite Bootcamp

이 레포는 A&I 백엔드 커리큘럼의 `00. 사전 준비 부트캠프` 시퀀스를 담는 토픽 레포입니다.
`main`은 가이드 브랜치이고, 학생 실습은 `00-implementation`에서 시작합니다.

## 이 레포에서 배우는 것

- 요청을 보냈는데 서버가 어떤 뜻으로 응답했는지 읽는 방법
- GET과 POST를 요청 목적에 맞게 고르는 기준
- JSON body에서 값을 바꿨을 때 요청 의미가 달라지는 지점
- Git clone, branch, add, commit으로 작업을 기록하는 흐름
- table, row, column, PK를 실제 표 예시와 연결하는 방법

## 시작 방법

```bash
git clone https://github.com/stdiodh/aandi-prerequisite-bootcamp.git
cd aandi-prerequisite-bootcamp
git checkout 00-implementation
```

## 실습 브랜치

| 용도 | 브랜치 |
| --- | --- |
| 가이드 | `main` |
| 학생 시작 | `00-implementation` |
| 참고 정답 | `00-answer` |

## 실행 방법

이 시퀀스는 서버 코드를 실행하지 않습니다.
Postman, HTTP 예시 파일, Git 명령 연습, DB 용어 설명 자료를 사용합니다.

## 테스트 방법

자동 테스트 대신 개발 환경과 기본 손동작을 직접 확인합니다.

```bash
java -version
git --version
```

Gradle 프로젝트가 있는 다음 토픽 레포에서는 아래 명령까지 확인합니다.

```bash
./gradlew --version
```

테스트가 확인하는 것:

- GET / POST 요청을 보내고 상태 코드를 읽을 수 있는가
- JSON body 값을 바꿔 요청할 수 있는가
- Git 기본 명령 흐름을 따라갈 수 있는가
- Java/Kotlin/Gradle 실행 환경을 확인할 수 있는가
- DB 기본 용어를 표 예시로 설명할 수 있는가

실패하면 먼저 볼 것:

- 명령을 중앙 레포가 아니라 해당 토픽 레포에서 실행했는지 확인합니다.
- Java와 Git이 터미널 PATH에 잡혀 있는지 확인합니다.
- 요청 도구에서는 method, URL, body 형식을 먼저 봅니다.

완료 기준:

- 환경 확인 명령이 실행됩니다.
- GET/POST 요청과 Git 기본 흐름을 직접 실행했습니다.
- 다음 Spring Boot 실습에서 `./gradlew bootRun`과 `./gradlew test`를 실행할 준비가 되었습니다.

## 정답과 비교하는 방법

실습 중 막혔거나 완료 후 확인이 필요할 때만 참고 정답 브랜치와 비교합니다.

```bash
git fetch origin
git diff 00-implementation..00-answer
```

## Visual Lab

Visual Lab은 아래 위치에 있습니다.

```text
docs/visual-lab/index.html
```

로컬 확인:

```bash
python3 -m http.server 8080 -d docs/visual-lab
```

접속 주소:

```text
http://localhost:8080
```
