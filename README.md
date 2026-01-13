# 📝 Mozilla Campus Club of SLIIT - Blog Platform

A modern, responsive blog platform built with **Next.js 15**, **React 19**, and **TypeScript**. This project serves as the official blog for the Mozilla Campus Club of SLIIT, sharing articles, tutorials, and stories about technology, open-source, and community initiatives.

![Next.js](https://img.shields.io/badge/Next.js-15.4.8-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)


## ✨ Features

### Current Features
- 🎯 **Featured Story Section** - Highlight the most important blog post
- 📰 **Recently Published Posts** - Showcasing latest articles in a grid layout
- 🏷️ **Tag System** - Organize posts by topics and categories
- 👤 **Author Profiles** - Display author information with avatars and roles
- 📱 **Fully Responsive Design** - Mobile-first approach with adaptive layouts
- ⚡ **Server-Side Rendering** - Optimized performance with Next.js App Router
- 🎨 **Modern UI Components** - Reusable components with clean design
- 🖼️ **Featured & Post Cards** - Visually appealing post presentations

### Under Development
- 🔍 Search and filter functionality  
- 💬 Comment system for engagement  
- 📄 Individual blog post pages with full content
- 🗂️ Category-based navigation
- 📊 Reading progress indicator
- 🌙 Dark mode support


## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) - React framework with App Router
- **UI Library:** [React 19](https://react.dev/) - Latest React with concurrent features
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Linting:** [ESLint](https://eslint.org/) - Code quality and consistency
- **Package Manager:** npm - Dependency management

## 📁 Project Structure

```
Mozilla-Club-blog/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── blog/       # Blog-related pages
│   │   ├── layout.tsx  # Root layout with Navbar & Footer
│   │   ├── page.tsx    # Home page
│   │   └── globals.css # Global styles
│   ├── components/
│   │   ├── blog/       # Blog-specific components
│   │   │   ├── FeaturedCard.tsx   # Featured post card
│   │   │   └── PostCard.tsx       # Regular post card
│   │   ├── layout/     # Layout components
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   └── ui/         # Reusable UI components
│   │       └── Badge.tsx
│   ├── data/
│   │   └── mock-posts.ts  # Mock data for development
│   ├── types/
│   │   └── blog.ts        # TypeScript type definitions
│   └── hooks/             # Custom React hooks
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
└── package.json           # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mozilla-Campus-Club-of-SLIIT/blog.git
   cd blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 UI/UX Design

The user interface was designed in **Figma**, focusing on minimalism, readability, and accessibility following Mozilla's design principles.

🔗 **[View Figma Design File](https://www.figma.com/proto/AfmCOomsbZtGF4FF7aDSsy/Blog-site)**

**Design Screens:**
- 🏠 Landing Page with featured story
- 📑 Blog Listing with grid layout
- 📄 Single Blog Post view
- ℹ️ About Page

**Design System:**
- Primary Color: `#D9622B` (Mozilla Orange)
- Typography: System fonts with optimal readability
- Spacing: Consistent 8px grid system
- Components: Modular and reusable design elements

## 📝 Content Management

Currently using mock data for development. The blog post structure includes:

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  author: Author;
  tags: string[];
}
```

**Future Plans:**
- Markdown/MDX support for writing posts
- Admin dashboard for content management

## 🤝 Contributing

We welcome contributions from the Mozilla community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is maintained by the **Mozilla Campus Club of SLIIT**.  
Please contact the club for licensing information.

## 👥 Team

**Mozilla Campus Club of SLIIT**
- 🌐 [Website](https://www.sliitmozilla.org/)
- 📧 [Email](mailto:info@mozillaclubsliit.org)
- 🐦 [Twitter](https://twitter.com/MozillaSLIIT)

## 🙏 Acknowledgments

- [Mozilla Foundation](https://www.mozilla.org/) for their continued support
- [Next.js Team](https://nextjs.org/) for the amazing framework
- All contributors and club members who made this project possible

---

**Made with ❤️ by the Mozilla Campus Club of SLIIT**
