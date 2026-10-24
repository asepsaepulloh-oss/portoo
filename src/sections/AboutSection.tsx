import type { FC } from 'react';
import { Terminal, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

export const AboutSection: FC = () => {
  return (
    <section id="about" className="py-24 border-b border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-[#303030]">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C5F467] tracking-wider uppercase mb-2">
            <span>04 // PHILOSOPHY</span>
            <span className="text-[#666666]">/</span>
            <span>BACKGROUND & INTENT</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F2F0EB] tracking-tight">
            ABOUT & APPROACH
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#F2F0EB] leading-tight">
              Crafting responsive web tools with editorial clarity, honest code, and zero AI slop.
            </h3>

            <p className="font-sans text-base text-[#999999] leading-relaxed">
              I am a creative developer and frontend engineer focused on building fast, expressive web applications and dependable API integrations. My work revolves around modern TypeScript ecosystems, React architectures, and dark, content-forward visual systems.
            </p>

            <p className="font-sans text-base text-[#999999] leading-relaxed">
              Rather than assembling cookie-cutter UI templates with generic purple gradients and empty glassmorphism, I prioritize crisp typographic hierarchy, responsive performance, deliberate whitespace, and real code functionality.
            </p>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#262626]">
              <div className="p-4 bg-[#181818] border border-[#2c2c2c] space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-[#C5F467]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>PERFORMANCE FIRST</span>
                </div>
                <p className="font-sans text-xs text-[#888888]">
                  Lightweight bundles, near-instant initial render times, and zero unnecessary runtime dependencies.
                </p>
              </div>

              <div className="p-4 bg-[#181818] border border-[#2c2c2c] space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-[#C5F467]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>GENUINE UTILITY</span>
                </div>
                <p className="font-sans text-xs text-[#888888]">
                  Functional projects solving real problems: media streamers, comic readers, QR engines, and scrapers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Spec Sheet & Identity Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#181818] border border-[#303030] relative">
              <div className="font-mono text-xs text-[#C5F467] pb-3 mb-4 border-b border-[#282828] flex items-center justify-between">
                <span>DEV PROFILE MATRIX</span>
                <span>STATUS: VERIFIED</span>
              </div>

              <dl className="space-y-4 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-[#222222]">
                  <dt className="text-[#666666]">IDENTITY</dt>
                  <dd className="text-[#F2F0EB] text-right font-medium">{profile.name}</dd>
                </div>

                <div className="flex justify-between py-1 border-b border-[#222222]">
                  <dt className="text-[#666666]">GITHUB</dt>
                  <dd className="text-right">
                    <a
                      href={profile.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C5F467] hover:underline inline-flex items-center gap-1"
                    >
                      @{profile.handle} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </dd>
                </div>

                <div className="flex justify-between py-1 border-b border-[#222222]">
                  <dt className="text-[#666666]">LOCATION</dt>
                  <dd className="text-[#F2F0EB] text-right">{profile.location} ({profile.timezone})</dd>
                </div>

                <div className="flex justify-between py-1 border-b border-[#222222]">
                  <dt className="text-[#666666]">PRIMARY DOMAINS</dt>
                  <dd className="text-[#F2F0EB] text-right">Frontend & Scrapers</dd>
                </div>

                <div className="flex justify-between py-1">
                  <dt className="text-[#666666]">AVAILABILITY</dt>
                  <dd className="text-[#C5F467] text-right font-semibold">
                    {profile.availability.label}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Quick Quote / Note */}
            <div className="p-5 bg-[#141414] border border-[#262626] font-mono text-xs text-[#999999] leading-relaxed">
              <span className="text-[#C5F467] block mb-1">“DESIGN THROUGH RESTRAINT”</span>
              When interface elements do not serve reader focus or functional interaction, they are stripped away. What remains is content, contrast, and speed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
