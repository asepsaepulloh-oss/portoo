import type { FC } from 'react';
import { Terminal } from 'lucide-react';
import { skillCategories } from '../data/skills';

export const SkillsSection: FC = () => {
  return (
    <section id="skills" className="py-24 border-b border-[#303030] bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#303030]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C5F467] tracking-wider uppercase mb-2">
              <span>05 // CAPABILITIES</span>
              <span className="text-[#666666]">/</span>
              <span>TECHNICAL STACK</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F2F0EB] tracking-tight">
              SKILLS & TECHNOLOGIES
            </h2>
          </div>
          <p className="font-sans text-sm text-[#999999] max-w-md">
            Technologies deployed across production repositories. Evaluated through real code implementations, not superficial percentage meters.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#181818] border border-[#2c2c2c] p-6 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#999999] pb-4 border-b border-[#262626]">
                  <span className="text-[#C5F467] font-semibold">{category.code}</span>
                  <span className="text-[#666666]">{category.skills.length} TOOLS</span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#F2F0EB] mt-4 mb-6 tracking-tight">
                  {category.title}
                </h3>

                <ul className="space-y-3 font-mono text-xs">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between py-2 border-b border-[#222222] text-[#F2F0EB]"
                    >
                      <span className="font-sans font-medium text-sm text-[#E0DDD5]">
                        {skill.name}
                      </span>
                      {skill.badge && (
                        <span className="text-[10px] uppercase px-2 py-0.5 bg-[#C5F467]/10 text-[#C5F467] border border-[#C5F467]/30">
                          {skill.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#242424] font-mono text-[11px] text-[#666666] flex items-center justify-between">
                <span>VERIFIED VIA GITHUB</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5F467]" />
              </div>
            </div>
          ))}
        </div>

        {/* Note on Skill Evidence */}
        <div className="mt-8 p-4 bg-[#181818] border border-[#2a2a2a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#888888]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#C5F467]" />
            <span>Anti-Slop Transparency: All listed skills are actively backed by commits in public repositories.</span>
          </div>
          <span className="text-[#C5F467] shrink-0">NO ARBITRARY PERCENTAGES</span>
        </div>
      </div>
    </section>
  );
};
