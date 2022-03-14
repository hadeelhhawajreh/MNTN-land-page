<template>
  <section>
    <div class="con">
      <div class="overlay">
        <HeaderSection />
        <ContentSection />
      </div>
      <img src="../assets/HG.png" alt="" class="img1" />
      <img src="../assets/MG.png" alt="" class="img2" />
      <img src="../assets/VG.png" alt="" class="img3" />
    </div>
    <div class="divider"></div>
  </section>
</template>

<script>
import HeaderSection from "./Header.vue";
import ContentSection from "./Content.vue";

export default {
  name: "ImageContainer",
  components: {
    HeaderSection,
    ContentSection,
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
.img1 {
  width: 100%;
  position: absolute;
  height: 1513px;
  left: 0px;
  top: -200px;
}
.img2 {
  position: absolute;
  width: 100%;
  height: 1422px;
  left: 0px;
  top: 464px;
}
.img3 {
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
