<template>
  <section id="contact" class="py-20 bg-[#FAF8F5] border-b border-[#E5DFC5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Left Column: Contact Details & Info -->
        <div class="lg:col-span-5 flex flex-col">
          <span class="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
            Admissions & Inquiries
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl text-[#1C2622] font-normal leading-tight mb-6">
            Get in Touch with Lori & Rob Condon
          </h2>
          <p class="text-sm text-[#5F6B65] font-light leading-relaxed mb-8">
            Whether you are exploring residential placement for a loved one, inquiring about government subsidies through Eastern Health, or booking an in-person tour, we are here to support your family.
          </p>

          <div class="space-y-5 text-xs text-[#2A3631] mb-8">
            <div class="flex items-start gap-3 p-4 bg-white border border-[#E5DFC5]">
              <Phone class="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <strong class="text-[#1C2622] block font-medium">Telephone & Fax:</strong>
                <a :href="'tel:' + businessInfo.phoneClean" class="hover:text-[#C5A059] font-medium">
                  Phone: {{ businessInfo.phone }}
                </a>
                <div class="text-gray-500">Fax: {{ businessInfo.fax }}</div>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 bg-white border border-[#E5DFC5]">
              <Mail class="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <strong class="text-[#1C2622] block font-medium">Email Address:</strong>
                <a :href="'mailto:' + businessInfo.email" class="hover:text-[#C5A059]">
                  {{ businessInfo.email }}
                </a>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 bg-white border border-[#E5DFC5]">
              <MapPin class="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <strong class="text-[#1C2622] block font-medium">Physical Address:</strong>
                <span>{{ businessInfo.address }}, {{ businessInfo.city }}, {{ businessInfo.province }} {{ businessInfo.postalCode }}</span>
                <span class="text-gray-500 block mt-0.5">30 minutes from downtown St. John's</span>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 bg-white border border-[#E5DFC5]">
              <Clock class="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <strong class="text-[#1C2622] block font-medium">Visiting & Office Hours:</strong>
                <span>{{ businessInfo.visitingHours }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Inquiry Form -->
        <div class="lg:col-span-7">
          <div class="bg-white border border-[#E5DFC5] p-8 sm:p-10 shadow-sm">
            <h3 class="font-serif text-2xl text-[#1C2622] mb-2">
              Send an Admission Inquiry
            </h3>
            <p class="text-xs text-[#5F6B65] font-light mb-6">
              Complete this form and Lori & Rob will get back to you promptly by phone or email.
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div v-if="submitted" class="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
                <strong>Thank you!</strong> Your message has been received. Lori & Rob will contact you shortly.
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-[11px] uppercase tracking-wider font-medium text-[#1C2622] mb-1">
                    Your Full Name *
                  </label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    required 
                    class="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#1C2622] focus:outline-none focus:border-[#1C2622]" 
                    placeholder="e.g. Jane Miller"
                  />
                </div>
                <div>
                  <label class="block text-[11px] uppercase tracking-wider font-medium text-[#1C2622] mb-1">
                    Phone Number *
                  </label>
                  <input 
                    v-model="form.phone" 
                    type="tel" 
                    required 
                    class="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#1C2622] focus:outline-none focus:border-[#1C2622]" 
                    placeholder="(709) 000-0000"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-[11px] uppercase tracking-wider font-medium text-[#1C2622] mb-1">
                    Email Address
                  </label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    class="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#1C2622] focus:outline-none focus:border-[#1C2622]" 
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label class="block text-[11px] uppercase tracking-wider font-medium text-[#1C2622] mb-1">
                    Inquiry Type
                  </label>
                  <select 
                    v-model="form.interest" 
                    class="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#1C2622] focus:outline-none focus:border-[#1C2622]"
                  >
                    <option value="long-term">Long-Term Placement (15-Bed Home)</option>
                    <option value="respite">Short-Term Respite Stay</option>
                    <option value="subsidy">Eastern Health Subsidy Questions</option>
                    <option value="tour">Book an In-Person Tour</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-[11px] uppercase tracking-wider font-medium text-[#1C2622] mb-1">
                  Tell Us About Your Loved One & Questions
                </label>
                <textarea 
                  v-model="form.message" 
                  rows="4" 
                  required 
                  class="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#1C2622] focus:outline-none focus:border-[#1C2622]" 
                  placeholder="Share details regarding care needs, preferred timing, or questions about our Holyrood home..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="w-full py-3.5 bg-[#1C2622] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#C5A059] transition-all cursor-pointer"
              >
                Send Inquiry to Hi Haven Manor
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Phone, Mail, MapPin, Clock } from 'lucide-vue-next';
import { BUSINESS_INFO } from '../data/hiHavenData.js';

const businessInfo = BUSINESS_INFO;
const submitted = ref(false);

const form = ref({
  name: '',
  phone: '',
  email: '',
  interest: 'long-term',
  message: ''
});

function handleSubmit() {
  submitted.value = true;
  setTimeout(() => {
    form.value = {
      name: '',
      phone: '',
      email: '',
      interest: 'long-term',
      message: ''
    };
  }, 3000);
}
</script>
