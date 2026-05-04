const state = {
  selectedTopicId: null,
};

const dom = {
  topicGrid: document.getElementById("topicGrid"),
  detailTitle: document.getElementById("detailTitle"),
  detailEnglishTitle: document.getElementById("detailEnglishTitle"),
  detailCategory: document.getElementById("detailCategory"),
  detailDescription: document.getElementById("detailDescription"),
  detailWhy: document.getElementById("detailWhy"),
  flowTimeline: document.getElementById("flowTimeline"),
  transformList: document.getElementById("transformList"),
  pointList: document.getElementById("pointList"),
  exampleRequest: document.getElementById("exampleRequest"),
  exampleResponse: document.getElementById("exampleResponse"),
  relatedDocs: document.getElementById("relatedDocs"),
  relatedCode: document.getElementById("relatedCode"),
};

function hasTopics() {
  return getTopics().length > 0;
}

function getTopics() {
  if (Array.isArray(window.visualLabTopics)) {
    return window.visualLabTopics;
  }

  if (typeof visualLabTopics !== "undefined" && Array.isArray(visualLabTopics)) {
    return visualLabTopics;
  }

  return [];
}

function createEmptyState(message) {
  const empty = document.createElement("div");
  empty.className = "empty-state";
  empty.textContent = message;
  return empty;
}

function clearElement(element) {
  if (!element) {
    return;
  }

  element.replaceChildren();
}

function formatJson(value) {
  if (value === undefined || value === null || value === "") {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  try {
    return JSON.stringify(value, null, 2);
  } catch (error) {
    return String(value);
  }
}

function renderTopicCards() {
  if (!dom.topicGrid) {
    return;
  }

  const topics = getTopics();
  clearElement(dom.topicGrid);

  if (!topics.length) {
    dom.topicGrid.appendChild(createEmptyState("표시할 Sequence 00 주제가 없습니다."));
    return;
  }

  topics.forEach((topic) => {
    const card = document.createElement("button");
    const isSelected = topic.id === state.selectedTopicId;
    card.type = "button";
    card.className = `topic-card${isSelected ? " is-selected" : ""}`;
    card.setAttribute("aria-pressed", String(isSelected));
    card.dataset.topicId = topic.id;

    const badgeRow = document.createElement("div");
    badgeRow.className = "topic-card-mini-flow";

    const category = document.createElement("span");
    category.className = "topic-badge";
    category.textContent = topic.category || "Topic";

    const sequence = document.createElement("span");
    sequence.className = "sequence-badge";
    sequence.textContent = `Sequence ${topic.sequence || "00"}`;

    badgeRow.append(category, sequence);

    const title = document.createElement("h3");
    title.textContent = topic.title || "제목 없음";

    const description = document.createElement("p");
    description.textContent = topic.shortDescription || "설명이 준비 중입니다.";

    const miniFlow = document.createElement("div");
    miniFlow.className = "topic-card-mini-flow";
    (topic.flow || []).slice(0, 3).forEach((step) => {
      const stepBadge = document.createElement("span");
      stepBadge.className = "topic-badge";
      stepBadge.textContent = step;
      miniFlow.appendChild(stepBadge);
    });

    card.append(badgeRow, title, description, miniFlow);
    card.addEventListener("click", () => selectTopic(topic.id));
    dom.topicGrid.appendChild(card);
  });
}

function renderTopicDetail(topic) {
  if (!topic) {
    return;
  }

  if (dom.detailTitle) dom.detailTitle.textContent = topic.title || "";
  if (dom.detailEnglishTitle) dom.detailEnglishTitle.textContent = topic.englishTitle || "";
  if (dom.detailCategory) dom.detailCategory.textContent = topic.category || "";
  if (dom.detailDescription) dom.detailDescription.textContent = topic.shortDescription || "";
  if (dom.detailWhy) dom.detailWhy.textContent = topic.whyItMatters || "";

  renderFlow(topic.flow);
  renderTransforms(topic.transform);
  renderPoints(topic.points);
  renderExamples(topic);
  renderRelatedLinks(topic);
}

function renderFlow(flow) {
  if (!dom.flowTimeline) {
    return;
  }

  clearElement(dom.flowTimeline);

  if (!Array.isArray(flow) || !flow.length) {
    dom.flowTimeline.appendChild(createEmptyState("실행 흐름이 준비 중입니다."));
    return;
  }

  flow.forEach((step, index) => {
    const node = document.createElement("span");
    node.className = "flow-step";

    const number = document.createElement("span");
    number.className = "flow-step-number";
    number.textContent = String(index + 1);

    const label = document.createElement("span");
    label.textContent = step;

    node.append(number, label);
    dom.flowTimeline.appendChild(node);

    if (index < flow.length - 1) {
      const arrow = document.createElement("span");
      arrow.className = "flow-arrow";
      arrow.textContent = "->";
      dom.flowTimeline.appendChild(arrow);
    }
  });
}

function renderTransforms(transforms) {
  if (!dom.transformList) {
    return;
  }

  clearElement(dom.transformList);

  if (!Array.isArray(transforms) || !transforms.length) {
    dom.transformList.appendChild(createEmptyState("데이터 변환 예시가 준비 중입니다."));
    return;
  }

  transforms.forEach((item) => {
    const card = document.createElement("div");
    card.className = "transform-card";

    const title = document.createElement("strong");
    title.textContent = `${item.from || "Before"} -> ${item.to || "After"}`;

    const description = document.createElement("p");
    description.textContent = item.description || "";

    card.append(title, description);
    dom.transformList.appendChild(card);
  });
}

function renderPoints(points) {
  if (!dom.pointList) {
    return;
  }

  clearElement(dom.pointList);

  if (!Array.isArray(points) || !points.length) {
    dom.pointList.appendChild(createEmptyState("핵심 포인트가 준비 중입니다."));
    return;
  }

  points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    dom.pointList.appendChild(item);
  });
}

function renderExamples(topic) {
  if (dom.exampleRequest) {
    dom.exampleRequest.textContent = formatJson(topic.exampleRequest) || "예시 요청이 준비 중입니다.";
  }

  if (dom.exampleResponse) {
    dom.exampleResponse.textContent = formatJson(topic.exampleResponse) || "예시 응답이 준비 중입니다.";
  }
}

function renderLinkList(container, links, emptyMessage) {
  if (!container) {
    return;
  }

  clearElement(container);

  if (!Array.isArray(links) || !links.length) {
    container.appendChild(createEmptyState(emptyMessage));
    return;
  }

  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = "related-link-card";
    anchor.href = link.url || "#";
    anchor.textContent = link.label || link.url || "관련 링크";
    container.appendChild(anchor);
  });
}

function renderRelatedLinks(topic) {
  renderLinkList(dom.relatedDocs, topic.sourceDocs, "관련 문서 링크가 준비 중입니다.");
  renderLinkList(dom.relatedCode, topic.sourceCode, "관련 코드 링크가 준비 중입니다.");
}

function selectTopic(topicId) {
  const topics = getTopics();
  const topic = topics.find((item) => item.id === topicId) || topics[0];

  if (!topic) {
    return;
  }

  state.selectedTopicId = topic.id;
  renderTopicCards();
  renderTopicDetail(topic);
}

function initVisualLab() {
  if (!dom.topicGrid) {
    return;
  }

  if (!hasTopics()) {
    dom.topicGrid.appendChild(createEmptyState("Sequence 00 Visual Lab 데이터를 찾을 수 없습니다."));
    return;
  }

  const firstTopic = getTopics()[0];
  selectTopic(firstTopic.id);
}

document.addEventListener("DOMContentLoaded", initVisualLab);
