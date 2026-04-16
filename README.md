# The Disappearing Author

**Live Application:** [the-disappearing-author.pages.dev](https://the-disappearing-author.pages.dev)

## Overview
The Disappearing Author is a modern, web-based practitioner's guide to stripping AI linguistic fingerprints from generated text. It serves as a reference tool for "friction engineering," providing users with actionable strategies, lexical markers, and a master system prompt to force Large Language Models (LLMs) into outputting more human, statistically unpredictable prose.

This project was built to deliver a premium, minimalist SaaS aesthetic while remaining highly performant and fully accessible.

## Tech Stack
* **Framework:** Next.js (App Router)
* **Language:** TypeScript / React
* **Styling:** Tailwind CSS 
* **UI Components:** shadcn/ui (Radix Primitives)
* **Icons:** Lucide React
* **Deployment:** Cloudflare Pages
* **Version Control:** Git & GitHub

## Engineering & Architecture
* **Component-Driven Design:** Transitioned from a legacy monolithic HTML/CSS structure to a modular, component-based React architecture using `shadcn/ui` for maintainability and scalability.
* **Static Site Generation (SSG):** Configured Next.js for static HTML export (`output: 'export'`), stripping away unnecessary server-side rendering overhead for a purely static, lightning-fast application.
* **Continuous Deployment (CI/CD):** Integrated the GitHub repository directly with Cloudflare Pages. Every push to the `main` branch automatically triggers a new edge build and deployment.
* **Modern UI/UX:** Engineered a dark-mode-first interface utilizing custom linear gradients, soft drop shadows, and high-contrast typography to achieve an "expensive", minimalist aesthetic. Implemented interactive state management for a seamless copy-to-clipboard functionality.

## Local Development
To run this project locally:

1. Clone the repository:
   ```bash
   git clone [https://github.com/SMCallan/The-Disappearing-Author.git](https://github.com/SMCallan/The-Disappearing-Author.git)
