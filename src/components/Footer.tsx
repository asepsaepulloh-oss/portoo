import type { FC } from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { profile } from '../data/profile';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0e0e0e] text-[#999999] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#242424]">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-sm text-[#F2F0EB]">
              {profile.name.toUpperCase()}
            </span>
            <span className="text-[#555555]">/</span>
            <span className="text-[11px] text-[#777777]">
              CREATIVE DEVELOPER PORTFOLIO
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <a href="#work" className="hover:text-[#F2F0EB] transition-colors">
              WORK
            </a>
            <a href="#about" className="hover:text-[#F2F0EB] transition-colors">
              ABOUT
            </a>
            <a href="#skills" className="hover:text-[#F2F0EB] transition-colors">
              SKILLS
            </a>
            <a href="#journey" className="hover:text-[#F2F0EB] transition-colors">
              JOURNEY
            </a>
            <a href="#github-explorer" className="hover:text-[#F2F0EB] transition-colors">
              REPOSITORIES
            </a>
            <a href="#contact" className="hover:text-[#F2F0EB] transition-colors">
              CONTACT
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#181818] hover:bg-[#202020] text-[#F2F0EB] border border-[#303030] hover:border-[#666666] transition-colors"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666666]">
          <div>
            © {CURRENT_YEAR} {profile.name}. All verified open-source rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#444444]">Vercel Ready</span>
            <span>•</span>
            <span className="text-[#444444]">Anti-AI Slop</span>
            <span>•</span>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5F467] flex items-center gap-1"
            >
              <GithubIcon className="w-3 h-3" />
              <span>asepsaepulloh-oss</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
