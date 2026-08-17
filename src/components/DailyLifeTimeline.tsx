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
        return <Coffee className="w-4 h-4 text-[#233B31]" />;
      case 'Trees':
        return <Trees className="w-4 h-4 text-[#233B31]" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4 text-[#233B31]" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-[#233B31]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4 text-[#233B31]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#233B31]" />;
      case 'Tv':
        return <Tv className="w-4 h-4 text-[#233B31]" />;
      default:
        return <Clock className="w-4 h-4 text-[#233B31]" />;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E5DFC5]" id="experience" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold">
              DAILY LIFE & ROUTINE
            </span>
            <div className="h-[1px] w-8 bg-[#233B31]"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C2622] leading-[1.1] mb-4" id="experience-heading">
            Structure, comfort, and peaceful daily rhythm.
          </h2>
          <p className="text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
            A predictable, supportive routine is essential for recovery, mental wellness, and peace of mind. Residents enjoy balanced home-cooked meals, quiet personal time, and optional group activities.
          </p>
        </div>

        {/* Period Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPeriod(p)}
              className={`px-4 py-2 text-[11px] uppercase tracking-wider font-medium transition-colors ${
                selectedPeriod === p
                  ? 'bg-[#233B31] text-[#FAF8F5]'
                  : 'bg-white text-[#5F6B65] border border-[#E5DFC5] hover:border-[#233B31] hover:text-[#1C2622]'
              }`}
            >
              {p === 'All' ? 'Full Day Schedule' : p}
            </button>
          ))}
        </div>

        {/* Schedule Items List */}
        <div className="space-y-4">
          {filteredSlots.map((slot, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 border border-[#E5DFC5] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:border-[#233B31]/50"
              id={`schedule-slot-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FAF8F5] flex items-center justify-center flex-shrink-0 border border-[#E5DFC5] rounded-xs">
                  {getIcon(slot.iconName)}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#233B31]">
                      {slot.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8C9993]">
                      • {slot.period}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-normal text-[#1C2622]">
                    {slot.title}
                  </h3>

                  <p className="text-xs text-[#5F6B65] mt-1 max-w-2xl leading-relaxed font-light">
                    {slot.description}
                  </p>
                </div>
              </div>

              <div className="text-left md:text-right flex-shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-[#E5DFC5]">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#1C2622] bg-[#FAF8F5] px-3 py-1.5 border border-[#E5DFC5]">
                  <Clock className="w-3.5 h-3.5 text-[#233B31]" />
                  {slot.time}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

