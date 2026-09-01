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
          In-Person Visit • Holyrood, NL
        </span>
        <h3 class="font-serif text-2xl sm:text-3xl text-[#1C2622]">
          Schedule a Tour of Hi Haven
        </h3>
        <p class="text-xs text-[#5F6B65] font-light mt-1">
          Meet Lori & Rob Condon, tour our resident accommodations, see the dining and living spaces, and get all your questions answered.
        </p>
      </div>

      <div v-if="booked" class="p-5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs my-4">
        <h4 class="font-semibold text-sm mb-1">Tour Request Confirmed!</h4>
        <p>Thank you, {{ form.name }}. Lori & Rob Condon have received your tour booking for <strong>{{ form.date }} ({{ form.time }})</strong> and will follow up with you directly.</p>
        <button 
          @click="$emit('close'); booked = false"
          class="mt-4 px-4 py-2 bg-[#1C2622] text-white text-xs uppercase tracking-wider"
        >
          Close Window
        </button>
      </div>

      <form v-else @submit.prevent="handleBooking" class="space-y-4">
        <div>
          <label class="block text-[11px] uppercase tracking-wider font-medium text-[#1C2622] mb-1">
            Your Full Name *
          </label>
          <input 
            v-model="form.name" 
            type="text" 
            required 
            class="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#1C2622] focus:outline-none focus:border-[#1C2622]" 
            placeholder="e.g. John Condon"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-[11px] uppercase tracking-wider font-medium text-[#1C2622] mb-1">
              Phone Number *
            </label>
            <input 
              v-model="form.phone" 
              type="tel" 
              required 
              class="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#1C2622] focus:outline-none focus:border-[#1C2622]" 
              placeholder="(709) 000-0000"
            />
          </div>
          <div>
            <label class="block text-[11px] uppercase tracking-wider font-medium text-[#1C2622] mb-1">
              Email Address
            </label>
            <input 
              v-model="form.email" 
              type="email" 
              class="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#1C2622] focus:outline-none focus:border-[#1C2622]" 
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-[11px] uppercase tracking-wider font-medium text-[#1C2622] mb-1">
              Preferred Date *
            </label>
            <input 
              v-model="form.date" 
              type="date" 
              required 
              class="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#1C2622] focus:outline-none focus:border-[#1C2622]"
            />
          </div>
          <div>
            <label class="block text-[11px] uppercase tracking-wider font-medium text-[#1C2622] mb-1">
              Preferred Time Slot *
            </label>
            <select 
              v-model="form.time" 
              class="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#1C2622] focus:outline-none focus:border-[#1C2622]"
            >
              <option value="Morning (10:00 AM - 11:30 AM)">Morning (10:00 AM - 11:30 AM)</option>
              <option value="Early Afternoon (1:30 PM - 3:00 PM)">Early Afternoon (1:30 PM - 3:00 PM)</option>
              <option value="Late Afternoon (3:30 PM - 5:00 PM)">Late Afternoon (3:30 PM - 5:00 PM)</option>
              <option value="Evening (6:00 PM - 7:30 PM)">Evening (6:00 PM - 7:30 PM)</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-[11px] uppercase tracking-wider font-medium text-[#1C2622] mb-1">
            Questions or Specific Considerations
          </label>
          <textarea 
            v-model="form.notes" 
            rows="3" 
            class="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#1C2622] focus:outline-none focus:border-[#1C2622]" 
            placeholder="Let us know if you have specific mobility needs, dietary questions, or subsidy inquiries..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          class="w-full py-3 bg-[#1C2622] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#C5A059] transition-all cursor-pointer mt-2"
        >
          Confirm Tour Request
        </button>

        <div class="text-[10px] text-gray-500 text-center">
          Location: 36 Butterpot Road, Holyrood, NL • Phone: (709) 229-7992
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  isOpen: Boolean
});

defineEmits(['close']);

const booked = ref(false);
const form = ref({
  name: '',
  phone: '',
  email: '',
  date: '',
  time: 'Early Afternoon (1:30 PM - 3:00 PM)',
  notes: ''
});

function handleBooking() {
  booked.value = true;
}
</script>
