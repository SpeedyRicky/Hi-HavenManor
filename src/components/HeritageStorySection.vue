<template>
  <section id="story" class="py-20 bg-[#1C2622] text-[#FDFCFB] border-b border-[#333333]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left: Story Narrative Column -->
        <div class="lg:col-span-7 flex flex-col">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] mb-4">
            <span class="w-8 h-[1px] bg-[#C5A059]"></span>
            <span>40+ Years of Holyrood Roots</span>
          </div>

          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-6 text-white">
            {{ story.heading }}
          </h2>

          <p class="text-sm sm:text-base text-[#C5A059] font-medium mb-6">
            {{ story.subheading }}
          </p>

          <div class="space-y-4 text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-8">
            <p v-for="(paragraph, pIdx) in story.paragraphs" :key="pIdx">
              {{ paragraph }}
            </p>
          </div>

          <!-- Highlight Quote Box -->
          <div class="bg-white/5 border-l-2 border-[#C5A059] p-5 my-2">
            <p class="font-serif italic text-base sm:text-lg text-white font-light">
              {{ story.quote }}
            </p>
            <span class="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold mt-2 block">
              — Lori & Rob Condon, Hi Haven Manor
            </span>
          </div>
        </div>

        <!-- Right: Historic Timeline / Feature Milestones & Official Sign Photo -->
        <div class="lg:col-span-5 flex flex-col gap-6">
          <!-- Official Entrance Sign Photo Card -->
          <div class="bg-[#233B31] border border-white/10 overflow-hidden shadow-md">
            <div class="aspect-4/3 relative flex items-center justify-center bg-black/40">
              <img 
                v-if="signImg"
                :src="signImg" 
                alt="Hi Haven Manor Entrance Sign at 36 Butterpot Road" 
                referrerPolicy="no-referrer"
                class="w-full h-full object-cover"
              />
              <div v-else class="p-8 text-center text-white">
                <span class="text-[10px] uppercase font-mono tracking-widest text-[#C5A059] block mb-1">Hi Haven Manor Sign</span>
                <p class="font-serif text-lg">36 Butterpot Road</p>
                <span class="text-xs text-gray-300">Holyrood, NL • (709) 229-7992</span>
              </div>
              <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                <span class="text-[10px] uppercase font-mono tracking-widest text-[#C5A059]">36 Butterpot Road, Holyrood, NL</span>
                <p class="text-xs font-serif">Hi Haven Manor Entrance Sign</p>
              </div>
            </div>
          </div>

          <div class="bg-[#233B31] border border-white/10 p-7 shadow-md">
            <h3 class="font-serif text-xl text-white mb-5 pb-3 border-b border-white/10">
              Heritage Milestones
            </h3>

            <div class="space-y-5">
              <div class="flex items-start gap-3">
                <span class="font-mono text-xs text-[#C5A059] font-bold shrink-0 pt-0.5">1980s</span>
                <div>
                  <h4 class="text-xs font-semibold text-white">Woodland Motel, Cabins & Tavern</h4>
                  <p class="text-[11px] text-gray-300 font-light mt-0.5">
                    Originally operated as a beloved Holyrood gathering point for travellers, campers, and local workers.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="font-mono text-xs text-[#C5A059] font-bold shrink-0 pt-0.5">2000s</span>
                <div>
                  <h4 class="text-xs font-semibold text-white">Supportive Living Transformation</h4>
                  <p class="text-[11px] text-gray-300 font-light mt-0.5">
                    Transitioned into a dedicated residential care home for adults requiring daily personal assistance and supportive supervision.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="font-mono text-xs text-[#C5A059] font-bold shrink-0 pt-0.5">2015</span>
                <div>
                  <h4 class="text-xs font-semibold text-white">Comprehensive Modernization & Renovations</h4>
                  <p class="text-[11px] text-gray-300 font-light mt-0.5">
                    Comprehensive structural and interior renovations updated the home while preserving its down-home warmth.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="font-mono text-xs text-[#C5A059] font-bold shrink-0 pt-0.5">Today</span>
                <div>
                  <h4 class="text-xs font-semibold text-white">Eastern Health Subsidized Community Home</h4>
                  <p class="text-[11px] text-gray-300 font-light mt-0.5">
                    Operating with 15 resident beds under Eastern Health's Mental Health and Addiction program, providing certified 24/7 care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ABOUT_US_STORY } from '../data/hiHavenData.js';

const story = ABOUT_US_STORY;

const signImg = ref(localStorage.getItem('hihaven_photo_photo-5') || '');

onMounted(() => {
  window.addEventListener('storage', () => {
    signImg.value = localStorage.getItem('hihaven_photo_photo-5') || '';
  });
});
</script>
