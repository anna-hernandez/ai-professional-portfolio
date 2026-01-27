
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Section, Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onContact: () => void;
}

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onContact }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective aspect-square w-full min-h-[400px]">
      <div 
        className={`flip-card-inner neo-shadow-hover transition-transform duration-700 h-full ${isFlipped ? 'is-flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flip-card-front neo-border bg-white p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-wrap gap-2">
                {project.githubUrl && (
                  <div className="w-8 h-8 neo-border bg-black text-white flex items-center justify-center neo-shadow-sm">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                )}
              </div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Front</span>
            </div>
            
            <h3 className="text-2xl font-black leading-tight mb-2 tracking-tighter text-gray-900">{project.title}</h3>
            
            {/* Role Tags - Moved Below Title */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.isLead && (
                <div className="bg-[#bef264] px-3 py-1 neo-border neo-shadow-sm text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  Lead
                </div>
              )}
              {project.isIC && (
                <div className="bg-[#bef264] px-3 py-1 neo-border neo-shadow-sm text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  IC
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col">
                <h4 className="text-black font-black uppercase text-[10px] tracking-[0.1em] mb-1 border-b border-[#bef264] self-start">The Challenge</h4>
                <p className="text-sm font-medium text-black/80 leading-snug">{project.challenge}</p>
              </div>
              <div className="flex flex-col">
                <h4 className="text-black font-black uppercase text-[10px] tracking-[0.1em] mb-1 border-b border-[#bef264] self-start">The Result</h4>
                <p className="text-sm font-medium text-black/80 leading-snug">{project.result}</p>
              </div>
            </div>

            {/* Skills as Squares - Moved Below Result */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map(tag => (
                <div key={tag} className="bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-tight neo-border border-black">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center mt-4">Tap to see details</div>
        </div>
        <div className="flip-card-back neo-border bg-[#1a1a1a] text-white p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-2">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-10 h-10 neo-border border-white/20 bg-white text-black flex items-center justify-center neo-shadow-sm hover:bg-[#bef264] transition-colors">
                  <GithubIcon className="w-6 h-6" />
                </a>
              )}
            </div>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Back</span>
          </div>
          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
            <h3 className="text-xl font-black text-[#bef264] tracking-tight mb-4">{project.title}</h3>
            <p className="text-base font-medium leading-relaxed text-gray-300">{project.expandedDescription}</p>
          </div>
          <div className="pt-6 border-t border-white/20">
             <div onClick={(e) => { e.stopPropagation(); onContact(); }} className="group/cta cursor-pointer text-center py-3 bg-white/5 hover:bg-[#bef264] hover:text-black transition-all border-2 border-dashed border-white/30 hover:border-solid hover:border-black">
               <p className="text-sm font-black uppercase tracking-tight">Want to know more? <span className="underline decoration-[#bef264] group-hover/cta:decoration-black">Let's Connect</span> →</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface WorkProps {
  onNavigate: (section: Section) => void;
}

const Work: React.FC<WorkProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col">
      <section className="flex-1 flex flex-col justify-center px-4 max-w-4xl mx-auto w-full py-12 md:py-24">
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            Some of my work.
          </h1>
          
          <div className="space-y-8 mb-12">
            <p className="text-lg font-medium text-black/80 max-w-2xl leading-relaxed">
              A sample from 10+ years of Data Science experience across multiple sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project} 
                onContact={() => onNavigate(Section.CONTACT)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
