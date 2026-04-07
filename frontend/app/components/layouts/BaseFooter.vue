<template>
  <footer class="w-full bg-slate-950 text-white border-t border-orange-600/30">
    <div class="max-w-7xl mx-auto px-6 py-8 md:py-10">
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-start">
        
        <div class="flex flex-col md:items-center text-left md:text-center group">
          <div class="flex items-center md:justify-center mb-2">
            <h3 class="text-orange-600 font-bold text-base uppercase tracking-wider">Cím</h3>
          </div>
          <p class="text-gray-400 text-sm hover:text-white transition-colors duration-300">
            <a href="https://maps.google.com/?q=H-1214+Budapest+II.+Rákóczi+Ferenc+út+251" 
               target="_blank" 
               class="hover:underline leading-snug">
              H-1214 Budapest<br>
              II. Rákóczi Ferenc út 251.
            </a>
          </p>
        </div>

        <div class="flex flex-col md:items-center text-left md:text-center border-y md:border-y-0 md:border-x border-orange-600/20 py-4 md:py-0 px-2">
          <h3 class="text-orange-600 font-bold text-base uppercase tracking-wider mb-3">Elérhetőség</h3>
          <div class="space-y-2 text-sm">
            <p class="flex flex-col">
              <span class="text-gray-500 text-[10px] uppercase font-bold">Iroda</span>
              <a href="tel:+3612768246" class="hover:text-orange-600 transition-colors">+36 1 276 8246</a>
            </p>
            <div class="flex flex-col md:flex-row md:gap-4 justify-center">
               <p class="flex flex-col">
                 <span class="text-gray-500 text-[10px] uppercase font-bold">Palásti István</span>
                 <a href="tel:+36302790261" class="hover:text-orange-600 transition-colors text-xs md:text-sm">+36 30 279 0261</a>
               </p>
               <p class="flex flex-col">
                 <span class="text-gray-500 text-[10px] uppercase font-bold">Deák László</span>
                 <a href="tel:+36309004800" class="hover:text-orange-600 transition-colors text-xs md:text-sm">+36 30 900 4800</a>
               </p>
            </div>
            <p class="pt-2 border-t border-white/5 italic">
              <a href="mailto:palasti.kft@gmail.com" class="text-orange-600 hover:underline text-xs">palasti.kft@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="flex flex-col md:items-center text-left md:text-center">
          <h3 class="text-orange-600 font-bold text-base uppercase tracking-wider mb-3">Nyitvatartás</h3>
          <ul class="text-gray-400 text-xs md:text-sm space-y-1">
            <li class="flex justify-between md:justify-center md:gap-4">
              <span class="font-medium text-gray-300">H - P:</span>
              <span>07:30 - 16:30</span>
            </li>
            <li class="flex justify-between md:justify-center md:gap-4">
              <span class="font-medium text-gray-300">Szombat:</span>
              <span>09:00 - 12:00</span>
            </li>
            <li class="flex justify-between md:justify-center md:gap-4 text-red-500/80">
              <span class="font-medium">Vasárnap:</span>
              <span>Zárva</span>
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        <h3 class="text-gray-500 text-[11px] font-medium tracking-wide">
          Copyright © {{ new Date().getFullYear() }} - <span class="text-gray-300 uppercase">Palásti és Társa Kft.</span>
        </h3>
        <div class="flex gap-4 text-[10px] text-gray-600 uppercase font-bold tracking-widest">
          <span>Minőség</span>
          <span class="text-orange-600/50">•</span>
          <span>Hagyomány</span>
          <span class="text-orange-600/50">•</span>
          <span>Szakértelem</span>
        </div>
      </div>
    </div>
  </footer>
</template>