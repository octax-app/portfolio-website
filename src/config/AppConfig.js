// =============================================================================
//  Single source of truth for all site content.
//  Every page (Home, Work, Lab, Stack, About, Services) renders from this file,
//  so copy, projects and progress can be updated without touching components.
//
//  Tones: "violet" | "pink" | "amber" | "mint" | "sky" | "coral"
// =============================================================================

const GITHUB_ORG = "https://github.com/octax-app";

const App = {
  Title: "Octax",
  Slug: "Product studio",
  Logo: undefined, // jsx tag : example : SVG or Img
  LogoForceRefresh: true,
  Shortcuts: {
    DarkTheme: 68, // D
    ESC: 27, // ESC
  },
  NavLinks: [
    { Title: "Home", Path: "/" },
    { Title: "Work", Path: "/work" },
    { Title: "Lab", Path: "/lab" },
    { Title: "Services", Path: "/studio" },
    { Title: "Stack", Path: "/skills-tools" },
    { Title: "About", Path: "/experience" },
  ],
  CopyRights: "Octax",
  Website: "https://octax.dev",
  FooterNote: "Crafted with care in the UAE",
  Contact: {
    WhatsApp: "971589935204",
  },
  // The company, shown in the footer
  About: {
    Name: "Octax",
    Blurb:
      "Octax is a product studio that designs, builds and runs mobile apps, web platforms and open-source tools. Clean code, elegant interfaces, efficient software.",
  },
  // The founder, shown on the About page
  Founder: {
    Name: "Haitham Al-Abdullah",
    Role: "Founder & lead engineer",
    Bio: "Full-stack developer with 7+ years of shipping cross-platform mobile and web products, from the first Figma sketch to the App Store.",
  },
  Twitter: "https://twitter.com/HaithamDev_",
  Github: GITHUB_ORG,
  GithubOrg: "octax-app",

  // ===========================================================================
  //  STATUS + OPEN-SOURCE vocabularies (used by pills & filters)
  // ===========================================================================
  Status: {
    live: { label: "Live", tone: "mint" },
    beta: { label: "Beta", tone: "sky" },
    building: { label: "In the lab", tone: "amber" },
    private: { label: "Client work", tone: "violet" },
  },
  OpenSource: {
    public: { label: "Open source", tone: "mint" },
    "in-progress": { label: "Open-sourcing", tone: "amber" },
    planned: { label: "Open source planned", tone: "sky" },
  },

  // ===========================================================================
  //  CATALOG — every product and project, in display order.
  //  kind:  "platform" | "mobile" | "webapp" | "website" | "library" | "community"
  //  status: key of App.Status
  //  milestones (optional) → the project shows up in progress tracking (Lab)
  //    state: "done" | "active" | "todo"
  //  screenshots (mobile) → /static/images/work/apps/<id>/screenshot_<n>_<light|dark>.webp
  //  image → thumbnail under /static/images/work/
  // ===========================================================================
  Catalog: [
    {
      id: "oneerp",
      name: "OneERP",
      kind: "platform",
      tone: "amber",
      status: "live",
      featured: true,
      icon: "auction",
      tagline: "ERP and live-auction platform for a vehicle-auction business.",
      desc: "A full ERP plus live online auctions, replacing a legacy system. A modular NestJS backend, a Go realtime bid engine that handles bid storms, and React / Next.js web apps for customers and staff. Mobile apps for bidders, sellers and the yard team are being built now.",
      gallery: [
        { src: "gallery/oneerp/site-home.jpg", caption: "Auction website: home" },
        { src: "gallery/oneerp/site-vehicles.jpg", caption: "Vehicle inventory with filters" },
        { src: "gallery/oneerp/site-vehicle.jpg", caption: "Vehicle details and bidding" },
        { src: "gallery/oneerp/site-calendar.jpg", caption: "Auction calendar" },
        { src: "gallery/oneerp/site-mobile.jpg", caption: "Mobile web: home", device: "mobile" },
        { src: "gallery/oneerp/site-vehicles-mobile.jpg", caption: "Mobile web: inventory", device: "mobile" },
      ],
      tags: ["NestJS", "Go", "Next.js", "React", "Expo", "Postgres", "Redis"],
      links: {
        site: { label: "mwsauction.com", href: "https://mwsauction.com" },
        admin: { label: "admin.mwsauction.com", href: "https://admin.mwsauction.com" },
      },
      milestones: [
        { title: "Admin ERP", note: "admin.mwsauction.com", state: "done" },
        { title: "Live auction website", note: "mwsauction.com", state: "done" },
        { title: "Go realtime bid engine", state: "done" },
        { title: "Auction mobile app", note: "Bidders & sellers, Expo", state: "active" },
        { title: "Inventory mobile app", note: "Yard team, Expo", state: "active" },
        { title: "App Store & Google Play release", state: "todo" },
      ],
    },
    {
      id: "solobill",
      name: "Octax Solobill",
      kind: "platform",
      tone: "violet",
      status: "live",
      featured: true,
      icon: "receipt",
      tagline: "Billing for solo traders who resell services.",
      desc: "Costs, invoices, renewals and profit in one place for developers and freelancers who resell services. Track what each customer owes and what you owe providers, and issue invoices and proformas on your own branded templates, from the web or the iOS app. Open source under MIT: self-host it, or use it free at inv.octax.dev.",
      gallery: [
        { src: "gallery/solobill/overview.png", caption: "Overview: revenue, cost, profit and renewals" },
        { src: "gallery/solobill/invoices.png", caption: "Customer invoices" },
        { src: "gallery/solobill/invoice-editor.png", caption: "Invoice editor" },
        { src: "gallery/solobill/invoice.png", caption: "Invoice on a branded template" },
        { src: "gallery/solobill/customer.png", caption: "Customer details" },
        { src: "gallery/solobill/pdf-arabic.png", caption: "Arabic PDF output", device: "document" },
      ],
      tags: ["TypeScript", "React", "Hono", "SQLite", "SwiftUI", "Docker"],
      openSource: "public",
      links: {
        demo: { label: "Try it free", href: "https://inv.octax.dev" },
        repo: `${GITHUB_ORG}/solobill`,
      },
      milestones: [
        { title: "Admin web app & API", state: "done" },
        { title: "Branded PDF templates & invoices", state: "done" },
        { title: "Workspaces & Sign in with Apple", state: "done" },
        { title: "iOS app", note: "TestFlight", state: "done" },
        { title: "Free public service", note: "inv.octax.dev", state: "done" },
        { title: "Open source web repo", note: "octax-app/solobill, MIT", state: "done" },
        { title: "Open source iOS repo", state: "todo" },
        { title: "Android app", state: "todo" },
      ],
    },
    {
      id: "openpass",
      name: "Open Pass",
      kind: "platform",
      tone: "sky",
      status: "building",
      featured: true,
      image: "pipeline/openpass-icon.png",
      tagline: "A free, end-to-end encrypted password manager.",
      desc: "Passwords, passkeys and one-time codes that sync across browsers, desktop and phone, encrypted on your device so only you can open them. Built, not yet released: public launch and open source come after an independent security audit.",
      tags: ["Rust", "React", "Native iOS", "Native Android", "Zero-knowledge"],
      openSource: "planned",
      milestones: [
        { title: "Security design & foundations", state: "done" },
        { title: "Rust core, sync server & CLI", state: "done" },
        { title: "Browser extensions", state: "done" },
        { title: "Desktop apps", note: "macOS, Windows, Linux", state: "done" },
        { title: "Native iOS & Android apps", state: "done" },
        { title: "Sharing, families & emergency access", state: "active" },
        { title: "Developer toolkit & file safe", state: "active" },
        { title: "Independent security audit", state: "todo" },
        { title: "Public release & open source", state: "todo" },
      ],
    },

    // ---- Mobile apps ---------------------------------------------------------
    {
      id: "seahorseline",
      name: "Sea Horse Line",
      kind: "mobile",
      tone: "sky",
      status: "live",
      featured: true,
      hasDark: true,
      screenshots: 14,
      tagline: "Shipping app for a leading car marine shipping company.",
      desc: "A cross-platform app for a car marine shipping company: shipment tracking, invoices, secure areas, dark mode and six languages.",
      tags: ["Flutter", "Laravel", "REST API", "6 Languages", "Dark Mode"],
      links: {
        appStore: "https://apps.apple.com/app/id1450976739",
        playStore: "https://play.google.com/store/apps/details?id=com.seahorseline",
      },
    },
    {
      id: "azzantime",
      name: "Azzan Time",
      kind: "mobile",
      tone: "mint",
      status: "live",
      featured: true,
      screenshots: 3,
      openSource: "public",
      tagline: "Accurate prayer times, wherever you are.",
      desc: "Helps Muslims around the world track the five daily prayers accurately, based on the chosen calculation method and the user's location.",
      tags: ["Flutter", "Prayer Times", "Lifestyle"],
      links: {
        appStore: "https://apps.apple.com/app/id6464369844",
        repo: `${GITHUB_ORG}/azzan-time`,
      },
    },
    {
      id: "islamicforum",
      name: "Islamic Forum",
      kind: "mobile",
      tone: "amber",
      status: "live",
      screenshots: 5,
      tagline: "The official app of the Islamic Forum, Sharjah.",
      desc: "The official app of a government institution specialising in Islamic culture, based in the Emirate of Sharjah.",
      tags: ["Flutter", "Content", "Government"],
      links: { appStore: "https://apps.apple.com/app/id6474943598" },
    },
    {
      id: "almasar",
      name: "Al-Masar",
      kind: "mobile",
      tone: "violet",
      status: "live",
      screenshots: 5,
      tagline: "Employee self-service on the go.",
      desc: "The employee's gateway to work requests and tasks, integrated with the Almasar system that runs internal operations.",
      tags: ["Flutter", "Enterprise", "HR / Self-Service", "Push Notifications"],
      links: { appStore: "https://apps.apple.com/app/id6479048658" },
    },
    {
      id: "ezcard",
      name: "EZ Card",
      kind: "mobile",
      tone: "pink",
      status: "live",
      hasDark: true,
      screenshots: 3,
      tagline: "Digital gift cards, instantly.",
      desc: "Buy gaming, shopping and digital-content gift cards instantly, with Apple Pay and Google Pay.",
      tags: ["Flutter", "E-commerce", "Apple Pay", "Google Pay", "Dark Mode"],
      links: { appStore: "https://apps.apple.com/app/id1621571791" },
    },
    {
      id: "fanajeen",
      name: "FANAJEEN",
      kind: "mobile",
      tone: "coral",
      status: "private",
      screenshots: 3,
      tagline: "E-commerce for coffee-cup lovers.",
      desc: "A sleek cross-platform store for coffee cups and accessories, with a friendly interface and smooth navigation.",
      tags: ["Flutter", "E-commerce", "UI/UX"],
    },

    // ---- Web apps ------------------------------------------------------------
    {
      id: "octax-erp",
      name: "OctaX ERP",
      kind: "webapp",
      tone: "pink",
      status: "private",
      image: "webapps/octax_erp.png",
      tagline: "Admin dashboard with roles, modules and AI chat.",
      desc: "A full-stack admin dashboard with authentication, roles, a module system, realtime updates and AI chat.",
      gallery: [
        { src: "webapps/octax_erp.png", caption: "Admin dashboard" },
      ],
      tags: ["Laravel", "React", "MySQL"],
    },
    {
      id: "mocha-exchange",
      name: "Mocha Exchange",
      kind: "webapp",
      tone: "amber",
      status: "private",
      image: "webapps/rebal.png",
      tagline: "Currency-exchange back office with live rates.",
      desc: "A full-stack admin dashboard for currency exchange, with realtime exchange rates.",
      gallery: [
        { src: "webapps/rebal.png", caption: "Exchange back office" },
      ],
      tags: ["Laravel", "React", "REST API"],
    },

    // ---- Websites ------------------------------------------------------------
    {
      id: "seahorseline-web",
      name: "Sea Horse Line",
      kind: "website",
      tone: "sky",
      status: "live",
      image: "websites/seahorseline.png",
      tagline: "Marketing site for a car shipping company.",
      desc: "A fast, responsive marketing site for Sea Horse Line.",
      gallery: [
        { src: "gallery/seahorseline-web/home.jpg", caption: "Home page" },
        { src: "gallery/seahorseline-web/mobile.jpg", caption: "Mobile", device: "mobile" },
      ],
      tags: ["React", "Tailwind CSS", "Vite"],
      links: { site: { label: "seahorseline.com", href: "https://seahorseline.com" } },
    },
    {
      id: "nahdatalofuq",
      name: "Nahdat Alofuq",
      kind: "website",
      tone: "amber",
      status: "live",
      tagline: "Bilingual site for an investment and development company.",
      desc: "Corporate website for Nahdat Alofuq, an investment and development company working across real estate, tourism, import, export and smart cities. Fully bilingual in Arabic (RTL) and English, with sector pages, a projects showcase, land opportunities and a contact flow.",
      gallery: [
        { src: "gallery/nahdatalofuq/home-en.jpg", caption: "Home (English)" },
        { src: "gallery/nahdatalofuq/projects-en.jpg", caption: "Projects" },
        { src: "gallery/nahdatalofuq/sectors-en.jpg", caption: "Sectors" },
        { src: "gallery/nahdatalofuq/mobile.jpg", caption: "Mobile (Arabic, RTL)", device: "mobile" },
      ],
      tags: ["Next.js", "Arabic & English", "RTL", "Responsive"],
      links: { site: { label: "nahdatalofuq.com", href: "https://nahdatalofuq.com" } },
    },
    {
      id: "rebal",
      name: "Rebal Exchange",
      kind: "website",
      tone: "mint",
      status: "live",
      image: "websites/rebal.png",
      tagline: "Conversion-focused exchange landing page.",
      desc: "A conversion-focused landing page for a currency exchange.",
      gallery: [
        { src: "gallery/rebal/home.jpg", caption: "Exchange landing page" },
        { src: "gallery/rebal/mobile.jpg", caption: "Mobile", device: "mobile" },
      ],
      tags: ["HTML", "CSS", "JavaScript"],
      links: { site: { label: "rebal.online", href: "https://rebal.online/" } },
    },
    {
      id: "octax-site",
      name: "octax.dev",
      kind: "website",
      tone: "violet",
      status: "live",
      openSource: "public",
      tagline: "This website. Claymorphism, React and Tailwind.",
      desc: "The Octax studio site you're looking at, built with React, Tailwind CSS and Vite.",
      gallery: [
        { src: "gallery/octax-site/home-light.jpg", caption: "Home, light theme" },
        { src: "gallery/octax-site/home-dark.jpg", caption: "Home, dark theme" },
        { src: "gallery/octax-site/lab.jpg", caption: "The Lab: progress tracking" },
        { src: "gallery/octax-site/mobile.jpg", caption: "Mobile", device: "mobile" },
      ],
      tags: ["React", "Tailwind CSS", "Vite"],
      links: { repo: `${GITHUB_ORG}/portfolio-website` },
    },

    // ---- Libraries & community ----------------------------------------------
    {
      id: "hot-date-react",
      name: "hot-date-react",
      kind: "library",
      tone: "coral",
      status: "live",
      image: "libs/hot-date-react.png",
      openSource: "public",
      tagline: "Natural-language date input for React.",
      desc: "React wrapper for @stolinski/hot-date, a natural-language date input web component.",
      gallery: [
        { src: "libs/hot-date-react.png", caption: "Natural-language date input" },
      ],
      tags: ["React", "npm", "Web Components"],
      links: { npm: "https://www.npmjs.com/package/@octax-app/hot-date-react" },
    },
    {
      id: "flutter-dashboard",
      name: "Flutter Dashboard",
      kind: "community",
      tone: "sky",
      status: "live",
      openSource: "public",
      icon: "dashboard",
      tagline: "A clean, responsive admin dashboard starter.",
      desc: "A clean, responsive admin dashboard starter for Flutter.",
      tags: ["Flutter", "Admin UI"],
      links: { repo: `${GITHUB_ORG}/flutter-dashboard` },
    },
    {
      id: "quran-app",
      name: "Quran",
      kind: "community",
      tone: "violet",
      status: "live",
      openSource: "public",
      icon: "book",
      tagline: "A distraction-free Quran reading experience.",
      desc: "A distraction-free Quran reading app for Flutter.",
      tags: ["Flutter", "Open Source"],
      links: { repo: `${GITHUB_ORG}/quran-app` },
    },
  ],

  // Catalog filter chips (Work page + home preview)
  CatalogFilters: [
    { id: "all", label: "All" },
    { id: "platform", label: "Products" },
    { id: "mobile", label: "Mobile apps" },
    { id: "web", label: "Web", kinds: ["webapp", "website"] },
    { id: "oss", label: "Open source" },
    { id: "lab", label: "In progress" },
  ],

  // ===========================================================================
  //  HOME
  // ===========================================================================
  Home: {
    Hero: {
      eyebrow: "Octax · Product studio",
      title: ["We craft", "clean,", "elegant &", "efficient", "products."],
      subtitle:
        "Octax designs, builds and runs mobile apps, web platforms and open-source tools, from the first sketch to a shipped, fast product people enjoy using.",
      primaryCta: "Start a project",
      secondaryCta: "Explore the work",
    },
    Stats: [
      { value: "25+", label: "Products shipped", tone: "violet" },
      { value: "3", label: "Products in the lab", tone: "amber" },
      { value: "7+", label: "Years building", tone: "mint" },
      { value: "6", label: "Languages supported", tone: "pink" },
    ],
    Cta: {
      title: "Let's build something clean, elegant & efficient.",
      desc: "Have a product in mind? Octax can take it from idea to app store.",
      button: "Talk to Octax",
    },
  },

  Work: {
    Intro:
      "Products we run ourselves and work we've shipped for clients, from cross-platform mobile apps to full-stack platforms and open-source tools.",
  },

  Lab: {
    Intro:
      "What's being built right now, in the open. Live progress, demos you can try today, and the code we share.",
  },

  // ===========================================================================
  //  STACK
  // ===========================================================================
  Skills: {
    Intro:
      "The languages, frameworks and tools Octax reaches for to design and ship clean, elegant and efficient products.",
    // icons rendered at the top of the page (must match StackSvg `type`s)
    FavoriteStack: [
      { type: "flutter", color: "#00D0FF" },
      { type: "laravel", color: "#f34f43ff" },
      { type: "react", color: "#61dbfbff" },
      { type: "bootstrap", color: "#573e7fff" },
      { type: "tailwind", color: "#38bdf8ff" },
      { type: "vscode", color: "#1f9cf0ff" },
      { type: "figma", color: "#ad00ffff" },
    ],
    Groups: [
      {
        title: "Languages",
        tone: "violet",
        items: ["Dart", "TypeScript", "JavaScript", "PHP", "Go", "Rust", "Swift", "SQL"],
      },
      {
        title: "Mobile",
        tone: "pink",
        items: ["Flutter", "SwiftUI", "Expo / React Native", "Firebase", "Push Notifications", "Localization (i18n)"],
      },
      {
        title: "Frontend",
        tone: "sky",
        items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vite", "TanStack Query"],
      },
      {
        title: "Backend",
        tone: "amber",
        items: ["Laravel", "NestJS", "Hono", "Postgres", "MySQL", "SQLite", "Redis", "Payment Gateways"],
      },
      {
        title: "Design",
        tone: "coral",
        items: ["Figma", "UI / UX", "Prototyping", "Design Systems"],
      },
      {
        title: "Ops & Workflow",
        tone: "mint",
        items: ["Git & GitHub", "Docker", "CI / CD", "Nx monorepos", "AI agents"],
      },
    ],
  },

  // ===========================================================================
  //  ABOUT — the founder's timeline. Entries render newest-first.
  // ===========================================================================
  Experience: {
    Intro:
      "Octax is led by its founder, Haitham Al-Abdullah. This is the road that shaped how the studio builds products today.",
    Timeline: [
      {
        role: "Founder",
        company: "Octax",
        period: "2025 — Present",
        location: "Remote · UAE",
        current: true,
        tone: "violet",
        summary:
          "Running Octax: building our own products (OneERP, Octax Solobill, Open Pass) and shipping apps and platforms for clients.",
        highlights: [
          "Launched OneERP, a live ERP and auction platform, at mwsauction.com.",
          "Shipped and open-sourced Octax Solobill, free at inv.octax.dev.",
          "Building Open Pass, an end-to-end encrypted password manager.",
        ],
        stack: ["Flutter", "NestJS", "Go", "React", "SwiftUI"],
      },
      {
        role: "Senior Full-Stack Developer",
        company: "Marhaba Group",
        period: "2024 — 2025",
        location: "On-site",
        tone: "pink",
        summary: "Built and maintained mobile and web systems end-to-end.",
        highlights: [
          "Delivered e-commerce apps with secure payment integrations.",
          "Collaborated with designers to ship pixel-perfect interfaces.",
        ],
        stack: ["Flutter", "Laravel", "MySQL"],
      },
      {
        role: "Senior Full-Stack Developer",
        company: "MacBerry Technologies",
        period: "2019 — 2024",
        location: "On-site",
        tone: "sky",
        summary: "Shipped mobile and web projects for clients across the region.",
        highlights: [
          "Published Flutter apps on the App Store and Google Play.",
          "Grew a portfolio of clean, elegant, efficient products.",
        ],
        stack: ["Flutter", "PHP", "JavaScript"],
      },
    ],
  },

  // ===========================================================================
  //  SERVICES — what Octax offers
  // ===========================================================================
  Studio: {
    Name: "Octax",
    Tagline: "A product studio crafting clean, elegant & efficient software.",
    Intro:
      "Design and engineering under one roof. Octax takes products from the first sketch in Figma to a shipped, fast, maintainable app, and keeps them running after launch.",
    Services: [
      {
        title: "Mobile apps",
        tone: "pink",
        icon: "phone",
        desc: "Cross-platform iOS & Android apps with Flutter and Expo, plus native SwiftUI when it matters.",
      },
      {
        title: "Web platforms",
        tone: "violet",
        icon: "browser",
        desc: "Full-stack web apps, dashboards and ERPs with React, Next.js, NestJS and Laravel.",
      },
      {
        title: "UI / UX design",
        tone: "coral",
        icon: "pen",
        desc: "Interfaces designed in Figma, from wireframes to a complete design system.",
      },
      {
        title: "Realtime & scale",
        tone: "amber",
        icon: "bolt",
        desc: "Realtime engines, payments and the infrastructure to run them reliably.",
      },
    ],
    Process: [
      { step: "01", title: "Discover", tone: "violet", desc: "Understand the problem, users, and goals." },
      { step: "02", title: "Design", tone: "pink", desc: "Shape the experience with clean, elegant UI." },
      { step: "03", title: "Build", tone: "amber", desc: "Engineer efficient, maintainable software." },
      { step: "04", title: "Launch", tone: "mint", desc: "Ship, measure, and keep improving." },
    ],
    Values: [
      "Clean code, thoughtful architecture.",
      "Design that respects the user.",
      "Performance is a feature.",
      "Ship, then keep improving.",
    ],
    Cta: {
      title: "Have a project in mind?",
      desc: "Let's build something clean, elegant, and efficient together.",
    },
  },
};

// ---------------------------------------------------------------------------
//  Helpers
// ---------------------------------------------------------------------------
const MILESTONE_WEIGHT = { done: 1, active: 0.5, todo: 0 };

// 0–100, from a project's milestones (done = 1, active = ½).
function progressOf(project) {
  const m = project.milestones || [];
  if (!m.length) return null;
  const sum = m.reduce((acc, x) => acc + (MILESTONE_WEIGHT[x.state] ?? 0), 0);
  return Math.round((sum / m.length) * 100);
}

function matchesFilter(project, filterId) {
  const filter = App.CatalogFilters.find((f) => f.id === filterId);
  if (!filter || filter.id === "all") return true;
  if (filter.id === "oss") return Boolean(project.openSource);
  if (filter.id === "lab")
    return (project.milestones || []).some((m) => m.state !== "done");
  const kinds = filter.kinds || [filter.id];
  return kinds.includes(project.kind);
}

const findProject = (id) => App.Catalog.find((p) => p.id === id) || null;

export { App, progressOf, matchesFilter, findProject };
