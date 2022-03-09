<template>
  <div class="header-section">
    <p class="text">MNTN</p>
    <navigation-link />
    <div class="button-container">
      <img src="../assets/search.svg" alt="search" class="searchSVG" />
      <button @click="openDrawer"><p class="btn-text">MENU</p></button>
      <div class="dash"></div>
    </div>
    <DrawerNavigation  />
  </div>
</template>

<script>
import "../Styles/HeaderSection.style.css";
import {  defineAsyncComponent } from 'vue'
import gsap from "gsap";
export default {
  name: "HeaderSection",
  components: {
    NavigationLink :defineAsyncComponent (() => import('./NavigationLink.vue')),
    DrawerNavigation :defineAsyncComponent (() => import('./Drawer.vue')),
  },
  methods: {
    openDrawer() {
      this.openNavigator();
    },
    openNavigator() {
      let ele = document.getElementById("drawer");
      gsap.to(ele, {
        width: 287,
        duration: 0.5,
      });
    },
  },
};
</script>