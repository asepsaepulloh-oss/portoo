import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { profile } from '../data/profile';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', number: '01' },
    { name: 'About', href: '#about', number: '02' },
    { name: 'Skills', href: '#skills', number: '03' },
    { name: 'Journey', href: '#journey', number: '04' },
    { name: 'GitHub', href: '#github-explorer', number: '05' },
    { name: 'Contact', href: '#contact', number: '06' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#101010]/90 backdrop-blur-md border-b border-[#303030]/80 py-3.5 shadow-2xl'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Personal Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5F467] rounded-sm py-1"
          aria-label="Home - Asep Saepulloh"
        >
          <span className="font-display font-extrabold text-base tracking-tight text-[#F2F0EB] group-hover:text-[#C5F467] transition-colors">
            {profile.name.toUpperCase()}
          </span>
          <span className="font-mono text-xs text-[#999999] tracking-widest hidden sm:inline-block border-l border-[#303030] pl-3">
            DEV / 2026
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5F467] ${
                  isActive
                    ? 'text-[#C5F467] font-semibold'
                    : 'text-[#999999] hover:text-[#F2F0EB]'
                }`}
              >
                <span className="text-[10px] text-[#666666] mr-1">{link.number}.</span>
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-[#C5F467]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Availability Status & GitHub Link */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#181818] border border-[#303030] text-xs font-mono text-[#F2F0EB]">
            <span className="w-2 h-2 rounded-full bg-[#C5F467] animate-pulse" />
            <span className="text-[11px] text-[#999999]">WIB (UTC+7)</span>
          </div>

          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#F2F0EB] bg-[#181818] hover:bg-[#C5F467] hover:text-[#101010] border border-[#303030] px-3 py-1.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5F467]"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F2F0EB] hover:text-[#C5F467] border border-[#303030] bg-[#181818] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5F467]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101010] border-b border-[#303030] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-3 font-mono text-sm" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between py-2 border-b border-[#222222] text-[#F2F0EB] hover:text-[#C5F467]"
              >
                <span className="tracking-wide">
                  <span className="text-[#666666] mr-2">{link.number}</span>
                  {link.name}
                </span>
                <span className="text-xs text-[#666666]">VIEW →</span>
              </a>
            ))}

            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-[#999999] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5F467] inline-block" />
                {profile.availability.label}
              </span>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C5F467] underline flex items-center gap-1"
              >
                GitHub Profile <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
