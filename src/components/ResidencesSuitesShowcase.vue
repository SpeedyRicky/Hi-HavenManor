<template>
  <section id="accommodations" class="py-20 bg-[#FDFCFB] border-b border-[#E5DFC5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
          Living Spaces & Accommodations
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl text-[#1C2622] font-normal leading-tight mb-4">
          Comfortable, Dignified Resident Spaces
        </h2>
        <p class="text-sm sm:text-base text-[#5F6B65] font-light">
          Hi Haven Manor is designed with warmth and accessibility in mind — offering cozy bedrooms, welcoming family dining, and expansive Holyrood park grounds.
        </p>
      </div>

      <!-- Spaces Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(space, idx) in spaces" 
          :key="space.id"
          class="bg-white border border-[#E5DFC5] overflow-hidden flex flex-col justify-between hover:border-[#1C2622] transition-all shadow-sm group"
        >
          <div>
            <!-- Space Photo Thumbnail -->
            <div class="aspect-16/10 relative overflow-hidden bg-[#FAF8F5]">
              <img 
                :src="space.image" 
                :alt="space.name"
                referrerPolicy="no-referrer"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-2 left-2 bg-[#1C2622]/80 text-white text-[9px] uppercase font-mono tracking-widest px-2 py-0.5">
                0{{ idx + 1 }} // {{ space.tier }}
              </div>
            </div>

            <div class="p-5">
              <!-- Title & Tagline -->
              <h3 class="font-serif text-lg text-[#1C2622] mb-1.5 leading-snug group-hover:text-[#C5A059] transition-colors">
                {{ space.name }}
              </h3>
              <p class="text-xs text-[#C5A059] font-medium mb-3">
                {{ space.tagline }}
              </p>
              <p class="text-xs text-[#5F6B65] font-light leading-relaxed mb-5">
                {{ space.description }}
              </p>

              <!-- Amenities List -->
              <div class="border-t border-[#E5DFC5]/60 pt-3 mb-4">
                <span class="text-[10px] uppercase tracking-wider font-semibold text-[#1C2622] block mb-2">
                  Features & Comforts
                </span>
                <ul class="space-y-1.5 text-xs text-[#2A3631]">
                  <li v-for="(amenity, aIdx) in space.amenities" :key="aIdx" class="flex items-start gap-1.5">
                    <span class="text-[#C5A059]">•</span>
                    <span>{{ amenity }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Safety / Notes footer -->
          <div class="p-5 pt-0">
            <div class="pt-3 border-t border-[#E5DFC5]/60">
              <span class="text-[10px] uppercase tracking-wider font-semibold text-[#5F6B65] block mb-1">
                Safety & Oversight
              </span>
              <ul class="text-[11px] text-[#5F6B65] space-y-1">
                <li v-for="(safe, sIdx) in space.safetyFeatures" :key="sIdx">
                  ✓ {{ safe }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Note -->
      <div class="mt-12 bg-[#FAF8F5] border border-[#E5DFC5] p-6 max-w-3xl mx-auto text-center">
        <p class="text-xs text-[#5F6B65] leading-relaxed">
          <strong class="text-[#1C2622]">Personalization Encouraged:</strong> Residents and families are warmly encouraged to bring cherished pictures, favourite quilts, personal crafts, and items that make their living space distinctly theirs.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RESIDENCE_SPACES } from '../data/hiHavenData.js';

const spaces = RESIDENCE_SPACES;
</script>
