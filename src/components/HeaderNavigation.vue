<template>
  <header class="sticky top-0 z-50 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#E5DFC5] transition-all duration-300">
    <!-- Top Contact Strip -->
    <div class="bg-[#1C2622] text-[#A8A39D] text-xs border-b border-white/10 py-1.5 px-4 sm:px-8">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-4 text-[11px] tracking-wide">
          <span class="inline-flex items-center gap-1.5 text-[#C5A059]">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            15-Resident Community Home
          </span>
          <span class="hidden md:inline text-gray-400">|</span>
          <span class="hidden md:inline text-gray-300">Holyrood, Newfoundland & Labrador</span>
        </div>
        <div class="flex items-center gap-5 text-[11px]">
          <a :href="'tel:' + businessInfo.phoneClean" class="inline-flex items-center gap-1.5 text-white hover:text-[#C5A059] transition-colors">
            <Phone class="w-3 h-3 text-[#C5A059]" />
            <span class="font-medium">{{ businessInfo.phone }}</span>
          </a>
          <a :href="'mailto:' + businessInfo.email" class="hidden sm:inline-flex items-center gap-1.5 text-gray-300 hover:text-[#C5A059] transition-colors">
            <Mail class="w-3 h-3 text-[#C5A059]" />
            <span>{{ businessInfo.email }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
      <!-- Brand Identity Lockup -->
      <a href="#" class="flex flex-col group">
        <span class="font-serif text-2xl sm:text-3xl font-light tracking-[0.18em] uppercase text-[#1C2622] group-hover:text-[#C5A059] transition-colors">
          {{ businessInfo.name }}
        </span>
        <span class="text-[9px] uppercase tracking-[0.25em] text-[#5F6B65] font-medium mt-0.5">
          Residential Care Home • Holyrood, NL
        </span>
      </a>

      <!-- Desktop Nav Menu -->
      <nav class="hidden lg:flex items-center gap-7">
        <a 
          v-for="item in navLinks" 
          :key="item.href" 
          :href="item.href"
          class="text-[11px] uppercase tracking-[0.18em] font-medium text-[#5F6B65] hover:text-[#1C2622] transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] after:transition-all after:duration-200"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Action Buttons -->
      <div class="hidden sm:flex items-center gap-3">
        <button 
          @click="$emit('open-assessment')"
          class="px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium text-[#1C2622] border border-[#1C2622] hover:border-[#C5A059] hover:text-[#C5A059] transition-all"
        >
          Care Quiz
        </button>
        <button 
          @click="$emit('open-tour')"
          class="px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium bg-[#1C2622] text-[#FDFCFB] hover:bg-[#C5A059] hover:text-white transition-all flex items-center gap-2 shadow-sm"
        >
          <Calendar class="w-3.5 h-3.5" />
          <span>Book a Tour</span>
        </button>
      </div>

      <!-- Mobile Menu Hamburger Button -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="lg:hidden p-2 text-[#1C2622] hover:text-[#C5A059] focus:outline-none"
        aria-label="Toggle menu"
      >
        <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div 
      v-if="mobileMenuOpen" 
      class="lg:hidden bg-[#FDFCFB] border-b border-[#E5DFC5] px-6 py-5 shadow-lg transition-all"
    >
      <nav class="flex flex-col gap-4">
        <a 
          v-for="item in navLinks" 
          :key="item.href" 
          :href="item.href"
          @click="mobileMenuOpen = false"
          class="text-xs uppercase tracking-[0.18em] font-medium text-[#1C2622] py-2 border-b border-[#E5DFC5]/40"
        >
          {{ item.label }}
        </a>
        <div class="flex flex-col gap-2.5 pt-3">
          <button 
            @click="$emit('open-assessment'); mobileMenuOpen = false"
            class="w-full py-2.5 text-center text-xs uppercase tracking-[0.15em] font-medium text-[#1C2622] border border-[#1C2622]"
          >
            Care Assessment Quiz
          </button>
          <button 
            @click="$emit('open-tour'); mobileMenuOpen = false"
            class="w-full py-2.5 text-center text-xs uppercase tracking-[0.15em] font-medium bg-[#1C2622] text-white flex items-center justify-center gap-2"
          >
            <Calendar class="w-3.5 h-3.5" />
            <span>Book a Visit with Lori & Rob</span>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { Phone, Mail, Calendar, Menu, X } from 'lucide-vue-next';
import { BUSINESS_INFO } from '../data/hiHavenData.js';

defineEmits(['open-tour', 'open-assessment']);

const businessInfo = BUSINESS_INFO;
const mobileMenuOpen = ref(false);

const navLinks = [
  { label: 'Care Programs', href: '#programs' },
  { label: 'Accommodations', href: '#accommodations' },
  { label: 'Our Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Daily Life', href: '#daily-life' },
  { label: 'Standards', href: '#standards' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];
</script>
