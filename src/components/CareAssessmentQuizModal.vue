<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    @click.self="$emit('close')"
  >
    <div class="bg-white border border-[#E5DFC5] max-w-lg w-full p-6 sm:p-8 relative shadow-2xl my-8">
      <!-- Close Button -->
      <button 
        @click="$emit('close')"
        class="absolute top-4 right-4 text-[#1C2622] hover:text-[#C5A059] text-xl font-bold w-8 h-8 flex items-center justify-center cursor-pointer"
      >
        ✕
      </button>

      <div class="mb-6">
        <span class="text-[10px] uppercase font-mono tracking-widest text-[#C5A059] font-bold block mb-1">
          Interactive Assessment • Step {{ currentStep }} of {{ totalSteps }}
        </span>
        <h3 class="font-serif text-2xl text-[#1C2622]">
          Care Needs & Placement Fit
        </h3>
        <p class="text-xs text-[#5F6B65] font-light mt-1">
          Answer a few quick questions to assess suitability for our 15-resident Holyrood community care home.
        </p>
      </div>

      <!-- Question Steps -->
      <div v-if="currentStep <= 3" class="space-y-4">
        <!-- Question 1 -->
        <div v-if="currentStep === 1">
          <label class="block text-xs font-semibold text-[#1C2622] mb-3">
            1. What level of daily personal support is required?
          </label>
          <div class="space-y-2">
            <button 
              v-for="opt in step1Options" 
              :key="opt.val"
              @click="answers.careType = opt.val; nextStep()"
              class="w-full p-3 text-left border border-[#E5DFC5] text-xs text-[#1C2622] hover:border-[#1C2622] hover:bg-[#FAF8F5] transition-all flex items-center justify-between"
            >
              <span>{{ opt.label }}</span>
              <span class="text-[#C5A059]">&rarr;</span>
            </button>
          </div>
        </div>

        <!-- Question 2 -->
        <div v-if="currentStep === 2">
          <label class="block text-xs font-semibold text-[#1C2622] mb-3">
            2. Is medication oversight or physician coordination needed?
          </label>
          <div class="space-y-2">
            <button 
              v-for="opt in step2Options" 
              :key="opt.val"
              @click="answers.meds = opt.val; nextStep()"
              class="w-full p-3 text-left border border-[#E5DFC5] text-xs text-[#1C2622] hover:border-[#1C2622] hover:bg-[#FAF8F5] transition-all flex items-center justify-between"
            >
              <span>{{ opt.label }}</span>
              <span class="text-[#C5A059]">&rarr;</span>
            </button>
          </div>
        </div>

        <!-- Question 3 -->
        <div v-if="currentStep === 3">
          <label class="block text-xs font-semibold text-[#1C2622] mb-3">
            3. Are you seeking Eastern Health provincial subsidy support?
          </label>
          <div class="space-y-2">
            <button 
              v-for="opt in step3Options" 
              :key="opt.val"
              @click="answers.subsidy = opt.val; nextStep()"
              class="w-full p-3 text-left border border-[#E5DFC5] text-xs text-[#1C2622] hover:border-[#1C2622] hover:bg-[#FAF8F5] transition-all flex items-center justify-between"
            >
              <span>{{ opt.label }}</span>
              <span class="text-[#C5A059]">&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Result Step -->
      <div v-else class="space-y-4">
        <div class="p-5 bg-[#FAF8F5] border border-[#E5DFC5]">
          <span class="text-[10px] uppercase tracking-wider font-semibold text-emerald-700 block mb-1">
            ✓ Highly Suitable Care Setting
          </span>
          <h4 class="font-serif text-xl text-[#1C2622] mb-2">
            Hi Haven Manor is an Ideal Fit
          </h4>
          <p class="text-xs text-[#5F6B65] leading-relaxed mb-4">
            Based on your answers, our 15-resident community home in Holyrood with 24/7 certified PCAs, supervised medication administration, 3 home-cooked meals daily, and Eastern Health subsidized placements matches your needs.
          </p>
          <ul class="text-xs text-[#2A3631] space-y-1.5 border-t border-[#E5DFC5] pt-3">
            <li>• 24/7 Certified Attendant Care on-site</li>
            <li>• Weekly General Practitioner & Psychiatric visits</li>
            <li>• Provincial Subsidies Supported</li>
          </ul>
        </div>

        <div class="flex gap-2">
          <button 
            @click="$emit('book-tour'); $emit('close')"
            class="flex-1 py-3 bg-[#1C2622] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#C5A059] transition-all"
          >
            Book Tour with Lori & Rob
          </button>
          <button 
            @click="resetQuiz"
            class="px-4 py-3 border border-[#E5DFC5] text-xs text-[#5F6B65] hover:text-[#1C2622]"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close', 'book-tour']);

const totalSteps = 3;
const currentStep = ref(1);

const answers = ref({
  careType: '',
  meds: '',
  subsidy: ''
});

const step1Options = [
  { label: 'Full 24/7 Supportive Residential Living', val: 'full' },
  { label: 'Short-Term Respite / Temporary Care', val: 'respite' },
  { label: 'Mental Health & Psychosocial Support', val: 'mental' }
];

const step2Options = [
  { label: 'Yes, daily supervised blister-pack medication and doctor visits', val: 'yes' },
  { label: 'Independent with occasional reminders', val: 'minimal' },
  { label: 'Need psychiatric specialist coordination', val: 'specialist' }
];

const step3Options = [
  { label: 'Yes, looking for Eastern Health subsidized placement', val: 'subsidized' },
  { label: 'Private pay / Exploring funding options', val: 'private' },
  { label: 'Need guidance navigating the application', val: 'guidance' }
];

function nextStep() {
  currentStep.value++;
}

function resetQuiz() {
  currentStep.value = 1;
  answers.value = { careType: '', meds: '', subsidy: '' };
}
</script>
