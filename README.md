# Professional Portfolio - Rudraksh Udiya

A modern, professional portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features stunning animations, responsive design, and a comprehensive showcase of skills, projects, and professional experience.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### Professional Sections
- **🏠 Hero Section**: Eye-catching introduction with multiple CTAs (Contact, Projects, Resume Download)
- **👤 About Me**: Personal bio, professional values, and key metrics
- **💼 Work Experience**: Timeline-based display of professional journey
- **🎓 Education**: Academic background and achievements
- **💻 Skills**: Categorized technical skills with visual icons
- **🏆 Certifications**: Professional certifications and achievements
- **🚀 Projects**: Featured projects with descriptions and links (6+ projects)
- **💬 Testimonials**: Client and colleague recommendations
- **📧 Contact**: Professional contact form with validation
- **🔐 Encryption Section**: Unique interactive security-themed section

### Technical Features
- ⚡ **Server-Side Rendering** with Next.js 16
- 🎨 **Smooth Animations** using Framer Motion
- 📱 **Fully Responsive** design for all devices
- 🌙 **Dark Theme** with space-themed aesthetics
- ♿ **Accessible** components with ARIA labels
- 🚀 **Performance Optimized** with lazy loading
- 🔍 **SEO Optimized** with comprehensive meta tags
- 🎯 **Type-Safe** with TypeScript

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.2.2
- **UI Library**: React 19.2.4
- **Language**: TypeScript 6
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 12.38.0
- **3D Graphics**: Three.js 0.183.2, React Three Fiber, Drei
- **Icons**: Heroicons, React Icons

### Development Tools
- **Linting**: ESLint 10
- **Package Manager**: npm
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
Portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with navigation and footer
│   ├── page.tsx             # Home page with all sections
│   └── globals.css          # Global styles
├── components/
│   ├── main/                # Main page components
│   │   ├── about.tsx        # About Me section
│   │   ├── certifications.tsx # Certifications display
│   │   ├── contact.tsx      # Contact form
│   │   ├── education.tsx    # Education timeline
│   │   ├── encryption.tsx   # Interactive encryption section
│   │   ├── experience.tsx   # Work experience timeline
│   │   ├── footer.tsx       # Site footer
│   │   ├── hero.tsx         # Hero section wrapper
│   │   ├── navbar.tsx       # Navigation bar
│   │   ├── projects.tsx     # Projects showcase
│   │   ├── skills.tsx       # Skills display
│   │   ├── star-background.tsx # 3D star field
│   │   └── testimonials.tsx # Testimonials carousel
│   └── sub/                 # Sub-components
│       ├── hero-content.tsx # Hero section content
│       ├── project-card.tsx # Project card component
│       ├── skill-data-provider.tsx # Skill icon component
│       └── skill-text.tsx   # Skills section text
├── config/
│   └── index.ts             # Site configuration and SEO metadata
├── constants/
│   └── index.ts             # All content data (skills, projects, etc.)
├── lib/
│   ├── motion.ts            # Framer Motion animations
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
│   ├── skills/              # Skill icons
│   ├── projects/            # Project images
│   ├── videos/              # Background videos
│   └── RESUME_INSTRUCTIONS.md # Resume setup guide
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rudraksha127/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization Guide

### 1. Update Personal Information

Edit `/constants/index.ts` to customize:
- **Personal Details**: Name, bio, social links
- **Experience**: Work history and achievements
- **Education**: Academic background
- **Skills**: Technical skills with icons
- **Projects**: Portfolio projects
- **Certifications**: Achievements and certificates
- **Testimonials**: Client recommendations

### 2. Add Your Resume

1. Create your resume as a PDF file
2. Name it `resume.pdf`
3. Place it in the `/public` directory
4. The download button will automatically work

### 3. Update Social Links

In `/constants/index.ts`, update the `SOCIALS` array:
```typescript
export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/YOUR_USERNAME",
  },
  // Add more social links
];
```

### 4. Customize Colors

Edit `/app/globals.css` and `/tailwind.config.ts` to change:
- Primary colors (purple/cyan gradient)
- Background colors
- Button styles
- Typography

### 5. Add/Remove Sections

In `/app/page.tsx`, import and add/remove section components:
```typescript
import { YourNewSection } from "@/components/main/your-new-section";

// Add to the page
<YourNewSection />
```

## 📊 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple (#7042f8) - Professional and modern
- **Secondary**: Cyan (#00d9ff) - Tech-forward accent
- **Background**: Deep space (#030014, #0a0616)
- **Text**: White and gray scales for readability

### Typography
- **Headings**: Bold, gradient text with purple-to-cyan
- **Body**: Inter font for clean readability
- **Accent**: Cedarville Cursive for personal touches

### Animations
- Smooth scroll-triggered animations
- Hover effects on cards and buttons
- Entrance animations for sections
- Interactive 3D star background

## 🔧 Troubleshooting

### Build Issues
If you encounter build errors:
1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Ensure Node.js version is 18+

### Font Loading Issues
If fonts don't load in sandbox environments:
- The Inter font from Google Fonts may be blocked
- Build will still succeed with fallback fonts

## 📈 Performance

- **Lighthouse Score**: 90+ (target)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Mobile-Friendly**: 100%

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👤 Author

**Rudraksh Udiya**
- GitHub: [@rudraksha127](https://github.com/rudraksha127)
- Email: rudraksha127@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Three.js for 3D graphics capabilities
- Tailwind CSS for utility-first styling

---

⭐ If you found this portfolio helpful, please consider giving it a star!

**Built with ❤️ using Next.js and React**
