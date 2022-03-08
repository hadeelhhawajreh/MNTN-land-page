<template>
  <div class="header-section">
    <p class="text">MNTN</p>
    <navigation-link />
    <div class="button-container">
      <img src="../assets/search.svg" alt="search" class="searchSVG" />
      <button @click="openDrawer"><p class="btn-text">MENU</p></button>
      <div class="dash"></div>
    </div>
  </div>
</template>

<script>
import "../Styles/HeaderSection.style.css";
import NavigationLink from './NavigationLink.vue';
export default {
  components: { NavigationLink },
  name: "HeaderSection",
};
</script>

<style >
</style>