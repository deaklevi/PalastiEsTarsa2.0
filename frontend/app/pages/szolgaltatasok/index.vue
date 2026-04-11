<script setup>
useSeoMeta({
  title: 'Sírkő készítés Budapesten | Palásti és Társa Kft.',
  ogTitle: 'Sírkő készítés és profi kőfaragás',
  description: 'Több évtizedes tapasztalattal kínálunk tartós és elegáns síremlékeket, gránit konyhapultokat és burkolatokat.',
  ogDescription: 'Minőségi gránit, márvány és mészkő munkák garanciával, 1954 óta.',
})


const infoCards = [
  { 
    title: "3D Tervezés",
    link: "/szolgaltatasok/3d-tervezes",
    image: "/szolgaltatasok/3d-tervezes.jpg", 
    shortDesc: "Látványtervek készítése, mely segítséget nyújt a megrendelőnek és a kivitelezőnek egyaránt.",
    text: "..." // Itt maradhat a hosszú szöveged, ha máshol használod
  },
  { 
    title: "Bérmunka",
    link: "/szolgaltatasok/bermunka",
    image: "/szolgaltatasok/bermunka.jpg", 
    shortDesc: "Hozott anyagból kőtömb darabolás, tábla méretre vágás és felületkezelés.",
    text: "..."
  },
  { 
    title: "Lézergravírozás",
    link: "/szolgaltatasok/lezergravirozas",
    image: "/szolgaltatasok/lezergravirozas.jpg", 
    shortDesc: "Specifikus mechanizmust igénylő precíziós gravírozás gránitba.",
    text: "..."
  }
]
</script>

<template>
  <LayoutsBaseLayout>
     <ImageCardSection :items="infoCards">
        <template #title>
          Sírkő és Építészet <br />
          <span class="text-orange-600">Budapesten</span>
        </template>
        <template #description>
          A szolgáltatások oldalon bemutatjuk a síremlék és egyéb építészeti munkálatokhoz tartozó tevékenységi körünket, amivel professzionálisan eleget tehetünk az egyre inkább gyakori különleges igényeknek. Ehhez rendelkezésre álnak megfelelő hardverek, szoftverek és a nélkülözhetetlen szakmai potencia.

A 3D-s látványtervezés, ami a sírkő készítők világában egyáltalán nem jellemző. Segítséget nyújt a megrendelőnek és a kivitelezőnek egyaránt.

Lézergravírozás gránitba, teljesen más technológiát /specifikus mechanizmust/ igényel, mint más anyagba. Alapvető követelmény a gravírozandó kép minél nagyobb, megfelelő minőségű felbontása.

Gépi, műszaki és szakmai felkészültségünknek köszönhetően /hozott anyagból - gránit, márvány, mészkő, homokkő/, bérmunkával is foglalkozunk, mint pl. kőtömb darabolása, tábla felületének kalibrálása, méretre vágása, szélezése, natúr felületek fényezése, rovátkolása, flammolása azaz égetése.
<br><br>
'Az oldalon takálható képek linkek! Rákattintva további részleteket láthat a szolgáltatásokról.'
        </template>
      </ImageCardSection>
  </LayoutsBaseLayout>
</template>