<script setup lang="ts">
  import HeroComponent from "../components/Homepage/HeroComponent.vue"
  import FeaturedProducts from "../components/Homepage/FeaturedProducts.vue"
  import { heroConst } from "../constants"
  
</script>

<template>
  <HeroComponent
   :image="heroConst.image"
   :title="heroConst.title"
   :subtitle="heroConst.subtitle"
   :cta="heroConst.button"
  />
  <FeaturedProducts />
</template>
