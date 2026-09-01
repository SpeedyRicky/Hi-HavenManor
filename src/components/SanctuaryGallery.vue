<template>
  <section id="gallery" class="py-20 bg-[#FDFCFB] border-b border-[#E5DFC5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
          Residence & Grounds Photo Gallery
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl text-[#1C2622] font-normal leading-tight mb-4">
          Hi Haven Manor Photo Gallery
        </h2>
        <p class="text-sm sm:text-base text-[#5F6B65] font-light">
          Official photography of 36 Butterpot Road, resident spaces, Adirondack lawn seating, grounds, and Holyrood surroundings.
        </p>
      </div>

      <!-- Quick Upload Banner for User Original Files -->
      <div class="mb-10 bg-[#233B31] text-white p-6 border border-[#C5A059]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="w-2 h-2 rounded-full bg-[#C5A059]"></span>
            <span class="text-xs font-mono uppercase tracking-widest text-[#C5A059] font-bold">Direct Original Photo Uploader</span>
          </div>
          <h3 class="font-serif text-lg text-white">
            Upload Your Exact Original Photos
          </h3>
          <p class="text-xs text-gray-300 font-light mt-0.5">
            Select or drag your original image files (e.g., <code class="bg-black/30 px-1 py-0.5 text-[#C5A059]">doner.webp</code>, <code class="bg-black/30 px-1 py-0.5 text-[#C5A059]">donerine.webp</code>, <code class="bg-black/30 px-1 py-0.5 text-[#C5A059]">doneriners.webp</code>, <code class="bg-black/30 px-1 py-0.5 text-[#C5A059]">image.png</code>) to populate the gallery and all site banners instantly with zero AI generation.
          </p>
        </div>
        <label class="px-6 py-3 bg-[#C5A059] hover:bg-[#b08b47] text-[#1C2622] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shrink-0 shadow">
          <span>Choose Exact Files</span>
          <input type="file" multiple accept="image/*" @change="handleMultiplePhotoUpload" class="hidden" />
        </label>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.id"
          :class="[
            'px-5 py-2.5 text-xs uppercase tracking-wider font-medium border transition-all cursor-pointer',
            activeCategory === cat.id
              ? 'bg-[#1C2622] text-white border-[#1C2622]'
              : 'bg-white text-[#5F6B65] border-[#E5DFC5] hover:border-[#1C2622]'
          ]"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Real Photos Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          @click="openLightbox(item)"
          class="bg-white border border-[#E5DFC5] overflow-hidden hover:border-[#1C2622] transition-all cursor-pointer shadow-sm group flex flex-col justify-between"
        >
          <!-- Photo Thumbnail with fallback placeholder if file not yet uploaded -->
          <div class="relative aspect-4/3 overflow-hidden bg-[#FAF8F5] flex items-center justify-center">
            <img 
              v-if="item.src && !item.loadError" 
              :src="item.src" 
              :alt="item.title"
              referrerPolicy="no-referrer"
              @error="item.loadError = true"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div v-else class="p-6 text-center flex flex-col items-center justify-center h-full w-full bg-[#FAF8F5] border-dashed border-2 border-[#E5DFC5] m-2">
              <span class="text-xs uppercase font-mono tracking-wider font-bold text-[#C5A059] mb-1">{{ item.title }}</span>
              <p class="text-[11px] text-[#5F6B65] leading-tight mb-2">{{ item.caption }}</p>
              <label class="text-[10px] uppercase font-semibold text-[#1C2622] underline cursor-pointer hover:text-[#C5A059]" @click.stop>
                <span>Upload Exact Photo</span>
                <input type="file" accept="image/*" @change="(e) => assignSpecificPhoto(e, item.id)" class="hidden" />
              </label>
            </div>
            
            <div class="absolute top-2 left-2 bg-[#1C2622]/85 text-white text-[9px] uppercase tracking-widest font-semibold px-2 py-1">
              {{ item.categoryLabel }}
            </div>
          </div>

          <!-- Photo Metadata Card Content -->
          <div class="p-5 flex flex-col justify-between grow">
            <div>
              <h3 class="font-serif text-base text-[#1C2622] mb-1.5 group-hover:text-[#C5A059] transition-colors line-clamp-1">
                {{ item.title }}
              </h3>
              <p class="text-xs text-[#5F6B65] font-light leading-relaxed line-clamp-2">
                {{ item.caption }}
              </p>
            </div>

            <div class="pt-3 mt-3 border-t border-[#E5DFC5]/60 flex items-center justify-between text-[11px] text-[#1C2622] font-medium">
              <span>View Full Photo</span>
              <span class="text-[#C5A059] group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div 
      v-if="activeLightboxItem" 
      class="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      @click.self="activeLightboxItem = null"
    >
      <div class="bg-white max-w-3xl w-full border border-[#E5DFC5] relative overflow-hidden shadow-2xl">
        <button 
          @click="activeLightboxItem = null"
          class="absolute top-3 right-3 bg-black/60 text-white hover:bg-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 cursor-pointer"
        >
          ✕
        </button>

        <div class="max-h-[65vh] bg-[#1C2622] flex items-center justify-center overflow-hidden">
          <img 
            v-if="activeLightboxItem.src && !activeLightboxItem.loadError"
            :src="activeLightboxItem.src" 
            :alt="activeLightboxItem.title"
            referrerPolicy="no-referrer"
            class="max-h-[65vh] w-auto max-w-full object-contain"
          />
          <div v-else class="p-12 text-center text-white">
            <h4 class="font-serif text-xl mb-2">{{ activeLightboxItem.title }}</h4>
            <p class="text-xs text-gray-300 mb-4">{{ activeLightboxItem.caption }}</p>
            <label class="px-4 py-2 bg-[#C5A059] text-[#1C2622] text-xs font-bold uppercase cursor-pointer">
              <span>Upload Exact Photo For This Slot</span>
              <input type="file" accept="image/*" @change="(e) => assignSpecificPhoto(e, activeLightboxItem.id)" class="hidden" />
            </label>
          </div>
        </div>

        <div class="p-6 bg-white">
          <span class="text-[10px] uppercase font-mono tracking-widest text-[#C5A059] font-bold block mb-1">
            {{ activeLightboxItem.categoryLabel }} • Holyrood, NL
          </span>
          <h3 class="font-serif text-2xl text-[#1C2622] mb-2">
            {{ activeLightboxItem.title }}
          </h3>
          <p class="text-xs sm:text-sm text-[#5F6B65] font-light leading-relaxed mb-4">
            {{ activeLightboxItem.caption }}
          </p>
          <div class="bg-[#FAF8F5] p-3 border border-[#E5DFC5] text-xs text-[#1C2622] flex items-center justify-between">
            <span><strong>Location:</strong> 36 Butterpot Road, Holyrood, NL (A0A 2P0)</span>
            <a href="tel:7092297992" class="text-[#C5A059] font-semibold hover:underline">(709) 229-7992</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { GALLERY_PHOTOS } from '../data/hiHavenData.js';

const activeCategory = ref('all');
const activeLightboxItem = ref(null);

const categories = [
  { id: 'all', label: 'All Photos (8)' },
  { id: 'home', label: 'Residence & Sign' },
  { id: 'rooms', label: 'Living & Dining' },
  { id: 'grounds', label: 'Park & Lawn' },
  { id: 'surroundings', label: 'Holyrood Lake' }
];

const photoItems = ref(GALLERY_PHOTOS.map(p => ({ ...p, loadError: false })));

onMounted(() => {
  // Load any previously uploaded photos from localStorage
  photoItems.value.forEach(item => {
    const saved = localStorage.getItem(`hihaven_photo_${item.id}`);
    if (saved) {
      item.src = saved;
      item.loadError = false;
    }
  });
});

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') return photoItems.value;
  return photoItems.value.filter(item => item.category === activeCategory.value);
});

function openLightbox(item) {
  activeLightboxItem.value = item;
}

function handleMultiplePhotoUpload(event) {
  const files = Array.from(event.target.files);
  if (!files.length) return;

  files.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      const fileName = file.name.toLowerCase();
      
      // Smart matching by filename
      let targetItem = null;
      if (fileName.includes('doner.') || fileName.includes('sign')) {
        targetItem = photoItems.value.find(p => p.id === 'photo-5');
      } else if (fileName.includes('donerine.') || fileName.includes('manor') || fileName.includes('exterior')) {
        targetItem = photoItems.value.find(p => p.id === 'photo-2');
      } else if (fileName.includes('doneriners.') || fileName.includes('lawn') || fileName.includes('adirondack')) {
        targetItem = photoItems.value.find(p => p.id === 'photo-1');
      } else if (fileName.includes('doneriner.') || fileName.includes('backyard') || fileName.includes('picnic')) {
        targetItem = photoItems.value.find(p => p.id === 'photo-4');
      } else if (fileName.includes('doneri.') || fileName.includes('garden') || fileName.includes('bench')) {
        targetItem = photoItems.value.find(p => p.id === 'photo-6');
      } else if (fileName.includes('donerin.') || (fileName.includes('lake') && fileName.includes('summer'))) {
        targetItem = photoItems.value.find(p => p.id === 'photo-7');
      } else if (fileName.includes('winter') || (fileName.includes('image') && index % 2 === 1)) {
        targetItem = photoItems.value.find(p => p.id === 'photo-8');
      } else if (fileName.includes('dining') || fileName.includes('hall') || (fileName.includes('image') && index % 2 === 0)) {
        targetItem = photoItems.value.find(p => p.id === 'photo-3');
      } else {
        // Fallback to sequential slot assignment
        targetItem = photoItems.value[index % photoItems.value.length];
      }

      if (targetItem) {
        targetItem.src = base64;
        targetItem.loadError = false;
        try {
          localStorage.setItem(`hihaven_photo_${targetItem.id}`, base64);
        } catch (err) {
          // In case of quota exceeded, skip localStorage cache
        }
      }
    };
    reader.readAsDataURL(file);
  });
}

function assignSpecificPhoto(event, photoId) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const base64 = e.target.result;
    const item = photoItems.value.find(p => p.id === photoId);
    if (item) {
      item.src = base64;
      item.loadError = false;
      try {
        localStorage.setItem(`hihaven_photo_${item.id}`, base64);
      } catch (err) {}
    }
  };
  reader.readAsDataURL(file);
}
</script>
