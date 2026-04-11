<script setup>
useSeoMeta({
  title: 'Sírkő készítés Budapesten | Palásti és Társa Kft.',
  ogTitle: 'Sírkő készítés és profi kőfaragás',
  description: 'Több évtizedes tapasztalattal kínálunk tartós és elegáns síremlékeket, gránit konyhapultokat és burkolatokat.',
  ogDescription: 'Minőségi gránit, márvány és mészkő munkák garanciával, 1954 óta.',
})

// Példa adatok a kártyákhoz
const infoCards = [
  { 
    image: "/Home/sirko.jpg", 
    text: "A hazai piacra szánt kézműves <span class='text-orange-600 font-semibold text-lg'>sírkő</span> termékeink a szolíd árfekvésűtől az egyedi, prémium kategóriáig bezárólag, széles választékban állnak megrendelőink rendelkezésre. Ezáltal mindenki megtalálhatja az elképzelése és lehetőségéhez leginkább illő megoldásokat. Magától értetődő, hogy a hibátlan kőtermék csak a megfelelő minőségű alapanyagból készülhet. Sok évtizedes kapcsolatok fűznek bennünket hazai, európai és a világ számos országában működő kőbányákhoz. Igény szerint, a világon bányászott természetes kövek közül bármelyik beszerezhető és elképzelés szerint feldolgozzuk félkész ill. készterméknek." 
  },
  { 
    image: "/Home/epiteszet.jpg", 
    text: "Az <span class='text-orange-600 font-semibold text-lg'>építészet</span> oldalon felsorolt témakörök magukba foglalják tevékenységünk jelentős részét. Mint konyhapult, fürdőszobapult, lépcsőburkolat, ablakpárkány, kerítés fedkő, kőkorlát azaz baluszter korlát, kandalló, padlóburkolat, kültéri burkolatok azaz terasz-, fal-, lábazat- és homlokzatburkolat, kőbútor, emlékmű, emléktábla, szökőkút és speciális kőtermékek, mint tömb mosdókagyló, tömb zuhanytálca vagy precíziós, specifikus gépek és műszerek gépasztala. Ezek jelentős részét meglévő tervek alapján készítettük el, de az is előfordult többször, hogy csak a koncepció született meg és a szakmai tapasztalatunkra támaszkodva indult a tervezés." 
  },
  { 
    image: "/Home/szolgaltatasok.jpg", 
    text: "A <span class='text-orange-600 font-semibold text-lg'>szolgáltatások</span> oldalon bemutatjuk további tevékenységi körünket, amivel maximálisan eleget tehetünk az egyre gyakoribb különleges igényeknek. 3D tervezés, ami a sírkő készítők világában egyáltalán nem jellemző. Lézergravírozás gránitba, teljesen más technológiát igényel, mint más anyagba. Gépi, műszaki és szakmai felkészültségünknek köszönhetően hozott anyagból, bérmunkával is foglalkozunk, mint kőtömb darabolása, tábla méretre vágása, szélezése, natúr felületek fényezése, rovátkolása, flammolása azaz égetése." 
  },
  { 
    image: "/Home/ko-anyagmintak.jpg", 
    text: "A <span class='text-orange-600 font-semibold text-lg'>természetes kőzetek</span> földünk szilárd anyagának kémiailag különböző, többfelé megtalálható, nagy kiterjedésű ásványtömegei, vagy jellemző összetételű ásványtársulásai. Ezek mindig konkrét természeti folyamatban, egységesen képződnek. Az ásványokon kívül gyakran nem ásványos (amorf) anyagokat is tartalmaznak; ezek mennyisége egyes (főleg vulkáni) kőzetekben a kőzet tömegének akár 90%-ánál is több lehet. A kő anyagminták oldalon megtalálhatják aktuális kínálatunkat és ezen felül, megismerhetnek számos különleges kőanyaggal." 
  },
  { 
    image: "/Home/egyeb-informaciok.jpg", 
    text: "Egy laikus számára rengeteg megválaszolandó <span class='text-orange-600 font-semibold text-lg'>kérdés</span> merülhet fel. Természetesen nem kell mindenhez értenünk és elég lehet, ha a hozzáértő szakértelemben megbízunk. Pl: Miért gránit? Hogyan válasszunk sírkövet? Milyen az ország, megye, város vagy a falu szerinti (helyi) temetkezési kultúra és szokások? Milyen különleges szolgáltatásokat tudunk nyújtani? Miben tudunk segíteni? Mennyibe kerül a síremlék? Megrendelés menete? Az alábbi oldalon megpróbálunk minél szerteágazóan, informatívan és érthetően néhány kérdésre megadni a válaszokat. Kérem, hogy forduljon hozzánk bizalommal kérdéseivel." 
  }
]
</script>

<template>
  <LandingPage />

  <LayoutsBaseLayout>
     <HomeInfoCard :items="infoCards">
        <template #header>
          <h2 class="text-4xl font-serif font-bold mb-4">Palásti és Társa kft.</h2>
          <p class="text-gray-500 italic"> A Kő – legyen az gránit, márvány vagy mészkő – az életünk! A kőfeldolgozás valamennyi területén megálljuk a helyünket. 1954 óta rengeteg tapasztalatot gyűjtöttünk az egyedi kézműves síremlékek, kripták, emlékművek, szökőkutak és minden egyéb épülethez tartozó kőburkolat, kőtermék készítésében, kerüljön az kültérre vagy beltérre.

          Számtalan munkát készítettünk köztérre és magánszemélyek otthonába. Készítettünk 390db fürdőszoba -, recepciós - és közösségi illemhelységekbe egyéb gránit pultot a Budapest Hilton szállodának.
                    
          Irodaházaknak homlokzat-, padló- ill. lépcsőburkolatokat. Családi házakba konyhapultot, külső- és belső ablakpárkányt, kerítés fedkövet. 1996 és 2006 között folyamatosan exportáltunk minimal és exluzív formavilágú sírkövet Dániába, Hollandiába, Ausztriába és Németországba.
                    
          A hazai piacra szánt sírkő termékeink a szolíd árfekvésűtől az egyedi, prémium kategóriáig bezárólag, széles választékban állnak megrendelőink rendelkezésre. Ezáltal mindenki megtalálhatja az elképzelése és lehetőségéhez leginkább illő megoldásokat. Magától értetődő, hogy a hibátlan kőtermék csak a megfelelő minőségű alapanyagból készülhet.</p>
        </template>
      </HomeInfoCard>
  </LayoutsBaseLayout>
</template>