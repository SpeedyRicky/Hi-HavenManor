<template>
  <section id="services" class="py-20 bg-[#FAF8F5] border-b border-[#E5DFC5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
          Living Services & Amenities
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl text-[#1C2622] font-normal leading-tight mb-4">
          Everything Included in Daily Life
        </h2>
        <p class="text-sm sm:text-base text-[#5F6B65] font-light">
          From 24/7 personal care attendants to home-cooked meals, weekly physician visits, laundry, and on-site canteen access.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(service, idx) in services" 
          :key="idx"
          class="bg-white border border-[#E5DFC5] p-6 hover:border-[#1C2622] transition-all duration-200 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div class="w-10 h-10 bg-[#FAF8F5] border border-[#E5DFC5] flex items-center justify-center text-[#C5A059] mb-4">
              <component :is="getIcon(service.icon)" class="w-5 h-5" />
            </div>
            <h3 class="font-serif text-lg text-[#1C2622] mb-2">
              {{ service.title }}
            </h3>
            <p class="text-xs text-[#5F6B65] font-light leading-relaxed">
              {{ service.description }}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-[#E5DFC5]/40 text-[10px] uppercase tracking-wider text-[#C5A059] font-semibold">
            Included in Resident Care
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  ShieldCheck, 
  Bed, 
  UtensilsCrossed, 
  Pill, 
  Stethoscope, 
  Sparkles, 
  Coffee, 
  Scissors, 
  Music, 
  Wifi, 
  Trees, 
  HeartHandshake 
} from 'lucide-vue-next';
import { MAIN_SERVICES } from '../data/hiHavenData.js';

const services = MAIN_SERVICES;

const iconMap = {
  ShieldCheck,
  Bed,
  UtensilsCrossed,
  Pill,
  Stethoscope,
  Sparkles,
  Coffee,
  Scissors,
  Music,
  Wifi,
  Trees,
  HeartHandshake
};

function getIcon(iconName) {
  return iconMap[iconName] || ShieldCheck;
}
</script>
