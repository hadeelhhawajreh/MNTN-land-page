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
import gsap from "gsap";
import NavigationLink from "./NavigationLink.vue";
import DrawerNavigation from "./Drawer.vue";
export default {
  name: "HeaderSection",
  components: {
    NavigationLink,
    DrawerNavigation,
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