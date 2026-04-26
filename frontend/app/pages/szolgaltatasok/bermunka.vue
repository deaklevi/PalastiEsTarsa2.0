<script setup>
// SEO beállítások
useSeoMeta({
  title: 'Bérmunka – Palásti és Társa Kft.',
  ogTitle: 'Bérmunka - Sírkő készítés és kőfaragás',
  description: 'Profi kőmegmunkálási szolgáltatások: fűrészelés, csiszolás és gravírozás modern technológiával.',
  keywords: 'Kőfeldolgozás, bérvágás, bércsiszolás, bérmunka, gránit, márvány, mészkő'
})

// Adatlekérés az API-ból
const { data: works, pending, error } = await useFetch('https://palasti-laravel.saavatar.xyz/api/works', {
  // Opcionális: átalakíthatod az adatot, ha az API-ban mások a kulcsnevek
  transform: (res) => res.data || res 
})
</script>

<template>
  <LayoutsBaseLayout>
    <header class="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
      <div class="flex items-center gap-3 mb-4 text-orange-600">
        <div class="w-8 h-[2px] bg-orange-600"></div>
        <span class="font-bold uppercase tracking-widest text-xs">Szolgáltatások</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
        Bérmunka
      </h1>
    </header>

    <main class="max-w-6xl mx-auto px-6 py-16 md:pb-52">
      <div v-if="pending" class="flex justify-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>

      <div v-else-if="error" class="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100 text-center">
        Hiba történt az adatok betöltésekor. Kérjük, próbálja később!
      </div>

      <div v-else class="overflow-hidden rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 bg-white">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-900 text-white">
                <th class="px-8 py-5 font-semibold uppercase text-xs tracking-wider">Munka típusa</th>
                <th class="px-8 py-5 font-semibold uppercase text-xs tracking-wider">Anyag</th>
                <th class="px-8 py-5 font-semibold uppercase text-xs tracking-wider text-center">Méret</th>
                <th class="px-8 py-5 font-semibold uppercase text-xs tracking-wider text-right">Árak (Nettó)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr 
                v-for="(work, index) in works" 
                :key="work.id || index" 
                class="hover:bg-orange-50 transition-colors duration-150 group"
              >
                <td class="px-8 py-4 text-gray-900 font-medium">
                  {{ work.type }}
                </td>
                <td class="px-8 py-4 text-gray-600 italic">
                  {{ work.stone_type }}
                </td>
                <td class="px-8 py-4 text-gray-500 text-center font-mono text-sm">
                  {{ work.size }}
                </td>
                <td class="px-8 py-4 text-right">
                  <span class="text-orange-600 font-bold text-lg">{{ work.price }}</span>
                                
                  <span class="text-gray-400 text-xs ml-1 font-medium">
                    {{ index >= works.length - 3 ? 'Ft/fm' : 'Ft/m²' }}
                  </span>
                </td>
              </tr>
              
              <tr v-if="!works || works.length === 0">
                <td colspan="4" class="px-8 py-10 text-center text-gray-400 italic">
                  Jelenleg nincsenek elérhető árak a listában.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mt-8 flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
        <span class="text-orange-600">ⓘ</span>
        <p class="text-sm text-gray-500 leading-relaxed">
          Az árak tájékoztató jellegűek és a hozott anyag minőségének függvényében változhatnak. 
          Nagyobb mennyiségű megrendelés esetén egyedi kedvezményeket biztosítunk.
        </p>
      </div>
    </main>
  </LayoutsBaseLayout>
</template>

<style scoped>
.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}
.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: #e5e7eb;
  border-radius: 10px;
}
</style>