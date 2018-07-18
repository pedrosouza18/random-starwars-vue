<template functional>
  <div class="box-planet__boximage">
      <p class="box-planet__text">Come here, see a planet</p>
      <div class="box-planet__img"></div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

.box-planet__boximage {
    text-align: center;
    position: relative;
}
.box-planet__text {
    padding: 6px;
    position: absolute;
    left: 9%;
}
.box-planet__img {
    background-image: url('./img/star.gif');
    background-size: 100% 100%;
    height: 205px;
}

</style>
