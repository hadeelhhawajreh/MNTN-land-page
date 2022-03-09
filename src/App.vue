<template>
  <section>
    <image-container />
    <item-container />
  </section>
</template>

<script>
import {  defineAsyncComponent } from 'vue'
export default {
  name: "App",
  components: {
    ImageContainer :defineAsyncComponent (() => import('./components/ImageContainer.vue')),
    ItemContainer:defineAsyncComponent (() => import('./components/ItemContainer.vue')),
  },
};
</script>

<style>
</style>
