<template>
  <div class="box-btn">
    <button class="box-btn__btn" @click="click">Next</button>
  </div>
</template>

<script>
  export default {

    props: ['click']

  }
</script>

<style scoped>
.box-btn {
    text-align: center;
    margin-top: 15px;
    position: relative;
}
.box-btn__btn {
    cursor: pointer;
    background-color: transparent;
    border: 6px solid #00175b;
    padding: 5px 35px;
    color: #00175b;
    font-size: 110%;
    font-weight: bold;
    outline: none;
}
.box-btn__btn:active {
    background: linear-gradient(to right, rgba(0, 0, 255, 0.42) , #00175b);
    color: #fff;
}

@media (min-width: 576px) {
  .box-btn__btn::after {
      content: 'Click to see a planet';
      display: none;
      position: absolute;
      top: 60px;
      left: 83px;
      padding: 8px;
      background: rgba(128, 128, 128, 0.67);
      border-radius: 5px;
      text-transform: uppercase;
      font-size: 65%;
  }
  .box-btn__btn:hover::after {
      display: block;
  }
}
</style>
