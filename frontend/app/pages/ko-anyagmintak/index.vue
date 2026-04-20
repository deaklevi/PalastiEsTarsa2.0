<script setup>
useSeoMeta({
  title: 'Kő anyagminták',
  ogTitle: 'Sírkő készítés és kőfaragás',
  description: 'A síremlék a szeretet és tisztelet maradandó kifejezése. Hiszünk abban, hogy az elhunyt emléke méltó, örökké tartó keretet érdemel, ezért dolgozunk a természet legnemesebb kőzeteivel.',
  ogDescription: 'Minőségi gránit, márvány és mészkő munkák Garanciával.',
})
</script>

<template>
     <LayoutsBaseLayout>

          <h1 class="text-2xl font-semibold mb-5">Kő anyagminták</h1>
          <TitleCard image-src="/ko-anyagmintak/ko-anyagmintak.jpg" text="A <span class='text-orange-600 font-semibold'>természetes kő</span> képződése szerint három fő csoportba osztható. A <span class='text-orange-600 font-semibold'>magmás kőzetek</span> légnemű és szilárd alkotórészekből álló, többkomponensű, többnyire szilikátos olvadékok kikristályosodásával alakulnak ki. Az olvadékban a gázok és gőzök oldatban tartják a szilárdakat, ezért lehűlés során kristályos szerkezetű lesz. A kristályosodás mélysége szerint megkülönböztetjük a mélységi magmás és kiömlési magmás kőzeteket. Az <span class='text-orange-600 font-semibold'>üledékes kőzetek</span> felszíni (másodlagos) folyamatok, azaz a felszíni vagy felszín közeli kőzetek lepusztulása, mállása, a mállástermék szállítása és lerakódása eredményeként létrejött laza üledékekből képződnek azok kőzetté válásával. A <span class='text-orange-600 font-semibold'>metamorf kőzetek</span> nagy hőmérsékleten és/vagy nyomáson korábbi kőzetek szilárd fázisú átkristályosodással jönnek létre. Az eredeti kőzet jellege szerint megkülönböztetünk orto- (azaz magmás kőzetből képződött) és para- (azaz üledékes kőzetből képződött) metamorfitokat. Ennek megfelelően a Föld felszínének nagyobbik részét laza üledék vagy üledékes kőzetek borítják, lefelé haladva viszont a laza üledékek aránya gyorsan, az üledékes kőzeteké lassabban csökken, a metamorf kőzeteké pedig fokozatosan nő. Mintegy 15 km mélyen már gyakorlatilag csak metamorf kőzeteket találunk. Az általunk forgalmazott köveket az alábbiak szerint csoportosítjuk: gránit, márvány, mészkő, kvarcit és onyx."/>
          
          <div class="flex flex-wrap gap-4 justify-center mt-5">
               <Card image-src="/ko-anyagmintak/anyagtar.jpg" title="Anyagtár" link="/ko-anyagmintak/anyagtar"/>
               <Card image-src="/ko-anyagmintak/granit.jpg" title="Gránit" link="/ko-anyagmintak/granit"/>
               <Card image-src="/ko-anyagmintak/marvany.jpg" title="Márvány" link="/ko-anyagmintak/marvany"/>
               <Card image-src="/ko-anyagmintak/meszko.jpg" title="Mészkő" link="/ko-anyagmintak/meszko"/>
               <Card image-src="/ko-anyagmintak/kvarcit.jpg" title="Kvarcit" link="/ko-anyagmintak/kvarcit"/>
               <Card image-src="/ko-anyagmintak/onyx.jpg" title="Onyx" link="/ko-anyagmintak/onyx"/>
          </div>

     </LayoutsBaseLayout>
</template>