<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.0-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/PUREons-6366F1?style=for-the-badge&logo=appveyor&logoColor=white" />
    <img src="https://img.shields.io/badge/PUREons-6366F1?style=for-the-badge&logo=appveyor&logoColor=white" alt="PUREons" />
  </picture>
  <br />
  Everything you need. One platform.
</h1>

<p align="center">
  <strong>A modern, premium SaaS landing page built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.</strong>
  <br />
  <em>Services, tools, courses — all in one elegant platform.</em>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#customization">Customization</a> •
  <a href="#deployment">Deployment</a>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/version-1.0.0-orange?style=flat-square" alt="Version" />
</p>

## ✨ Preview

> **PUREons** is a beautifully crafted, production-ready SaaS landing page featuring a clean light theme with optional dark mode, smooth animations, and a component-based architecture.

<div align="center">
  <table>
    <tr>
      <td align="center">
        <strong>☀️ Light Mode</strong><br />
        <em>Clean, premium white design</em>
      </td>
      <td align="center">
        <strong>🌙 Dark Mode</strong><br />
        <em>Elegant dark theme toggle</em>
      </td>
    </tr>
  </table>
</div>

## 🚀 Features

<table>
  <tr>
    <td>
      <strong>🎨 Light & Dark Theme</strong><br />
      Default light theme with persistent dark mode toggle
    </td>
    <td>
      <strong>⚡ Fast & Optimized</strong><br />
      Next.js 16 App Router with static generation
    </td>
  </tr>
  <tr>
    <td>
      <strong>🔍 Smart Search</strong><br />
      Pill-style search bar with real-time filtering
    </td>
    <td>
      <strong>📂 Category Filtering</strong><br />
      Dynamic category bar — no page reloads
    </td>
  </tr>
  <tr>
    <td>
      <strong>🃏 Service Cards</strong><br />
      Clean cards with hover lift and soft shadows
    </td>
    <td>
      <strong>🎭 Smooth Animations</strong><br />
      Framer Motion: fade-in, slide-up, hover lift
    </td>
  </tr>
  <tr>
    <td>
      <strong>📱 Fully Responsive</strong><br />
      Mobile-first design for all screen sizes
    </td>
    <td>
      <strong>♿ Accessible</strong><br />
      Semantic HTML with proper ARIA attributes
    </td>
  </tr>
</table>

## 🛠 Tech Stack

```
┌─────────────────────────────────────────────┐
│                 PUREons Stack               │
├─────────────────────────────────────────────┤
│  Framework:     Next.js 16 (App Router)     │
│  Language:      TypeScript 5                │
│  Styling:       Tailwind CSS 4              │
│  Animations:    Framer Motion 12            │
│  Icons:         Lucide React                │
│  Font:          Inter + Geist Mono          │
│  Theme:         Custom CSS Variables        │
└─────────────────────────────────────────────┘
```

## 📦 Getting Started

### Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pureons.git
cd pureons

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
pureons/
├── app/
│   ├── globals.css            # Theme variables & global styles
│   ├── layout.tsx             # Root layout with ThemeProvider
│   └── page.tsx               # Homepage composition
├── components/
│   ├── Navbar.tsx             # Fixed navbar + theme toggle
│   ├── Hero.tsx               # Hero section with search
│   ├── SearchBar.tsx          # Pill search input
│   ├── CategoryBar.tsx        # Filter categories
│   ├── ServiceCard.tsx        # Reusable service card
│   ├── ServicesGrid.tsx       # Responsive services grid
│   ├── Features.tsx           # Feature highlights
│   ├── CTA.tsx                # Call-to-action section
│   ├── Footer.tsx             # Site footer
│   └── ThemeToggle.tsx        # Light/dark toggle button
├── context/
│   └── ThemeProvider.tsx      # Theme context & state
├── data/
│   └── services.ts            # Services data & categories
├── public/                    # Static assets
├── package.json
└── README.md
```

## 🎨 Customization

### Color System

Edit `app/globals.css` to customize the color palette:

```css
:root {
  --background: #FFFFFF;      /* Main background */
  --foreground: #0F172A;      /* Primary text */
  --primary: #6366F1;         /* Brand color */
  --accent: #8B5CF6;          /* Accent color */
  --text-sub: #64748B;        /* Subtext */
  --border: #E2E8F0;          /* Borders */
  --section-bg: #F8FAFC;      /* Section background */
  --card-bg: #FFFFFF;         /* Card background */
}
```

### Adding Services

Edit `data/services.ts` to add or modify services:

```typescript
export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    category: "Development",
    description: "Modern full stack websites",
    image: "/images/web.png",
  },
  // Add more services here...
];
```

### Adding Categories

Update the `categories` array in `data/services.ts`:

```typescript
export const categories = [
  "All",
  "Development",
  "Automation",
  "AI",
  "Editing",
  "Products",
  "Courses",
  // Add more categories...
];
```

## 🌐 Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/pureons)

### Other Platforms

| Platform | Guide |
|----------|-------|
| **Netlify** | [Deploy to Netlify](https://docs.netlify.com/frameworks/next-js/) |
| **Vercel** | [Deploy to Vercel](https://nextjs.org/docs/deployment) |
| **Docker** | Build with `npm run build` and serve with `npm run start` |

## 📸 Screenshots

> *Coming soon — Deploy the project to see the live preview.*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 💬 Support

- 🐛 Report a bug → [Open an issue](https://github.com/yourusername/pureons/issues)
- 💡 Request a feature → [Open an issue](https://github.com/yourusername/pureons/issues)
- 📧 Contact → [your@email.com](mailto:your@email.com)

---

<p align="center">
  <strong>Made with ❤️ using Next.js & Tailwind CSS</strong>
  <br />
  <sub>Built by <a href="https://github.com/yourusername">Your Name</a></sub>
</p>

<p align="center">
  <a href="#top">↑ Back to top ↑</a>
</p>
