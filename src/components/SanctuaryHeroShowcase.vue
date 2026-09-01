<template>
  <section class="relative bg-[#FAF8F5] pt-12 pb-20 border-b border-[#E5DFC5] overflow-hidden">
    <!-- Subtle Background Architectural Grid Texture -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1C2622_1px,transparent_1px)] [background-size:24px_24px]"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Narrative Column -->
        <div class="lg:col-span-7 flex flex-col">
          <!-- Top Eyebrow Badge -->
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] mb-4">
            <span class="w-8 h-[1px] bg-[#C5A059]"></span>
            <span>Holyrood, Newfoundland & Labrador</span>
          </div>

          <!-- Main Serif Display Heading -->
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C2622] font-normal leading-[1.05] tracking-tight mb-6">
            A Welcoming <em class="italic font-light text-[#233B31]">Surrogate Family</em> Setting in Holyrood.
          </h1>

          <!-- Lead Narrative -->
          <p class="text-base sm:text-lg text-[#5F6B65] font-light leading-relaxed mb-8 max-w-2xl">
            Hi Haven Manor is an intimate 15-resident community care home in Holyrood, NL. Operating under Eastern Health's Mental Health and Addiction program with subsidized placement options, we provide 24/7 certified PCA support, 3 wholesome home-cooked meals daily, and a warm, respectful atmosphere where every resident thrives.
          </p>

          <!-- Action Buttons Row -->
          <div class="flex flex-wrap items-center gap-4 mb-10">
            <button 
              @click="$emit('open-tour')"
              class="px-7 py-3.5 bg-[#1C2622] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#C5A059] transition-all flex items-center gap-2 shadow-sm"
            >
              <Calendar class="w-4 h-4" />
              <span>Schedule a Personal Tour</span>
            </button>

            <a 
              :href="'tel:' + businessInfo.phoneClean"
              class="px-6 py-3.5 bg-white border border-[#E5DFC5] text-[#1C2622] text-xs uppercase tracking-[0.18em] font-medium hover:border-[#1C2622] hover:text-[#C5A059] transition-all flex items-center gap-2"
            >
              <Phone class="w-4 h-4 text-[#C5A059]" />
              <span>Call (709) 229-7992</span>
            </a>

            <button 
              @click="$emit('open-assessment')"
              class="px-5 py-3.5 text-xs uppercase tracking-[0.15em] font-medium text-[#5F6B65] hover:text-[#1C2622] transition-colors underline underline-offset-4"
            >
              Take Care Assessment &rarr;
            </button>
          </div>

          <!-- Core Metric Strip -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#E5DFC5]">
            <div v-for="pillar in corePillars" :key="pillar.label" class="flex flex-col">
              <span class="font-serif text-3xl sm:text-4xl font-normal text-[#1C2622] leading-none">
                {{ pillar.number }}
              </span>
              <span class="text-xs uppercase tracking-wider text-[#1C2622] font-semibold mt-2">
                {{ pillar.label }}
              </span>
              <span class="text-[11px] text-[#5F6B65] font-light mt-0.5">
                {{ pillar.subtitle }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Side: Clean Architectural Card Frame with Photo -->
        <div class="lg:col-span-5">
          <div class="bg-white border border-[#E5DFC5] overflow-hidden shadow-sm relative">
            <div class="absolute top-3 right-3 z-10 bg-[#1C2622]/90 text-[#C5A059] text-[10px] font-semibold uppercase tracking-widest px-3 py-1 border border-[#C5A059]/40">
              36 Butterpot Road • Holyrood
            </div>

            <!-- Hero Real Photo -->
            <div class="relative aspect-16/10 overflow-hidden bg-[#1C2622] flex items-center justify-center">
              <img 
                v-if="heroImg" 
                :src="heroImg" 
                alt="Hi Haven Manor Holyrood Newfoundland"
                referrerPolicy="no-referrer"
                class="w-full h-full object-cover"
              />
              <div v-else class="p-8 text-center text-white">
                <span class="text-[10px] uppercase font-mono tracking-widest text-[#C5A059] block mb-1">Hi Haven Manor</span>
                <p class="font-serif text-lg">36 Butterpot Road, Holyrood, NL</p>
                <span class="text-xs text-gray-300">Intimate 15-Resident Family Care Home</span>
              </div>
              <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                <span class="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] font-bold block">
                  Newfoundland & Labrador Health Services
                </span>
                <h3 class="font-serif text-lg font-normal text-white">
                  Hi Haven Manor Residential Care Home
                </h3>
              </div>
            </div>

            <!-- Card Content Details -->
            <div class="p-6">
              <!-- Fact Items List -->
              <ul class="space-y-3 mb-5 text-xs text-[#2A3631]">
                <li class="flex items-start gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Intimate 15-Resident Setting:</strong> True surrogate family living with individual dignity.
                  </div>
                </li>
                <li class="flex items-start gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>24/7 Certified PCA Attendants:</strong> Continuous on-site care and medication administration.
                  </div>
                </li>
                <li class="flex items-start gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>3 Home-Cooked Meals Daily:</strong> Fresh hot breakfast, lunch, and supper.
                  </div>
                </li>
                <li class="flex items-start gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Park-Like Holyrood Lawns:</strong> Colorful Adirondack seating, pine trees, and fresh coastal air.
                  </div>
                </li>
              </ul>

              <!-- Location Note & Mini Image Preview -->
              <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-4 border-t border-[#E5DFC5]">
                <div class="sm:col-span-4 rounded overflow-hidden aspect-video sm:aspect-square bg-[#FAF8F5] flex items-center justify-center">
                  <img 
                    v-if="lawnImg" 
                    :src="lawnImg" 
                    alt="Adirondack Lawn Chairs" 
                    referrerPolicy="no-referrer"
                    class="w-full h-full object-cover"
                  />
                  <span v-else class="text-[9px] text-[#5F6B65] text-center p-1 font-mono uppercase">Holyrood Grounds</span>
                </div>
                <div class="sm:col-span-8 flex flex-col justify-center text-xs text-[#5F6B65]">
                  <strong class="text-[#1C2622] font-medium">36 Butterpot Road, Holyrood, NL</strong>
                  <span>Spacious park-like grounds & quiet wooded surroundings</span>
                  <a href="#gallery" class="text-[#C5A059] font-medium hover:underline mt-1">
                    View official photo gallery &rarr;
                  </a>
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
import { Phone, Calendar, ShieldCheck, CheckCircle2, MapPin } from 'lucide-vue-next';
import { BUSINESS_INFO, CORE_PILLARS } from '../data/hiHavenData.js';

defineEmits(['open-tour', 'open-assessment']);

const businessInfo = BUSINESS_INFO;
const corePillars = CORE_PILLARS;

const heroImg = ref(localStorage.getItem('hihaven_photo_photo-2') || '');
const lawnImg = ref(localStorage.getItem('hihaven_photo_photo-1') || '');

onMounted(() => {
  window.addEventListener('storage', () => {
    heroImg.value = localStorage.getItem('hihaven_photo_photo-2') || '';
    lawnImg.value = localStorage.getItem('hihaven_photo_photo-1') || '';
  });
});
</script>
