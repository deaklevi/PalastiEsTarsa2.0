<script setup>
/**
 * Csak szöveges, prémium megjelenésű információs kártya
 */
defineProps({
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="bg-neutral-900 border-2 border-orange-600 p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/10 group relative overflow-hidden w-full">
    
    <div class="absolute -top-12 -right-12 w-24 h-24 bg-orange-600/5 rounded-full blur-3xl group-hover:bg-orange-600/10 transition-colors"></div>

    <div class="relative z-10">
      <div v-if="title" class="mb-6">
        <h3 class="text-orange-600 font-black uppercase tracking-widest text-lg md:text-xl">
          {{ title }}
        </h3>
        <div class="h-1 w-16 bg-orange-600 mt-2"></div>
      </div>

      <div class="text-white/90 text-sm md:text-base leading-relaxed text-left">
        <div class="prose prose-invert max-w-none prose-orange" v-html="content"></div>
      </div>
    </div>
    
    <div class="absolute bottom-0 left-0 h-1 bg-orange-600 w-0 group-hover:w-full transition-all duration-500"></div>
  </div>
</template>

<style scoped>
/* A v-html-en belüli span-ek és formázások finomhangolása */
:deep(span.text-orange-600) {
  display: inline-block;
  margin-bottom: 0.25rem;
}

:deep(br) {
  margin-bottom: 0.5rem;
}
</style>