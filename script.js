const metrics = [
  { value: "5+", label: "Years of Experience" },
  { value: "99.9%", label: "Uptime Ownership" },
  { value: "40%", label: "Delivery Velocity Boost with AI" },
  { value: "45%", label: "MTTR Reduction (Observability + RCA)" },
];

const skillChips = [
  "Java 8/11/17", "Spring Boot", "Spring Security", "Spring Batch", "React.js", "Angular", "TypeScript",
  "REST APIs", "GraphQL", "Kafka", "AWS (EC2/RDS/Lambda/S3)", "Azure", "Docker", "Kubernetes", "Jenkins",
  "GitHub Actions", "Terraform", "MongoDB", "Cassandra", "Oracle", "PostgreSQL", "MySQL", "Splunk",
  "AppDynamics", "Grafana", "OpenObserver"
];

const experiences = [
  {
    role: "Java Developer",
    company: "Walmart (Remote)",
    duration: "04/2025 – 10/2025",
    points: [
      "Built Java/Spring Boot microservices with Kafka on AWS/Azure for high-availability retail workflows.",
      "Owned L1-L3 production support and improved incident handling via RCA and cross-team fixes.",
      "Used GitHub Copilot and ChatGPT to accelerate development velocity by 40%.",
    ],
  },
  {
    role: "Java Full Stack Developer",
    company: "Texas Capital Bank, Dallas",
    duration: "09/2023 – 04/2025",
    points: [
      "Delivered secure Java 11 services using JWT, OAuth2, and Spring Security.",
      "Implemented Spring Batch workflows for 500K+ records/day.",
      "Built Angular applications and automated CI/CD with Jenkins, Docker, Kubernetes.",
    ],
  },
  {
    role: "Java Full Stack Developer",
    company: "Tenet Health Care",
    duration: "01/2023 – 08/2023",
    points: [
      "Developed Spring Boot services and React apps with enterprise-grade UI quality.",
      "Improved form quality and observability via Splunk dashboards.",
    ],
  },
  {
    role: "Analyst",
    company: "Deloitte",
    duration: "07/2021 – 07/2022",
    points: [],
  },
  {
    role: "Developer Intern",
    company: "Aditya Birla",
    duration: "06/2020 – 01/2021",
    points: [],
  },
];

const projects = [
  {
    name: "Finorder Platform",
    url: "https://github.com/manojk-sai/finorder-platform",
    tagline: "Financial order workflow platform with secure APIs and event-driven processing.",
    diagram: `Client App -> API Gateway -> Order Service\nOrder Service -> Risk/Validation Service -> Decision\nDecision -> Kafka/Event Bus -> Portfolio Service\nPortfolio Service -> Database -> Reporting UI`,
    script: [
      "Finorder Platform manages end-to-end financial order processing from intake to settlement visibility.",
      "Users submit orders through a client application that communicates with secure backend APIs.",
      "The order service validates request payloads and routes business-critical events through the platform's messaging layer.",
      "Downstream services persist approved transactions and publish updates for reporting and audit workflows.",
      "This architecture keeps processing scalable, traceable, and resilient under growing transaction loads.",
    ],
  },
  {
    name: "Risk Factor",
    url: "https://github.com/manojk-sai/risk-factor",
    tagline: "Risk scoring and factor analysis service for faster portfolio decisions.",
    diagram: `Market Data Sources -> Ingestion API -> Risk Engine\nRisk Engine -> Factor Calculator -> Score API\nScore API -> Dashboard + Alert Service\nAlert Service -> Email/SMS Notifications`,
    script: [
      "Risk Factor evaluates financial and operational indicators to compute actionable risk scores.",
      "Incoming market or internal datasets are ingested and normalized before scoring.",
      "The risk engine applies factor-weighted calculations to produce consistent risk outputs.",
      "Scores are exposed to dashboards and alerting pipelines for near real-time visibility.",
      "This gives teams a clear basis for faster, evidence-backed decisions on exposure and mitigation.",
    ],
  },
  {
    name: "QuizPortfolioApp",
    url: "https://github.com/manojk-sai/QuizPortfolioApp",
    tagline: "Interactive quiz platform and portfolio app with personalized feedback loops.",
    diagram: `Learner UI -> Quiz API -> Question Bank\nQuiz API -> Evaluation Engine -> Result Store\nResult Store -> Analytics Module -> Feedback UI\nFeedback UI -> Learner Progress Dashboard`,
    script: [
      "QuizPortfolioApp provides an engaging way to assess knowledge and showcase interactive product skills.",
      "Users answer curated quizzes served through a responsive frontend and API-driven backend.",
      "An evaluation module scores attempts and stores outcomes for each learner session.",
      "Analytics components generate performance insights and targeted feedback recommendations.",
      "The result is a lightweight learning loop that improves retention while demonstrating full-stack engineering capability.",
    ],
  },
  {
    name: "MatcherIQ",
    url: "https://github.com/manojk-sai/MatcherIQ",
    tagline: "Intelligent matching engine for profile-to-opportunity recommendations.",
    diagram: `User/Profile Data -> Matching API -> Feature Extractor\nFeature Extractor -> Similarity Engine -> Ranked Matches\nRanked Matches -> Recommendation API -> Recruiter/User UI\nUI Feedback -> Learning Loop -> Model Tuning`,
    script: [
      "MatcherIQ is designed to intelligently match profiles with the most relevant opportunities.",
      "The system ingests structured profile signals and transforms them into comparable features.",
      "A similarity engine ranks potential matches based on weighted relevance criteria.",
      "Recommendations are surfaced through APIs to recruiter or candidate-facing interfaces.",
      "Feedback from user interactions can be looped back to continuously tune match quality over time.",
    ],
  },
];

const prompts = {
  "Summarize Manoj in 30 seconds":
    "Manoj is a 5+ year full-stack Java engineer with deep Spring Boot and cloud-native expertise. He builds high-availability systems, leads production support, and uses AI tools to ship features faster without compromising reliability.",
  "Why is Manoj a strong backend candidate?":
    "He has strong command over Java 8/11/17, Spring ecosystem, event-driven architecture with Kafka, secure APIs with JWT/OAuth2, and proven experience scaling microservices in AWS/Azure with 99.9% uptime responsibility.",
  "What business outcomes has he delivered?":
    "He improved development velocity by 40%, reduced MTTR by 45%, reduced deployment time by 50%, and improved response times by 25% through JVM/query optimization and observability-led tuning.",
};


const chatbotReplies = [
  {
    match: ["hello", "hi", "hey"],
    response: "Hi! I’m Manoj's bot. Ask about skills, projects, experience, cloud expertise, or availability.",
  },
  {
    match: ["skill", "stack", "technology", "tech"],
    response: "Manoj specializes in Java 8/11/17, Spring Boot, Kafka, secure API development, and cloud-native delivery with AWS/Azure, Docker, and Kubernetes.",
  },
  {
    match: ["project", "github", "portfolio"],
    response: "Featured projects include Finorder Platform, Risk Factor, QuizPortfolioApp, and MatcherIQ. Open the project cards above to view architecture flow and implementation story.",
  },
  {
    match: ["experience", "work", "role"],
    response: "He has 5+ years of experience across Walmart, Texas Capital Bank, Tenet Health Care, and Deloitte with strong ownership in delivery and production support.",
  },

  {
    match: ["industry", "industries", "domain", "domains"],
    response: "Manoj has delivered solutions across financial services, healthcare, retail, and asset management domains.",
  },
  {
    match: ["ai", "copilot", "chatgpt", "automation"],
    response: "He actively uses AI tools like GitHub Copilot and ChatGPT to speed up development, improve code quality, and reduce delivery time.",
  },
  {
    match: ["cloud", "devops", "aws", "azure", "kubernetes", "docker"],
    response: "Manoj has hands-on cloud and DevOps experience with AWS, Azure, Docker, Kubernetes, Jenkins, and GitHub Actions for scalable CI/CD delivery.",
  },
  {
    match: ["remote", "relocate", "location", "where"],
    response: "Manoj is based in DFW, TX and is open to remote opportunities.",
  },
  {
    match: ["contact", "email", "hire", "available"],
    response: "You can reach Manoj at manojsaikothapati@gmail.com, call 972-891-9342, or use the scheduling calendar in the contact section.",
  },
];

function setupChatbot() {
  const launcher = document.getElementById("chat-launcher");
  const widget = document.getElementById("chat-widget");
  const closeButton = document.getElementById("chat-close");
  const chatWindow = document.getElementById("chat-window");
  const suggestions = document.getElementById("chat-suggestions");

  const quickQuestions = [
    "What skills does Manoj have?",
    "Tell me about recent experience",
    "Which projects should I review?",
    "How can I contact Manoj?",
    "What industries has Manoj worked in?",
    "How does Manoj use AI tools in development?",
    "What is Manoj’s cloud and DevOps expertise?",
    "Is Manoj open to remote opportunities?",
  ];

  const setWidgetState = (isOpen) => {
    widget.classList.toggle("open", isOpen);
    widget.setAttribute("aria-hidden", String(!isOpen));
    launcher.setAttribute("aria-expanded", String(isOpen));

  };

  const addMessage = (sender, message) => {
    const bubble = document.createElement("div");
    bubble.className = `chat-message ${sender}`;
    bubble.textContent = message;
    chatWindow.appendChild(bubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  };

  const getBotResponse = (question) => {
    const normalized = question.toLowerCase();
    const match = chatbotReplies.find((entry) =>
      entry.match.some((keyword) => normalized.includes(keyword))
    );

    if (match) {
      return match.response;
    }

    return "Great question. I can help with skills, projects, experience, and availability. Try one of the suggestion chips above.";
  };

  const askQuestion = (question) => {
    const cleaned = question.trim();
    if (!cleaned) {
      return;
    }

    addMessage("user", cleaned);
    addMessage("bot", getBotResponse(cleaned));
  };

  quickQuestions.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-suggestion";
    button.textContent = question;
    button.addEventListener("click", () => {
      setWidgetState(true);
      askQuestion(question);
    });
    suggestions.appendChild(button);
  });

  launcher.addEventListener("click", () => {
    const shouldOpen = !widget.classList.contains("open");
    setWidgetState(shouldOpen);
  });

  closeButton.addEventListener("click", () => setWidgetState(false));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && widget.classList.contains("open")) {
      setWidgetState(false);
    }
  });

  addMessage("bot", "Welcome! I’m Manoj's bot. Ask me anything about Manoj's profile.");

}

function renderMetrics() {
  const grid = document.getElementById("metrics-grid");
  metrics.forEach((m) => {
    const card = document.createElement("div");
    card.className = "metric";
    card.innerHTML = `<h4>${m.value}</h4><p>${m.label}</p>`;
    grid.appendChild(card);
  });
}

function renderSkills() {
  const container = document.getElementById("skills-list");
  skillChips.forEach((skill) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = skill;
    container.appendChild(chip);
  });
}

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  experiences.forEach((exp) => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    item.innerHTML = `
      <h3>${exp.role} • ${exp.company}</h3>
      <p class="timeline-meta">${exp.duration}</p>
      <ul>${exp.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    `;
    timeline.appendChild(item);
  });
}

function setupProjectsModal() {
  const container = document.getElementById("projects-grid");
  const modal = document.getElementById("project-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalClose = document.getElementById("modal-close");
  const title = document.getElementById("modal-title");
  const repoLink = document.getElementById("modal-link");
  const diagram = document.getElementById("modal-diagram");
  const scriptList = document.getElementById("modal-script");

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const openModal = (project) => {
    title.textContent = project.name;
    repoLink.href = project.url;
    repoLink.textContent = project.url;
    diagram.textContent = project.diagram;
    scriptList.innerHTML = project.script.map((line) => `<li>${line}</li>`).join("");

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  projects.forEach((project) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "project-card";
    card.innerHTML = `<h3>${project.name}</h3><p>${project.tagline}</p>`;
    card.addEventListener("click", () => openModal(project));
    container.appendChild(card);
  });

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function setupPrompts() {
  const container = document.getElementById("prompt-buttons");
  const response = document.getElementById("ai-response");

  Object.entries(prompts).forEach(([question, answer]) => {
    const btn = document.createElement("button");
    btn.className = "prompt-btn";
    btn.type = "button";
    btn.textContent = question;
    btn.addEventListener("click", () => {
      response.textContent = answer;
    });
    container.appendChild(btn);
  });
}

function setupRoleAnalyzer() {
  const input = document.getElementById("role-input");
  const button = document.getElementById("analyze-btn");
  const output = document.getElementById("fit-response");

  button.addEventListener("click", () => {
    const role = input.value.trim();
    if (!role) {
      output.textContent = "Please enter a role title first.";
      return;
    }

    const normalized = role.toLowerCase();
    let fit = "High";
    let reason = "Strong end-to-end fit across backend architecture, cloud, and delivery operations.";

    if (normalized.includes("frontend") || normalized.includes("ui")) {
      fit = "Medium-High";
      reason = "Good frontend strength (React/Angular), with deepest expertise in backend and distributed systems.";
    }

    if (normalized.includes("devops") || normalized.includes("sre")) {
      fit = "High";
      reason = "Excellent alignment with CI/CD, Kubernetes, cloud services, and observability-driven support.";
    }

    output.textContent = `${fit} fit for "${role}". ${reason}`;
  });
}

renderMetrics();
renderSkills();
renderTimeline();
setupProjectsModal();
setupPrompts();
setupRoleAnalyzer();
setupChatbot();
document.getElementById("year").textContent = new Date().getFullYear();
