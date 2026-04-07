<script setup>
import { ref } from 'vue'

defineProps({
  title: { type: String, required: true },
  imageSrc: { type: String, required: true },
  description: { type: String, required: true }
})

const isOpen = ref(false)

// Segédfüggvények a görgetés tiltásához a modál nyitásakor
const toggleModal = (state) => {
  isOpen.value = state
  if (state) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}
</script>

<template>
  <div 
    @click="toggleModal(true)"
    class="flex flex-col sm:flex-row bg-neutral-900 border-2 border-orange-600 shadow-lg hover:shadow-orange-600/30 hover:-translate-y-1 transition-all duration-300 group overflow-hidden h-full relative cursor-pointer"
  >
    
    <div class="w-full sm:w-40 md:w-48 flex-shrink-0 bg-white border-b-2 sm:border-b-0 sm:border-r-2 border-orange-600">
      <img 
        :src="imageSrc" 
        :alt="title" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div class="p-4 flex flex-col justify-center flex-1 text-left">
      <h3 class="text-white text-base font-bold mb-2 uppercase tracking-tight group-hover:text-orange-500 transition-colors">
        {{ title }}
      </h3>
      
      <p class="text-gray-300 text-xs md:text-sm leading-snug line-clamp-3">
        {{ description }}
      </p>
    </div>

    <Teleport to="body">
      <div v-if="isOpen" 
           class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
           @click.self="toggleModal(false)">
        
        <div class="bg-neutral-900 border-2 border-orange-600 max-w-[90%] md:max-w-4xl max-h-[90vh] overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row">
          
          <button @click="toggleModal(false)" class="absolute top-4 right-4 text-orange-600 hover:scale-110 transition-transform z-30 bg-black/50 p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="w-full md:w-1/2 bg-white flex items-center justify-center min-h-[250px] md:min-h-0">
            <img 
              :src="imageSrc" 
              :alt="title" 
              class="max-w-full max-h-[40vh] md:max-h-[70vh] object-contain p-4" 
            />
          </div>

          <div class="w-full md:w-1/2 p-6 md:p-10 text-left overflow-y-auto bg-neutral-900 border-t-2 md:border-t-0 md:border-l-2 border-orange-600">
            <h3 class="text-xl md:text-3xl font-bold text-orange-600 uppercase mb-2 pr-10">
              {{ title }}
            </h3>
            <div class="h-1 w-16 bg-orange-600 mb-6"></div>
            
            <p class="text-white text-sm md:text-base leading-relaxed whitespace-pre-line pr-2 custom-scrollbar">
              {{ description }}
            </p>

            <div class="mt-10 flex justify-end">
              <button @click="toggleModal(false)" 
                      class="bg-orange-600 text-black font-bold py-2 px-8 hover:bg-orange-500 transition-colors uppercase text-xs">
                Bezárás
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
/* Egyedi görgetősáv a hosszú szövegekhez */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #ea580c;
  border-radius: 10px;
}
</style>