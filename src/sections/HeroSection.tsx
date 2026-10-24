import type { FC } from 'react';
import { ArrowDown, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/icons/GithubIcon';
import { profile } from '../data/profile';

export const HeroSection: FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 border-b border-[#303030] overflow-hidden"
    >
      {/* Subtle editorial line grid in background */}
      <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

      {/* Top Editorial Index Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#303030]/60 font-mono text-xs text-[#999999]">
          <div className="flex items-center gap-3">
            <span className="text-[#C5F467] font-semibold">01 // IDENTITY</span>
            <span className="hidden sm:inline text-[#666666]">|</span>
            <span className="hidden sm:inline">GITHUB: @{profile.handle}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#F2F0EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5F467]" />
              {profile.availability.label}
            </span>
            <span className="text-[#666666] hidden md:inline">{profile.location}</span>
          </div>
        </div>
      </div>

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Massive Editorial Typography */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-[#303030] text-xs font-mono text-[#C5F467]">
              <Terminal className="w-3.5 h-3.5" />
              <span>EDITORIAL FRONTEND & CREATIVE ENGINEERING</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#F2F0EB]">
              ASEP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F0EB] via-[#E0DDD5] to-[#999999]">
                SAEPULLOH
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#999999] max-w-2xl font-sans leading-relaxed pt-2">
              {profile.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollTo('work')}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#C5F467] text-[#101010] font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 hover:bg-[#D4FA82] hover:shadow-[0_0_20px_rgba(197,244,103,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5F467]"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#181818] hover:bg-[#202020] text-[#F2F0EB] border border-[#303030] hover:border-[#666666] font-mono text-xs tracking-wider uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5F467]"
              >
                <span>GET IN TOUCH</span>
              </button>

              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-[#999999] hover:text-[#C5F467] font-mono text-xs tracking-wider uppercase transition-colors"
                aria-label="View GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Data Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 bg-[#181818] border border-[#303030] relative">
              <div className="absolute top-0 right-0 transform translate-x-[1px] -translate-y-[1px] w-3 h-3 border-t-2 border-r-2 border-[#C5F467]" />
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#282828] font-mono text-xs text-[#999999]">
                <span className="flex items-center gap-1.5 text-[#C5F467]">
                  <Sparkles className="w-3.5 h-3.5" /> SPECIFICATION
                </span>
                <span>ID: AS-2026</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-[#666666] block mb-1">SPECIALIZATION</span>
                  <span className="text-[#F2F0EB] font-sans font-medium text-sm">
                    {profile.title}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#222222]">
                  <div>
                    <span className="text-[#666666] block mb-0.5">CORE STACK</span>
                    <span className="text-[#F2F0EB]">React, TS, Vite</span>
                  </div>
                  <div>
                    <span className="text-[#666666] block mb-0.5">STYLING</span>
                    <span className="text-[#F2F0EB]">Tailwind CSS</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#222222]">
                  <span className="text-[#666666] block mb-1">CORE METHODOLOGY</span>
                  <p className="text-[#999999] font-sans text-xs leading-normal">
                    Anti-AI Slop. Pure hierarchy, deliberate whitespace, and real open-source foundations.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="grid grid-cols-3 gap-2">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 bg-[#141414] border border-[#262626] font-mono"
                >
                  <div className="text-sm font-bold text-[#C5F467]">{stat.value}</div>
                  <div className="text-[10px] text-[#666666] truncate uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker / Coordinates Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 border-t border-[#303030]/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#666666]">
          <div className="flex items-center gap-4">
            <span className="text-[#999999]">COORDINATES:</span>
            <span>6.315° S, 107.29° E [ID]</span>
          </div>

          <button
            onClick={() => scrollTo('work')}
            className="flex items-center gap-2 text-[#999999] hover:text-[#C5F467] transition-colors focus:outline-none"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
