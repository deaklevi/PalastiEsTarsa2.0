<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  { image: '/slider/slider_img_1.jpg', title: 'Időtálló <span class="text-orange-600">Minőség</span>', subtitle: 'PROFESSZIONÁLIS KŐFELDOLGOZÁS 1954 ÓTA' },
  { image: '/slider/slider_img_2.jpg', title: 'Művészet a <span class="text-orange-600">Kőben</span>', subtitle: 'EGYEDI SÍREMLÉKEK ÉS DÍSZTÁRGYAK' },
  { image: '/slider/slider_img_3.jpg', title: 'Precíz <span class="text-orange-600">Megmunkálás</span>', subtitle: 'MODERN TECHNOLÓGIA, TRADICIONÁLIS TUDÁS' },
  { image: '/slider/slider_img_4.jpg', title: 'Otthoni <span class="text-orange-600">Megoldások</span>', subtitle: 'PRÉMIUM KONYHAPULTOK ÉS BURKOLATOK' },
  { image: '/slider/slider_img_5.jpg', title: 'Palásti és <span class="text-orange-600">Társa Kft.</span>', subtitle: 'FORDULJON HOZZÁNK BIZALOMMAL' }
]

const currentSlide = ref(0)
let timer = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => { timer = setInterval(nextSlide, 6000) })
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<template>
  <section class="relative w-full h-screen overflow-hidden bg-slate-950 font-sans">
    
    <div v-for="(slide, index) in slides" :key="index">
      <transition name="fade">
        <div v-if="currentSlide === index" class="absolute inset-0 w-full h-full">
          <img 
            :src="slide.image" 
            class="w-full h-full object-cover brightness-[0.4] transition-transform duration-[12000ms] ease-out scale-110"
            :class="{ 'scale-100': currentSlide === index }"
          />
        </div>
      </transition>
    </div>

    <div class="absolute inset-0 z-10 bg-gradient-to-tr from-black/60 via-transparent to-black/40 backdrop-blur-[4px] pointer-events-none"></div>

    <div class="relative z-20 flex items-center justify-center h-full px-6">
      <div class="relative w-full max-w-5xl flex flex-col items-center text-center">
        
        <div class="min-h-[200px] md:min-h-[250px] flex items-center justify-center">
          <transition name="text-fade" mode="out-in">
            <div :key="currentSlide">
              <p class="text-orange-500 font-medium tracking-[0.6em] text-[9px] md:text-[11px] mb-8 uppercase drop-shadow-sm">
                {{ slides[currentSlide].subtitle }}
              </p>
              <h1 
                class="text-white text-4xl md:text-[5.5rem] font-extrabold uppercase leading-[0.95] tracking-tight mb-8 drop-shadow-2xl"
                v-html="slides[currentSlide].title"
              ></h1>
              <p class="text-gray-300/80 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                Több mint 70 év szakmai alázattal faragjuk meg szerettei emlékét a legnemesebb természetes kövekből.
              </p>
            </div>
          </transition>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12 w-full sm:w-auto">
          
          <NuxtLink to="/sirko" 
            class="relative group overflow-hidden px-10 py-3.5 bg-orange-600 text-white rounded-sm transition-all duration-300 hover:bg-orange-700 active:scale-95 shadow-lg hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]"
          >
            <span class="relative z-10 font-bold uppercase text-[10px] tracking-[0.2em]">Munkáink</span>
          </NuxtLink>

          <NuxtLink to="/ajanlatkeres" 
            class="group px-10 py-3.5 border border-orange-600/50 bg-orange-600/5 rounded-sm text-orange-500 transition-all duration-300 hover:bg-orange-600 hover:text-white active:scale-95 backdrop-blur-sm"
          >
            <span class="font-bold uppercase text-[10px] tracking-[0.2em]">Ajánlatkérés</span>
          </NuxtLink>
          
        </div>

      </div>
    </div>

    <div class="absolute bottom-12 flex gap-6 left-1/2 -translate-x-1/2 z-30">
      <button 
        v-for="(_, i) in slides" :key="i"
        @click="currentSlide = i"
        class="group flex flex-col items-center py-2"
      >
        <div 
          class="h-[1px] transition-all duration-700 ease-in-out"
          :class="currentSlide === i ? 'w-20 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,1)]' : 'w-8 bg-white/20 group-hover:bg-white/50'"
        ></div>
        <span class="mt-2 text-[8px] text-white/0 group-hover:text-white/40 transition-all duration-300 font-mono">0{{ i + 1 }}</span>
      </button>
    </div>

  </section>
</template>

<style scoped>
/* Képváltás */
.fade-enter-active, .fade-leave-active { transition: opacity 3s cubic-bezier(0.4, 0, 0.2, 1); }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Szöveg animáció */
.text-fade-enter-active, .text-fade-leave-active { 
  transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1); 
}
.text-fade-enter-from { 
  opacity: 0; 
  filter: blur(15px);
  transform: translateY(10px) scale(0.95); 
}
.text-fade-leave-to { 
  opacity: 0; 
  filter: blur(15px);
  transform: translateY(-10px) scale(1.05); 
}
</style>