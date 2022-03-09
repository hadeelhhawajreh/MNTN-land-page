<template>
  <section>
    <div class="con">
      <div class="overlay">
        <HeaderSection />
        <ContentSection />
      </div>
      <img v-for="image in arrayOfImages" :src="image.src" :alt="image.alt" :class="image.class" :key="image.id" />
    </div>
    <div class="divider"></div>
  </section>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "ImageContainer",
  data() {
    return {
      arrayOfImages: [
        {
          src: require("../assets/HG.png"),
          id: 1,
          alt: "HG",
          class: "HG",
        },
        {
          src: require("../assets/MG.png"),
          id: 2,
          alt: "MG",
          class: "MG",
        },
        {
          src: require("../assets/VG.png"),
          id: 3,
          alt: "VG",
          class: "VG",
        },
      ],
    };
  },
  components: {
    HeaderSection: defineAsyncComponent(() => import("./Header.vue")),
    ContentSection: defineAsyncComponent(() => import("./Content.vue")),
  },
};
</script>

<style scoped>
.con {
  width: 100%;
  height: 1140px;
  background: rgb(48, 44, 44);
  box-sizing: border-box;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 1200px;
  left: 0px;
  top: 0px;
  background: linear-gradient(
    330.24deg,
    rgba(11, 29, 38, 0) 31.06%,
    #0b1d26 108.93%
  );
  z-index: 1;
  padding: 3.6rem 5rem;
  box-sizing: border-box;
}
.HG {
  width: 100%;
  position: absolute;
  height: 1513px;
  left: 0px;
  top: -200px;
}
.MG {
  position: absolute;
  width: 100%;
  height: 1422px;
  left: 0px;
  top: 464px;
}
.VG {
  position: absolute;
  width: 100%;
  height: 926px;
  left: 0px;
  top: 768px;
}

.divider {
  position: absolute;
  width: 100%;
  height: 700px;
  left: 0px;
  top: 1200px;
  background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 61.38%);
}
</style>
