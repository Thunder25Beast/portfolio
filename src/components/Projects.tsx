import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Users, BookOpen, Plane } from 'lucide-react'; // Added Plane

export const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.project-card');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'AI-Powered Skin Analysis for Salons (EagleVerse AI)',
      description: 'An innovative platform leveraging AI to provide personalized skin analysis for salon clients. Features include detailed skin health reports, product recommendations, and progress tracking, built with a modern tech stack for a seamless user experience.',
      icon: Zap,
      tags: ['React', 'AI/ML', 'Firebase', 'Tailwind CSS', 'Vite'],
      metrics: 'AI-Driven Insights',
      color: 'pink',
      gradient: 'from-pink-500 to-rose-500',
      liveDemoUrl: 'https://ai-salon2.netlify.app/',
      // githubUrl: null, // No GitHub link
    },
    {
      title: 'Lakshay Multifacilities Services Pvt Ltd',
      description: 'A comprehensive platform for Lakshay Multifacilities Services, showcasing facility management, security, and manpower solutions. Features SEO optimization, custom loader, and smooth animations for an engaging user experience.',
      icon: Users,
      tags: ['React', 'Node.js', 'MongoDB', 'SEO', 'Animations'],
      metrics: 'Business Solutions',
      color: 'sky', // Using 'sky' as a Tailwind color
      gradient: 'from-sky-500 to-blue-500',
      liveDemoUrl: 'https://lakshaymultifacilities.onrender.com/',
      // githubUrl: null, // No GitHub link
    },
    {
      title: 'MEA Council Website Enhancement',
      description: 'Managed and enhanced the Mechanical Engineering Association (MEA) website for IIT Bombay. Key contributions include implementing an interactive flipbook for publications and redesigning the team page UI for better navigation and visual appeal.',
      icon: BookOpen,
      tags: ['React', 'JavaScript', 'UI/UX Design', 'Flipbook Integration', 'CSS'],
      metrics: 'Improved Digital Experience',
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-500',
      liveDemoUrl: 'https://meacouncil.onrender.com/',
      // githubUrl: null, // No GitHub link for this one either
    },
    {
      title: 'Interactive 3D Portfolio Launch Page',
      description: 'A captivating portfolio launch page built with Three.js, featuring an animated plane and immersive space animations to create a unique and engaging user introduction.',
      icon: Plane, // Added Plane icon
      tags: ['Three.js', 'React', 'JavaScript', 'WebGL', 'GSAP'],
      metrics: 'Dynamic 3D Experience',
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-500',
      liveDemoUrl: 'https://myportfolio-ls.netlify.app/',
      githubUrl: 'https://github.com/Thunder25Beast/threejs-portfolio-launchin-page',
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
            Key Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions that demonstrate my expertise in modern web development and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index}
                className="project-card opacity-0 translate-y-10 transition-all duration-1000 group"
              >
                <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                  <CardHeader className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="relative flex items-start justify-between">
                      {/* Ensure color classes like bg-pink-100, text-pink-600, bg-sky-100, text-sky-600 are generated by Tailwind */}
                      <div className={`p-3 rounded-xl bg-${project.color}-100 dark:bg-${project.color}-900/30 mb-4`}>
                        <Icon className={`h-8 w-8 text-${project.color}-600 dark:text-${project.color}-400`} />
                      </div>
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {project.metrics}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className="border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.liveDemoUrl && (
                        <Button 
                          asChild
                          size="sm" 
                          className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button 
                          asChild
                          size="sm" 
                          variant="outline"
                          className="border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
