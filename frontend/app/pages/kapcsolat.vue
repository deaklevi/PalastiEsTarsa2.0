<script setup>
import { reactive, ref, watch, onMounted } from 'vue'

useSeoMeta({
  title: 'Kapcsolat – Palásti és Társa Kft.',
  description: 'Vegye fel velünk a kapcsolatot! Egyedi síremlékek és kőfeldolgozás 1954 óta.',
})

const baseUrl = (import.meta.env.VITE_APP_URL || 'https://palasti-laravel.saavatar.xyz').replace(/\/$/, '')

const isLoading = ref(false)
const showMessage = ref(false)
const message = ref('')
const messageClass = ref('')

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

onMounted(() => {
  if (process.client) {
    const saved = localStorage.getItem('contactForm')
    if (saved) {
      try {
        Object.assign(form, JSON.parse(saved))
      } catch (e) {
        console.error("Hiba a mentett adatok betöltésekor", e)
      }
    }
  }
})

watch(form, (newVal) => {
  if (process.client) {
    localStorage.setItem('contactForm', JSON.stringify(newVal))
  }
}, { deep: true })

const handleSubmit = async () => {
  isLoading.value = true
  try {
    await $fetch(`${baseUrl}/api/send-contact`, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: form
    })

    Object.keys(form).forEach(key => form[key] = '')
    if (process.client) localStorage.removeItem('contactForm')
    
    showNotification('Üzenet sikeresen elküldve!', 'bg-emerald-600 text-white')
  } catch (err) {
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
    <div class="bg-gray-50 min-h-screen pb-20">
      <div class="bg-white border-b border-gray-200 py-12 mb-10">
        <div class="container mx-auto px-6 lg:px-12 text-center md:text-left">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
            Kapcsolatfelvétel
          </h2>
          <div class="h-1.5 w-20 bg-orange-600 mt-4 mx-auto md:mx-0"></div>
          <p class="mt-4 text-gray-600 max-w-2xl">
            Kérdése van? Szakértő csapatunk készséggel áll rendelkezésére. Keressen minket telefonon, vagy írjon nekünk közvetlenül az űrlapon keresztül.
          </p>
        </div>
      </div>

      <div class="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div class="space-y-8">
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div class="flex items-center gap-4 mb-6">
              <img class="h-16 w-auto" src="/Kapcsolat/emblema.png" alt="Embléma" />
              <h1 class="text-xl font-bold text-slate-900 leading-tight">
                Palásti és Társa <br/> <span class="text-orange-600 uppercase text-sm tracking-widest">Kőfeldolgozó Kft.</span>
              </h1>
            </div>

            <div class="space-y-4 text-gray-700">
              <div class="flex items-start gap-3">
                <span class="text-orange-600 font-bold">CÍM:</span>
                <p>1214 Budapest, II. Rákóczi Ferenc út 251.</p>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-orange-600 font-bold">EMAIL:</span>
                <a href="mailto:palasti.kft@gmail.com" class="hover:text-orange-600 transition-colors">palasti.kft@gmail.com</a>
              </div>
            </div>

            <div class="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Ügyvezetés</h3>
                <p class="font-bold text-slate-900">Palásti István</p>
                <a href="tel:+36302790261" class="text-orange-600 font-medium hover:underline">+36 30 279 0261</a>
              </div>
              <div>
                <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Telepvezetés</h3>
                <p class="font-bold text-slate-900">Deák László</p>
                <a href="tel:+36309004800" class="text-orange-600 font-medium hover:underline">+36 30 900 4800</a>
              </div>
            </div>
          </div>

          <div class="bg-slate-900 text-white p-8 rounded-xl shadow-xl overflow-hidden relative">
            <div class="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full -mr-16 -mt-16"></div>
            <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-orange-600 rounded-full"></span>
              NYITVATARTÁS
            </h3>
            <div class="space-y-2 opacity-90">
              <div class="flex justify-between border-b border-slate-800 pb-2">
                <span>Hétfő - Péntek</span>
                <span class="font-mono">07:30 - 16:30</span>
              </div>
              <div class="flex justify-between border-b border-slate-800 pb-2">
                <span>Szombat</span>
                <span class="font-mono">09:00 - 12:00</span>
              </div>
              <div class="flex justify-between text-rose-400">
                <span>Vasárnap</span>
                <span class="font-bold uppercase italic">Zárva</span>
              </div>
            </div>
            <p class="text-xs mt-6 text-slate-400 italic font-light">
              * Telefonos egyeztetés alapján ettől eltérő időpontban is várjuk.
            </p>
          </div>
        </div>

        <div class="h-full min-h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            class="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.4475487779773!2d19.056637376885374!3d47.40316490131451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e976868e64c3%3A0x673c09b7f58d2077!2zQnVkYXBlc3QsIElJLiBSw6Frw7NjemkgRmVyZW5jIMO6dCAyNTEsIDEyMTQ!5e0!3m2!1shu!2shu!4v1715456000000!5m2!1shu!2shu"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div class="container mx-auto px-6 lg:px-12 mt-24">
        <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div class="md:w-1/3 bg-slate-900 p-10 text-white flex flex-col justify-between relative">
            <div class="z-10">
              <h2 class="text-2xl font-bold mb-4 tracking-tight">Üzenet küldése</h2>
              <p class="text-slate-400 text-sm">Töltse ki az űrlapot, és munkatársunk 24 órán belül felveszi Önnel a kapcsolatot.</p>
            </div>
            <div class="mt-10 md:mt-0 z-10">
              <div class="text-orange-600 font-bold text-4xl opacity-20 italic">Palásti</div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-1 bg-orange-600"></div>
          </div>

          <div class="md:w-2/3 p-8 lg:p-12">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-1">
                  <label class="text-xs font-bold text-slate-500 uppercase tracking-widest" for="name">Név</label>
                  <input id="name" v-model="form.name" type="text" placeholder="Az Ön neve" class="input-modern" required />
                </div>
                <div class="space-y-1">
                  <label class="text-xs font-bold text-slate-500 uppercase tracking-widest" for="email">E-mail cím</label>
                  <input id="email" v-model="form.email" type="email" placeholder="pelda@email.com" class="input-modern" required />
                </div>
              </div>

              <div class="space-y-1">
                <label class="text-xs font-bold text-slate-500 uppercase tracking-widest" for="subject">Tárgy</label>
                <input id="subject" v-model="form.subject" type="text" placeholder="Mivel kapcsolatban ír?" class="input-modern" required />
              </div>

              <div class="space-y-1">
                <label class="text-xs font-bold text-slate-500 uppercase tracking-widest" for="message">Üzenet leírása</label>
                <textarea id="message" v-model="form.message" placeholder="Írja le kérését részletesen..." class="input-modern" rows="4" required></textarea>
              </div>

              <button
                type="submit"
                :disabled="isLoading"
                class="w-full bg-slate-900 text-white font-bold uppercase tracking-widest rounded-lg p-4 hover:bg-orange-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70"
              >
                <span v-if="isLoading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span>{{ isLoading ? 'Küldés folyamatban...' : 'Küldés' }}</span>
              </button>
            </form>
          </div>
        </div>
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
.input-modern {
  @apply w-full rounded-lg border border-gray-200 p-3 text-slate-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 focus:outline-none transition-all duration-200 placeholder:text-gray-400 text-sm;
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

/* Egyedi betűtípus finomítás */
h2, h1, button {
  letter-spacing: -0.02em;
}
</style>