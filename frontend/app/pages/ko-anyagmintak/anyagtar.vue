<script setup>
useSeoMeta({
  title: 'Sírkő készítés Budapesten',
  ogTitle: 'Sírkő készítés és kőfaragás',
  description: 'Több évtizedes tapasztalattal kínálunk tartós és elegáns síremlékeket.',
  ogDescription: 'Minőségi gránit, márvány és mészkő munkák Garanciával.',
})
</script>

<template>
     <LayoutsBaseLayout>

        <h1 class="text-2xl font-semibold mb-5">Anyagtár</h1>
        <TitleCard image-src="/ko-anyagmintak/anyagtar.jpg" text="Az <span class='text-orange-600 font-semibold'>anyagtár</span> oldalon bemutatott anyagminták, mint gránit, márvány és mészkő, a telephelyünkön általában használt standard köveket prezentálja. A világon bányászott körülbelül háromezer féle kőzetet, képtelenség egy telephelyen, raktáron tartani. A raktárkészlet alapanyagai néha változnak, mert előfordul, hogy egy fajta kőzet elfogy vagy olyan meddő részhez érkezik a bányászat, hogy több egészséges tömböt nem ad a bánya, ennek okán megszűnik. Ezzel párhuzamosan pedig tárnak fel új területeket, ami teljesen új anyagokat kínálnak. Folyamatosan cserélődik a termék paletta. Lehetőségeinkhez mérten az igényeknek megfelelően próbálunk minden színcsoportból raktáron tartani több fajta követ. A felhasználási terület nagyon különböző és változatos, mert a tulajdonságaikat (nedvszívó képesség, nyomó szilárdság, stb.) figyelembe véve egyes gránit, márvány és mészkő fajták nem alkalmazhatóak minden területen. Ha a kínálatban nem talál megfelelő alapanyagot, természetesen megoldható más egyéb kövek beszerzése is. Kérem, tekintse meg kínálatunkat, és segítünk a célnak, esztétikának és a pénztárcának legmegfelelőbbet kiválasztani."/>

        <h2 class="my-5 text-xl font-semibold">Gránit</h2>

        <div class="my-5">
            <StoneCard group="anyagtar-granit" />
        </div>

        <h2 class="my-5 text-xl font-semibold">Márvány</h2>

        <div class="my-5">
            <StoneCard group="anyagtar-marvany" />
        </div>

        <h2 class="my-5 text-xl font-semibold">Mészkő</h2>

        <div class="my-5">
            <StoneCard group="anyagtar-meszko" />
        </div>

     </LayoutsBaseLayout>
</template>