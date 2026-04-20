<script setup>
/**
 * ACCESSORIES COMPONENT - Saavatar Backend Integration
 */
const props = defineProps({
  group: { type: String, required: true }
})

const baseUrl = 'https://palasti-laravel.saavatar.xyz'
const selectedItem = ref(null)
const currentIndex = ref(0)

// Adatok lekérése közvetlenül az API-ból (Pinia helyett useFetch a stabilitásért)
const { data: response, pending: loading, error } = await useFetch(`${baseUrl}/api/accessories`, {
  key: `accessories-${props.group}`,
  watch: [() => props.group]
})

// Szűrés a kategória (group) alapján
const filteredAccessories = computed(() => {
  const rawData = response.value?.data || response.value || []
  return Array.isArray(rawData) ? rawData.filter(item => item.group === props.group) : []
})

// Modál kezelő funkciók
const openModal = (item, index) => {
  currentIndex.value = index
  selectedItem.value = item
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedItem.value = null
  document.body.style.overflow = ''
}

const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % filteredAccessories.value.length
  selectedItem.value = filteredAccessories.value[currentIndex.value]
}

const prevItem = () => {
  currentIndex.value = (currentIndex.value - 1 + filteredAccessories.value.length) % filteredAccessories.value.length
  selectedItem.value = filteredAccessories.value[currentIndex.value]
}

// Billentyűzet figyelés
const handleArrowKeys = (e) => {
  if (e.key === 'ArrowRight') nextItem()
  if (e.key === 'ArrowLeft') prevItem()
  if (e.key === 'Escape') closeModal()
}

watch(selectedItem, (val) => {
  if (val) window.addEventListener('keydown', handleArrowKeys)
  else window.removeEventListener('keydown', handleArrowKeys)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleArrowKeys)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div v-if="loading" class="mt-10 text-gray-500 italic animate-pulse text-sm">Kiegészítők betöltése...</div>
    <div v-else-if="error" class="mt-10 text-red-500">Hiba történt a kiegészítők betöltésekor.</div>
    <div v-else-if="filteredAccessories.length === 0" class="mt-10 text-gray-400 italic">Ebben a kategóriában nincsenek kiegészítők.</div>

    <div v-else class="flex flex-wrap justify-center gap-6 max-w-[1500px]">
      <div 
        v-for="(item, index) in filteredAccessories" :key="item.id" 
        class="w-[42%] sm:w-44 md:w-52 cursor-pointer group flex flex-col items-center" 
        @click="openModal(item, index)"
      >
        <div class="bg-white border-2 border-orange-600 p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 w-full aspect-square flex items-center justify-center overflow-hidden">
          <img 
            :src="baseUrl + item.image_url" 
            :alt="`${item.name} - Sírkő kiegészítő (${item.accessory_id})`"
            class="max-w-full max-h-full object-contain block" 
            loading="lazy"
          />
        </div>
        <h5 class="text-[11px] md:text-sm text-center break-words mt-3 text-black font-medium leading-tight px-1">
          <span class="text-orange-500 font-bold uppercase">{{ item.accessory_id }}</span>
          <span class="text-gray-300 mx-1">|</span>
          {{ item.name }}
        </h5>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="selectedItem" 
          class="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] w-screen h-screen p-3 md:p-6 backdrop-blur-md"
          @click="closeModal"
        >
          <div 
            class="relative w-full max-w-5xl max-h-[90vh] lg:max-h-[85vh] bg-neutral-900 border-2 border-orange-600 flex flex-col lg:flex-row overflow-hidden shadow-2xl" 
            @click.stop
          >
            <button 
              @click="closeModal" 
              class="absolute top-2 right-2 md:top-4 md:right-6 text-white text-3xl md:text-5xl font-light hover:text-orange-500 transition-colors z-[100] bg-black/50 md:bg-transparent rounded-full w-10 h-10 md:w-auto md:h-auto flex items-center justify-center"
            >
              &times;
            </button>

            <div class="w-full lg:w-3/5 bg-white p-4 md:p-8 flex items-center justify-center min-h-[250px] lg:min-h-0">
              <img 
                :src="baseUrl + selectedItem.image_url" 
                :alt="`${selectedItem.name} - Sírkő kiegészítő (${selectedItem.accessory_id})`"                class="max-w-full max-h-[40vh] lg:max-h-[70vh] object-contain block" 
              />
            </div>

            <div class="w-full lg:w-2/5 p-5 md:p-8 flex flex-col justify-between bg-neutral-900 overflow-y-auto">
              <div>
                <p class="text-orange-500 font-black tracking-[0.2em] text-[10px] md:text-xs mb-1 uppercase">
                  Azonosító: {{ selectedItem.accessory_id }}
                </p>
                <h2 class="text-xl md:text-3xl font-bold text-white mb-3 uppercase tracking-tighter leading-tight">
                  {{ selectedItem.name }}
                </h2>
                
                <div class="h-1 w-12 bg-orange-600 mb-6"></div>

                <div class="space-y-4 text-gray-300 text-xs md:text-sm custom-scrollbar pr-2 mb-6">
                  <div v-if="selectedItem.type" class="border-b border-white/10 pb-2">
                    <span class="text-orange-500 font-bold uppercase text-[9px] block">Típus:</span>
                    {{ selectedItem.type }}
                  </div>
                  <div v-if="selectedItem.size" class="border-b border-white/10 pb-2">
                    <span class="text-orange-500 font-bold uppercase text-[9px] block">Elérhető méretek:</span>
                    {{ selectedItem.size }}
                  </div>
                  <div v-if="selectedItem.recommended_type" class="border-b border-white/10 pb-2">
                    <span class="text-orange-500 font-bold uppercase text-[9px] block">Ajánlott kőtípus:</span>
                    {{ selectedItem.recommended_type }}
                  </div>
                  <div v-if="selectedItem.manufacturing_technology" class="border-b border-white/10 pb-2">
                    <span class="text-orange-500 font-bold uppercase text-[9px] block">Technológia:</span>
                    {{ selectedItem.manufacturing_technology }}
                  </div>
                </div>
              </div>

              <div class="flex justify-center gap-3 pt-4 border-t border-gray-800">
                <button @click="prevItem" class="flex-1 py-3 bg-neutral-800 border border-gray-700 text-white hover:bg-orange-600 hover:border-orange-600 transition-all font-bold uppercase text-[9px] md:text-[11px] tracking-widest">
                  Vissza
                </button>
                <button @click="nextItem" class="flex-1 py-3 bg-neutral-800 border border-gray-700 text-white hover:bg-orange-600 hover:border-orange-600 transition-all font-bold uppercase text-[9px] md:text-[11px] tracking-widest">
                  Következő
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 3px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #ea580c; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

img {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>