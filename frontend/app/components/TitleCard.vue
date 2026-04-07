<script setup>
/**
 * A modernebb kinézetű kártya komponens
 */
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col md:flex-row items-center md:items-start bg-neutral-900 border-2 border-orange-600 p-5 gap-6 transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/20 group">
    
    <div class="flex-shrink-0 overflow-hidden rounded-sm">
      <img 
        :src="imageSrc" 
        :alt="imageSrc" 
        class="h-40 w-48 object-cover"
        loading="lazy"
      >
    </div>

    <div class="text-white text-left flex-1">
      <p class="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity" v-html="text"></p>
    </div>
  </div>
</template>