import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useEffect } from "react";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { ResumeTimeline } from "@/components/ResumeTimeline";
import { Contact } from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // SEO and performance optimization
    document.title = "Lakshaditya Singh - AI-focused Frontend Developer & Web Manager";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio of Lakshaditya Singh, Web Manager at ITC IIT Bombay. Leading digital initiatives and full-stack development with modern 3D interactions.');
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 transition-colors duration-500">
        <Navigation />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <ResumeTimeline />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
