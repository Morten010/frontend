<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/ui/Navbar.vue"
import Footer from "./components/ui/Footer.vue"
import { Icon } from '@iconify/vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<style lang="scss" scoped>

</style>
