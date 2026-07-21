# Octax — Portfolio Website

The personal portfolio of **Haitham Al-Abdullah**, a full-stack developer, and the home of the **Octax** studio brand. A clean, elegant, and efficient single-page app showcasing published mobile apps, web work, skills, experience, and services.

🔗 **Live:** [octax.cloud](https://octax.cloud)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **Card-based, responsive design** with light & dark modes (respects system preference, toggleable).
- **Config-driven content** — every page reads from a single file (`src/config/AppConfig.js`); no need to touch components to update copy.
- **Categorized work** — Mobile Apps, Websites, Web Apps, Libraries, and Community Projects.
- **Multi-store links** — App Store, Google Play, and Huawei AppGallery buttons that appear only when a link is provided.
- **Smooth motion** — scroll-reveal animations via Framer Motion and a Swiper-powered app screenshot gallery.
- **Graceful image fallbacks** — missing screenshots render a tidy "preview coming soon" placeholder.

## 🧱 Tech Stack

| Area | Tooling |
|------|---------|
| Framework | [React 18](https://react.dev) |
| Build tool | [Vite 8](https://vitejs.dev) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Routing | [React Router 6](https://reactrouter.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Carousel | [Swiper](https://swiperjs.com) |

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org) 20.19+ or 22.12+ (required by Vite 8) and npm.

```bash
# 1. Clone
git clone https://github.com/octax-app/website.git
cd website

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:3000)
npm start
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm start` / `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build for production into `build/` |
| `npm run preview` | Preview the production build locally |

## 📁 Project Structure

```
src/
├── config/
│   └── AppConfig.js      # 👈 single source of truth for ALL content
├── core/                 # app shell: routing, navbar, footer
│   ├── App.jsx
│   ├── navbar/
│   └── footer/
├── pages/
│   ├── home/             # card-based landing page
│   ├── work/             # categorized projects + app detail gallery
│   ├── skills/           # Skills & Tools
│   ├── experience/       # Experience timeline
│   └── studio/           # Octax studio / brand
├── shared/               # reusable UI (PageHeader, Reveal, Badge, cards…)
├── index.css             # Tailwind entry + fonts
└── index.jsx             # app entry (all components use .jsx; config stays .js)
public/
└── static/images/        # home & work screenshots
```

## 🛠️ Customizing Content

All content lives in **`src/config/AppConfig.js`**. Edit that one file to update the site:

- **`Home`** — hero copy, feature cards, stats, and CTA.
- **`Work.Categories`** — projects grouped by category. Each project supports `name`, `slug`, `tags`, and store links.
- **`Skills`** — favorite stack icons and grouped skill badges.
- **`Experience`** — the career timeline.
- **`Studio`** — the Octax brand: services, process, and values.
- Global bits like `Github`, `Twitter`, `Website`, and footer links.

### Adding store links

Add any of these fields to a project to make its store button appear (buttons render only when a link exists):

```js
{
  name: "Sea Horse Line",
  label: "seahorseline",
  appStore:    "https://apps.apple.com/app/id1450976739",
  playStore:   "https://play.google.com/store/apps/details?id=com.seahorseline",
  huaweiStore: "https://appgallery.huawei.com/app/CXXXXXXX",
  // ...
}
```

### Adding project screenshots

Drop images into `public/static/images/work/<label>/` using this naming pattern (where `<label>` matches the project's `label` in the config):

```
screenshot_1_light.png   screenshot_2_light.png   screenshot_3_light.png
screenshot_1_dark.png    screenshot_2_dark.png    screenshot_3_dark.png   # only if hasDark: true
```

Until images are added, cards show a graceful placeholder automatically.

## 📦 Deployment

`npm run build` outputs a static site to `build/`. Deploy the folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.). It's a single-page app, so configure your host to rewrite all routes to `index.html`.

## 📄 License

Released under the [MIT License](LICENSE). The code is free to use; the personal content, brand assets, and imagery (Octax, app screenshots) remain the property of their owner.

---

Crafted with ♥ by Haitham — [octax.cloud](https://octax.cloud) · [@octax-app](https://github.com/octax-app)
