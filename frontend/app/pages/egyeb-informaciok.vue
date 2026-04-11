<script setup>
// Nuxt SEO meta adatok
useSeoMeta({
  title: 'Hasznos információk – Palásti és Társa Kft.',
  description: 'Minden, amit a síremlékekről, a gránit tulajdonságairól és a temetkezési kultúráról tudni érdemes. Szakmai tanácsok és gyakori kérdések.',
})

/**
 * A szövegeket változókban tartjuk a tisztaság kedvéért.
 */
const funeralCulture = `
  A temetkezés módjai mindig az adott nép túlvilági felfogását tükrözték. Az ókori egyiptomiak mumifikálásától kezdve a vikingek hajós temetésén át a modern hamvasztásig a cél mindig a végtisztesség megadása volt. A síremlék állítása ezen valláserkölcsi hagyományok egyik legfontosabb pillére, a maradandó emlékezés szimbóluma.
`

const whyGranite = `
  <ul class='space-y-3'>
    <li><strong class='text-orange-500'>Örök életű:</strong> Vulkáni eredetű, rendkívül kemény kőzet, melyet az egyiptomi obeliszkek óta ismerünk.</li>
    <li><strong class='text-orange-500'>Időjárásálló:</strong> Nem reped, nem korrodálódik, savnak és lúgnak ellenáll.</li>
    <li><strong class='text-orange-500'>Könnyű tisztítás:</strong> Ellentétben a mészkővel vagy márvánnyal, a gránit nem szívja magába a mély szennyeződéseket, fénye évtizedekig megmarad.</li>
  </ul>
`

const howToChoose = `
  <div class='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
    <div class='bg-white/5 p-3 rounded'>1. <strong>Jogosultság:</strong> Csak a sírhely felett rendelkező személy állíttathat sírkövet.</div>
    <div class='bg-white/5 p-3 rounded'>2. <strong>Méret:</strong> Urna, szimpla, dupla vagy kripta méretek meghatározása.</div>
    <div class='bg-white/5 p-3 rounded'>3. <strong>Alapozás:</strong> Fix (helyszíni beton) vagy mobil (előregyártott) szerkezet.</div>
    <div class='bg-white/5 p-3 rounded'>4. <strong>Formavilág:</strong> Egyedi elképzelések megvalósítása fotó vagy rajz alapján.</div>
  </div>
`

const pricingInfo = `
  <p class='mb-4'>A síremlék árát négy fő tényező határozza meg:</p>
  <ul class='space-y-2'>
    <li><span class='text-orange-500 font-bold'>•</span> <strong>Nyersanyag:</strong> A bánya helyszíne és a kitermelés nehézsége határozza meg (nem minőségi különbség).</li>
    <li><span class='text-orange-500 font-bold'>•</span> <strong>Anyagszükséglet:</strong> A kő vastagsága és kiterjedése.</li>
    <li><span class='text-orange-500 font-bold'>•</span> <strong>Megmunkálás:</strong> A kézi faragások és bonyolult élek munkaigénye.</li>
    <li><span class='text-orange-500 font-bold'>•</span> <strong>Kiegészítők:</strong> Váza, mécses, bronz kellékek.</li>
  </ul>
`

const orderingProcess = `
  <p>A kiválasztást követően <strong class='text-white'>írásos szerződést</strong> kötünk, amely rögzíti a pontos méreteket, anyagot és határidőt. Az előleg mértéke megegyezés kérdése. 
  <br><br>
  <span class='bg-orange-600/20 text-orange-500 px-2 py-1 rounded text-xs font-bold uppercase'>Garancia:</span> 
  Anyagszerkezetre 5 év, süllyedésre 2-5 év garanciát vállalunk.</p>
`

const specialServices = `
  <ul class='space-y-2'>
    <li class='flex items-start gap-2'>
      <span class='text-orange-600 mt-1'>✔</span> 
      <span><strong>3D látványtervezés:</strong> Egyedi igények esetén vizuális tervet készítünk.</span>
    </li>
    <li class='flex items-start gap-2'>
      <span class='text-orange-600 mt-1'>✔</span> 
      <span><strong>Országos kiszállitás:</strong> Magyarország egész területén vállalunk telepítést.</span>
    </li>
    <li class='flex items-start gap-2'>
      <span class='text-orange-600 mt-1'>✔</span> 
      <span><strong>Teljes adminisztráció:</strong> A temetői engedélyeztetést elvégezzük Ön helyett.</span>
    </li>
  </ul>
`
</script>

<template>
  <LazyLayoutsBaseLayout>
    <div class="bg-slate-900 min-h-screen pb-24 text-white">
      
      <header class="relative py-16 px-6 overflow-hidden">
        <div class="absolute inset-0 bg-orange-600 opacity-5 skew-y-3 transform origin-top-left"></div>
        <div class="container mx-auto max-w-5xl relative z-10 text-center md:text-left">
          <h1 class="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">
            Hasznos <span class="text-orange-600">Információk</span>
          </h1>
          <div class="h-1 w-24 bg-orange-600 mt-4 mx-auto md:mx-0"></div>
          <p class="mt-6 text-slate-400 max-w-2xl leading-relaxed">
            Szakmai tudástárunk segítséget nyújt a megfelelő alapanyag kiválasztásától kezdve a síremlék gondozásán át a jogi előírásokig.
          </p>
        </div>
      </header>

      <main class="container mx-auto max-w-5xl px-6">
        <div class="grid grid-cols-1 gap-8">
          
          <InfoCard title="Temetkezési kultúra" :text="funeralCulture" icon="history" />
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard title="Miért a gránit?" :text="whyGranite" />
            <InfoCard title="Megrendelés menete" :text="orderingProcess" />
          </div>

          <InfoCard title="Hogyan válasszunk sírkövet?" :text="howToChoose" />

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard title="Árképzés" :text="pricingInfo" />
            <InfoCard title="Különleges szolgáltatások" :text="specialServices" />
          </div>

        </div>

        <div class="mt-20 p-8 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-800 border border-slate-700 text-center">
          <h3 class="text-xl font-bold mb-4">További kérdése van?</h3>
          <p class="text-slate-400 mb-6">Szakembereink készséggel válaszolnak minden technikai vagy esztétikai kérdésére.</p>
          <NuxtLink to="/kapcsolat" class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all active:scale-95">
            Kapcsolatfelvétel
          </NuxtLink>
        </div>
      </main>
    </div>
  </LazyLayoutsBaseLayout>
</template>