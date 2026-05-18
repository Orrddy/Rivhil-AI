<div align="center">
  <img src="https://via.placeholder.com/150x150/000000/C8FF00?text=R" alt="Rivhil AI Logo" width="120" height="120" style="border-radius: 50%; border: 2px solid #C8FF00;" />
  
  # Rivhil AI ✦

  **The Premier AI-Powered Branding Studio for Startups**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)
  [![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Orrddy/Rivhil-AI)
</div>

<br />

## 📖 Project Overview

**Rivhil AI** is a state-of-the-art AI-driven design and branding platform tailored specifically for startup founders, indie hackers, and small businesses. We believe that world-class design shouldn't require a $20k agency budget or months of iterative reviews. 

Rivhil AI accelerates the creative process, allowing users to instantly generate comprehensive, high-end brand identities, sleek UI assets, and dedicated workspace environments in mere minutes. 

## 🚀 Key Features

- **Automated Brand Generation:** Leverage AI to generate full brand identities including color palettes, typography pairs, and custom logos based on simple text prompts.
- **Dedicated Workspaces:** A secure, cloud-based dashboard (`/workspace`) where teams can collaborate, store assets, and manage multiple startup brands simultaneously.
- **Premium Aesthetics:** Built with a "dark-mode first" philosophy, utilizing subtle glassmorphism, dynamic gradients, and precision micro-animations to deliver a top-tier user experience.
- **Frictionless Onboarding:** Intuitive sign-up and onboarding flows (`/onboarding`) designed to get founders from idea to asset generation in less than 60 seconds.
- **Lightning Fast Performance:** Powered by Next.js 15 Server Components and optimized for Edge deployment, ensuring near-instantaneous page loads globally.

## 🎯 Target Audience

- **Startup Founders** needing a rapid, professional go-to-market brand.
- **Indie Hackers** launching multiple micro-SaaS projects.
- **Design Agencies** looking for AI-powered starting points to accelerate client work.

## 💻 Tech Stack

Rivhil AI is built on a modern, robust, and scalable web architecture:

* **Core Framework:** [Next.js (App Router)](https://nextjs.org) - For SSR, routing, and backend API capabilities.
* **UI Library:** [React 19](https://react.dev/) - For declarative, component-based user interfaces.
* **Styling System:** [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework for rapid, responsive design.
* **Iconography:** [Lucide React](https://lucide.dev/) - Beautiful, consistent, open-source icons.
* **Language:** [TypeScript](https://www.typescriptlang.org/) - For strict type safety and superior developer experience.

## 📂 Project Structure

```text
rivhil-ai/
├── src/
│   ├── app/                  # Next.js App Router (Pages, Layouts, API Routes)
│   │   ├── generating/       # AI brand generation flow
│   │   ├── onboarding/       # User onboarding experience
│   │   ├── signup/           # Authentication and registration
│   │   ├── workspace/        # Main user dashboard
│   │   └── page.tsx          # Landing & Login Page
│   └── components/           # Reusable React UI components (Buttons, Inputs, Logos)
├── public/                   # Static assets (Favicons, images)
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS theme and design tokens
└── package.json              # Project dependencies and scripts
```

## 🛠️ Getting Started

Follow these steps to set up the project locally for development.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Orrddy/Rivhil-AI.git
   cd Rivhil-AI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-update as you edit files in the `src/` directory.

## ☁️ Deployment

Rivhil AI is fully optimized to be deployed on **Vercel**, requiring zero configuration for the Next.js backend and frontend.

1. Push your latest code to your GitHub repository.
2. Log in to [Vercel](https://vercel.com/new).
3. Click **Add New Project** and import the `Orrddy/Rivhil-AI` repository.
4. Vercel will automatically detect the Next.js framework and configure the build settings.
5. Click **Deploy**. Your app will be live globally in minutes.

For more detailed deployment strategies, refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

We welcome contributions from the community! If you'd like to improve Rivhil AI:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## 📄 License

This project is currently proprietary and closed-source unless explicitly stated otherwise. All rights reserved.
