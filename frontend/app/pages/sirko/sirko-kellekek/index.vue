<script setup>
import { Text } from 'vue';

useSeoMeta({
  title: 'Sírkő kellékek',
  ogTitle: 'Sírkő készítés és kőfaragás',
  description: 'A sírkő a szeretet és tisztelet kifejezése elhunyt hozzátartozónk iránt, egyben jelöli végső nyughelyét; egy utolsó tisztelgés annak emléke előtt, aki már nem lehet velünk.',
  ogDescription: 'Minőségi gránit, márvány és mészkő munkák Garanciával.',
})
</script>

<template>
     <LayoutsBaseLayout>

          <h1 class="text-2xl font-semibold mb-5">Sírkő kellékek</h1>
          <TitleCard image-src="/sirko/sirko-kellekek.jpg" text="A <span class='text-orange-600 font-semibold'>sírkő kellékek</span>, kiegészítők országonként, vallásonként különböző temetkezési szokások és változó sírkő kultúra szerint alkalmazzák. A jelen kor széles körű igényeinek megfelelően bő választékunkból tudjuk kielégíteni az egyedi igényeket. Alapvetően két féle anyagból készülnek. Bronzból és kőből. Az általunk forgalmazott bronz termékek, speciális eljárással vannak védve a korróziótól, így a változatos időjárásnak kitéve nem színesedik el és nem folyik meg a kövön. Funkciójukat tekintve nagyon sok féle kiegészítőt használunk hazánkban. Az alábbi oldalon - anyag és rendeltetés szerint külön válogatva – kereshet vallási jelképek, süllyesztett és hagyományos vázák és mécses tartó lámpák, térplasztikák és szobrok közül az igényeknek legmegfelelőbbet. A minőség és forma választásánál ügyelni kell arra, hogy a tervezett síremlékre, stílusban hozzá illő legyen.  A rögzítésre különös figyelmet fektetünk, hogy az erősebb külső erőhatásnak is ellen álljon. A kőből készült kiegészítőkről készült fotók illusztrációk, a vázák, mécses tartók és virágtartók szinte az összes - általunk sírkő alapanyagnak javasolt - kőből elkészíthetőek."/>
          
          <div class="flex flex-wrap gap-4 justify-center mt-5">
               <Card image-src="/sirko/sirko-kellekek/ko-vaza.jpg" title="Kő váza" link="/sirko/sirko-kellekek/ko-vaza" />
               <Card image-src="/sirko/sirko-kellekek/ko-mecsestarto.jpg" title="Kő mécsestartó" link="/sirko/sirko-kellekek/ko-mecsestarto" />
               <Card image-src="/sirko/sirko-kellekek/ko-viragtarto.jpg" title="Kő virágtartó" link="/sirko/sirko-kellekek/ko-viragtarto" />
               <Card image-src="/sirko/sirko-kellekek/bronz-sirko-kellekek.jpg" title="Bronz sírkő kellékek" link="/sirko/sirko-kellekek/bronz-sirko-kellekek" />
               <Card image-src="/sirko/sirko-kellekek/sirfelirat.jpg" title="Sírfelirat" link="/sirko/sirko-kellekek/sirfelirat" />
          </div>

     </LayoutsBaseLayout>
</template>