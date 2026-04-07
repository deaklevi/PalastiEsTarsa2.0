<script setup>
import { computed } from 'vue'

const props = defineProps({
  imageSrc: { 
    type: String, 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  link: { 
    type: [String, Object], 
    default: null 
  }
})

/**
 * NuxtLink specifikus 'to' prop kezelése
 */
const linkProps = computed(() => {
  return props.link ? { to: props.link } : {}
})
</script>

<template>
  <NuxtLink 
    v-if="link"
    :to="link"
    class="w-40 max-[380px]:w-[44%] md:w-52 flex flex-col bg-neutral-800 rounded-sm border-2 border-orange-600 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-1 group"
  >
    <div class="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900 border-b border-orange-600/20">
      <img 
        :src="imageSrc" 
        :alt="title" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
    </div>

    <div class="p-2 md:p-3 flex items-center justify-center min-h-[50px]">
      <h4 
        class="text-[10px] md:text-xs font-bold text-center text-white leading-tight uppercase tracking-wider group-hover:text-orange-500 transition-colors" 
        v-html="title"
      ></h4>
    </div>
  </NuxtLink>

  <div 
    v-else
    class="w-40 max-[380px]:w-[44%] md:w-52 flex flex-col bg-neutral-800 rounded-sm border-2 border-orange-600 overflow-hidden"
  >
    <div class="relative w-full aspect-[4/3] overflow-hidden">
      <img :src="imageSrc" class="w-full h-full object-cover" />
    </div>
    <div class="p-2 md:p-3 flex items-center justify-center min-h-[50px]">
      <h4 class="text-[10px] md:text-xs font-bold text-center text-white uppercase" v-html="title"></h4>
    </div>
  </div>
</template>