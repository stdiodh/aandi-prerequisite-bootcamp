window.visualLabData = {
  "kind": "hub",
  "sequence": "00",
  "title": "Prerequisite Visual Lab",
  "description": "HTTP 요청과 JSON 응답, Git branch, DB 기본 용어를 다음 Spring Boot 실습의 언어로 연결합니다.",
  "repo": {
    "name": "aandi-prerequisite-bootcamp",
    "path": "aandi-prerequisite-bootcamp"
  },
  "visualLabPath": "docs/visual-lab/index.html",
  "visualLabHubPath": "docs/visual-lab/index.html",
  "flow": [
    {
      "id": "http-json",
      "label": "HTTP와 JSON 읽기",
      "problem": "상태 코드와 body를 함께 보지 않으면 요청 성공 여부를 잘못 판단할 수 있습니다.",
      "concept": "HTTP method, status code, JSON key/value",
      "action": "GET과 POST 요청을 보내고 응답 status와 body를 함께 읽습니다.",
      "check": "응답에서 status code와 JSON body가 각각 무엇을 말하는지 설명합니다."
    },
    {
      "id": "git-db",
      "label": "Git과 DB 용어 준비",
      "problem": "branch와 DB 기본 용어가 낯설면 이후 코드 문제가 아닌 도구 문제에서 막힙니다.",
      "concept": "branch, commit, table, row, column, PK",
      "action": "작업 흐름을 branch로 분리하고 DB 표 구조를 말로 설명합니다.",
      "check": "다음 시퀀스의 DTO, Entity, Repository 용어와 어떻게 이어지는지 말합니다."
    }
  ],
  "sequences": [
    {
      "sequence": "00",
      "id": "00",
      "title": "Prerequisite",
      "topic": "HTTP, JSON, Postman, Git, DB basics",
      "href": "./sequences/00/index.html",
      "summary": "Spring Boot 코드를 보기 전에 요청과 응답을 어떤 언어로 읽어야 할까?"
    }
  ]
};
