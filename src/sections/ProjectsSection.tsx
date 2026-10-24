import type { FC } from 'react';
import { ExternalLink, CheckCircle2, GitFork } from 'lucide-react';
import { GithubIcon } from '../components/icons/GithubIcon';
import type { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  const leadProject = projects[0]; // iwatch
  const secondaryProjects = projects.slice(1, 3); // louicomic, animes
  const remainingProjects = projects.slice(3); // link, kaigobiz, salo-jus

  return (
    <section id="work" className="py-24 border-b border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#303030]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C5F467] tracking-wider uppercase mb-2">
              <span>02 // ARCHIVE</span>
              <span className="text-[#666666]">/</span>
              <span>CURATED WORK</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F2F0EB] tracking-tight">
              SELECTED PROJECTS
            </h2>
          </div>
          <p className="font-sans text-sm text-[#999999] max-w-md">
            Production-grade web applications, interactive readers, and autonomous API services directly audited from GitHub.
          </p>
        </div>

        {/* Lead Featured Project (iWatch) */}
        {leadProject && (
          <div className="my-16 bg-[#181818] border border-[#303030] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Visual Representation & Mockup Canvas */}
              <div className="lg:col-span-7 bg-[#0d0e12] p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-[#303030] flex flex-col justify-between relative overflow-hidden group">
                {/* Subtle visual grid */}
                <div className="absolute inset-0 editorial-grid opacity-20 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[#999999] pb-6 border-b border-[#202020]">
                  <span className="text-[#E50914] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                    FEATURED 01
                  </span>
                  <span>{leadProject.category.toUpperCase()}</span>
                </div>

                {/* Stylized Visual Mockup Frame */}
                <div className="relative z-10 my-8 py-8 px-6 bg-[#090a0f] border border-[#262832] rounded-sm shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1c1d24] font-mono text-[11px] text-[#666666]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#404040]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#202020]" />
                      <span className="ml-2 text-[#999999]">iwatch-livid.vercel.app</span>
                    </div>
                    <span className="text-[#C5F467]">ONLINE</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F2F0EB] tracking-tight">
                        iWatch Streaming
                      </h4>
                      <span className="font-mono text-xs text-[#E50914] font-bold">CRIMSON UI</span>
                    </div>
                    <p className="text-xs text-[#888888] font-sans">
                      Dark editorial interface tailored for anime streaming without bloated glassmorphism.
                    </p>

                    {/* Visual Mock Catalog Strips */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="h-20 bg-[#161720] border border-[#2a2c38] flex flex-col justify-end p-2">
                        <span className="text-[10px] font-mono text-[#999999]">Catalog View</span>
                      </div>
                      <div className="h-20 bg-[#1e1f2b] border border-[#E50914]/40 flex flex-col justify-end p-2 relative">
                        <span className="absolute top-1 right-1 text-[9px] font-mono text-[#E50914]">HOT</span>
                        <span className="text-[10px] font-mono text-[#F2F0EB]">Episode Player</span>
                      </div>
                      <div className="h-20 bg-[#161720] border border-[#2a2c38] flex flex-col justify-end p-2">
                        <span className="text-[10px] font-mono text-[#999999]">Schedule Grid</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 font-mono text-[11px] text-[#999999] pt-4 border-t border-[#202020]">
                  {leadProject.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#141419] border border-[#262832]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Project Spec & Highlights */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 font-mono text-xs text-[#999999] mb-3">
                    <span className="text-[#C5F467]">ORIGINAL IMPLEMENTATION</span>
                    <span>•</span>
                    <span>{leadProject.year}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F2F0EB] tracking-tight mb-4">
                    {leadProject.title}
                  </h3>

                  <p className="font-sans text-sm text-[#999999] leading-relaxed mb-6">
                    {leadProject.description}
                  </p>

                  {/* Highlights list */}
                  {leadProject.highlights && (
                    <div className="space-y-2.5 pt-4 border-t border-[#282828]">
                      <span className="font-mono text-xs text-[#666666] uppercase block">
                        Architecture & Design Features
                      </span>
                      {leadProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#F2F0EB] font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5F467] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[#282828] flex flex-wrap items-center gap-4">
                  {leadProject.liveUrl && (
                    <a
                      href={leadProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5F467] text-[#101010] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#D4FA82] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5F467]"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={leadProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#141414] hover:bg-[#202020] text-[#F2F0EB] border border-[#303030] font-mono text-xs uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5F467]"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>SOURCE REPO</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Two-Column Projects (LouiComic & Animes) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
          {secondaryProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-[#181818] border border-[#303030] p-8 flex flex-col justify-between space-y-6 hover:border-[#404040] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#999999] pb-4 border-b border-[#282828]">
                  <span className="text-[#C5F467]">0{idx + 2} // {project.category.toUpperCase()}</span>
                  <div className="flex items-center gap-2">
                    {project.isFork ? (
                      <span className="flex items-center gap-1 text-[11px] text-[#EAB308]">
                        <GitFork className="w-3 h-3" /> FORK
                      </span>
                    ) : (
                      <span className="text-[11px] text-[#10B981]">ORIGINAL</span>
                    )}
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#F2F0EB] mt-4 mb-2 tracking-tight group-hover:text-[#C5F467] transition-colors">
                  {project.title}
                </h3>

                <p className="font-sans text-sm text-[#999999] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#888888] font-sans flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5F467] mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#999999] pb-6 border-b border-[#282828]">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#141414] border border-[#282828]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom Links */}
                <div className="pt-4 flex items-center justify-between">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F2F0EB] hover:text-[#C5F467] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>VIEW REPOSITORY</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C5F467] hover:underline"
                    >
                      <span>LAUNCH APP</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Asymmetric Triad / Detailed Table (Link, GoPay Gateway, Salo Jus) */}
        <div className="my-12">
          <div className="font-mono text-xs text-[#999999] uppercase tracking-wider pb-4 mb-4 border-b border-[#303030]">
            ADDITIONAL CURATED REPOSITORIES
          </div>

          <div className="divide-y divide-[#262626] border-y border-[#262626]">
            {remainingProjects.map((project, idx) => (
              <div
                key={project.id}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#141414] px-4 transition-colors"
              >
                <div className="md:col-span-1 font-mono text-xs text-[#666666]">
                  0{idx + 4}
                </div>

                <div className="md:col-span-4">
                  <h4 className="font-display font-bold text-lg text-[#F2F0EB] hover:text-[#C5F467] transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-[11px] text-[#888888]">
                      {project.category}
                    </span>
                    {project.isFork && (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/30">
                        FORK / TOOL
                      </span>
                    )}
                  </div>
                </div>

                <div className="md:col-span-4">
                  <p className="font-sans text-xs text-[#999999] line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="md:col-span-3 flex items-center justify-end gap-4 font-mono text-xs">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999999] hover:text-[#F2F0EB] flex items-center gap-1"
                  >
                    <GithubIcon className="w-3.5 h-3.5" /> REPO
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C5F467] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> LIVE
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
