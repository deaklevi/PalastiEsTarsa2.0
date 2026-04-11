<template>
  <section class="max-w-7xl mx-auto px-4 py-16">
    <div class="flex flex-col lg:flex-row gap-12">
      
      <div class="lg:w-2/5 lg:sticky lg:top-24 h-fit">
        <slot name="header">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Tevékenységeink
          </h2>
          <div class="w-20 h-1 bg-orange-600 mb-6"></div>
          <p class="text-gray-600 leading-relaxed">
            Ismerje meg széleskörű szolgáltatásainkat a sírkőkészítéstől az egyedi belsőépítészeti megoldásokig.
          </p>
        </slot>
      </div>

      <div class="lg:w-3/5 space-y-8">
        <div 
          v-for="(item, index) in items" 
          :key="index"
          class="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-4 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
        >
          <div class="flex-shrink-0 w-24 h-24  overflow-hidden rounded-full border-2 border-orange-100 shadow-sm">
            <img 
              :src="item.image" 
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              alt="szolgáltatás"
            />
          </div>

          <div class="flex-1 text-center sm:text-left">
            <p class="text-gray-700 leading-relaxed text-sm md:text-base" v-html="item.text"></p>
          </div>
        </div>
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