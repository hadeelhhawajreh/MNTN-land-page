<template>
  <section>
    <div class="wrapper"></div>
    <div class="content">
      <div
        v-for="item in listOfData"
        :key="item.id"
        :id="item.id"
        :class="!(item.id % 2) ? 'container' : 'reverse-container'"
      >
        <div :class="!(item.id % 2) ? 'text-wrapper-even' : 'text-wrapper-odd'">
          <p :class="!(item.id % 2) ? 'section-id-even' : 'section-id-odd'">
            {{ "0" + item.id }}
          </p>
          <DetailsBox
            span="read more "
            :sectionTitle="item.sectionTitle"
            :sectionSubHead="item.sectionSubHead"
            headClassName="subText2"
            scrollType="arrowRight"
            titleClassName="content-data"
            :sectionDescription="item.sectionDescription"
          >
            <template v-slot:spanSection>
              <div class="span-text-container">
                <p class="span">read more</p>
                <img src="../assets/coloredArrow.svg" alt="coloredArrow" />
              </div>
            </template>
          </DetailsBox>
        </div>
        <img
          :src="getImgUrl(item.sectionImageName)"
          :alt="item.sectionTitle"
          class="section-image"
        />
      </div>
    </div>
  </section>
</template>

<script>
import dataArr from "../assets/data.json";
import { defineAsyncComponent } from "vue";
export default {
  name: "MainSection",
  components: {
    DetailsBox: defineAsyncComponent(() => import("./DetailsBox.vue")),
  },
  data() {
    return {
      listOfData: dataArr.data,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>
<style  scoped>
.container {
  margin-bottom: 12rem;
  position: relative;
  display: flex;
  /* width: 76.14%; */
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
}
.reverse-container {
  margin-bottom: 12rem;
  position: relative;
  display: flex;
  /* width: 76.14%; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}
@media screen and (max-width: 767px) {
  .reverse-container {
    margin-bottom: 12rem;
    position: relative;
    display: flex;
    /* width: 76.14%; */
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }
  .section-image {
    height: 50% !important;
    width: 50% !important;
  }
  .container {
    margin-bottom: 12rem;
    position: relative;
    display: flex;
    /* width: 76.14%; */
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .section-id-odd {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 240px;
    line-height: 240px;
    color: #ffffff;
    opacity: 0.1;
    position: absolute;
    left: -168px !important;
    top: -92px !important;
  }
}
.section-id-odd {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 240px;
  line-height: 240px;
  color: #ffffff;
  opacity: 0.1;
  position: absolute;
  left: -144px;
  top: 19px;
}
@media screen and (min-width: 1920px) {
  .section-id-odd {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 240px;
    line-height: 240px;
    color: #ffffff;
    opacity: 0.1;
    position: absolute;
    left: -144px;
    top: 49px;
  }
}
@media screen and (max-width: 1440px) {
  .section-id-odd {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 240px;
    line-height: 240px;
    color: #ffffff;
    opacity: 0.1;
    position: absolute;
    left: -144px !important;
    top: -21px !important;
  }
  .section-id-even {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 240px;
    line-height: 240px;
    color: #ffffff;
    opacity: 0.1;
    position: absolute;
    right: 327px !important;
    top: -30px !important;
  }
}
.section-id-even {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 240px;
  line-height: 240px;
  color: #ffffff;
  opacity: 0.1;
  position: absolute;
  right: 368px;
  top: 19px;
}
.section-image {
  height: 720px;
  width: 38.71%;
}
.text-wrapper-odd {
  display: flex;
  flex-direction: column;
  /* padding: 5px;
  box-sizing: border-box; */
}

.wrapper {
  position: absolute;
  width: 100%;
  height: 700px;
  left: 0px;
  /* top: 1556px;
   */
  top: 2074px;
  background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 61.38%);
}

.text-wrapper-even {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.content {
  /* background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%); */
  background: #0b1d26;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 296px;
  padding-left: 229px;
  padding-right: 225px;
  box-sizing: border-box;
}
@media screen and (max-width: 767px) {
  .content {
    background: #0b1d26;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 438px !important;
    padding-left: 229px;
    padding-right: 225px;
    box-sizing: border-box;
  }
  .section-id-even {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 240px;
    line-height: 240px;
    color: #ffffff;
    opacity: 0.1;
    position: absolute;
    right: 205px !important;
    top: -116px !important;
  }
}
.span {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #fbd784;
}
.span-text-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 127px;
  height: 21px;
  cursor: pointer;
}
</style>