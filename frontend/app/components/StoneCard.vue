<script setup>
import { ref, computed, onUnmounted, watch } from 'vue'

// SEO Meta adatok
// useSeoMeta({
//   title: 'Sírkő készítés Budapesten',
//   ogTitle: 'Sírkő készítés és kőfaragás',
//   description: 'Több évtizedes tapasztalattal kínálunk tartós és elegáns síremlékeket.',
//   ogDescription: 'Minőségi gránit, márvány és mészkő munkák Garanciával.',
// })

const props = defineProps({
  group: { 
    type: String, 
    required: true 
  }
})

// Alap URL beállítása (a környezeti változóból, vagy fallback)
const baseUrl = import.meta.env.VITE_APP_URL || 'https://palasti-laravel.saavatar.xyz'
const selectedItem = ref(null)
const currentIndex = ref(0)

// 1. KÓD EREDETI LOGIKÁJA: Nuxt useFetch használata
// Ha a Laravel backend végpontod /api/tombstones, akkor írd át arra a szót!
const { data: response, pending: loading, error } = await useFetch(`${baseUrl}/api/stones`, {
  key: `stones-${props.group}`,
  watch: [() => props.group]
})

// Adatok szűrése az adott csoportra
const filteredStones = computed(() => {
  const rawData = response.value?.data || response.value || []
  return Array.isArray(rawData) ? rawData.filter(item => item.group === props.group) : []
})

// Görgetés letiltása a háttérben, ha nyitva a modális
const toggleScroll = (isLocked) => {
  const action = isLocked ? 'hidden' : ''
  document.body.style.overflow = action
  document.documentElement.style.overflow = action
}

const openModal = (item, index) => {
  currentIndex.value = index
  selectedItem.value = item
  toggleScroll(true)
}

const closeModal = () => {
  selectedItem.value = null
  toggleScroll(false)
}

const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % filteredStones.value.length
  selectedItem.value = filteredStones.value[currentIndex.value]
}

const prevItem = () => {
  currentIndex.value = (currentIndex.value - 1 + filteredStones.value.length) % filteredStones.value.length
  selectedItem.value = filteredStones.value[currentIndex.value]
}

const handleKeyDown = (e) => {
  if (e.key === 'ArrowRight') nextItem()
  if (e.key === 'ArrowLeft') prevItem()
  if (e.key === 'Escape') closeModal()
}

// Billentyűzet események figyelése
watch(selectedItem, (newVal) => {
  if (newVal) window.addEventListener('keydown', handleKeyDown)
  else window.removeEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  toggleScroll(false)
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div v-if="loading" class="mt-10 text-gray-500 italic animate-pulse text-sm">Adatok betöltése...</div>
    <div v-else-if="error" class="mt-10 text-red-500">Hiba történt a szerverrel való kapcsolat során.</div>
    <div v-else-if="filteredStones.length === 0" class="mt-10 text-gray-400 italic">Ebben a kategóriában jelenleg nincsenek feltöltött képek.</div>

    <div v-else class="flex flex-wrap justify-center gap-6 max-w-[1500px]">
      <div 
        v-for="(item, index) in filteredStones" :key="item.id" 
        class="w-[42%] sm:w-44 md:w-52 cursor-pointer group flex flex-col items-center" 
        @click="openModal(item, index)"
      >
        <div class="bg-white border-2 border-orange-600 p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
          <img 
            :src="baseUrl + item.image_url" 
            :alt="`Sírkő készítés - ${item.name} ${item.tombstone_id ? '(' + item.tombstone_id + ')' : ''}`"
            class="w-full h-auto max-h-48 md:max-h-56 object-contain block" 
            loading="lazy"
          />
        </div>
        <h5 class="text-[11px] md:text-sm text-center break-words mt-3 text-black font-medium leading-tight px-1">
          <span v-if="item.tombstone_id" class="text-orange-500 font-bold uppercase">{{ item.tombstone_id }}</span>
          <span v-if="item.tombstone_id" class="text-gray-300 mx-1">|</span>
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
                :alt="`Sírkő készítés - ${selectedItem.name} ${selectedItem.tombstone_id ? '(' + selectedItem.tombstone_id + ')' : ''}`"
                class="max-w-full max-h-[45vh] lg:max-h-[75vh] object-contain block" 
              />
            </div>

            <div class="w-full lg:w-2/5 p-5 md:p-8 flex flex-col justify-between bg-neutral-900 overflow-y-auto">
              <div>
                <p class="text-orange-500 font-black tracking-[0.2em] text-[10px] md:text-xs mb-1 uppercase">
                  <span v-if="selectedItem.tombstone_id">Termékkód: {{ selectedItem.tombstone_id }}</span>
                  <span v-else>Azonosító: {{ selectedItem.id }}</span>
                </p>
                
                <h2 class="text-xl md:text-3xl font-bold text-white mb-3 uppercase tracking-tighter leading-none">
                  {{ selectedItem.name }}
                </h2>
                
                <div class="h-1 w-12 bg-orange-600 mb-5"></div>

                <div class="text-gray-300 text-xs md:text-sm leading-relaxed overflow-y-auto max-h-[15vh] lg:max-h-[40vh] mb-6 pr-2 custom-scrollbar">
                  <div class="space-y-2">
                    <p><span class="text-orange-600 font-semibold">Anyagnév:</span> {{ selectedItem.name }}</p>
                    <p v-if="selectedItem.origin"><span class="text-orange-600 font-semibold">Származás:</span> {{ selectedItem.origin }}</p>
                    <p v-if="selectedItem.color"><span class="text-orange-600 font-semibold">Szín:</span> {{ selectedItem.color }}</p>
                    
                    <p v-if="selectedItem.description" class="mt-3 pt-3 border-t border-gray-700">
                      {{ selectedItem.description }}
                    </p>
                  </div>
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
/* Egyedi Gördítősáv */
.custom-scrollbar::-webkit-scrollbar { 
  width: 4px; 
}
.custom-scrollbar::-webkit-scrollbar-thumb { 
  background: #ea580c; 
  border-radius: 10px;
}

/* Átmenet animációk */
.fade-enter-active, .fade-leave-active { 
  transition: opacity 0.3s ease; 
}
.fade-enter-from, .fade-leave-to { 
  opacity: 0; 
}

/* Hardveres gyorsítás a villódzás megelőzésére */
img {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>