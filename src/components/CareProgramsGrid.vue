<template>
  <section id="programs" class="py-20 bg-[#FDFCFB] border-b border-[#E5DFC5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <!-- Section Editorial Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
          Comprehensive Care Services
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl text-[#1C2622] font-normal leading-tight mb-4">
          Individualized Living & Clinical Support
        </h2>
        <p class="text-sm sm:text-base text-[#5F6B65] font-light leading-relaxed">
          Operating under the Mental Health and Addiction program of Eastern Health (NL Health Services), our care is tailored to foster growth, dignity, and independence.
        </p>
      </div>

      <!-- 4 Core Care Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="program in carePrograms" 
          :key="program.id"
          class="bg-white border border-[#E5DFC5] p-6 sm:p-7 flex flex-col justify-between hover:border-[#1C2622] transition-all hover:-translate-y-1 duration-200 shadow-sm"
        >
          <div>
            <div class="inline-block px-2.5 py-1 bg-[#FAF8F5] border border-[#E5DFC5] text-[10px] uppercase tracking-wider font-semibold text-[#C5A059] mb-4">
              {{ program.badge }}
            </div>
            <h3 class="font-serif text-xl text-[#1C2622] mb-3 leading-snug">
              {{ program.title }}
            </h3>
            <p class="text-xs text-[#5F6B65] leading-relaxed mb-6 font-light">
              {{ program.shortDescription }}
            </p>

            <ul class="space-y-2.5 text-xs text-[#2A3631] border-t border-[#E5DFC5]/60 pt-4 mb-6">
              <li v-for="(feat, idx) in program.keyFeatures" :key="idx" class="flex items-start gap-2">
                <span class="text-[#C5A059] font-bold">•</span>
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <div class="pt-4 border-t border-[#E5DFC5]/60 text-[11px] text-[#5F6B65] italic">
            {{ program.staffingRatio }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CARE_PROGRAMS } from '../data/hiHavenData.js';

const carePrograms = CARE_PROGRAMS;
</script>
