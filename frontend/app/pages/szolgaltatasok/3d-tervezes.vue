<template>
  <LayoutsBaseLayout>
    <div class="max-w-5xl mx-auto px-6 pt-16 md:pt-24 text-center md:text-left">
      <div class="flex items-center gap-3 mb-4 justify-center md:justify-start text-orange-600">
        <div class="w-8 h-[2px] bg-orange-600"></div>
        <span class="font-bold uppercase tracking-widest text-xs">Szolgáltatások</span>
      </div>
      
      <h1 class="text-4xl md:text-6xl font-black text-gray-900 leading-none">
        3D látványtervezés
      </h1>
    </div>

    <div class="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <div 
          v-for="(video, index) in videos" 
          :key="index"
          class="flex flex-col group bg-black/5 rounded-xl p-6 transition-shadow duration-500 hover:shadow-lg hover:shadow-gray-300"
        >
          <h3 class="mb-4 text-sm font-bold text-gray-700 uppercase tracking-tight group-hover:text-orange-600 transition-colors">
            {{ video.title }}
          </h3>

          <div class="relative w-full overflow-hidden rounded-xl bg-black shadow-lg shadow-gray-200 transition-transform duration-500 group-hover:-translate-y-2" style="aspect-ratio: 16 / 9;">
            <iframe 
              class="absolute top-0 left-0 w-full h-full border-0"
              :src="video.link" 
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
          </div>
          
          <div class="mt-4 w-0 group-hover:w-full h-[2px] bg-orange-600 transition-all duration-500"></div>
        </div>

      </div>
    </div>
  </LayoutsBaseLayout>
</template>

<script setup>
useSeoMeta({
  title: '3D látványtervezés',
  ogTitle: 'Sírkő készítés és kőfaragás',
  description: 'A szolgáltatások oldalon bemutatjuk a síremlék és egyéb építészeti munkálatokhoz tartozó tevékenységi körünket, amivel professzionálisan eleget tehetünk az egyre inkább gyakori különleges igényeknek.',
  ogDescription: 'Minőségi gránit, márvány és mészkő munkák Garanciával.',
  keywords: 'Sírkő, síremlék, emlékmű, építészet, kőburkolat, lézergravírozás, 3D-s tervezés, gránit, márvány, mészkő'
})


const videos = [
  { title: "Kripta síremlék 3D látványterv", link: "https://www.youtube.com/embed/wj2cVbPeIVI" },
  { title: "Kripta síremlék 3D látványterv", link: "https://www.youtube.com/embed/clkRm8QivvE" },
  { title: "Kripta síremlék 3D látványterv", link: "https://www.youtube.com/embed/_3ISJ9a-Cn4" },
  { title: "Kripta síremlék 3D látványterv", link: "https://www.youtube.com/embed/aUYK3ePZ6kk" },
  { title: "Kripta síremlék 3D látványterv", link: "https://www.youtube.com/embed/GQxADX2jO0A" },
  { title: "Dupla síremlék 3D látványterv", link: "https://www.youtube.com/embed/ZG2b3VP_3SM" },
  { title: "Szimpla síremlék 3D látványterv", link: "https://www.youtube.com/embed/fQiogy-FtyE" },
  { title: "Szimpla síremlék 3D látványterv", link: "https://www.youtube.com/embed/u18Id1Rez7M" },
  { title: "Dupla síremlék 3D látványterv", link: "https://www.youtube.com/embed/O5tI_OvsOu0" },
  { title: "Dupla síremlék 3D látványterv", link: "https://www.youtube.com/embed/8Vd00E9hQDg" },
  { title: "Kripta síremlék 3D látványterv", link: "https://www.youtube.com/embed/R-hXz1wDhes" },
  { title: "Kripta síremlék 3D látványterv", link: "https://www.youtube.com/embed/6Rnu8CbbuuY" },
  { title: "Kripta síremlék 3D látványterv", link: "https://www.youtube.com/embed/_A3_fXgDzH8" },
  { title: "Dupla síremlék 3D látványterv", link: "https://www.youtube.com/embed/Sn2bkoa1xl0" },
]
</script>

<style scoped>
/* Ha a Tailwind verziód nem támogatná az aspect-ratio-t: */
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>