<template>
  <section>
    <image-container />
    <item-container />
  </section>
</template>

<script>
import ImageContainer from "./components/ImageContainer.vue";
import ItemContainer from "./components/ItemContainer.vue";
export default {
  name: "App",
  components: {
    ImageContainer,
    ItemContainer,
  },
};
</script>

<style>
</style>
