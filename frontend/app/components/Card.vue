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
  <component
    :is="link ? 'NuxtLink' : 'div'"
    v-bind="linkProps"
    class="w-44 max-[380px]:w-[46%] md:w-56 flex flex-col bg-neutral-800 rounded-sm border-2 border-orange-600 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-2 group"
  >
    <div class="relative w-full aspect-square overflow-hidden bg-neutral-900">
      <img 
        :src="imageSrc" 
        :alt="imageSrc" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
    </div>

    <div class="p-3 flex-grow flex items-center justify-center min-h-[60px]">
      <h4 
        class="text-xs md:text-sm font-bold text-center text-white leading-tight uppercase tracking-wider" 
        v-html="title"
      ></h4>
    </div>
  </component>
</template>

<style scoped>
/* v-html-en belüli span-ek (pl. kiemelt szavak) narancssárgák lesznek */
:deep(span) {
  @apply text-orange-500;
}

/* Kattintható kurzor kezelése */
.group {
  cursor: v-bind("link ? 'pointer' : 'default'");
}
</style>