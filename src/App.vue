<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from "./components/ui/Navbar.vue"
import { Icon } from '@iconify/vue';
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style lang="scss" scoped>

</style>
