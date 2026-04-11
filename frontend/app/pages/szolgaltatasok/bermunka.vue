<template>
  <LayoutsBaseLayout>
    <header class="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
      <div class="flex items-center gap-3 mb-4 text-orange-600">
        <div class="w-8 h-[2px] bg-orange-600"></div>
        <span class="font-bold uppercase tracking-widest text-xs">Szolgáltatások</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
        Bérmunka <span class="text-gray-400">&</span> árlista
      </h1>
      <p class="mt-6 text-gray-500 max-w-2xl text-lg leading-relaxed">
        Gépi, műszaki és szakmai felkészültségünknek köszönhetően hozott anyagból is vállalunk 
        megmunkálást: darabolást, kalibrálást, fényezést és egyedi felületkezelést.
      </p>
    </header>

    <main class="max-w-6xl mx-auto px-6 py-16 md:pb-52">
      <div class="overflow-hidden rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 bg-white">
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
                :key="index" 
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
                  <span class="text-gray-400 text-xs ml-1 font-medium">Ft/m²</span>
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

<script setup>
useSeoMeta({
  title: 'Sírkő készítés Budapesten',
  ogTitle: 'Sírkő készítés és kőfaragás',
  description: 'Több évtizedes tapasztalattal kínálunk tartós és elegáns síremlékeket.',
  ogDescription: 'Minőségi gránit, márvány és mészkő munkák Garanciával.',
})

// Itt definiáljuk az adatokat közvetlenül, store nélkül
const works = [
  { type: 'Tömbfűrészelés', stone_type: 'Gránit / Márvány', size: '200x100 cm-ig', price: '12 500' },
  { type: 'Méretre vágás', stone_type: 'Természetes kövek', size: 'egyedi', price: '4 800' },
  { type: 'Felületcsiszolás (fényes)', stone_type: 'Gránit', size: 'táblás', price: '8 900' },
  { type: 'Égetés / Flammolás', stone_type: 'Gránit (csúszásmentes)', size: 'kültéri', price: '6 200' },
  { type: 'Kalibrálás', stone_type: 'Mészkő / Márvány', size: 'vastagság szerint', price: '3 500' },
  { type: 'Lézergravírozás', stone_type: 'Fekete gránit', size: 'max 60x40 cm', price: '15 000' }
]
</script>

<style scoped>
/* Egyéni görgetősáv a táblázatnak mobilon */
.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}
.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: #e5e7eb;
  border-radius: 10px;
}
</style>