<script setup>
useSeoMeta({
  title: 'Ajánlatkérés',
  ogTitle: 'Sírkő készítés és profi kőfaragás',
  description: 'A Kő – legyen az gránit, márvány vagy mészkő – az életünk! A kőfeldolgozás valamennyi területén megálljuk a helyünket.',
  ogDescription: 'Minőségi gránit, márvány és mészkő munkák garanciával, 1954 óta.',
})

import { reactive, ref, watch, onMounted } from 'vue'

// Nuxt SEO beállítások
useSeoMeta({
  title: 'Ajánlatkérés – Palásti és Társa Kft.',
  description: 'Kérjen egyedi árajánlatot síremlékekre, gránit vagy márvány munkákra. 1954 óta a kőfeldolgozás szakértői.',
})

// Konfiguráció
const baseUrl = (import.meta.env.VITE_APP_URL || 'https://palasti-laravel.saavatar.xyz').replace(/\/$/, '')

const isLoading = ref(false)
const showMessage = ref(false)
const message = ref('')
const messageClass = ref('')

// Form adatok (minden mező, amit a Laravel vár)
const form = reactive({
  name: '',
  email: '',
  phone: '',
  cemetery: '',
  area: '',
  material: '',
  base_code: '',
  head_code: '',
  extras: '',
  inscription_type: '',
  inscription: '',
  message: ''
})

// SSR Biztonságos betöltés kliensoldalon
onMounted(() => {
  if (process.client) {
    const saved = localStorage.getItem('offerForm')
    if (saved) {
      try {
        Object.assign(form, JSON.parse(saved))
      } catch (e) {
        console.error("Hiba az adatok visszaállításakor", e)
      }
    }
  }
})

// Auto-save a localStorage-ba
watch(form, (newVal) => {
  if (process.client) {
    localStorage.setItem('offerForm', JSON.stringify(newVal))
  }
}, { deep: true })

// Beküldés a Laravel API-nak
const handleSubmit = async () => {
  isLoading.value = true
  try {
    await $fetch(`${baseUrl}/api/send-offer`, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: form
    })

    // Siker: adatok törlése
    Object.keys(form).forEach(key => form[key] = '')
    if (process.client) localStorage.removeItem('offerForm')
    
    showNotification('Ajánlatkérés sikeresen elküldve!', 'bg-emerald-600 text-white')
  } catch (err) {
    console.error('API hiba:', err)
    showNotification('Hiba történt a küldés során.', 'bg-rose-600 text-white')
  } finally {
    isLoading.value = false
  }
}

const showNotification = (text, css) => {
  message.value = text
  messageClass.value = css
  showMessage.value = true
  setTimeout(() => showMessage.value = false, 4000)
}
</script>

<template>
  <LazyLayoutsBaseLayout>
    <div class="min-h-screen pb-20">
      
      <div class="bg-white border-b border-gray-200 py-12 mb-10">
        <div class="container mx-auto px-6 lg:px-12 text-center md:text-left">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
            Ajánlatkérés
          </h2>
          <div class="h-1.5 w-20 bg-orange-600 mt-4 mx-auto md:mx-0"></div>
          <div class="mt-6 max-w-3xl text-gray-600 leading-relaxed">
            <p>
              Az alábbi űrlap segítségével részletes árajánlatot kérhet <span class="text-slate-900 font-bold">síremlékekre</span>. 
              Kérjük, a pontos kalkuláció érdekében töltsön ki minden mezőt! 
            </p>
            <p class="mt-2 text-sm italic">
              Egyéb termékek (konyhapult, lépcső, burkolat) esetén kérjük, használja a 
              <NuxtLink to="/kapcsolat" class="text-orange-600 font-bold hover:underline">Kapcsolat</NuxtLink> oldalt.
            </p>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 lg:px-12">
        <form @submit.prevent="handleSubmit" class="max-w-5xl mx-auto">
          <div class="bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border-t-4 border-orange-600">
            
            <div class="p-6 md:p-12 space-y-10">
              
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-1">
                  <h3 class="text-white text-lg font-bold uppercase tracking-widest border-l-4 border-orange-600 pl-3">
                    Kapcsolat
                  </h3>
                  <p class="text-slate-400 text-sm mt-2">Adja meg elérhetőségeit, hogy kollégáink válaszolhassanak.</p>
                </div>
                
                <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-1">
                    <label class="label-style">Név</label>
                    <input v-model="form.name" type="text" placeholder="Teljes név" class="input-modern" required />
                  </div>
                  <div class="space-y-1">
                    <label class="label-style">E-mail cím</label>
                    <input v-model="form.email" type="email" placeholder="pelda@email.com" class="input-modern" required />
                  </div>
                  <div class="space-y-1">
                    <label class="label-style">Telefonszám</label>
                    <input v-model="form.phone" type="text" placeholder="+36 30 123 4567" class="input-modern" />
                  </div>
                  <div class="space-y-1">
                    <label class="label-style">Helyszín (Város/Temető)</label>
                    <input v-model="form.cemetery" type="text" placeholder="Melyik temető?" class="input-modern" />
                  </div>
                </div>
              </div>

              <hr class="border-slate-800" />

              <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-1">
                  <h3 class="text-white text-lg font-bold uppercase tracking-widest border-l-4 border-orange-600 pl-3">
                    Specifikáció
                  </h3>
                  <p class="text-slate-400 text-sm mt-2">A síremlék főbb paraméterei. A "Keresés" gombok segítenek a választásban.</p>
                </div>
                
                <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-1">
                    <label class="label-style">Alapterület</label>
                    <input v-model="form.area" type="text" placeholder="Pl.: Egyszemélyes, Dupla" class="input-modern" />
                  </div>
                  
                  <div class="space-y-1">
                    <label class="label-style flex justify-between items-end">
                      Anyag 
                      <NuxtLink to="/ko-anyagmintak" target="_blank" class="text-[10px] text-orange-500 hover:underline">Anyagminták →</NuxtLink>
                    </label>
                    <input v-model="form.material" type="text" placeholder="Pl.: Verde San Francisco gránit" class="input-modern" />
                  </div>

                  <div class="space-y-1">
                    <label class="label-style flex justify-between items-end">
                      Alsórész kódja
                      <NuxtLink to="/sirko" target="_blank" class="text-[10px] text-orange-500 hover:underline">Galéria →</NuxtLink>
                    </label>
                    <input v-model="form.base_code" type="text" placeholder="Kódszám a katalógusból" class="input-modern" />
                  </div>

                  <div class="space-y-1">
                    <label class="label-style flex justify-between items-end">
                      Fejrész kódja
                      <NuxtLink to="/sirko" target="_blank" class="text-[10px] text-orange-500 hover:underline">Galéria →</NuxtLink>
                    </label>
                    <input v-model="form.head_code" type="text" placeholder="Kódszám a katalógusból" class="input-modern" />
                  </div>

                  <div class="space-y-1">
                    <label class="label-style flex justify-between items-end">
                      Kiegészítők
                      <NuxtLink to="/sirko/sirko-kellekek" target="_blank" class="text-[10px] text-orange-500 hover:underline">Kellékek →</NuxtLink>
                    </label>
                    <input v-model="form.extras" type="text" placeholder="Váza, mécses, kereszt..." class="input-modern" />
                  </div>

                  <div class="space-y-1">
                    <label class="label-style">Felirat típusa</label>
                    <select v-model="form.inscription_type" class="input-modern cursor-pointer">
                      <option value="" disabled>Válasszon típust</option>
                      <option v-for="t in ['Natúr', 'Arany', 'Relief', 'Bronz']" :key="t" :value="t">{{t}}</option>
                    </select>
                  </div>
                </div>
              </div>

              <hr class="border-slate-800" />

              <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-1">
                  <h3 class="text-white text-lg font-bold uppercase tracking-widest border-l-4 border-orange-600 pl-3">
                    Részletek
                  </h3>
                </div>
                
                <div class="lg:col-span-2 space-y-6">
                  <div class="space-y-1">
                    <label class="label-style">Sírfelirat szövege</label>
                    <textarea v-model="form.inscription" rows="2" placeholder="Név, évszámok, idézet..." class="input-modern"></textarea>
                  </div>
                  <div class="space-y-1">
                    <label class="label-style">Egyéb megjegyzés</label>
                    <textarea v-model="form.message" rows="4" placeholder="Bármilyen egyéb kérés vagy kérdés..." class="input-modern"></textarea>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <button
                  type="submit"
                  :disabled="isLoading"
                  class="w-full bg-orange-600 text-white font-bold uppercase tracking-[0.2em] rounded-lg p-5 hover:bg-orange-700 transition-all duration-300 shadow-xl flex items-center justify-center gap-4 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="isLoading" class="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                  <span>{{ isLoading ? 'Küldés folyamatban...' : 'Árajánlat kérése' }}</span>
                </button>
                <p class="text-center text-slate-500 text-xs mt-4">
                  Az adatok elküldése nem minősül megrendelésnek, kollégánk keresni fogja a részletekkel.
                </p>
              </div>

            </div>
          </div>
        </form>
      </div>

      <Teleport to="body">
        <transition name="toast">
          <div
            v-if="showMessage"
            :class="messageClass"
            class="fixed top-10 left-1/2 -translate-x-1/2 px-8 py-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] font-bold z-[100] flex items-center gap-3 backdrop-blur-sm"
          >
            <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            {{ message }}
          </div>
        </transition>
      </Teleport>
      
    </div>
  </LazyLayoutsBaseLayout>
</template>

<style scoped>
.label-style {
  @apply text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1 block;
}

.input-modern {
  @apply w-full rounded-lg border border-slate-800 p-3 text-white bg-slate-900/50 focus:bg-slate-900 focus:ring-2 focus:ring-orange-600/30 focus:border-orange-600 focus:outline-none transition-all duration-200 placeholder:text-slate-400 text-sm;
}

/* Select nyíl színe sötét módban */
select.input-modern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ea580c'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25rem;
  appearance: none;
}

/* Toast Animáció */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.toast-enter-from {
  opacity: 0;
  transform: translate(-50%, -40px);
}
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>