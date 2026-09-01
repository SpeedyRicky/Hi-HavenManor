<template>
  <div class="min-h-screen bg-[#FAF8F5] text-[#1C2622] font-sans antialiased selection:bg-[#C5A059] selection:text-white">
    <!-- Header Navigation -->
    <HeaderNavigation 
      @open-tour="isTourModalOpen = true"
      @open-assessment="isAssessmentModalOpen = true"
    />

    <!-- Main Content Sections -->
    <main>
      <!-- Hero Showcase -->
      <SanctuaryHeroShowcase 
        @open-tour="isTourModalOpen = true"
        @open-assessment="isAssessmentModalOpen = true"
      />

      <!-- Care Programs 4-Pillar Grid -->
      <CareProgramsGrid />

      <!-- Interactive Care Needs Navigator -->
      <CareNeedsNavigator 
        @open-tour="isTourModalOpen = true"
      />

      <!-- Residences & Living Spaces Showcase -->
      <ResidencesSuitesShowcase />

      <!-- 40+ Year Heritage & Story -->
      <HeritageStorySection />

      <!-- Comprehensive Services & Amenities -->
      <MainServicesAmenities />

      <!-- Daily Life Timeline -->
      <DailyLifeTimeline />

      <!-- Trust, Standards & Accreditation -->
      <TrustStandardsAccreditation />

      <!-- Visual Showcase & Living Environment (No AI Images) -->
      <SanctuaryGallery />

      <!-- Admissions Inquiry & Direct Contact -->
      <AdmissionsInquirySection />

      <!-- FAQ Accordion -->
      <FaqAccordionSection />
    </main>

    <!-- Luxury Footer -->
    <LuxuryFooter />

    <!-- Modals -->
    <TourBookingModal 
      :isOpen="isTourModalOpen" 
      @close="isTourModalOpen = false" 
    />

    <CareAssessmentQuizModal 
      :isOpen="isAssessmentModalOpen" 
      @close="isAssessmentModalOpen = false" 
      @book-tour="isTourModalOpen = true"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import HeaderNavigation from './components/HeaderNavigation.vue';
import SanctuaryHeroShowcase from './components/SanctuaryHeroShowcase.vue';
import CareProgramsGrid from './components/CareProgramsGrid.vue';
import CareNeedsNavigator from './components/CareNeedsNavigator.vue';
import ResidencesSuitesShowcase from './components/ResidencesSuitesShowcase.vue';
import HeritageStorySection from './components/HeritageStorySection.vue';
import MainServicesAmenities from './components/MainServicesAmenities.vue';
import DailyLifeTimeline from './components/DailyLifeTimeline.vue';
import TrustStandardsAccreditation from './components/TrustStandardsAccreditation.vue';
import SanctuaryGallery from './components/SanctuaryGallery.vue';
import AdmissionsInquirySection from './components/AdmissionsInquirySection.vue';
import FaqAccordionSection from './components/FaqAccordionSection.vue';
import LuxuryFooter from './components/LuxuryFooter.vue';
import TourBookingModal from './components/TourBookingModal.vue';
import CareAssessmentQuizModal from './components/CareAssessmentQuizModal.vue';

const isTourModalOpen = ref(false);
const isAssessmentModalOpen = ref(false);
</script>
