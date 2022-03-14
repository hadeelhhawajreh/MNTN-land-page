<template>
  <div class="content-container">
    <SocialLinks />
    <DetailsBox
      span="scroll down "
      headClassName="main-text"
      sectionTitle="Be prepared for the Mountains and beyond!"
      sectionSubHead="A Hiking guide"
      scrollType="arrowDown"
      titleClassName="content-data2"
    >
      <template v-slot:spanSection>
        <a class="span-text-container" href="#1">
          <p class="span">scroll down</p>
          <img src="../assets/whitearrow.svg" alt="whiteArrow" class="arrowDown" />
        </a>
      </template>
    </DetailsBox>
    <div class="slider-indicator">
      <div class="indicator-name">
        <a v-for="item in indicatorNames" :key="item.name" :href="item.id">{{
          item.name
        }}</a>
      </div>
      <div class="slider">
        <span class="indicator" ></span>
      </div>
    </div>
  </div>
</template>

<script>
import DetailsBox from "./DetailsBox.vue";
import SocialLinks from "./SocialLinks.vue";
import '../Styles/Content.style.css'
export default {
  components: { SocialLinks, DetailsBox },
  name: "ContentSection",
  data() {
    return {
      indicatorNames: [
        { name: "Start", id: "#start" },
        { name: "01", id: "#1" },
        { name: "02", id: "#2" },
        { name: "03", id: "#3" },
      ],
    };
  },
};
</script>