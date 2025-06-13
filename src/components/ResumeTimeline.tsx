
import { useEffect, useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const ResumeTimeline = () => {
  const timelineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems = entry.target.querySelectorAll('.timeline-item');
            const timelineLine = entry.target.querySelector('.timeline-line');
            
            // Animate timeline line
            if (timelineLine) {
              timelineLine.classList.add('animate-line');
            }
            
            // Animate timeline items
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-slide-in');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Web Manager',
      company: 'Information Technology Council, IIT Bombay',
      period: '2024 – Present',
      location: 'Mumbai, India',
      description: 'Leading digital initiatives and managing an 8-member development team. Responsible for modernizing web infrastructure and implementing cutting-edge solutions.',
      achievements: [
        'Led digital transformation initiatives',
        'Managed 8-member development team',
        'Implemented modern web infrastructure'
      ]
    },
    {
      title: 'Senior Mechatronics Engineer',
      company: 'Sedrica',
      period: '2023 – 2024',
      location: 'Remote',
      description: 'Developed AI-powered robotics solutions with focus on control systems and automation.',
      achievements: [
        'Reduced system response time by 40%',
        'Developed AI-powered control systems',
        'Integrated machine learning algorithms'
      ]
    },
    {
      title: 'Web Secretary',
      company: 'Mechanical Council',
      period: '2022 – 2023',
      location: 'IIT Bombay',
      description: 'Managed web presence and digital communications for the Mechanical Engineering department.',
      achievements: [
        'Redesigned department website',
        'Improved user engagement by 60%',
        'Implemented responsive design'
      ]
    },
    {
      title: 'Web Coordinator',
      company: 'Mood Indigo',
      period: '2021 – 2022',
      location: 'IIT Bombay',
      description: 'Coordinated web development projects and managed online platforms for student activities.',
      achievements: [
        'Developed event management platform',
        'Handled 1,000+ registrations',
        'Implemented real-time updates'
      ]
    }
  ];

  return (
    <section id="resume" ref={timelineRef} className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A timeline of my career growth and key achievements in web development and team leadership.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 dark:from-blue-800 dark:via-blue-600 dark:to-blue-400 origin-top scale-y-0 transition-transform duration-2000"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item relative flex items-center mb-12 opacity-0 transition-all duration-1000 ${
                index % 2 === 0 
                  ? 'md:flex-row translate-x-[-100px]' 
                  : 'md:flex-row-reverse translate-x-[100px]'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
