<template>
  <div class="drawer" id="drawer">
    <a href="#" class="closeBtn" @click="closeNavigator">&times;</a>
    <a href="#">Equipment</a>
    <a href="#">About Us</a>
    <a href="#">Blog</a>
    <a href="#">Contact Us</a>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "DrawerNavigation",
  methods: {
    closeNavigator() {
      let ele = document.getElementById("drawer");
      gsap.to(ele, { width: 0, duration: 0.5 });
    },
  },
};
</script>

<style scoped>
.drawer {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 4;
  top: 0;
  right: 0;
  background: linear-gradient(353deg, rgba(11, 29, 38, 0) 0%, #0b1d26 20%);
  overflow-x: hidden;
  transition: width 0.5s;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
}

.drawer a {
  padding: 8px 8px 8px 32px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #fff;
  text-align: left;
  display: block;
  transition: 0.3s;
}

.drawer a:hover {
  color: #818f92;
}
.drawer .closeBtn {
  position: absolute;
  top: 7px;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
</style>