// ─── DATA ───────────────────────────────────────────────────────────────────

const metrics = [
  { value: "5+", label: "Years of Experience", icon: "⚡" },
  { value: "99.9%", label: "Uptime Ownership", icon: "🛡️" },
  { value: "40%", label: "Delivery Velocity Boost", icon: "🚀" },
  { value: "45%", label: "MTTR Reduction", icon: "📉" },
];

const skillCategories = [
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    color: "#72e4ff",
    skills: [
      { name: "Java 8/11/17/21", level: 100 },
      { name: "Spring Boot", level: 95 },
      { name: "Spring Security", level: 88 },
      { name: "Spring Batch", level: 82 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 78 },
      { name: "Kafka", level: 85 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "🎨",
    color: "#a78bfa",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Angular", level: 84 },
      { name: "TypeScript", level: 86 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "☁️",
    color: "#34d399",
    skills: [
      { name: "AWS (EC2/RDS/Lambda/S3)", level: 88 },
      { name: "Azure", level: 80 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Jenkins", level: 87 },
      { name: "GitHub Actions", level: 85 },
      { name: "Terraform", level: 75 },
    ],
  },
  {
    id: "data",
    label: "Data",
    icon: "🗄️",
    color: "#fbbf24",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Cassandra", level: 75 },
      { name: "Oracle", level: 80 },
      { name: "PostgreSQL", level: 84 },
      { name: "MySQL", level: 86 },
    ],
  },
  {
    id: "observability",
    label: "Observability",
    icon: "📊",
    color: "#f87171",
    skills: [
      { name: "Splunk", level: 87 },
      { name: "AppDynamics", level: 82 },
      { name: "Grafana", level: 85 },
      { name: "OpenObserver", level: 78 },
    ],
  },
];

const experiences = [
  {
    role: "Java Developer",
    company: "Walmart",
    location: "Remote",
    duration: "04/2025 – 10/2025",
    logo: "🛒",
    tags: ["Java", "Spring Boot", "Kafka", "AWS", "Azure"],
    points: [
      "Built Java/Spring Boot microservices with Kafka on AWS/Azure for high-availability retail workflows.",
      "Owned L1-L3 production support and improved incident handling via RCA and cross-team fixes.",
      "Used GitHub Copilot and ChatGPT to accelerate development velocity by 40%.",
    ],
  },
  {
    role: "Java Full Stack Developer",
    company: "Texas Capital Bank",
    location: "Dallas",
    duration: "09/2023 – 04/2025",
    logo: "🏦",
    tags: ["Java 11", "JWT", "OAuth2", "Spring Batch", "Angular", "Kubernetes"],
    points: [
      "Delivered secure Java 11 services using JWT, OAuth2, and Spring Security.",
      "Implemented Spring Batch workflows for 500K+ records/day.",
      "Built Angular applications and automated CI/CD with Jenkins, Docker, Kubernetes.",
    ],
  },
  {
    role: "Java Full Stack Developer",
    company: "Tenet Health Care",
    location: "On-site",
    duration: "01/2023 – 08/2023",
    logo: "🏥",
    tags: ["Spring Boot", "React.js", "Splunk"],
    points: [
      "Developed Spring Boot services and React apps with enterprise-grade UI quality.",
      "Improved form quality and observability via Splunk dashboards.",
    ],
  },
  {
    role: "Analyst",
    company: "Deloitte",
    location: "On-site",
    duration: "07/2021 – 07/2022",
    logo: "💼",
    tags: ["Analysis", "Consulting"],
    points: [],
  },
  {
    role: "Developer Intern",
    company: "Aditya Birla",
    location: "On-site",
    duration: "06/2020 – 01/2021",
    logo: "🎓",
    tags: ["Internship", "Development"],
    points: [],
  },
];

const projects = [
  {
    name: "Saha Yatra",
    url: "https://github.com/manojk-sai/SahaYatra",
    tagline: "Full-stack collaborative travel planning platform — real-time voting, event-driven notifications, and day-grouped itinerary export.",
    tech: ["Java 21", "Spring Boot 3", "React 18", "MongoDB", "JWT", "Spring AOP", "Async Events"],
    color: "#f59e0b",
    badge: "Full-Stack",
    diagram: `React 18 SPA (Vite)
     │  JWT Auth  │  Optimistic UI  │  Day-Grouped Itinerary
     ▼
Spring Boot 3 REST API  ──  Spring Security (JWT Filter)
     │
     ├── TripController  ──  TripService  ──  MongoDB (trips collection)
     │       Stops[] embedded · TripMembership[] · Invite token flow
     │
     ├── VotingController  ──  VotingService
     │       Strategy Pattern: MAJORITY | UNANIMOUS | ORGANIZER
     │       MongoTemplate $push · Atomic status update
     │
     ├── Spring AOP  ──  @RequiresTripRole
     │       Role hierarchy: VIEWER < CONTRIBUTOR < ORGANIZER
     │
     └── ApplicationEvent Bus  ──  @Async NotificationListener
             StopProposedEvent → VoteResolvedEvent
             MemberJoinedEvent → TripStatusChangedEvent`,
    script: [
      "Saha Yatra is a production-ready full-stack platform for collaborative travel planning, built end-to-end with Java 21/Spring Boot 3 on the backend and React 18 on the frontend.",
      "The backend uses MongoDB document embedding — stops and votes live inside trip documents for single-fetch reads with no joins — and Spring Security with JWT for stateless auth.",
      "A Strategy pattern powers three voting modes (Majority, Unanimous, Organizer override), each resolving stop status atomically via MongoTemplate without race conditions.",
      "Cross-cutting role enforcement is handled by a custom @RequiresTripRole AOP annotation, automatically verifying VIEWER/CONTRIBUTOR/ORGANIZER hierarchy before any service method executes.",
      "An ApplicationEvent bus drives async notifications — adding a stop, casting a vote, accepting an invite, or advancing trip status each fires a typed event handled off the HTTP thread, so API responses are never blocked.",
      "The React SPA features optimistic UI for voting and notifications, a day-grouped itinerary tab with cost breakdowns, and a real-time unread badge — all wired to a single api/client.js for clean separation of concerns.",
    ],
  },
  {
    name: "Finorder Platform",
    url: "https://github.com/manojk-sai/finorder-platform",
    tagline: "Financial order workflow platform with secure APIs and event-driven processing.",
    tech: ["Java", "Spring Boot", "Kafka", "AWS"],
    color: "#72e4ff",
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
    tech: ["Java", "Spring Boot", "Grafana", "REST API"],
    color: "#f87171",
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
    tech: ["React.js", "Spring Boot", "PostgreSQL"],
    color: "#a78bfa",
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
    tech: ["Java", "ML", "Spring Boot", "Angular"],
    color: "#34d399",
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
    "He has strong command over Java 8/11/17/21, Spring ecosystem, event-driven architecture with Kafka, secure APIs with JWT/OAuth2, and proven experience scaling microservices in AWS/Azure with 99.9% uptime responsibility. His Saha Yatra project further demonstrates mastery of MongoDB document modeling, Spring AOP, async event-driven patterns, and the Strategy design pattern — all production-grade skills.",
  "What business outcomes has he delivered?":
    "He improved development velocity by 40%, reduced MTTR by 45%, reduced deployment time by 50%, and improved response times by 25% through JVM/query optimization and observability-led tuning.",
};

const chatbotReplies = [
  {
    match: ["hello", "hi", "hey"],
    response: "Hi! I'm Manoj's bot. Ask about skills, projects, experience, cloud expertise, or availability.",
  },
  {
    match: ["skill", "stack", "technology", "tech"],
    response: "Manoj specializes in Java 8/11/17/21, Spring Boot, Kafka, secure API development, and cloud-native delivery with AWS/Azure, Docker, and Kubernetes. He also has strong full-stack skills in React 18 and MongoDB.",
  },
  {
    match: ["saha", "yatra", "travel", "collaborative"],
    response: "Saha Yatra is Manoj's flagship full-stack project — a collaborative travel planning platform built with Java 21/Spring Boot 3 (backend) and React 18 (frontend). It features JWT auth, MongoDB document modeling, a Strategy pattern voting system, Spring AOP role guards, async Spring Events for notifications, and a live itinerary with day-grouped cost breakdowns.",
  },
  {
    match: ["project", "github", "portfolio"],
    response: "Featured projects include Saha Yatra (full-stack collaborative travel app), Finorder Platform, Risk Factor, QuizPortfolioApp, and MatcherIQ. Open any project card to view the architecture flow and implementation narrative.",
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
  {
    match: ["mongodb", "nosql", "database"],
    response: "Manoj has strong MongoDB expertise demonstrated through the Saha Yatra project — including document embedding strategies, MongoTemplate for atomic operations, and aggregation pipelines for day-grouped itinerary queries.",
  },
  {
    match: ["pattern", "design", "architecture", "aop", "event"],
    response: "Manoj applies production-grade design patterns: the Strategy pattern for pluggable voting logic in Saha Yatra, Spring AOP for cross-cutting role enforcement, and event-driven async notifications via Spring ApplicationEvents to keep API responses non-blocking.",
  },
];

// ─── METRICS ────────────────────────────────────────────────────────────────

function animateCounter(el, target, suffix) {
  const num = parseFloat(target);
  const isDecimal = target.toString().includes(".");
  const duration = 1600;
  const start = performance.now();
  const update = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    const current = isDecimal ? (num * ease).toFixed(1) : Math.round(num * ease);
    el.textContent = current + suffix;
    if (t < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function renderMetrics() {
  const grid = document.getElementById("metrics-grid");
  if (!grid) return;
  metrics.forEach((m, i) => {
    const card = document.createElement("div");
    card.className = "metric";
    const raw = m.value.replace(/[^0-9.]/g, "");
    const suffix = m.value.replace(/[0-9.]/g, "");
    card.innerHTML = `<div class="metric-icon">${m.icon}</div><h4 class="metric-value" data-target="${raw}" data-suffix="${suffix}">0${suffix}</h4><p>${m.label}</p>`;
    grid.appendChild(card);
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".metric-value").forEach((el) => {
          animateCounter(el, el.dataset.target, el.dataset.suffix);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  observer.observe(grid);
}

// ─── INTERACTIVE SKILLS ──────────────────────────────────────────────────────

function renderSkills() {
  const container = document.getElementById("skills-list");
  if (!container) return;

  const tabNav = document.createElement("div");
  tabNav.className = "skill-tabs";

  const allTab = document.createElement("button");
  allTab.className = "skill-tab active";
  allTab.dataset.category = "all";
  allTab.innerHTML = `<span>🔍</span> All`;
  tabNav.appendChild(allTab);

  skillCategories.forEach((cat) => {
    const tab = document.createElement("button");
    tab.className = "skill-tab";
    tab.dataset.category = cat.id;
    tab.innerHTML = `<span>${cat.icon}</span> ${cat.label}`;
    tabNav.appendChild(tab);
  });

  const barsContainer = document.createElement("div");
  barsContainer.className = "skill-bars-container";

  skillCategories.forEach((cat) => {
    const group = document.createElement("div");
    group.className = "skill-group";
    group.dataset.category = cat.id;

    group.innerHTML = `<div class="skill-group-header"><span class="skill-group-icon">${cat.icon}</span><span>${cat.label}</span></div>`;

    const bars = document.createElement("div");
    bars.className = "skill-bars";

    cat.skills.forEach((skill) => {
      const bar = document.createElement("div");
      bar.className = "skill-bar-item";
      bar.innerHTML = `
        <div class="skill-bar-label"><span>${skill.name}</span><span class="skill-bar-pct">${skill.level}%</span></div>
        <div class="skill-bar-track"><div class="skill-bar-fill" style="--fill:${skill.level}%;--color:${cat.color}" data-width="${skill.level}"></div></div>`;
      bars.appendChild(bar);
    });

    group.appendChild(bars);
    barsContainer.appendChild(group);
  });

  container.appendChild(tabNav);
  container.appendChild(barsContainer);

  function updateDisplay(category) {
    barsContainer.querySelectorAll(".skill-group").forEach((g) => {
      g.style.display = category === "all" || g.dataset.category === category ? "block" : "none";
    });
    tabNav.querySelectorAll(".skill-tab").forEach((t) => {
      t.classList.toggle("active", t.dataset.category === category);
    });
  }

  tabNav.addEventListener("click", (e) => {
    const tab = e.target.closest(".skill-tab");
    if (tab) updateDisplay(tab.dataset.category);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        barsContainer.querySelectorAll(".skill-bar-fill").forEach((fill) => {
          fill.style.width = `${fill.dataset.width}%`;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(barsContainer);
}

// ─── TIMELINE ────────────────────────────────────────────────────────────────

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  experiences.forEach((exp, i) => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    const tagsHtml = exp.tags.map((t) => `<span class="exp-tag">${t}</span>`).join("");
    const pointsHtml = exp.points.length ? `<ul>${exp.points.map((p) => `<li>${p}</li>`).join("")}</ul>` : "";
    item.innerHTML = `
      <div class="timeline-item-header">
        <div class="timeline-logo">${exp.logo}</div>
        <div class="timeline-info">
          <h3>${exp.role}</h3>
          <p class="timeline-company">${exp.company} <span class="timeline-loc">📍 ${exp.location}</span></p>
          <p class="timeline-meta">${exp.duration}</p>
        </div>
      </div>
      <div class="exp-tags">${tagsHtml}</div>
      ${pointsHtml}`;
    timeline.appendChild(item);
  });
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

function setupProjectsModal() {
  const container = document.getElementById("projects-grid");
  const modal = document.getElementById("project-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalClose = document.getElementById("modal-close");
  const title = document.getElementById("modal-title");
  const repoLink = document.getElementById("modal-link");
  const diagram = document.getElementById("modal-diagram");
  const scriptList = document.getElementById("modal-script");

  if (!container || !modal) return;

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const openModal = (project) => {
    title.textContent = project.name;
    repoLink.href = project.url;
    repoLink.textContent = "View GitHub Repository ↗";
    diagram.textContent = project.diagram;
    scriptList.innerHTML = project.script.map((line, i) => `<li><span class="step-num">${i + 1}</span>${line}</li>`).join("");
    modal.style.setProperty("--modal-accent", project.color);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  projects.forEach((project) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "project-card";
    card.style.setProperty("--card-accent", project.color);

    // Featured badge for Saha Yatra
    const badgeHtml = project.badge
      ? `<span class="project-badge">${project.badge}</span>`
      : "";
    const featuredClass = project.badge ? " project-card--featured" : "";
    card.className = "project-card" + featuredClass;

    const techHtml = project.tech.map((t) => `<span class="proj-tech">${t}</span>`).join("");
    card.innerHTML = `
      <div class="project-card-top">
        <div class="project-card-glow"></div>
        ${badgeHtml}
        <h3>${project.name}</h3>
        <p>${project.tagline}</p>
      </div>
      <div class="proj-tech-row">${techHtml}</div>
      <div class="project-card-arrow">View Architecture →</div>`;
    card.addEventListener("click", () => openModal(project));
    container.appendChild(card);
  });

  modalClose && modalClose.addEventListener("click", closeModal);
  modalBackdrop && modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

// ─── PROMPTS ─────────────────────────────────────────────────────────────────

function setupPrompts() {
  const container = document.getElementById("prompt-buttons");
  const response = document.getElementById("ai-response");
  if (!container || !response) return;

  Object.entries(prompts).forEach(([question, answer]) => {
    const btn = document.createElement("button");
    btn.className = "prompt-btn";
    btn.type = "button";
    btn.textContent = question;
    btn.addEventListener("click", () => {
      response.textContent = "";
      container.querySelectorAll(".prompt-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      let i = 0;
      const type = () => {
        if (i < answer.length) { response.textContent += answer[i++]; setTimeout(type, 12); }
      };
      setTimeout(type, 100);
    });
    container.appendChild(btn);
  });
}

// ─── CHATBOT ─────────────────────────────────────────────────────────────────

function setupChatbot() {
  const launcher = document.getElementById("chat-launcher");
  const widget = document.getElementById("chat-widget");
  const closeButton = document.getElementById("chat-close");
  const chatWindow = document.getElementById("chat-window");
  const suggestions = document.getElementById("chat-suggestions");

  if (!launcher || !widget || !closeButton || !chatWindow || !suggestions) return;

  const quickQuestions = [
    "What skills does Manoj have?",
    "Tell me about Saha Yatra",
    "Tell me about recent experience",
    "How can I contact Manoj?",
    "What industries has Manoj worked in?",
    "How does Manoj use AI tools?",
    "Cloud and DevOps expertise?",
    "Is Manoj open to remote?",
  ];

  const setWidgetState = (isOpen) => {
    widget.classList.toggle("open", isOpen);
    widget.setAttribute("aria-hidden", String(!isOpen));
    launcher.setAttribute("aria-expanded", String(isOpen));
  };

  const addMessage = (sender, message, delay) => {
    setTimeout(() => {
      const bubble = document.createElement("div");
      bubble.className = "chat-message " + sender;
      bubble.textContent = message;
      chatWindow.appendChild(bubble);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, delay || 0);
  };

  const getBotResponse = (question) => {
    const normalized = question.toLowerCase();
    const match = chatbotReplies.find((entry) => entry.match.some((kw) => normalized.includes(kw)));
    return match ? match.response : "Great question. I can help with skills, projects, experience, and availability. Try one of the suggestion chips above.";
  };

  const askQuestion = (question) => {
    const cleaned = question.trim();
    if (!cleaned) return;
    addMessage("user", cleaned, 0);
    addMessage("bot", getBotResponse(cleaned), 400);
  };

  quickQuestions.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-suggestion";
    button.textContent = question;
    button.addEventListener("click", () => { setWidgetState(true); askQuestion(question); });
    suggestions.appendChild(button);
  });

  launcher.addEventListener("click", () => setWidgetState(!widget.classList.contains("open")));
  closeButton.addEventListener("click", () => setWidgetState(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && widget.classList.contains("open")) setWidgetState(false); });

  addMessage("bot", "👋 Welcome! I'm Manoj's bot. Ask me anything about his profile.", 0);
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────

function setupScrollReveal() {
  const targets = document.querySelectorAll(".section, .timeline-item, .project-card, .metric");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  targets.forEach((t) => observer.observe(t));
}

// ─── ACTIVE NAV ──────────────────────────────────────────────────────────────

function setupActiveNav() {
  const navLinks = document.querySelectorAll(".nav a[href^='#']");
  const sections = document.querySelectorAll("section[id], main[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("nav-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach((s) => observer.observe(s));
}

// ─── INIT ────────────────────────────────────────────────────────────────────

renderMetrics();
renderSkills();
renderTimeline();
setupProjectsModal();
setupPrompts();
setupChatbot();
setupScrollReveal();
setupActiveNav();

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
