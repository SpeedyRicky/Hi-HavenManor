<template>
  <section id="daily-life" class="py-20 bg-[#FDFCFB] border-b border-[#E5DFC5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
          Daily Rhythm & Fellowship
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl text-[#1C2622] font-normal leading-tight mb-4">
          A Typical Day at Hi Haven Manor
        </h2>
        <p class="text-sm sm:text-base text-[#5F6B65] font-light">
          A balanced daily rhythm offering nourishing meals, supportive care, companionship, and ample personal relaxation time.
        </p>
      </div>

      <!-- Timeline List -->
      <div class="max-w-4xl mx-auto space-y-4">
        <div 
          v-for="(slot, idx) in schedule" 
          :key="idx"
          class="bg-white border border-[#E5DFC5] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#1C2622] transition-all"
        >
          <div class="flex items-start sm:items-center gap-4">
            <div class="w-12 h-12 bg-[#FAF8F5] border border-[#E5DFC5] flex items-center justify-center text-[#C5A059] shrink-0">
              <component :is="getIcon(slot.icon)" class="w-5 h-5" />
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="font-mono text-xs font-bold text-[#C5A059]">
                  {{ slot.time }}
                </span>
                <span class="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#FAF8F5] text-[#5F6B65] border border-[#E5DFC5]/50">
                  {{ slot.period }}
                </span>
              </div>
              <h3 class="font-serif text-lg text-[#1C2622]">
                {{ slot.title }}
              </h3>
              <p class="text-xs text-[#5F6B65] font-light mt-0.5 leading-relaxed">
                {{ slot.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Coffee, Sun, UtensilsCrossed, Smile, Utensils, Moon } from 'lucide-vue-next';
import { DAILY_SCHEDULE } from '../data/hiHavenData.js';

const schedule = DAILY_SCHEDULE;

const iconMap = {
  Coffee,
  Sun,
  UtensilsCrossed,
  Smile,
  Utensils,
  Moon
};

function getIcon(name) {
  return iconMap[name] || Sun;
}
</script>
