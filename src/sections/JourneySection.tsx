import type { FC } from 'react';
import { Calendar } from 'lucide-react';
import { journeyMilestones } from '../data/experience';

export const JourneySection: FC = () => {
  return (
    <section id="journey" className="py-24 border-b border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#303030]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C5F467] tracking-wider uppercase mb-2">
              <span>06 // TRAJECTORY</span>
              <span className="text-[#666666]">/</span>
              <span>ENGINEERING TIMELINE</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F2F0EB] tracking-tight">
              DEVELOPMENT JOURNEY
            </h2>
          </div>
          <p className="font-sans text-sm text-[#999999] max-w-md">
            Chronological milestones of engineering projects, open-source architectures, and continuous technical explorations.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="pt-12 relative">
          <div className="space-y-8">
            {journeyMilestones.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 bg-[#181818] border border-[#2c2c2c] hover:border-[#404040] transition-colors"
              >
                {/* Left: Period & Code */}
                <div className="lg:col-span-3 font-mono">
                  <div className="text-xs text-[#C5F467] font-semibold mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="text-xs text-[#666666] uppercase">{item.focus}</div>
                </div>

                {/* Middle: Details */}
                <div className="lg:col-span-6 space-y-3">
                  <h3 className="font-display font-bold text-xl text-[#F2F0EB]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#999999] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Right: Tags */}
                <div className="lg:col-span-3 flex flex-wrap gap-1.5 items-start justify-start lg:justify-end font-mono text-[11px]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#121212] border border-[#262626] text-[#888888]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
