import { useState } from 'react';
import type { FC } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon } from '../components/icons/GithubIcon';
import { profile } from '../data/profile';

export const ContactSection: FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-[#303030] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-[#303030]">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C5F467] tracking-wider uppercase mb-2">
            <span>07 // INITIATION</span>
            <span className="text-[#666666]">/</span>
            <span>DIRECT CHANNELS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-6xl text-[#F2F0EB] tracking-tight">
            LET’S BUILD TOGETHER
          </h2>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          {/* Left Column: Collaboration statement */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F2F0EB]">
              Available for ambitious frontend projects, editorial web builds & technical collaborations.
            </h3>

            <p className="font-sans text-base text-[#999999] leading-relaxed">
              Whether you need a high-performance web application, a tailored creative portfolio, or clean TypeScript API scrapers, I am open for discussion. No bureaucratic delays—direct engineering communication.
            </p>

            {/* Email Action Box */}
            <div className="p-6 bg-[#181818] border border-[#303030] space-y-4">
              <span className="font-mono text-xs text-[#666666] uppercase block">
                PRIMARY CONTACT INBOX
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="font-mono text-base sm:text-lg text-[#F2F0EB] hover:text-[#C5F467] transition-colors break-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#C5F467] shrink-0" />
                  <span>{profile.contact.email}</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs transition-all ${
                      copied
                        ? 'bg-[#C5F467] text-[#101010] font-semibold'
                        : 'bg-[#141414] hover:bg-[#202020] text-[#F2F0EB] border border-[#303030]'
                    }`}
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#101010]" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C5F467] text-[#101010] font-mono text-xs font-semibold hover:bg-[#D4FA82] transition-colors"
                  >
                    <span>COMPOSE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Network Links */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <div className="p-6 bg-[#181818] border border-[#303030] space-y-4">
              <span className="text-[#C5F467] uppercase block pb-3 border-b border-[#282828]">
                NETWORK & SOCIAL PROFILES
              </span>

              <div className="space-y-3">
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#141414] border border-[#262626] hover:border-[#C5F467] text-[#F2F0EB] hover:text-[#C5F467] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#999999] group-hover:text-[#C5F467]" />
                    <span>GITHUB / @{profile.handle}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-[#C5F467]" />
                </a>

                {profile.contact.telegram && (
                  <a
                    href={profile.contact.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-[#141414] border border-[#262626] hover:border-[#C5F467] text-[#F2F0EB] hover:text-[#C5F467] transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Send className="w-4 h-4 text-[#999999] group-hover:text-[#C5F467]" />
                      <span>TELEGRAM / DIRECT CHAT</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-[#C5F467]" />
                  </a>
                )}
              </div>

              <div className="pt-3 border-t border-[#262626] text-[11px] text-[#666666]">
                Typical response window: within 24 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
