<template>
  <div :class="titleClassName">
    <div class="sub-header-container">
      <div class="orange-dash"></div>
      <p class="sub-text">{{ sectionSubHead }}</p>
    </div>
    <p :class="headClassName">{{ sectionTitle }}</p>
    <div v-if="sectionDescription">
      <p class="description">
        {{ sectionDescription }}
      </p>
    </div>
    <slot name="spanSection"></slot>
  </div>
</template>
  
<script>
export default {
  name: "DetailsBox",
  props: [
    "sectionSubHead",
    "headClassName",
    "sectionTitle",
    "sectionDescription",
    "span",
    "scrollType",
    "titleClassName",
  ],
};
</script>

<style scoped>
.content-data {
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 76%;
  align-items: flex-start;
}

@media screen and (max-width: 767px) {
  .content-data {
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: 100%;
    align-items: flex-start;
    margin-bottom: 20px !important;
  }
}
.content-data2 {
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 950px;
  align-items: flex-start;
  justify-content: center;
  /* padding-left: 22.5%; */
  /* padding-right: 17.7%; */
  box-sizing: border-box;
}
.main-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 88px;
  line-height: 100px;
  text-transform: capitalize;
  color: #ffffff;
  margin-bottom: 25px;
  width: 950px;
}
@media (max-width: 1024px) {
  /* .main-text {
    font-size: 50px;
    color: red;
  } */
}
@media screen and (max-width: 767px) {
  .main-text {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 50px;
    text-transform: capitalize;
    color: #ffffff;
    margin-bottom: 25px;
    width: 100% !important;
  }
  .content-data2 {
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: 385px !important;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
  }
  .subText2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 18px !important;
    line-height: 75px;
    color: #ffffff;
    /* margin: 27px 0px; */
  }
  .sub-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 13px !important;
  line-height: 21px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #fbd784;
  /* min-width: 4.8rem; */
  margin-left: 1.5rem;
}
.description {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px !important;
  line-height: 32px;
  color: #ffffff;
  margin: 27px 0px;
}

}
.sub-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #fbd784;
  /* min-width: 4.8rem; */
  margin-left: 1.5rem;
}
.orange-dash {
  width: 72px;
  height: 2px;
  background: #fbd784;
}
.sub-header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 326px;
  margin-bottom: 32px;
}
@media screen and (max-width: 767px) {
  .sub-header-container{
        display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 326px;
    margin-bottom: 0 !important;
  }
}
.subText2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 75px;
  color: #ffffff;
  /* margin: 27px 0px; */
}
.description {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  margin: 27px 0px;
}
</style>