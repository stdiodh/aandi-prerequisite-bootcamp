window.visualLabData = {
  "kind": "sequence",
  "sequence": "00",
  "title": "Prerequisite",
  "subtitle": "HTTP, JSON, Postman, Git, DB basics",
  "goal": "서버 구현 전 HTTP, JSON, Git, DB 용어를 같은 기준으로 맞춥니다.",
  "problem": "다음 시퀀스부터는 서버 실행, HTTP 요청, JSON 응답, branch 이동, DB 용어가 동시에 등장합니다.",
  "repo": {
    "name": "aandi-prerequisite-bootcamp",
    "path": "aandi-prerequisite-bootcamp"
  },
  "defaultSequence": "00",
  "workbench": {
    "kind": "request",
    "title": "요청·도구 준비 워크벤치",
    "instruction": "시나리오를 바꾸며 요청 의도, 응답 증거, 작업 기록이 다음 실습의 어떤 기준이 되는지 확인하세요.",
    "nodes": {
      "learner": {
        "label": "학습자",
        "icon": "person",
        "kind": "person",
        "role": "요청을 구성하고 결과를 해석합니다.",
        "boundary": "학습자"
      },
      "http-client": {
        "label": "Postman / HTTP Client",
        "icon": "client",
        "kind": "tool",
        "role": "method, URL, header, body를 실제 HTTP 요청으로 보냅니다.",
        "boundary": "로컬 요청 도구",
        "codePointIds": ["http-request", "json-body"]
      },
      "sample-api": {
        "label": "JSONPlaceholder API",
        "icon": "external",
        "kind": "external",
        "role": "선수지식 실습 요청을 처리하는 외부 예제 API입니다.",
        "boundary": "외부 HTTP API",
        "codePointIds": ["http-request"]
      },
      "git-cli": {
        "label": "Git CLI",
        "icon": "tool",
        "kind": "tool",
        "role": "branch, add, commit 명령을 실행합니다.",
        "boundary": "로컬 개발 환경",
        "codePointIds": ["git-flow"]
      },
      "local-repository": {
        "label": "Local Git Repository",
        "icon": "repository",
        "kind": "repository",
        "role": "선택한 변경을 commit 기록으로 보관합니다.",
        "boundary": "Git 기록",
        "codePointIds": ["git-flow"]
      },
      "members-table": {
        "label": "members table",
        "icon": "database",
        "kind": "database",
        "role": "table, row, column, PK를 구분하는 예제 표입니다.",
        "boundary": "DB 기초 모델"
      }
    },
    "scenarios": [
      {
        "id": "get-response",
        "label": "GET 응답 읽기",
        "flowId": "http-request-flow",
        "tone": "signal",
        "prompt": "조회 요청의 성공 여부를 body만 보지 않고 어떻게 판단해야 할까요?",
        "diagram": {
          "caption": "요청은 method와 URL로 보내고, 결과는 status와 JSON body를 함께 읽습니다.",
          "lanes": [
            {
              "id": "http-round-trip",
              "label": "HTTP 왕복",
              "description": "로컬 요청 도구와 외부 예제 API 사이의 조회 요청과 응답입니다.",
              "steps": [
                {
                  "from": "learner",
                  "to": "http-client",
                  "verb": "구성",
                  "payload": "GET https://jsonplaceholder.typicode.com/posts/1",
                  "kind": "config",
                  "concept": "method + URL",
                  "check": "GET과 전체 URL이 일치하는지 확인합니다.",
                  "codePointIds": ["http-request"]
                },
                {
                  "from": "http-client",
                  "to": "sample-api",
                  "verb": "전송",
                  "payload": "GET /posts/1",
                  "kind": "request",
                  "concept": "HTTP request",
                  "check": "요청이 외부 API로 나가는지 확인합니다."
                },
                {
                  "from": "sample-api",
                  "to": "http-client",
                  "verb": "응답",
                  "payload": "200 OK + JSON body",
                  "kind": "response",
                  "concept": "status + body",
                  "check": "상태 코드와 응답 JSON을 함께 읽습니다."
                },
                {
                  "from": "http-client",
                  "to": "learner",
                  "verb": "확인",
                  "payload": "조회 성공과 응답 데이터",
                  "kind": "compare",
                  "concept": "결과 해석",
                  "check": "200의 의미와 body의 key/value를 설명합니다."
                }
              ]
            }
          ]
        },
        "route": [
          "학생",
          "Postman/HTTP Client",
          "API Server",
          "Postman/HTTP Client",
          "학생"
        ],
        "snapshot": [
          { "label": "Method", "value": "GET" },
          { "label": "Status", "value": "200 OK", "tone": "recovered" },
          { "label": "Body", "value": "JSON 응답" }
        ],
        "evidence": "starter/http/get-post.http의 method·URL과 응답 status code·body를 함께 확인합니다.",
        "outcome": "상태 코드로 조회 성공을 판단하고 JSON body에서 결과 데이터를 읽습니다."
      },
      {
        "id": "post-json",
        "label": "POST body 바꾸기",
        "flowId": "http-request-flow",
        "tone": "recovered",
        "prompt": "JSON value를 바꾸면 같은 POST 요청의 무엇이 달라질까요?",
        "diagram": {
          "caption": "JSON의 key는 요청 모양을 유지하고, 바꾼 value가 서버로 전달할 내용을 바꿉니다.",
          "lanes": [
            {
              "id": "post-round-trip",
              "label": "POST 요청과 응답",
              "description": "JSON value를 바꾼 뒤 외부 예제 API의 생성 응답과 비교합니다.",
              "steps": [
                {
                  "from": "learner",
                  "to": "http-client",
                  "verb": "수정",
                  "payload": "JSON { title, body, userId }",
                  "kind": "config",
                  "concept": "JSON key/value",
                  "check": "key가 아니라 value를 바꿨는지 확인합니다.",
                  "codePointIds": ["json-body"]
                },
                {
                  "from": "http-client",
                  "to": "sample-api",
                  "verb": "전송",
                  "payload": "POST /posts + JSON body",
                  "kind": "request",
                  "concept": "Request body",
                  "check": "Content-Type과 JSON 형식을 확인합니다."
                },
                {
                  "from": "sample-api",
                  "to": "http-client",
                  "verb": "응답",
                  "payload": "201 Created + JSON body",
                  "kind": "response",
                  "concept": "생성 응답",
                  "check": "201 상태와 응답 body를 확인합니다."
                },
                {
                  "from": "http-client",
                  "to": "learner",
                  "verb": "비교",
                  "payload": "보낸 value ↔ 응답 JSON",
                  "kind": "compare",
                  "concept": "입력과 결과",
                  "check": "바꾼 값이 응답에서 어떻게 보이는지 설명합니다."
                }
              ]
            }
          ]
        },
        "route": [
          "학생",
          "JSON Body",
          "Postman/HTTP Client",
          "API Server",
          "Postman/HTTP Client"
        ],
        "snapshot": [
          { "label": "Method", "value": "POST" },
          { "label": "Request", "value": "JSON key/value" },
          { "label": "Status", "value": "201 Created", "tone": "recovered" }
        ],
        "evidence": "starter/json/create-post-request.json의 value를 바꾼 뒤 요청과 생성 응답을 비교합니다.",
        "outcome": "key는 요청 필드의 이름으로 유지되고 value가 서버에 전달할 실제 내용으로 바뀝니다."
      },
      {
        "id": "invalid-request",
        "label": "잘못된 요청 형식",
        "flowId": "http-request-flow",
        "tone": "warning",
        "prompt": "400 Bad Request는 어떤 의미이며 실제 요청 전 무엇을 먼저 점검해야 할까요?",
        "diagram": {
          "caption": "400은 요청 형식 문제를 뜻하지만, 이 starter에는 실패를 재현하는 요청이 없으므로 실제 결과와 구분해 읽습니다.",
          "lanes": [
            {
              "id": "bad-request-concept",
              "label": "400 의미 확인",
              "description": "실행된 실패 흐름이 아니라 요청 형식 오류의 일반적인 해석 기준입니다.",
              "steps": [
                {
                  "from": "learner",
                  "to": "http-client",
                  "verb": "점검",
                  "payload": "method · URL · JSON body",
                  "kind": "config",
                  "concept": "요청 형식",
                  "check": "세 항목을 먼저 서로 대조합니다."
                },
                {
                  "from": "http-client",
                  "to": "sample-api",
                  "verb": "가정",
                  "payload": "형식이 잘못된 HTTP request",
                  "kind": "request",
                  "concept": "개념 예시",
                  "check": "starter의 실행 증거와 구분합니다."
                },
                {
                  "from": "sample-api",
                  "to": "http-client",
                  "verb": "일반적 실패 의미",
                  "payload": "400 Bad Request",
                  "kind": "failure",
                  "concept": "요청 형식 오류",
                  "check": "endpoint별 실제 오류 응답은 별도로 확인해야 합니다."
                },
                {
                  "from": "http-client",
                  "to": "learner",
                  "verb": "해석",
                  "payload": "요청 형식을 고쳐 다시 전송",
                  "kind": "response",
                  "concept": "실패 대응",
                  "check": "실행하지 않은 결과를 실제 증거로 단정하지 않습니다."
                }
              ]
            }
          ],
          "notReached": [
            {
              "label": "실패 요청의 실행 증거",
              "reason": "현재 starter에는 400을 재현하는 invalid request가 없습니다."
            }
          ]
        },
        "route": [
          "학생",
          "JSON Body",
          "Postman/HTTP Client",
          "API Server",
          "JSON 응답"
        ],
        "snapshot": [
          { "label": "Request", "value": "형식 오류", "tone": "blocked" },
          { "label": "Status", "value": "400 Bad Request의 일반 의미", "tone": "warning" },
          { "label": "확인", "value": "method · URL · body" }
        ],
        "evidence": "현재 starter에는 실패 요청이 없으므로 method, URL, JSON body 점검 기준과 400의 일반적인 의미를 구분해 읽습니다.",
        "outcome": "실제 endpoint 응답으로 단정하지 않고 재현 요청이 있을 때 status와 body를 다시 확인합니다."
      },
      {
        "id": "record-work",
        "label": "작업 기록과 DB 용어",
        "flowId": "git-db-flow",
        "tone": "signal",
        "prompt": "다음 실습 전에 작업 위치와 데이터 표 구조를 어떤 증거로 설명할 수 있을까요?",
        "diagram": {
          "caption": "Git 작업 기록과 DB 표 용어는 서로 이어지는 시스템 호출이 아니라 다음 실습을 위한 두 개의 준비 과제입니다.",
          "lanes": [
            {
              "id": "git-practice",
              "label": "Git 작업 기록",
              "description": "branch를 나누고 선택한 변경을 commit으로 남깁니다.",
              "steps": [
                {
                  "from": "learner",
                  "to": "git-cli",
                  "verb": "분기",
                  "payload": "git checkout -b feat/<your-name>",
                  "kind": "config",
                  "concept": "작업 branch",
                  "check": "현재 branch를 확인합니다.",
                  "codePointIds": ["git-flow"]
                },
                {
                  "from": "git-cli",
                  "to": "local-repository",
                  "verb": "선택",
                  "payload": "git add .",
                  "kind": "event",
                  "concept": "staging",
                  "check": "기록할 변경이 선택됐는지 확인합니다."
                },
                {
                  "from": "git-cli",
                  "to": "local-repository",
                  "verb": "기록",
                  "payload": "git commit -m <message>",
                  "kind": "persist",
                  "concept": "commit",
                  "check": "변경 이유가 commit으로 남았는지 확인합니다."
                }
              ]
            },
            {
              "id": "db-vocabulary",
              "label": "DB 표 용어",
              "description": "members 표에서 구조와 한 건의 데이터를 구분합니다.",
              "steps": [
                {
                  "from": "learner",
                  "to": "members-table",
                  "verb": "구분",
                  "payload": "table · row · column",
                  "kind": "compare",
                  "concept": "표 구조와 데이터",
                  "check": "전체 표, 한 줄, 각 항목을 짚어 설명합니다."
                },
                {
                  "from": "learner",
                  "to": "members-table",
                  "verb": "식별",
                  "payload": "id = PK",
                  "kind": "compare",
                  "concept": "Primary Key",
                  "check": "각 row를 고유하게 찾는 값을 설명합니다."
                }
              ]
            }
          ]
        },
        "route": [
          "학생",
          "Git CLI",
          "Git branch",
          "Local work",
          "Git commit",
          "DB Table"
        ],
        "snapshot": [
          { "label": "작업 위치", "value": "현재 branch" },
          { "label": "변경 기록", "value": "add → commit" },
          { "label": "DB 기준", "value": "table · row · column · PK" }
        ],
        "evidence": "starter/git/command-flow.txt와 starter/db/members-table-diagram.txt를 직접 따라갑니다.",
        "outcome": "변경을 branch와 commit으로 설명하고 한 row를 PK로 다시 찾는 기준을 말할 수 있습니다."
      }
    ]
  },
  "actors": [
    {
      "id": "student",
      "label": "학생",
      "kind": "person"
    },
    {
      "id": "client",
      "label": "Postman/HTTP Client",
      "kind": "client"
    },
    {
      "id": "server",
      "label": "API Server",
      "kind": "server"
    },
    {
      "id": "json",
      "label": "JSON Body",
      "kind": "logic"
    },
    {
      "id": "git",
      "label": "Git CLI",
      "kind": "client"
    },
    {
      "id": "db",
      "label": "DB Table",
      "kind": "db"
    }
  ],
  "flows": [
    {
      "id": "http-request-flow",
      "title": "HTTP 요청 실행 흐름",
      "summary": "요청 도구에서 보낸 method와 JSON body가 서버 응답의 status와 body로 돌아오는 흐름입니다.",
      "mermaid": "sequenceDiagram\n  actor Client\n  participant Tool as Postman or curl\n  participant Server as Sample API\n  Client->>Tool: method, URL, JSON body 준비\n  Tool->>Server: HTTP request\n  Server-->>Tool: status code + JSON response\n  Tool-->>Client: 결과 확인",
      "steps": [
        {
          "order": 1,
          "actor": "Client",
          "input": "GET 또는 POST 의도",
          "owner": "요청 도구",
          "action": "method와 URL, 필요한 JSON body를 준비합니다.",
          "output": "HTTP request",
          "note": "요청 의도를 method로 구분해야 다음 Controller mapping을 읽을 수 있습니다.",
          "id": "http-request-flow-step-1",
          "from": "Client",
          "to": "요청 도구",
          "message": "method와 URL, 필요한 JSON body를 준비합니다.",
          "messageKind": "request",
          "problem": "GET 또는 POST 의도",
          "concept": "요청 도구",
          "check": "HTTP request",
          "codePointIds": [
            "http-request",
            "json-body"
          ]
        },
        {
          "order": 2,
          "actor": "Sample API",
          "input": "HTTP request",
          "owner": "Server",
          "action": "요청을 처리하고 상태 코드와 JSON body를 응답합니다.",
          "output": "Status code + JSON body",
          "note": "응답은 body만이 아니라 status code와 함께 읽어야 합니다.",
          "id": "http-request-flow-step-2",
          "from": "Sample API",
          "to": "Server",
          "message": "요청을 처리하고 상태 코드와 JSON body를 응답합니다.",
          "messageKind": "request",
          "problem": "HTTP request",
          "concept": "Server",
          "check": "Status code + JSON body",
          "codePointIds": [
            "json-body",
            "git-flow"
          ]
        },
        {
          "order": 3,
          "actor": "Learner",
          "input": "Status code + body",
          "owner": "학습자 확인",
          "action": "성공/실패 여부와 JSON key/value 의미를 분리해서 설명합니다.",
          "output": "요청/응답 해석",
          "note": "이 해석 기준이 다음 시퀀스의 Request DTO와 Response DTO로 이어집니다.",
          "id": "http-request-flow-step-3",
          "from": "Learner",
          "to": "학습자 확인",
          "message": "성공/실패 여부와 JSON key/value 의미를 분리해서 설명합니다.",
          "messageKind": "error",
          "problem": "Status code + body",
          "concept": "학습자 확인",
          "check": "요청/응답 해석",
          "codePointIds": [
            "git-flow",
            "http-request"
          ]
        },
        {
          "id": "http-request-flow-check-4",
          "order": 4,
          "actor": "학습자 확인",
          "owner": "확인 지점",
          "from": "학습자 확인",
          "to": "확인 지점",
          "message": "결과와 실패 지점을 확인합니다.",
          "messageKind": "response",
          "problem": "구현 후 실제로 어느 지점이 통과했는지 확인해야 합니다.",
          "concept": "Verification",
          "action": "문서의 확인 명령이나 화면에서 결과를 검증합니다.",
          "check": "성공 흐름과 실패 흐름을 말로 설명합니다.",
          "note": "Visual Lab은 코드를 대신 완성하지 않고 확인 지점을 고정합니다.",
          "codePointIds": [
            "http-request"
          ]
        }
      ],
      "bandKind": "scenario"
    },
    {
      "id": "git-db-flow",
      "title": "Git과 DB 기본기 흐름",
      "summary": "branch로 작업 흐름을 분리하고 DB 표 용어를 다음 Entity 흐름의 언어로 준비합니다.",
      "mermaid": "sequenceDiagram\n  actor Learner\n  participant Git as Git branch\n  participant Work as Local work\n  participant DB as DB vocabulary\n  Learner->>Git: branch 확인\n  Git->>Work: 작업 흐름 분리\n  Work->>Git: add and commit\n  Learner->>DB: table, row, column, PK 설명",
      "steps": [
        {
          "order": 1,
          "actor": "Learner",
          "input": "현재 작업 위치",
          "owner": "Git branch",
          "action": "현재 branch를 확인하고 필요한 branch에서 실습을 진행합니다.",
          "output": "분리된 작업 흐름",
          "note": "branch는 폴더 복사가 아니라 변경 흐름을 분리하는 기준입니다.",
          "id": "git-db-flow-step-1",
          "from": "Learner",
          "to": "Git branch",
          "message": "현재 branch를 확인하고 필요한 branch에서 실습을 진행합니다.",
          "messageKind": "request",
          "problem": "현재 작업 위치",
          "concept": "Git branch",
          "check": "분리된 작업 흐름",
          "codePointIds": [
            "http-request",
            "json-body"
          ]
        },
        {
          "order": 2,
          "actor": "Learner",
          "input": "변경된 파일",
          "owner": "Git commit",
          "action": "add로 기록 대상을 고르고 commit으로 변경 묶음을 남깁니다.",
          "output": "설명 가능한 변경 단위",
          "note": "commit은 저장 버튼보다 변경 이유를 남기는 기록에 가깝습니다.",
          "id": "git-db-flow-step-2",
          "from": "Learner",
          "to": "Git commit",
          "message": "add로 기록 대상을 고르고 commit으로 변경 묶음을 남깁니다.",
          "messageKind": "request",
          "problem": "변경된 파일",
          "concept": "Git commit",
          "check": "설명 가능한 변경 단위",
          "codePointIds": [
            "json-body",
            "git-flow"
          ]
        },
        {
          "order": 3,
          "actor": "Learner",
          "input": "회원 표 예시",
          "owner": "DB vocabulary",
          "action": "table, row, column, PK를 표 위에서 짚어 설명합니다.",
          "output": "Entity와 Repository를 읽을 기본 용어",
          "note": "다음 DB 흐름에서 Entity는 table과 연결되고 id는 PK 감각으로 읽습니다.",
          "id": "git-db-flow-step-3",
          "from": "Learner",
          "to": "DB vocabulary",
          "message": "table, row, column, PK를 표 위에서 짚어 설명합니다.",
          "messageKind": "response",
          "problem": "회원 표 예시",
          "concept": "DB vocabulary",
          "check": "Entity와 Repository를 읽을 기본 용어",
          "codePointIds": [
            "git-flow",
            "http-request"
          ]
        },
        {
          "id": "git-db-flow-check-4",
          "order": 4,
          "actor": "DB vocabulary",
          "owner": "확인 지점",
          "from": "DB vocabulary",
          "to": "확인 지점",
          "message": "결과와 실패 지점을 확인합니다.",
          "messageKind": "response",
          "problem": "구현 후 실제로 어느 지점이 통과했는지 확인해야 합니다.",
          "concept": "Verification",
          "action": "문서의 확인 명령이나 화면에서 결과를 검증합니다.",
          "check": "성공 흐름과 실패 흐름을 말로 설명합니다.",
          "note": "Visual Lab은 코드를 대신 완성하지 않고 확인 지점을 고정합니다.",
          "codePointIds": [
            "http-request"
          ]
        }
      ],
      "bandKind": "scenario"
    }
  ],
  "flow": [
    {
      "id": "http-request-flow-step-1",
      "label": "요청 도구",
      "problem": "GET 또는 POST 의도",
      "concept": "요청 도구",
      "action": "method와 URL, 필요한 JSON body를 준비합니다.",
      "check": "HTTP request",
      "codePointIds": [
        "http-request",
        "json-body"
      ]
    },
    {
      "id": "http-request-flow-step-2",
      "label": "Server",
      "problem": "HTTP request",
      "concept": "Server",
      "action": "요청을 처리하고 상태 코드와 JSON body를 응답합니다.",
      "check": "Status code + JSON body",
      "codePointIds": [
        "json-body",
        "git-flow"
      ]
    },
    {
      "id": "http-request-flow-step-3",
      "label": "학습자 확인",
      "problem": "Status code + body",
      "concept": "학습자 확인",
      "action": "성공/실패 여부와 JSON key/value 의미를 분리해서 설명합니다.",
      "check": "요청/응답 해석",
      "codePointIds": [
        "git-flow",
        "http-request"
      ]
    },
    {
      "id": "http-request-flow-check-4",
      "label": "확인 지점",
      "problem": "구현 후 실제로 어느 지점이 통과했는지 확인해야 합니다.",
      "concept": "Verification",
      "action": "문서의 확인 명령이나 화면에서 결과를 검증합니다.",
      "check": "성공 흐름과 실패 흐름을 말로 설명합니다.",
      "codePointIds": [
        "http-request"
      ]
    }
  ],
  "codePoints": [
    {
      "id": "http-request",
      "title": "HTTP 요청은 method, path, body를 함께 봅니다",
      "file": "starter/http/create-post.http",
      "language": "http",
      "snippet": "POST /posts HTTP/1.1\nContent-Type: application/json\n\n{\n  \"title\": \"첫 글\",\n  \"content\": \"HTTP body 연습\",\n  \"author\": \"aandi\"\n}",
      "explanation": "서버 코드 전에 요청이 어떤 모양으로 이동하는지 먼저 확인합니다.",
      "check": "method, path, header, body를 분리해서 읽을 수 있어야 합니다."
    },
    {
      "id": "json-body",
      "title": "JSON은 key와 value를 짝으로 읽습니다",
      "file": "starter/json/create-post-request.json",
      "language": "json",
      "snippet": "{\n  \"title\": \"수정한 제목\",\n  \"content\": \"값만 바꿔 다시 요청\",\n  \"author\": \"student\"\n}",
      "explanation": "이후 DTO 필드와 JSON key가 연결되므로 key 이름을 정확히 읽습니다.",
      "check": "문자열 quote, comma, key 이름을 틀리지 않고 수정합니다."
    },
    {
      "id": "git-flow",
      "title": "실습 브랜치로 이동한 뒤 변경을 기록합니다",
      "file": "starter/git/command-flow.txt",
      "language": "bash",
      "snippet": "git branch --show-current\ngit checkout 00-implementation\ngit status --short\ngit add docs/checklist.md\ngit commit -m \"docs: Record practice check\"",
      "explanation": "실습은 항상 현재 브랜치를 확인한 뒤 작은 변경 단위로 기록합니다.",
      "check": "현재 브랜치와 변경 파일 목록을 말할 수 있어야 합니다."
    }
  ],
  "concepts": [
    {
      "title": "Status code와 body를 함께 읽기",
      "body": "응답의 성공 여부는 상태 코드가 먼저 말하고, body는 세부 데이터를 설명합니다."
    },
    {
      "title": "JSON은 DTO 이전 단계입니다",
      "body": "아직 Kotlin 클래스를 만들지 않아도 JSON key/value를 보면 DTO의 모양을 예상할 수 있습니다."
    },
    {
      "title": "Branch는 작업 흐름입니다",
      "body": "branch는 파일 복사본이 아니라 변경을 안전하게 나누는 기준입니다."
    },
    {
      "title": "PK는 다시 찾기 위한 기준입니다",
      "body": "row를 다시 조회하거나 수정하려면 고유하게 식별할 값이 필요합니다."
    }
  ],
  "practice": [
    "GET과 POST 요청의 의도 차이를 설명할 수 있나요?",
    "응답에서 status code와 JSON body가 각각 무엇을 말하는지 구분할 수 있나요?",
    "현재 branch를 확인하고 작업 흐름을 분리할 수 있나요?",
    "table, row, column, PK를 예시 표로 설명할 수 있나요?"
  ],
  "mentorHints": [],
  "relatedDocs": [],
  "relatedCode": [],
  "topic": "HTTP, JSON, Postman, Git, DB basics",
  "question": "Spring Boot 코드를 보기 전에 요청과 응답을 어떤 언어로 읽어야 할까?",
  "source": {
    "theory": "../../../theory.md",
    "implementation": "../../../implementation.md",
    "checklist": "../../../checklist.md"
  },
  "why": {
    "problem": "다음 시퀀스부터는 서버 실행, HTTP 요청, JSON 응답, branch 이동, DB 용어가 동시에 등장합니다.",
    "limits": [
      "응답 body만 보면 요청이 성공했는지 실패했는지 놓칠 수 있습니다.",
      "JSON key/value를 읽지 못하면 Request DTO와 Response DTO를 이해하기 어렵습니다.",
      "branch와 commit 흐름이 불안정하면 실습 시작점과 비교 지점을 안전하게 오가기 어렵습니다.",
      "table, row, column, PK 용어가 없으면 Entity와 Repository 설명이 추상적으로 남습니다."
    ],
    "choice": "이번 단계에서는 서버 코드를 구현하지 않고, 다음 실습을 읽기 위한 입력과 출력 언어를 먼저 정리합니다."
  },
  "overview": [
    "Client",
    "HTTP Request",
    "JSON Body",
    "Server",
    "Status Code",
    "Response Body"
  ],
  "responsibilities": [
    {
      "name": "HTTP method",
      "role": "요청 의도를 나타냅니다.",
      "caution": "GET과 POST를 같은 요청으로 읽으면 Controller 역할도 흐려집니다."
    },
    {
      "name": "JSON",
      "role": "요청과 응답 데이터를 key/value로 표현합니다.",
      "caution": "다음 시퀀스의 DTO와 연결되는 입력/출력 언어입니다."
    },
    {
      "name": "Git branch",
      "role": "실습 작업 흐름을 분리합니다.",
      "caution": "어느 branch에서 작업 중인지 확인하지 않으면 비교 기준이 흔들립니다."
    },
    {
      "name": "DB vocabulary",
      "role": "Entity와 Repository 설명을 읽기 위한 표 기반 언어를 제공합니다.",
      "caution": "정의를 외우기보다 예시 표에서 직접 짚어야 오래 남습니다."
    }
  ],
  "glossary": [
    {
      "term": "HTTP method",
      "meaning": "요청이 조회인지 생성인지 같은 의도를 표현합니다.",
      "caution": "URL만 같아도 method가 다르면 다른 동작일 수 있습니다."
    },
    {
      "term": "Status code",
      "meaning": "서버가 요청 결과를 숫자로 요약한 값입니다.",
      "caution": "body가 있어도 4xx라면 성공 응답이 아닐 수 있습니다."
    },
    {
      "term": "JSON body",
      "meaning": "요청 또는 응답의 데이터를 key/value로 담는 본문입니다.",
      "caution": "key 이름은 다음 DTO 필드 이름과 자연스럽게 연결됩니다."
    },
    {
      "term": "Branch",
      "meaning": "같은 레포 안에서 작업 흐름을 나누는 Git 기준입니다.",
      "caution": "현재 branch를 확인하지 않고 작업하면 실습 시작점이 섞일 수 있습니다."
    },
    {
      "term": "Primary Key",
      "meaning": "DB row를 고유하게 찾기 위한 값입니다.",
      "caution": "id 조회, 수정, 삭제 흐름에서 다시 등장합니다."
    }
  ],
  "practical": [
    {
      "title": "도구 문제와 코드 문제를 분리합니다",
      "body": "요청 도구 사용법이 흔들리면 서버 코드가 맞아도 결과를 잘못 해석할 수 있습니다."
    },
    {
      "title": "상태 코드는 리뷰 언어입니다",
      "body": "400, 401, 403, 404 같은 숫자는 이후 API 실패 흐름을 설명하는 공통 언어가 됩니다."
    },
    {
      "title": "DB 용어는 그림보다 표로 확인합니다",
      "body": "row와 column은 실제 표에서 짚을 때 Entity와 Repository로 자연스럽게 이어집니다."
    }
  ],
  "checks": [
    "GET과 POST 요청의 의도 차이를 설명할 수 있나요?",
    "응답에서 status code와 JSON body가 각각 무엇을 말하는지 구분할 수 있나요?",
    "현재 branch를 확인하고 작업 흐름을 분리할 수 있나요?",
    "table, row, column, PK를 예시 표로 설명할 수 있나요?"
  ],
  "next": {
    "id": "01",
    "title": "REST CRUD",
    "reason": "HTTP 요청과 JSON 응답을 읽을 수 있다면, 다음에는 그 요청이 Spring Boot Controller로 들어가 Service와 저장소를 거쳐 Response DTO로 돌아오는 흐름을 구현합니다."
  },
  "sourceDocs": []
};
