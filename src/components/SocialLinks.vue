<template>
  <div class="social">
    <p>Follow us</p>
    <a><img src="../assets/instagram.svg" alt="instagram" /></a>
    <a><img src="../assets/twitter.svg" alt="twitter" /></a>
  </div>
</template>

<script>
export default { name: "SocialLinks" };
</script>

<style scoped>
.social {
     height: 173px;
    width: 24px;
    z-index: 2;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
}
p {
     font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    width: 77px;
    line-height: 22px;
    color: #ffffff;
    transform: rotate(90deg);
}
</style>