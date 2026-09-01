<template>
  <section id="faq" class="py-20 bg-[#FDFCFB] border-b border-[#E5DFC5]">
    <div class="max-w-4xl mx-auto px-4 sm:px-8">
      <div class="text-center mb-16">
        <span class="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
          Frequently Asked Questions
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl text-[#1C2622] font-normal leading-tight mb-4">
          Common Questions from Families
        </h2>
        <p class="text-sm sm:text-base text-[#5F6B65] font-light">
          Everything you need to know about living, funding, and daily care at Hi Haven Manor.
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-3">
        <div 
          v-for="(faq, idx) in faqs" 
          :key="idx"
          class="bg-white border border-[#E5DFC5] transition-all"
        >
          <button 
            @click="toggleFaq(idx)"
            class="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#C5A059] transition-colors"
          >
            <span class="font-serif text-lg text-[#1C2622] font-medium">
              {{ faq.question }}
            </span>
            <span class="font-mono text-sm text-[#C5A059] shrink-0">
              {{ openIdx === idx ? '−' : '+' }}
            </span>
          </button>
          
          <div 
            v-if="openIdx === idx" 
            class="px-5 pb-5 text-xs text-[#5F6B65] font-light leading-relaxed border-t border-[#E5DFC5]/40 pt-3"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { FAQS } from '../data/hiHavenData.js';

const faqs = FAQS;
const openIdx = ref(0);

function toggleFaq(idx) {
  openIdx.value = openIdx.value === idx ? null : idx;
}
</script>
