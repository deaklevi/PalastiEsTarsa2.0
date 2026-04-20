<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Csak a képek listája marad
const images = [
  '/slider/slider_img_1.jpg',
  '/slider/slider_img_2.jpg',
  '/slider/slider_img_3.jpg',
  '/slider/slider_img_4.jpg',
  '/slider/slider_img_5.jpg'
]

const currentSlide = ref(0)
let timer = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length
}

onMounted(() => { timer = setInterval(nextSlide, 3000) })
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<template>
  <section class="relative w-full h-screen overflow-hidden bg-slate-950 font-sans">
    
    <div v-for="(img, index) in images" :key="index">
      <transition name="fade">
        <div v-if="currentSlide === index" class="absolute inset-0 w-full h-full">
          <img 
            :src="img" 
            class="w-full h-full object-cover brightness-[0.35] transition-transform duration-[12000ms] ease-out scale-110"
            :class="{ 'scale-100': currentSlide === index }"
            alt="Palásti Gránit háttérkép"
          />
        </div>
      </transition>
    </div>

    <div class="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none"></div>

    <div class="relative z-20 flex items-center justify-center h-full px-6">
      <div class="relative w-full max-w-5xl flex flex-col items-center text-center">
        
        <div class="flex flex-col items-center justify-center">
          <p class="text-orange-500 font-medium tracking-[0.6em] text-[10px] md:text-[12px] mb-6 uppercase drop-shadow-sm">
            A Kő – legyen az gránit, márvány vagy mészkő – az életünk!
          </p>
          
          <h1 class="text-white text-4xl md:text-[5.5rem] font-extrabold uppercase leading-[0.95] tracking-tight mb-8 drop-shadow-2xl">
            Palásti és <span class="text-orange-600">Társa Kft.</span>
          </h1>
          
          <p class="text-gray-200 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            A sírkő a szeretet és tisztelet kifejezése elhunyt hozzátartozónk iránt, egyben jelöli végső nyughelyét; egy utolsó tisztelgés annak emléke előtt, aki már nem lehet velünk.
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12 w-full sm:w-auto">
          <NuxtLink to="/sirko" 
            class="relative group overflow-hidden px-10 py-4 bg-orange-600 text-white rounded-sm transition-all duration-300 hover:bg-orange-700 active:scale-95 shadow-lg"
          >
            <span class="relative z-10 font-bold uppercase text-[11px] tracking-[0.2em]">Munkáink megtekintése</span>
          </NuxtLink>

          <NuxtLink to="/ajanlatkeres" 
            class="group px-10 py-4 border border-white/20 bg-white/5 rounded-sm text-white transition-all duration-300 hover:bg-white hover:text-black active:scale-95 backdrop-blur-md"
          >
            <span class="font-bold uppercase text-[11px] tracking-[0.2em]">Ingyenes ajánlatkérés</span>
          </NuxtLink>
        </div>

      </div>
    </div>

    </section>
</template>

<style scoped>
/* Képváltás lassan, finoman (3 másodperces áttűnés) */
.fade-enter-active, .fade-leave-active { 
  transition: opacity 3s cubic-bezier(0.4, 0, 0.2, 1); 
}
.fade-enter-from, .fade-leave-to { 
  opacity: 0; 
}

/* Fix szöveg megjelenése az oldal betöltésekor */
h1, p {
  animation: fadeInUp 1.5s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

img {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>