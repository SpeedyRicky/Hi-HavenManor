<template>
  <footer class="bg-[#1C2622] text-white pt-16 pb-12 border-t border-[#333333]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">
        <!-- Brand / Identity -->
        <div>
          <span class="font-serif text-2xl font-light tracking-[0.18em] uppercase text-white block mb-2">
            {{ businessInfo.name }}
          </span>
          <span class="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block mb-4">
            Residential Care Home • Holyrood, NL
          </span>
          <p class="text-xs text-gray-300 font-light leading-relaxed">
            A welcoming 15-resident community home providing 24/7 personal care, home cooking, and a surrogate family setting in Holyrood, Newfoundland.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xs uppercase tracking-widest font-semibold text-[#C5A059] mb-4">
            Explore Hi Haven
          </h4>
          <ul class="space-y-2 text-xs text-gray-300">
            <li><a href="#programs" class="hover:text-white transition-colors">Care Programs</a></li>
            <li><a href="#accommodations" class="hover:text-white transition-colors">Resident Accommodations</a></li>
            <li><a href="#story" class="hover:text-white transition-colors">40+ Year Story</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">Included Services</a></li>
            <li><a href="#daily-life" class="hover:text-white transition-colors">Daily Schedule</a></li>
            <li><a href="#standards" class="hover:text-white transition-colors">Provincial Standards</a></li>
            <li><a href="#faq" class="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        <!-- Care & Oversight -->
        <div>
          <h4 class="text-xs uppercase tracking-widest font-semibold text-[#C5A059] mb-4">
            Care & Oversight
          </h4>
          <ul class="space-y-2 text-xs text-gray-300">
            <li>Eastern Health Mental Health Program</li>
            <li>Government-Subsidized Placements</li>
            <li>Certified Personal Care Attendants (PCAs)</li>
            <li>On-Site Physician & Specialist Visits</li>
            <li>Intimate 15-Resident Setting</li>
          </ul>
        </div>

        <!-- Contact & Location -->
        <div>
          <h4 class="text-xs uppercase tracking-widest font-semibold text-[#C5A059] mb-4">
            Contact Lori & Rob
          </h4>
          <div class="space-y-2 text-xs text-gray-300">
            <p><strong>Address:</strong> {{ businessInfo.address }}, {{ businessInfo.city }}, NL {{ businessInfo.postalCode }}</p>
            <p><strong>Phone:</strong> <a :href="'tel:' + businessInfo.phoneClean" class="text-[#C5A059] hover:underline">{{ businessInfo.phone }}</a></p>
            <p><strong>Fax:</strong> {{ businessInfo.fax }}</p>
            <p><strong>Email:</strong> {{ businessInfo.email }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom Copyright Strip -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
        <div>
          &copy; {{ new Date().getFullYear() }} {{ businessInfo.legalName }}. All rights reserved.
        </div>
        <div class="flex items-center gap-4">
          <span>Holyrood, NL A0A 2P0</span>
          <span>•</span>
          <span>Operating under NL Health Services</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { BUSINESS_INFO } from '../data/hiHavenData.js';

const businessInfo = BUSINESS_INFO;
</script>
