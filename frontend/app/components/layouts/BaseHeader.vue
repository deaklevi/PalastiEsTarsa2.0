<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <header>
        <nav class="fixed top-0 left-0 w-full bg-[#0D0E0E] text-white z-50 shadow-md">
            <div class="max-w-7xl mx-auto flex justify-between items-center py-2 px-6 h-16">
                <NuxtLink to="/">
                    <img src="/feher-logo.png" alt="Palásti Granit" class="h-10 z-50">
                </NuxtLink>

                <!-- Desktop Menu -->
                <ul class="lg:flex hidden space-x-6 text-sm font-medium">
                    <li><NuxtLink to="/" class="hover:text-orange-500 transition">Főoldal</NuxtLink></li>
                    <li><NuxtLink to="/sirko" class="hover:text-orange-500 transition">Sírkő</NuxtLink></li>
                    <li><NuxtLink to="/epiteszet" class="hover:text-orange-500 transition">Építészet</NuxtLink></li>
                    <li><NuxtLink to="/" class="hover:text-orange-500 transition">Szolgáltatások</NuxtLink></li>
                    <li><NuxtLink to="/" class="hover:text-orange-500 transition">Kő anyagminták</NuxtLink></li>
                    <li><NuxtLink to="/" class="hover:text-orange-500 transition">Kapcsolat</NuxtLink></li>
                    <li><NuxtLink to="/" class="hover:text-orange-500 transition">Ajánlatkérés</NuxtLink></li>
                </ul>

                <!-- Mobile Menu -->
                <div class="lg:hidden z-50">
                    <button @click="toggleMenu" class="relative w-10 h-10 text-white focus:outline-none" aria-label="Menu">
                        <div class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <span 
                                class="absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out"
                                :class="isMenuOpen ? 'rotate-45 delay-75' : '-translate-y-2'"
                            ></span>
                            <span 
                                class="absolute h-0.5 w-6 bg-white transform transition duration-200 ease-in-out"
                                :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
                            ></span>
                            <span 
                                class="absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out"
                                :class="isMenuOpen ? '-rotate-45 delay-75' : 'translate-y-2'"
                            ></span>
                        </div>
                    </button>
                </div>

            </div>

            <transition 
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-full"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-full"
            >
                <div v-if="isMenuOpen" class="fixed inset-0 bg-[#0D0E0E] flex flex-col items-center justify-center space-y-8 text-xl z-40 lg:hidden">
                    <NuxtLink @click="isMenuOpen = false" to="/" class="hover:text-orange-500">Főoldal</NuxtLink>
                    <NuxtLink @click="isMenuOpen = false" to="/sirko" class="hover:text-orange-500">Sírkő</NuxtLink>
                    <NuxtLink @click="isMenuOpen = false" to="/epiteszet" class="hover:text-orange-500">Építészet</NuxtLink>
                    <NuxtLink @click="isMenuOpen = false" to="/" class="hover:text-orange-500">Szolgáltatások</NuxtLink>
                    <NuxtLink @click="isMenuOpen = false" to="/" class="hover:text-orange-500">Kő anyagminták</NuxtLink>
                    <NuxtLink @click="isMenuOpen = false" to="/" class="hover:text-orange-500">Kapcsolat</NuxtLink>
                    <NuxtLink @click="isMenuOpen = false" to="/" class="hover:text-orange-500">Ajánlatkérés</NuxtLink>
                </div>
            </transition>
        </nav>

        <div class="h-16"></div>
    </header>
</template>