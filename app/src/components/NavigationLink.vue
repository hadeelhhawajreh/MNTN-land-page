<template>
  <div class="nav-cont">
    <a v-for="link in links" :key="link.id"><p>{{ link.name }}</p></a>
  </div>
</template>

<script>
export default {
  name: "NavigationLink",
  data() {
    return {
      links: [
        { name: "Equipment", id: "Equipment" },
        { name: "About us", id: "AboutUs" },
        { name: "Blog", id: "Blog" },
      ],
    };
  },
};
</script>

<style scoped>
.nav-cont {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
}
p {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.313rem;
  color: #ffffff;
}
a{
  text-decoration: none;
  cursor: pointer;
}
</style>