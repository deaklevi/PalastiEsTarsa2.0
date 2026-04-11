<template>
  <section class="max-w-7xl mx-auto px-4 py-16">
    <div class="flex flex-col lg:flex-row gap-12">
      
      <div class="lg:w-1/3 lg:sticky lg:top-32 h-fit">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          <slot name="title"></slot>
        </h2>
        <div class="w-12 h-1 bg-orange-600 mb-6"></div>
        <div class="text-gray-600 text-sm leading-relaxed space-y-4 whitespace-pre-line">
          <slot name="description"></slot>
        </div>
      </div>

      <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <NuxtLink 
          v-for="(item, index) in items" 
          :key="index"
          :to="item.link || '#'"
          class="relative group block overflow-hidden rounded-xl shadow-md bg-gray-900 h-64 border border-gray-800"
        >
          <img 
            :src="item.image" 
            class="absolute inset-0 w-full h-full object-cover transition-all duration-700 blur-[2px] group-hover:blur-0 group-hover:scale-105 opacity-60 group-hover:opacity-80"
            alt="Palásti szolgáltatás"
          />
          
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          <div class="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 class="text-orange-500 font-bold text-lg mb-1 transform group-hover:-translate-y-1 transition-transform" v-html="item.title"></h3>
            <p class="text-white/80 text-xs leading-snug line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {{ item.shortDesc }}
            </p>
            <span class="text-white text-[10px] uppercase tracking-widest mt-3 inline-block border-b border-orange-600 pb-1">Részletek megtekintése</span>
          </div>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>