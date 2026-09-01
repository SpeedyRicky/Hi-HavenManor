<template>
  <section class="py-20 bg-[#F3EFEA] border-b border-[#E5DFC5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
          Interactive Care Navigator
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl text-[#1C2622] font-normal leading-tight mb-4">
          Find the Right Support for Your Family
        </h2>
        <p class="text-sm sm:text-base text-[#5F6B65] font-light">
          Explore how Hi Haven Manor adapts daily care, nutrition, and clinical oversight to your loved one's specific circumstances.
        </p>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button
          v-for="tab in careLevels"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium border transition-all cursor-pointer',
            activeTab === tab.id
              ? 'bg-[#1C2622] text-white border-[#1C2622]'
              : 'bg-white text-[#5F6B65] border-[#E5DFC5] hover:border-[#1C2622] hover:text-[#1C2622]'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Detail Card for Active Tab -->
      <div class="bg-white border border-[#E5DFC5] p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5DFC5] pb-6 mb-6">
          <div>
            <span class="text-[10px] font-semibold uppercase tracking-widest text-[#C5A059] block mb-1">
              {{ currentLevel.category }}
            </span>
            <h3 class="font-serif text-2xl sm:text-3xl text-[#1C2622]">
              {{ currentLevel.title }}
            </h3>
          </div>
          <button 
            @click="$emit('open-tour')"
            class="px-5 py-2.5 bg-[#1C2622] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#C5A059] transition-all self-start md:self-auto"
          >
            Inquire About Placement
          </button>
        </div>

        <p class="text-sm text-[#5F6B65] font-light leading-relaxed mb-8">
          {{ currentLevel.summary }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-xs uppercase tracking-wider font-semibold text-[#1C2622] mb-3 flex items-center gap-2">
              <CheckCircle class="w-4 h-4 text-[#C5A059]" />
              Included Living & Health Services
            </h4>
            <ul class="space-y-2 text-xs text-[#2A3631]">
              <li v-for="(item, idx) in currentLevel.included" :key="idx" class="flex items-start gap-2">
                <span class="text-emerald-700 font-bold">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-[#FAF8F5] border border-[#E5DFC5] p-5">
            <h4 class="text-xs uppercase tracking-wider font-semibold text-[#1C2622] mb-2 flex items-center gap-2">
              <Shield class="w-4 h-4 text-[#C5A059]" />
              Provincial Funding Guidance
            </h4>
            <p class="text-xs text-[#5F6B65] leading-relaxed mb-3">
              {{ currentLevel.fundingInfo }}
            </p>
            <div class="text-[11px] text-[#233B31] font-medium border-t border-[#E5DFC5] pt-2">
              Lori & Rob can guide you through the Eastern Health subsidy application process.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { CheckCircle, Shield } from 'lucide-vue-next';

defineEmits(['open-tour']);

const activeTab = ref('longterm');

const careLevels = [
  {
    id: 'longterm',
    label: 'Long-Term Supportive Care',
    category: 'Permanent Residence',
    title: 'Long-Term Supportive Living (15 Beds)',
    summary: 'A stable, permanent home in Holyrood for adults who need ongoing daily living support, medication supervision, nutritious home cooking, and a compassionate surrogate family environment.',
    included: [
      'Furnished resident bedroom with personalized touches',
      '24/7 on-site Personal Care Attendants (PCAs)',
      '3 home-cooked meals + 3 daily snack periods',
      'Scheduled medication administration & doctor visits',
      'Complete laundry & daily housekeeping services'
    ],
    fundingInfo: 'Government-subsidized through Eastern Health (NL Health Services). Families can apply for provincial subsidies.'
  },
  {
    id: 'respite',
    label: 'Short-Term Respite Stay',
    category: 'Temporary Relief',
    title: 'Short-Term Respite & Caregiver Relief',
    summary: 'Flexible temporary stays designed to provide family caregivers with rest and peace of mind while ensuring their loved one receives 24/7 certified care in a welcoming setting.',
    included: [
      'Fully furnished room with all linens and amenities',
      'Full participation in all meals, dining, and activities',
      'Continuous PCA supervision and medication oversight',
      'Short-term trial periods available by arrangement'
    ],
    fundingInfo: 'Respite availability is managed on a rolling basis. Contact Lori & Rob directly to discuss availability and rates.'
  },
  {
    id: 'psychosocial',
    label: 'Psychosocial & Mental Wellness',
    category: 'Specialized Program',
    title: 'Mental Health & Addiction Program Alignment',
    summary: 'Tailored psychosocial support and structured routine in partnership with Eastern Health’s Mental Health and Addiction program to foster self-determination, calm, and stability.',
    included: [
      'Calm, structured daily schedule with wholesome routines',
      'On-site psychiatric specialist coordination & follow-ups',
      'Recreation, card games, grounds walks, and library leisure',
      'Respectful, trauma-informed staff communication'
    ],
    fundingInfo: 'Subsidized placement through Eastern Health Mental Health and Addiction program case coordinators.'
  }
];

const currentLevel = computed(() => {
  return careLevels.find(l => l.id === activeTab.value) || careLevels[0];
});
</script>
