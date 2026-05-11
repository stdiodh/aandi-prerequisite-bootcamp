window.visualLabData = {
  sequence: "00",
  title: "Prerequisite Bootcamp",
  goal: "HTTP, JSON, Git, DB 기본 용어를 실습 전에 같은 기준으로 맞춘다.",
  implementationBranch: "00-implementation",
  concepts: [
    {
      name: "HTTP Method",
      description: "요청이 조회, 생성, 수정, 삭제 중 어떤 행동인지 알려준다.",
    },
    {
      name: "Status Code",
      description: "응답 결과가 성공, 실패, 입력 오류 중 어디에 가까운지 숫자로 보여준다.",
    },
    {
      name: "JSON",
      description: "클라이언트와 서버가 요청과 응답 데이터를 주고받는 형식이다.",
    },
    {
      name: "Git Branch",
      description: "가이드, 실습 시작, 비교용 코드를 안전하게 나누는 기준이다.",
    },
  ],
  flow: [
    {
      id: "get-request",
      title: "GET 요청을 보낸다",
      actor: "Postman",
      target: "Server",
      description: "주소와 method를 맞춰 서버에 조회 요청을 보낸다.",
      checkpoint: "status code와 response body를 함께 확인한다.",
    },
    {
      id: "post-request",
      title: "POST 요청을 보낸다",
      actor: "Postman",
      target: "Server",
      description: "JSON body를 담아 생성 요청을 보내고 서버가 해석하는 모양을 본다.",
      checkpoint: "Content-Type과 JSON 필드명이 예시와 일치하는지 확인한다.",
    },
    {
      id: "json-read",
      title: "JSON 구조를 읽는다",
      actor: "Student",
      target: "Response Body",
      description: "응답의 key와 value를 구분하고 배열과 객체의 차이를 확인한다.",
      checkpoint: "문자열, 숫자, boolean 값을 구분해서 읽는다.",
    },
    {
      id: "branch-start",
      title: "실습 브랜치로 이동한다",
      actor: "Terminal",
      target: "Git",
      description: "오늘 시퀀스의 implementation 브랜치에서 실습을 시작한다.",
      checkpoint: "현재 브랜치가 00-implementation인지 확인한다.",
    },
    {
      id: "db-terms",
      title: "DB 용어를 맞춘다",
      actor: "Student",
      target: "Database",
      description: "table, row, column, primary key의 의미를 API 실습과 연결한다.",
      checkpoint: "API 응답의 id가 DB의 primary key와 어떻게 이어지는지 설명해 본다.",
    },
  ],
  checkpoints: [
    "HTTP method와 status code를 함께 읽을 수 있다.",
    "간단한 JSON 요청과 응답을 구분할 수 있다.",
    "실습 시작 전 현재 Git branch를 확인할 수 있다.",
    "DB table, row, column, primary key 용어를 말할 수 있다.",
  ],
};
