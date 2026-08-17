import React, { useState } from 'react';
import { DAILY_SCHEDULE } from '../data/hiHavenData';
import { Coffee, Trees, Utensils, Palette, HeartHandshake, Sparkles, Tv, Clock, Filter } from 'lucide-react';

export const DailyLifeTimeline: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('All');

  const periods = ['All', 'Morning', 'Midday', 'Afternoon', 'Evening'];

  const filteredSlots = selectedPeriod === 'All'
    ? DAILY_SCHEDULE
    : DAILY_SCHEDULE.filter((slot) => slot.period === selectedPeriod);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      case 'Trees':
        return <Trees className="w-5 h-5" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Tv':
        return <Tv className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <section className="daily-experience-section-wrapper" id="experience" aria-labelledby="experience-heading">
      <div className="section-editorial-header-block">
        <span className="section-eyebrow-accent-label">The Daily Rhythm</span>
        <h2 className="section-display-heading" id="experience-heading">
          A Purposeful, Engaging Daily Journey
        </h2>
        <p className="section-lead-explanation">
          Structure and spontaneity coexist harmoniously at Hi Haven. Our daily calendar nurtures physical vitality, cognitive engagement, wholesome nutrition, and warm social connection.
        </p>
      </div>

      {/* Period Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {periods.map((p) => (
          <button
            key={p}
            onClick={() => setSelectedPeriod(p)}
            className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all ${
              selectedPeriod === p
                ? 'bg-[#171E1C] text-white border-[#171E1C] shadow-sm'
                : 'bg-white text-[#55645D] border-[#9B8258]/30 hover:border-[#78623A]'
            }`}
          >
            {p === 'All' ? 'Full Day Rhythm' : p}
          </button>
        ))}
      </div>

      {/* Schedule Items List */}
      <div className="daily-schedule-timeline-grid">
        {filteredSlots.map((slot, index) => (
          <div
            key={index}
            className="daily-slot-card-item"
            id={`schedule-slot-${index}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#F4EFE8] text-[#78623A] flex items-center justify-center flex-shrink-0 border border-[#9B8258]/20">
                {getIcon(slot.iconName)}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#78623A] bg-[#F4EFE8] px-2 py-0.5 rounded">
                    {slot.category}
                  </span>
                  <span className="text-xs text-[#8C7E6F] font-medium">
                    {slot.period}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#171E1C]">
                  {slot.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#55645D] mt-1 max-w-2xl leading-relaxed">
                  {slot.description}
                </p>
              </div>
            </div>

            <div className="text-left md:text-right flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#E8E0D5]">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171E1C] bg-[#FAF7F2] px-3 py-1.5 rounded-full border border-[#9B8258]/30">
                <Clock className="w-3.5 h-3.5 text-[#78623A]" />
                {slot.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
