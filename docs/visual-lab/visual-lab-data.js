window.visualLabData = {
  sequence: "00",
  title: "Prerequisite Visual Lab",
  goal: "HTTP 요청과 JSON 응답, Git branch, DB 기본 용어를 다음 Spring Boot 실습의 언어로 연결합니다.",
  flow: [
    {
      id: "http-json",
      label: "HTTP와 JSON 읽기",
      problem: "상태 코드와 body를 함께 보지 않으면 요청 성공 여부를 잘못 판단할 수 있습니다.",
      concept: "HTTP method, status code, JSON key/value",
      action: "GET과 POST 요청을 보내고 응답 status와 body를 함께 읽습니다.",
      check: "응답에서 status code와 JSON body가 각각 무엇을 말하는지 설명합니다.",
    },
    {
      id: "git-db",
      label: "Git과 DB 용어 준비",
      problem: "branch와 DB 기본 용어가 낯설면 이후 코드 문제가 아닌 도구 문제에서 막힙니다.",
      concept: "branch, commit, table, row, column, PK",
      action: "작업 흐름을 branch로 분리하고 DB 표 구조를 말로 설명합니다.",
      check: "다음 시퀀스의 DTO, Entity, Repository 용어와 어떻게 이어지는지 말합니다.",
    },
  ],
  defaultSequence: "00",
  repo: {
    name: "aandi-prerequisite-bootcamp",
    path: "aandi-prerequisite-bootcamp",
  },
  sequences: [
    {
      id: "00",
      title: "Prerequisite",
      topic: "HTTP, JSON, Postman, Git, DB basics",
      question: "Spring Boot 코드를 보기 전에 요청과 응답을 어떤 언어로 읽어야 할까?",
      goal: "서버 구현 전 HTTP, JSON, Git, DB 용어를 같은 기준으로 맞춥니다.",
      source: {
        theory: "../theory.md",
        implementation: "../implementation.md",
        checklist: "../checklist.md",
      },
      why: {
        problem: "다음 시퀀스부터는 서버 실행, HTTP 요청, JSON 응답, branch 이동, DB 용어가 동시에 등장합니다.",
        limits: [
          "응답 body만 보면 요청이 성공했는지 실패했는지 놓칠 수 있습니다.",
          "JSON key/value를 읽지 못하면 Request DTO와 Response DTO를 이해하기 어렵습니다.",
          "branch와 commit 흐름이 불안정하면 실습 시작점과 비교 지점을 안전하게 오가기 어렵습니다.",
          "table, row, column, PK 용어가 없으면 Entity와 Repository 설명이 추상적으로 남습니다.",
        ],
        choice: "이번 단계에서는 서버 코드를 구현하지 않고, 다음 실습을 읽기 위한 입력과 출력 언어를 먼저 정리합니다.",
      },
      overview: [
        "Client",
        "HTTP Request",
        "JSON Body",
        "Server",
        "Status Code",
        "Response Body",
      ],
      flows: [
        {
          id: "http-request-flow",
          title: "HTTP 요청 실행 흐름",
          summary: "요청 도구에서 보낸 method와 JSON body가 서버 응답의 status와 body로 돌아오는 흐름입니다.",
          mermaid: "sequenceDiagram\n  actor Client\n  participant Tool as Postman or curl\n  participant Server as Sample API\n  Client->>Tool: method, URL, JSON body 준비\n  Tool->>Server: HTTP request\n  Server-->>Tool: status code + JSON response\n  Tool-->>Client: 결과 확인",
          steps: [
            {
              order: 1,
              actor: "Client",
              input: "GET 또는 POST 의도",
              owner: "요청 도구",
              action: "method와 URL, 필요한 JSON body를 준비합니다.",
              output: "HTTP request",
              note: "요청 의도를 method로 구분해야 다음 Controller mapping을 읽을 수 있습니다.",
            },
            {
              order: 2,
              actor: "Sample API",
              input: "HTTP request",
              owner: "Server",
              action: "요청을 처리하고 상태 코드와 JSON body를 응답합니다.",
              output: "Status code + JSON body",
              note: "응답은 body만이 아니라 status code와 함께 읽어야 합니다.",
            },
            {
              order: 3,
              actor: "Learner",
              input: "Status code + body",
              owner: "학습자 확인",
              action: "성공/실패 여부와 JSON key/value 의미를 분리해서 설명합니다.",
              output: "요청/응답 해석",
              note: "이 해석 기준이 다음 시퀀스의 Request DTO와 Response DTO로 이어집니다.",
            },
          ],
        },
        {
          id: "git-db-flow",
          title: "Git과 DB 기본기 흐름",
          summary: "branch로 작업 흐름을 분리하고 DB 표 용어를 다음 Entity 흐름의 언어로 준비합니다.",
          mermaid: "sequenceDiagram\n  actor Learner\n  participant Git as Git branch\n  participant Work as Local work\n  participant DB as DB vocabulary\n  Learner->>Git: branch 확인\n  Git->>Work: 작업 흐름 분리\n  Work->>Git: add and commit\n  Learner->>DB: table, row, column, PK 설명",
          steps: [
            {
              order: 1,
              actor: "Learner",
              input: "현재 작업 위치",
              owner: "Git branch",
              action: "현재 branch를 확인하고 필요한 branch에서 실습을 진행합니다.",
              output: "분리된 작업 흐름",
              note: "branch는 폴더 복사가 아니라 변경 흐름을 분리하는 기준입니다.",
            },
            {
              order: 2,
              actor: "Learner",
              input: "변경된 파일",
              owner: "Git commit",
              action: "add로 기록 대상을 고르고 commit으로 변경 묶음을 남깁니다.",
              output: "설명 가능한 변경 단위",
              note: "commit은 저장 버튼보다 변경 이유를 남기는 기록에 가깝습니다.",
            },
            {
              order: 3,
              actor: "Learner",
              input: "회원 표 예시",
              owner: "DB vocabulary",
              action: "table, row, column, PK를 표 위에서 짚어 설명합니다.",
              output: "Entity와 Repository를 읽을 기본 용어",
              note: "다음 DB 흐름에서 Entity는 table과 연결되고 id는 PK 감각으로 읽습니다.",
            },
          ],
        },
      ],
      responsibilities: [
        {
          name: "HTTP method",
          role: "요청 의도를 나타냅니다.",
          caution: "GET과 POST를 같은 요청으로 읽으면 Controller 역할도 흐려집니다.",
        },
        {
          name: "JSON",
          role: "요청과 응답 데이터를 key/value로 표현합니다.",
          caution: "다음 시퀀스의 DTO와 연결되는 입력/출력 언어입니다.",
        },
        {
          name: "Git branch",
          role: "실습 작업 흐름을 분리합니다.",
          caution: "어느 branch에서 작업 중인지 확인하지 않으면 비교 기준이 흔들립니다.",
        },
        {
          name: "DB vocabulary",
          role: "Entity와 Repository 설명을 읽기 위한 표 기반 언어를 제공합니다.",
          caution: "정의를 외우기보다 예시 표에서 직접 짚어야 오래 남습니다.",
        },
      ],
      concepts: [
        {
          title: "Status code와 body를 함께 읽기",
          body: "응답의 성공 여부는 상태 코드가 먼저 말하고, body는 세부 데이터를 설명합니다.",
        },
        {
          title: "JSON은 DTO 이전 단계입니다",
          body: "아직 Kotlin 클래스를 만들지 않아도 JSON key/value를 보면 DTO의 모양을 예상할 수 있습니다.",
        },
        {
          title: "Branch는 작업 흐름입니다",
          body: "branch는 파일 복사본이 아니라 변경을 안전하게 나누는 기준입니다.",
        },
        {
          title: "PK는 다시 찾기 위한 기준입니다",
          body: "row를 다시 조회하거나 수정하려면 고유하게 식별할 값이 필요합니다.",
        },
      ],
      glossary: [
        {
          term: "HTTP method",
          meaning: "요청이 조회인지 생성인지 같은 의도를 표현합니다.",
          caution: "URL만 같아도 method가 다르면 다른 동작일 수 있습니다.",
        },
        {
          term: "Status code",
          meaning: "서버가 요청 결과를 숫자로 요약한 값입니다.",
          caution: "body가 있어도 4xx라면 성공 응답이 아닐 수 있습니다.",
        },
        {
          term: "JSON body",
          meaning: "요청 또는 응답의 데이터를 key/value로 담는 본문입니다.",
          caution: "key 이름은 다음 DTO 필드 이름과 자연스럽게 연결됩니다.",
        },
        {
          term: "Branch",
          meaning: "같은 레포 안에서 작업 흐름을 나누는 Git 기준입니다.",
          caution: "현재 branch를 확인하지 않고 작업하면 실습 시작점이 섞일 수 있습니다.",
        },
        {
          term: "Primary Key",
          meaning: "DB row를 고유하게 찾기 위한 값입니다.",
          caution: "id 조회, 수정, 삭제 흐름에서 다시 등장합니다.",
        },
      ],
      practical: [
        {
          title: "도구 문제와 코드 문제를 분리합니다",
          body: "요청 도구 사용법이 흔들리면 서버 코드가 맞아도 결과를 잘못 해석할 수 있습니다.",
        },
        {
          title: "상태 코드는 리뷰 언어입니다",
          body: "400, 401, 403, 404 같은 숫자는 이후 API 실패 흐름을 설명하는 공통 언어가 됩니다.",
        },
        {
          title: "DB 용어는 그림보다 표로 확인합니다",
          body: "row와 column은 실제 표에서 짚을 때 Entity와 Repository로 자연스럽게 이어집니다.",
        },
      ],
      checks: [
        "GET과 POST 요청의 의도 차이를 설명할 수 있나요?",
        "응답에서 status code와 JSON body가 각각 무엇을 말하는지 구분할 수 있나요?",
        "현재 branch를 확인하고 작업 흐름을 분리할 수 있나요?",
        "table, row, column, PK를 예시 표로 설명할 수 있나요?",
      ],
      next: {
        id: "01",
        title: "REST CRUD",
        reason: "HTTP 요청과 JSON 응답을 읽을 수 있다면, 다음에는 그 요청이 Spring Boot Controller로 들어가 Service와 저장소를 거쳐 Response DTO로 돌아오는 흐름을 구현합니다.",
      },
    },
  ],
};
