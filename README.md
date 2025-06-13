# Lakshaditya- Interactive Portfolio

This is a modern, interactive personal portfolio website built to showcase projects, skills, and experience. It features a dynamic 3D starry background, responsive design, and engaging animations.

## Live Demo

[Link to your deployed portfolio (e.g., on Netlify)]

## Technologies Used

*   **Frontend:**
    *   React
    *   Vite
    *   TypeScript
    *   Tailwind CSS
    *   React Three Fiber (for Three.js integration)
    *   Three.js
    *   Lucide React (for icons)
    *   Sonner (for toast notifications)
    *   Shadcn/ui (components like Card, Button, Badge, etc.)
*   **Form Handling:**
    *   Formspree (for the contact form)
*   **Linting/Formatting:**
    *   ESLint
    *   Prettier (implied via Tailwind CSS setup)
*   **Package Manager:**
    *   Bun (as indicated by `bun.lockb`)

## Key Features

*   **Interactive 3D Background:** A dynamic starry background created with Three.js and React Three Fiber, which changes color based on the selected theme (light/dark).
*   **Responsive Design:** Optimized for various screen sizes, ensuring a seamless experience on desktop, tablet, and mobile devices.
*   **Single-Page Navigation:** Smooth scrolling to different sections of the portfolio (Hero, About, Projects, Resume, Contact).
*   **Project Showcase:** Detailed project cards with descriptions, tags, live demo links, and GitHub repository links (where applicable).
*   **Theming:** Light and dark mode support, with theme-aware text colors and background elements.
*   **Contact Form:** Functional contact form integrated with Formspree to receive messages directly via email.
*   **Animations:** Subtle animations on page load and scroll to enhance user experience.
*   **Custom Fonts:** Integration of Google Fonts (e.g., General Sans) for a modern look.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd laksh-digital-canvas-main
    ```

2.  **Install dependencies using Bun:**
    ```bash
    bun install
    ```

3.  **Environment Variables (if any):**
    *   If you have any environment variables (e.g., for Formspree if you were using a more complex setup, or other API keys), create a `.env` file in the root directory and add them there. For this project, the Formspree endpoint is hardcoded, but for future projects, consider environment variables for such configurations.
    *   Example `.env` structure:
        ```
        VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint_url
        ```
        And then use `import.meta.env.VITE_FORMSPREE_ENDPOINT` in your code.

## Available Scripts

In the project directory, you can run the following commands:

*   **`bun dev` or `bun run dev`**
    Runs the app in development mode.
    Open [http://localhost:5173](http://localhost:5173) (or the port Vite assigns) to view it in the browser.
    The page will reload if you make edits.

*   **`bun run build`**
    Builds the app for production to the `dist` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

*   **`bun run lint`**
    Lints the project files using ESLint to check for code quality and style issues.

*   **`bun run preview`**
    Serves the production build locally to preview it before deployment.

## Deployment

This project can be easily deployed to static hosting providers like:

*   **Netlify:** Connect your Git repository, and Netlify will automatically build and deploy your site. Configure the build command as `bun run build` and the publish directory as `dist`.
*   **Vercel:** Similar to Netlify, Vercel offers seamless deployment for Vite projects.
*   **GitHub Pages:** Can be configured to deploy the `dist` folder.

## Contact

*   **Portfolio:** [Your Portfolio Link]
*   **Email:** singhlakshaditya@gmail.com
*   **LinkedIn:** https://www.linkedin.com/in/lakshaditya-singh/
*   **Instagram:** https://instagram.com/singh_lakshaditya

---

*This README was partially generated with assistance from an AI coding agent.*
