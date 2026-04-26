<script setup>
const route = useRoute()
const siteUrl = 'https://palasti.hu'

useHead({
  link: [
    {
      rel: 'canonical',
      // Ez összefűzi a domain nevedet az aktuális oldal útvonalával
      // pl. https://palasti.hu/szolgaltatasok
      href: siteUrl + (route.path === '/' ? '' : route.path)
    }
  ]
})
</script>

<template>
  <NuxtPage />
</template>
