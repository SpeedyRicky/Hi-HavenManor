<template>
  <section id="standards" class="py-20 bg-[#F3EFEA] border-b border-[#E5DFC5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
          Safety, Compliance & Oversight
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl text-[#1C2622] font-normal leading-tight mb-4">
          Provincial Standards You Can Trust
        </h2>
        <p class="text-sm sm:text-base text-[#5F6B65] font-light">
          Hi Haven Manor adheres strictly to Newfoundland & Labrador health, fire, safety, and certified attendant standards.
        </p>
      </div>

      <!-- Standards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div 
          v-for="std in standards" 
          :key="std.id"
          class="bg-white border border-[#E5DFC5] p-7 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div class="inline-block px-2.5 py-1 bg-[#FAF8F5] border border-[#E5DFC5] text-[10px] uppercase tracking-wider font-semibold text-[#C5A059] mb-3">
              {{ std.badge }}
            </div>
            <h3 class="font-serif text-xl text-[#1C2622] mb-2">
              {{ std.title }}
            </h3>
            <p class="text-xs text-[#5F6B65] font-light leading-relaxed mb-4">
              {{ std.description }}
            </p>
            <ul class="space-y-1.5 text-xs text-[#2A3631] border-t border-[#E5DFC5]/60 pt-3">
              <li v-for="(d, dIdx) in std.details" :key="dIdx" class="flex items-start gap-2">
                <span class="text-emerald-700 font-bold">✓</span>
                <span>{{ d }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ACCREDITATION_STANDARDS } from '../data/hiHavenData.js';

const standards = ACCREDITATION_STANDARDS;
</script>
