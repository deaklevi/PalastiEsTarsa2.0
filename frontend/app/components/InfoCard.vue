<template>
  <section class="group bg-slate-950/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl hover:border-orange-600/50 transition-all duration-300">
    <div class="flex items-center gap-4 mb-5">
      <div class="w-1.5 h-8 bg-orange-600 rounded-full"></div>
      <h2 class="text-white font-bold text-xl md:text-2xl tracking-tight group-hover:text-orange-500 transition-colors">
        {{ title }}
      </h2>
    </div>

    <div 
      class="info-content text-slate-300 text-sm md:text-base leading-relaxed"
      v-html="text"
    ></div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
/* A v-html tartalom professzionális formázása */
.info-content :deep(p) {
  @apply mb-4 last:mb-0;
}

.info-content :deep(ul) {
  @apply space-y-2;
}

.info-content :deep(li) {
  @apply relative pl-5;
}

.info-content :deep(li::before) {
  content: "•";
  @apply absolute left-0 text-orange-600 font-bold;
}

.info-content :deep(strong) {
  @apply text-white font-semibold;
}

.info-content :deep(em), .info-content :deep(italic) {
  @apply text-slate-500 text-sm italic;
}
</style>