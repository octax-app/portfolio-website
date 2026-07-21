// =============================================================================
//  Single source of truth for all site content.
//  Everything the pages render (Work, Skills & Tools, Experience, Studio) is
//  driven from this file, so you can update copy without touching components.
//
//  Entries marked `placeholder: true` (and any "TODO" comments) are editable
//  scaffolding — replace them with your real content.
// =============================================================================

const GITHUB_ORG = "https://github.com/octax-app";

const App = {
  Title: "Haitham Portfolio",
  Slug: "Full-Stack Developer",
  Logo: undefined, // jsx tag : example : SVG or Img
  LogoForceRefresh: true,
  Shortcuts: {
    DarkTheme: 68, // D
    ESC: 27, // ESC
  },
  NavLinks: [
    { Title: "Home", Path: "/" },
    { Title: "Work", Path: "/work" },
    { Title: "Skills & Tools", Path: "/skills-tools" },
    { Title: "Experience", Path: "/experience" },
    { Title: "Studio", Path: "/studio" },
  ],
  CopyRights: "octax.cloud",
  Website: "https://octax.cloud",
  FooterNote: "Crafted with ♥ by Haitham",
  AboutMe: {
    Name: "Haitham Al-Abdullah",
    PhoneNumber: "971589935204",
    Age: 28,
    Marital: " a loving husband & caring father",
    Role: "Full-stack developer",
    Slug:
      "who can craft a Clean, Elegant, & Efficient Web & Mobile Applications",
  },
  Twitter: "https://twitter.com/HaithamDev_",
  Github: GITHUB_ORG,
  GithubOrg: "octax-app",
  LinksTitle: "Community Projects",
  Links: [
    // up to 5 Links — shown in the footer
    {
      Title: "Flutter Dashboard",
      Path: `${GITHUB_ORG}/flutter-dashboard`,
    },
    {
      Title: "Azzan Time",
      Path: `${GITHUB_ORG}/azzan-time`,
    },
    {
      Title: "Quran",
      Path: `${GITHUB_ORG}/quran-app`,
    },
    {
      Title: "This Website",
      Path: `${GITHUB_ORG}/portfolio-website`,
    },
  ],

  // ===========================================================================
  //  HOME — card-based landing content.
  // ===========================================================================
  Home: {
    Hero: {
      eyebrow: "Full-Stack Developer",
      greeting: "Hi, I'm Haitham",
      subtitle:
        "A full-stack developer building cross-platform mobile & web products — from the first sketch in Figma to a shipped, performant app.",
      primaryCta: "Get in Touch",
      secondaryCta: "View Work",
    },
    Features: [
      {
        title: "Clean",
        accent: "#fbd15b",
        desc: "Minimalist code, modern design. Clean UI and seamless UX that feels effortless.",
      },
      {
        title: "Elegant",
        accent: "#ff8478",
        desc: "Sophisticated interfaces and captivating experiences — pleasing aesthetics in every detail.",
      },
      {
        title: "Efficient",
        accent: "#5f6cf1",
        desc: "Optimized web & mobile. Fast, resource-friendly, and built to scale.",
      },
    ],
    Stats: [
      { value: "25+", label: "Projects shipped" },
      { value: "7+", label: "Years of experience" },
      { value: "6", label: "Languages supported" },
      { value: "100%", label: "Passion for craft" },
    ],
    Build: [
      { title: "Mobile Apps", desc: "Cross-platform iOS & Android with Flutter.", to: "/work" },
      { title: "Web Apps", desc: "Full-stack dashboards & SaaS platforms.", to: "/work" },
      { title: "Websites", desc: "Fast, polished marketing sites & landing pages.", to: "/work" },
      { title: "AI Agents", desc: "Custom AI-driven assistants and automation agents.", to: "/work" },
    ],
    Cta: {
      title: "Let's build something clean, elegant & efficient.",
      desc: "Have a product in mind? I'd love to help you bring it to life.",
      button: "Get in Touch",
    },
  },

  // ===========================================================================
  //  WORK — split into categories. Each category picks a `layout`:
  //    "showcase" → large screenshot reveal (uses /static/images/work/<label>/)
  //    "cards"    → compact project cards with a thumbnail
  //    "links"    → external link cards (e.g. open-source repos)
  // ===========================================================================
  Work: {
    Intro:
      "A selection of products I've designed and shipped — from cross-platform mobile apps to full-stack web platforms and open-source tools.",
    Categories: [
      {
        id: "mobile-apps",
        title: "Mobile Apps",
        subtitle: "Cross-platform apps crafted with Flutter — published on the App Store.",
        layout: "showcase",
        projects: [
          {
            name: "SEA HORSE LINE",
            label: "seahorseline",
            hasDark: true,
            screenshots: 14,
            tags: ["Flutter", "Laravel", "REST API", "6 Languages", "Dark Mode"],
            appStore: "https://apps.apple.com/app/id1450976739",
            playStore: "https://play.google.com/store/apps/details?id=com.seahorseline",
            slug:
              "a powerful cross-platform mobile application tailor-made for a leading car marine shipping company. This app offers a seamless shipping experience with its feature-rich design, including dark mode, support for six languages, an invoices section, and secure areas...",
          },
          {
            name: "Azzan Time",
            label: "azzantime",
            hasDark: false,
            screenshots: 3,
            tags: ["Flutter", "Prayer Times", "Lifestyle"],
            appStore: "https://apps.apple.com/app/id6464369844",
            slug:
              "Azzan Time is an advanced mobile application aimed at assisting Muslims around the world in easily and accurately tracking prayer times. The app provides prayer times for the five daily prayers based on the selected Islamic method and the user's location worldwide....",
          },
          {
            name: "Islamic Forum",
            label: "islamicforum",
            hasDark: false,
            screenshots: 5,
            tags: ["Flutter", "Lifestyle", "Content"],
            appStore: "https://apps.apple.com/app/id6474943598",
            slug:
              "the official app of the Islamic Forum — The Islamic Forum is a government institution specializing in Islamic culture, based in the Emirate of Sharjah. It strives to disseminate Islamic culture among diverse communities through a balanced approach...",
          },
          {
            name: "Al-Masar",
            label: "almasar",
            hasDark: false,
            screenshots: 5,
            tags: ["Flutter", "Enterprise", "HR / Self-Service", "Push Notifications"],
            appStore: "https://apps.apple.com/app/id6479048658",
            slug:
              "Al-Masar is the employee's gateway to seamless and efficient management of their work-related tasks and requests. Designed to integrate with the Almasar system, which powers our internal operations, this app empowers our employees to stay connected and productive on the go...",
          },
          {
            name: "EZ Card",
            label: "ezcard",
            hasDark: true,
            screenshots: 3,
            tags: ["Flutter", "E-commerce", "Apple Pay", "Google Pay", "Dark Mode"],
            appStore: "https://apps.apple.com/app/id1621571791",
            slug:
              "Buy your favorite digital gift cards instantly with EZ Card. Whether you're gaming, shopping, or purchasing digital content, EZ Card provides a fast, secure, and hassle-free experience...",
          },
          {
            name: "FANAJEEN",
            label: "fanajeen",
            hasDark: false,
            screenshots: 3,
            tags: ["Flutter", "E-commerce", "UI/UX"],
            slug:
              "a sleek cross-platform e-commerce app, tailored for those who have a deep passion for coffee cups and it's accessories. With a user-friendly interface and seamless navigation...",
          },
        ],
      },
      {
        id: "websites",
        title: "Websites",
        subtitle: "Marketing sites & landing pages built for speed and polish.",
        layout: "cards",
        projects: [
          {
            name: "My Portfolio",
            label: "websites/portfolio",
            placeholder: false,
            tags: ["React", "Tailwind CSS", "Vite"],
            href: 'https://octax.cloud',
            slug:
              "A fast, responsive marketing site. Replace this entry with a real project.",
          },
          {
            name: "Sea Horse Line",
            label: "websites/seahorseline",
            placeholder: false,
            tags: ["React", "Tailwind CSS", "Vite"],
            href: 'https://seahorseline.com',
            slug:
              "A fast, responsive marketing site. Replace this entry with a real project.",
          },
          {
            name: "Rebal Exchange",
            label: "websites/rebal",
            placeholder: false,
            tags: ["HTML", "CSS", "JavaScript"],
            href: "https://rebal.online/",
            slug:
              "A conversion-focused landing page. Swap in your own details, tags, and link.",
          },
        ],
      },
      {
        id: "web-apps",
        title: "Web Apps",
        subtitle: "Full-stack dashboards & SaaS built end-to-end.",
        layout: "cards",
        projects: [
          {
            name: "OctaX ERP",
            label: "webapps/octax_erp",
            placeholder: false,
            tags: ["Laravel", "React", "MySQL"],
            href: '#private',
            slug:
              "A full-stack admin dashboard with authentication, roles, and modules system. real-time, AI chat...",
          },
          {
            name: "Mocha Exchange",
            label: "webapps/rebal",
            placeholder: false,
            tags: ["Laravel", "React", "REST API"],
            href: '#private',
            slug:
              "A full-stack admin dashboard for currency exchange, with real-time currency exchange values...",
          },
        ],
      },
      {
        id: "libraries",
        title: "Libraries & Packages",
        subtitle: "Reusable open-source packages I build and maintain.",
        layout: "cards",
        projects: [
          {
            name: "hot-date-react",
            label: "libs/hot-date-react",
            placeholder: false,
            price: 0, // 0 → shown as "Free"
            tags: ["Flutter", "Package", "Open Source"],
            href: "https://www.npmjs.com/package/@octax-app/hot-date-react",
            slug:
              "React wrapper for @stolinski/hot-date — a natural language date input web component.",
          },
        ],
      },
      {
        id: "community",
        title: "Community Projects",
        subtitle: "Open-source apps I build and share with the community.",
        layout: "links",
        projects: [
          {
            name: "Flutter Dashboard",
            tags: ["Flutter", "Admin UI"],
            href: `${GITHUB_ORG}/flutter-dashboard`,
            slug: "A clean, responsive admin dashboard starter for Flutter.",
          },
          {
            name: "Azzan Time",
            tags: ["Flutter", "Prayer Times"],
            href: `${GITHUB_ORG}/azzan-time`,
            slug: "An elegant prayer-times app with accurate azan notifications.",
          },
          {
            name: "Quran",
            tags: ["Flutter", "Open Source"],
            href: `${GITHUB_ORG}/quran-app`,
            slug: "A distraction-free Quran reading experience.",
          },
        ],
      },
    ],
  },

  // ===========================================================================
  //  SKILLS & TOOLS
  // ===========================================================================
  Skills: {
    Intro:
      "The languages, frameworks, and tools I reach for to design and ship clean, elegant, and efficient products.",
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
        items: ["Dart", "PHP", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
      },
      {
        title: "Mobile",
        items: [
          "Flutter",
          "State Management",
          "REST APIs",
          "Firebase",
          "Push Notifications",
          "Localization (i18n)",
        ],
      },
      {
        title: "Frontend",
        items: [
          "React",
          "React Router",
          "Tailwind CSS",
          "Bootstrap",
          "Framer Motion",
          "Vite",
        ],
      },
      {
        title: "Backend",
        items: [
          "Laravel",
          "REST APIs",
          "MySQL",
          "Authentication",
          "Payment Gateways",
        ],
      },
      {
        title: "Design",
        items: ["Figma", "UI / UX", "Prototyping", "Design Systems"],
      },
      {
        title: "Tools & Workflow",
        items: [
          "Git & GitHub",
          "VS Code",
          "Postman",
          "CI / CD basics",
          "Vercel / Netlify",
        ],
      },
    ],
  },

  // ===========================================================================
  //  EXPERIENCE — editable placeholder timeline.
  //  TODO: replace roles, companies, dates, and highlights with your real
  //  history. Entries render newest-first, top to bottom.
  // ===========================================================================
  Experience: {
    Intro:
      "A short timeline of the roles and projects that shaped how I build products today.",
    Timeline: [
      {
        role: "Freelance Developer",
        company: "Self-employed", 
        period: "2025 — Present",
        location: "Remote · UAE",
        current: true,
        summary:
          "Replace with a summary of your current role — what you own, the products you ship, and the impact you drive.",
        highlights: [
          "Led development of cross-platform mobile apps with Flutter.",
          "Built and maintained Laravel + React web platforms end-to-end.",
          "Owned UI/UX from Figma to production.",
        ],
        stack: ["Flutter", "Laravel", "React", "Tailwind CSS"],
        placeholder: true,
      },
      {
        role: "Senior Full-Stack Developer",
        company: "Marhaba Group",
        period: "2024 - 2025",
        location: "On-site",
        summary:
          "Replace with what you did here — the systems you built and the problems you solved.",
        highlights: [
          "Delivered e-commerce apps with secure payment integrations.",
          "Collaborated with designers to ship pixel-perfect interfaces.",
        ],
        stack: ["Flutter", "Laravel", "MySQL"],
        placeholder: true,
      },
      {
        role: "Senior Full-Stack Developer",
        company: "MacBerry Technologies",
        period: "2019 — 2024",
        location: "On-site",
        summary:
          "Replace with your freelance story — the clients you helped and what you learned.",
        highlights: [
          "Shipped mobile and web projects for clients across the region.",
          "Grew a portfolio of clean, elegant, efficient products.",
        ],
        stack: ["Flutter", "PHP", "JavaScript"],
        placeholder: true,
      },
    ],
  },

  // ===========================================================================
  //  STUDIO — the Octax brand.
  // ===========================================================================
  Studio: {
    Name: "Octax",
    Tagline: "A small studio crafting clean, elegant & efficient digital products.",
    Intro:
      "Octax is where I turn ideas into polished mobile and web products. From the first sketch in Figma to a shipped, performant app — design and engineering under one roof.",
    Services: [
      {
        title: "Mobile Development",
        desc: "Cross-platform iOS & Android apps built with Flutter — fast, beautiful, and store-ready.",
      },
      {
        title: "Web Development",
        desc: "Full-stack websites and web apps with Laravel, React, and Tailwind CSS.",
      },
      {
        title: "UI / UX Design",
        desc: "Thoughtful interfaces designed in Figma, from wireframes to a complete design system.",
      },
      {
        title: "Product Engineering",
        desc: "End-to-end delivery — architecture, APIs, payments, and everything in between.",
      },
    ],
    Process: [
      { step: "01", title: "Discover", desc: "Understand the problem, users, and goals." },
      { step: "02", title: "Design", desc: "Shape the experience with clean, elegant UI." },
      { step: "03", title: "Build", desc: "Engineer efficient, maintainable software." },
      { step: "04", title: "Launch", desc: "Ship, measure, and iterate with care." },
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

export { App };
