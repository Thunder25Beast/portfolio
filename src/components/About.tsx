
import { useEffect, useRef } from 'react';
import { Users, Zap, Award, Code2 } from 'lucide-react';

export const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.animate-on-scroll');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading a 7-member dev team at ITC, IIT Bombay',
      color: 'blue'
    },
    {
      icon: Code2,
      title: 'Digital Innovation',
      description: 'Driving digital initiatives and modern web solutions',
      color: 'indigo'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: '40% response-time reduction through AI-powered systems',
      color: 'purple'
    },
    {
      icon: Award,
      title: 'Event Management',
      description: 'Platform handling 1,000+ registrations seamlessly',
      color: 'cyan'
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences and leading innovative projects 
            that make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Current Role</h3>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Web Manager - Institute Technical Council
              </h4>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                IIT Bombay (March 2025–Present)
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Leading digital transformation initiatives and managing a 7-member development team. 
                Responsible for modernizing web infrastructure and implementing cutting-edge solutions.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Previous Experience</h3>
            <div className="space-y-4">
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Senior Mechatronics Engineer</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400">Sedrica - UMIC</p>
              </div>
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Web Secretary</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400">Mechanical Council</p>
              </div>
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Web Coordinator</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400">Mood Indigo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-200/50 dark:border-slate-700/50">
                  <div className={`p-3 rounded-xl bg-${achievement.color}-100 dark:bg-${achievement.color}-900/30 mb-4 inline-block`}>
                    <Icon className={`h-6 w-6 text-${achievement.color}-600 dark:text-${achievement.color}-400`} />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
