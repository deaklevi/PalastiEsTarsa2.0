<script setup>
const props = defineProps({
  imageSrc: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true }
})
</script>

<template>
  <a 
    :href="link"
    target="_blank"
    class="group flex flex-col md:flex-row bg-neutral-900 border-2 border-orange-600 rounded-sm overflow-hidden mb-6 transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/20 hover:-translate-y-1 w-full max-w-[900px] mx-auto cursor-pointer"
  >
    <div class="w-full md:w-1/3 lg:w-1/4 aspect-[4/3] md:aspect-auto overflow-hidden bg-white border-b-2 md:border-b-0 md:border-r-2 border-orange-600">
      <img 
        :src="imageSrc" 
        :alt="title" 
        class="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div class="flex-1 p-4 md:p-6 flex flex-col justify-center relative bg-neutral-800 text-left">
      <div class="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
      </div>

      <h3 class="text-lg md:text-xl font-bold text-white uppercase tracking-wider mb-2 group-hover:text-orange-500 transition-colors">
        {{ title }}
      </h3>
      
      <div class="h-0.5 w-12 bg-orange-600 mb-3"></div>

      <p class="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
        {{ description }}
      </p>

      <div class="flex items-center text-orange-500 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
        <span>Dokumentáció megnyitása (PDF)</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </a>
</template>