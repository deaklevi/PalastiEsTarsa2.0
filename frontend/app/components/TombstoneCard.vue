<script setup>
useSeoMeta({
  title: 'Sírkő készítés Budapesten',
  ogTitle: 'Sírkő készítés és kőfaragás',
  description: 'Több évtizedes tapasztalattal kínálunk tartós és elegáns síremlékeket.',
  ogDescription: 'Minőségi gránit, márvány és mészkő munkák Garanciával.',
})

import { ref, computed, onUnmounted, watch } from 'vue'

const props = defineProps({
  group: { type: String, required: true }
})

const baseUrl = 'https://palasti-laravel.saavatar.xyz'
const selectedItem = ref(null)
const currentIndex = ref(0)

const { data: response, pending: loading, error } = await useFetch(`${baseUrl}/api/tombstones`, {
  key: `tombstones-${props.group}`,
  watch: [() => props.group]
})

const filteredTombstones = computed(() => {
  const rawData = response.value?.data || response.value || []
  return Array.isArray(rawData) ? rawData.filter(item => item.group === props.group) : []
})

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
  currentIndex.value = (currentIndex.value + 1) % filteredTombstones.value.length
  selectedItem.value = filteredTombstones.value[currentIndex.value]
}

const prevItem = () => {
  currentIndex.value = (currentIndex.value - 1 + filteredTombstones.value.length) % filteredTombstones.value.length
  selectedItem.value = filteredTombstones.value[currentIndex.value]
}

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
  <div class="flex flex-col items-center mx-5 md:mx-12 mb-24 md:mb-52">
    <div v-if="loading" class="mt-10 text-gray-500 italic animate-pulse text-sm">Adatok betöltése...</div>
    <div v-else-if="error" class="mt-10 text-red-500">Hiba történt a szerverrel való kapcsolat során.</div>
    <div v-else-if="filteredTombstones.length === 0" class="mt-10 text-gray-400 italic">Ebben a kategóriában jelenleg nincsenek feltöltött képek.</div>

    <div v-else class="flex flex-wrap justify-center gap-6 max-w-[1500px]">
      <div 
        v-for="(item, index) in filteredTombstones" :key="item.id" 
        class="w-[42%] sm:w-44 md:w-52 cursor-pointer group flex flex-col items-center" 
        @click="openModal(item, index)"
      >
        <div class="bg-white border-2 border-orange-600 p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
          <img 
            :src="baseUrl + item.image_url" 
            class="w-full h-auto max-h-48 md:max-h-56 object-contain block" 
            loading="lazy"
          />
        </div>
        <h5 class="text-[11px] md:text-sm text-center break-words mt-3 text-black font-medium leading-tight px-1">
          <span class="text-orange-500 font-bold uppercase">{{ item.tombstone_id }}</span>
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
              class="absolute top-2 right-2 md:top-4 md:right-6 text-white text-3xl md:text-5xl font-light hover:text-orange-500 transition-colors z-[100] bg-black/50 md:bg-transparent rounded-full w-10 h-10 md:w-auto md:h-auto flex items-center justify-center leading-none"
            >
              &times;
            </button>

            <div class="w-full lg:w-3/5 bg-white p-2 md:p-6 flex items-center justify-center min-h-[250px] lg:min-h-0">
              <img 
                :src="baseUrl + selectedItem.image_url" 
                :alt="selectedItem.name" 
                class="max-w-full max-h-[45vh] lg:max-h-[75vh] object-contain block" 
              />
            </div>

            <div class="w-full lg:w-2/5 p-5 md:p-8 flex flex-col justify-between bg-neutral-900 overflow-y-auto">
              <div>
                <p class="text-orange-500 font-black tracking-[0.2em] text-[10px] md:text-xs mb-1 uppercase">
                  Termékkód: {{ selectedItem.tombstone_id }}
                </p>
                <h2 class="text-xl md:text-3xl font-bold text-white mb-3 uppercase tracking-tighter leading-none">
                  {{ selectedItem.name }}
                </h2>
                
                <div class="h-1 w-12 bg-orange-600 mb-5"></div>

                <div class="text-gray-300 text-xs md:text-sm leading-relaxed overflow-y-auto max-h-[15vh] lg:max-h-[40vh] mb-6 pr-2 custom-scrollbar">
                  {{ selectedItem.description || 'Ez a modell kiváló minőségű gránitból készül, egyedi méretben és feliratozással is rendelhető.' }}
                </div>
              </div>

              <div class="flex justify-center gap-3 pt-4 border-t border-gray-800">
                <button @click="prevItem" class="flex-1 py-3 md:py-4 bg-neutral-800 border border-gray-700 text-white hover:bg-orange-600 hover:border-orange-600 transition-all font-bold uppercase text-[9px] md:text-[11px] tracking-widest">
                  Vissza
                </button>
                <button @click="nextItem" class="flex-1 py-3 md:py-4 bg-neutral-800 border border-gray-700 text-white hover:bg-orange-600 hover:border-orange-600 transition-all font-bold uppercase text-[9px] md:text-[11px] tracking-widest">
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

/* Kép villódzás elleni védelem */
img {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>