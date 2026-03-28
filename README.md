# Omid's Personal Portfolio 🚀

Welcome to the source code for my personal portfolio website! This project is a modern, fully responsive web application designed to showcase my skills, professional experience, and projects.

## 🌟 Features
- **Modern Glassmorphism Design:** A sleek, premium UI built with TailwindCSS, featuring dynamic hover effects, layered drop shadows, and glowing interactions.
- **Multilingual Support:** Fully internationalized (i18n) with English and German language options, natively managed via `.yml` content files.
- **Responsive Layout:** Carefully crafted to perform beautifully on mobile devices, tablets, and massive desktop widths.
- **Dynamic Content:** Content strictly separated from presentation. Easily update skills, projects, and about-me sections by modifying simple YAML configurations!

## 🛠️ Technology Stack
- **React** - UI Framework
- **Tailwind CSS v4** - Styling Engine
- **i18next** - Internationalization 
- **GitHub Pages** - Hosting & Deployment

## 🚀 Getting Started

To run this project locally, simply follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/omid-taghipour/my-portfolio.git
   ```

2. **Install dependencies:**
   ```bash
   cd my-portfolio
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   *Note: On startup/build, `scripts/compileYaml.js` automatically parses all content files from `src/content/`.*

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the running app!

## 📂 Project Structure
- `/src/components` - Contains all React UI components (`about-me`, `contact`, `skills`, etc.)
- `/src/content` - YAML content files separated by language (`/en/`, `/de/`)
- `/scripts` - Automation scripts for transforming YAML to consumable UI data.

## 📬 Contact
Feel free to reach out via my portfolio's contact form, or connect with me on [LinkedIn](https://cy.linkedin.com/in/omid-taghipour-77053a1b0)!
