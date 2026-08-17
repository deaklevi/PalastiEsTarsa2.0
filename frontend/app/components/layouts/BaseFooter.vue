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
            <div class="flex flex-col md:flex-row md:gap-4 justify-center pb-5">
               <p class="flex flex-col">
                 <span class="text-gray-500 text-[10px] uppercase font-bold">Palásti István</span>
                 <a href="tel:+36302790261" class="hover:text-orange-600 transition-colors text-xs md:text-sm">+36 30 279 0261</a>
               </p>
               <p class="flex flex-col">
                 <span class="text-gray-500 text-[10px] uppercase font-bold">Deák László</span>
                 <a href="tel:+36309004800" class="hover:text-orange-600 transition-colors text-xs md:text-sm">+36 30 900 4800</a>
               </p>
            </div>
            
            <div class="border-t border-white/5 flex flex-col md:items-center gap-2 py-5">
              <!-- Facebook -->
              <a href="https://www.facebook.com/profile.php?id=61588600083212&locale=hu_HU" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 hover:text-orange-600 transition-colors text-xs font-medium">
                <svg class="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/>
                </svg>
                <span>Palasti Gránit</span>
              </a>
              
              <!-- Instagram -->
              <a href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 hover:text-orange-600 transition-colors text-xs font-medium">
                <svg class="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.115.051 1.722.237 2.128.39a4.26 4.26 0 0 1 1.485.967c.437.437.757.924.967 1.485.153.406.339 1.013.39 2.128.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.051 1.115-.237 1.722-.39 2.128a4.266 4.266 0 0 1-.967 1.485c-.437.437-.924.757-1.485.967-.406.153-1.013.339-2.128.39-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.115-.051-1.722-.237-2.128-.39a4.261 4.261 0 0 1-1.485-.967c-.437-.437-.757-.924-.967-1.485-.153-.406-.339-1.013-.39-2.128-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.051-1.115.237-1.722.39-2.128a4.251 4.251 0 0 1 .967-1.485c.437-.437.924-.757 1.485-.967.406-.153 1.013-.339 2.128-.39 1.266-.058 1.646-.07 4.85-.07Zm0 2.037c-3.132 0-3.514.011-4.738.067-1.013.048-1.564.218-1.931.363a2.218 2.218 0 0 0-.824.536c-.215.215-.393.455-.536.824-.145.367-.315.918-.363 1.931-.056 1.224-.067 1.606-.067 4.738s.011 3.514.067 4.738c.048 1.013.218 1.564.363 1.931.143.369.321.609.536.824.215.215.455.393.824.536.367.145.918.315 1.931.363 1.224.056 1.606.067 4.738.067s3.514-.011 4.738-.067c1.013-.048 1.564-.218 1.931-.363.368-.146.609-.324.824-.536.215-.215.455-.393.536-.824.145-.367.315-.918.363-1.931.056-1.224.067-1.606.067-4.738s-.011-3.514-.067-4.738c-.048-1.013-.218-1.564-.363-1.931a2.219 2.219 0 0 0-.536-.824c-.215-.215-.455-.393-.824-.536-.367-.145-.918-.315-1.931-.363-1.224-.056-1.606-.067-4.738-.067Zm0 3.317a4.646 4.646 0 1 0 0 9.292 4.646 4.646 0 0 0 0-9.292Zm0 7.255a2.609 2.609 0 1 1 0-5.218 2.609 2.609 0 0 1 0 5.218Zm6.33-7.459a1.085 1.085 0 1 0 0-2.17 1.085 1.085 0 0 0 0 2.17Z" clip-rule="evenodd"/>
                </svg>
                <span>Palasti Gránit</span>
              </a>

              <!-- TikTok -->
              <a href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 hover:text-orange-600 transition-colors text-xs font-medium">
                <svg class="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89h1.12v-3.45h-1.12a6.34 6.34 0 1 0 0 12.68 6.34 6.34 0 0 0 6.34-6.34V6.94a7.25 7.25 0 0 0 6.07 3.57V6.94c-1.76 0-3.17-.89-4.48-2.4z"/>
                </svg>
                <span>Palasti Gránit</span>
              </a>
            </div>

            <p class="pt-2 border-t border-white/5 italic pt-5">
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