<template>
  <div class="box">
    <box-planet :planet="planet" :hasPlanet="hasPlanet" :initial="initial"></box-planet>
    <button-next :click="randomPlanets"></button-next>
  </div>
</template>

<script>

import BoxPlanet from './components/box-planet/BoxPlanet';
import Button from './components/shared/button/Button';
import Service from './services/Service.js';

export default {
  name: 'app',
  components: {
    'box-planet': BoxPlanet,
    'button-next': Button
  },
  data () {
    return {
      planet: {},
      hasPlanet: false,
      initial: true
    }
  },
  created() {
    this.service = new Service();
  },
  methods: {
    randomPlanets() {
      this.initial = false;
      this.hasPlanet = false;
      const randomNumber = Math.floor(Math.random() * 61 + 1);
      this.service.getPlanets(randomNumber)
        .then(planet => {
          this.hasPlanet = true;
          this.planet = planet;
        })
        .catch(error => console.error(error));
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #f0ebe1;
  text-rendering: optimizeLegibility;
  font-size: 20px;
}
.box {
  width: 300px;
  margin: 25% auto;
  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;
  color: #00175b;
}

@media (min-width: 576px) {
  .box {
    width: 350px;
    margin: 200px auto;
  }
}
</style>
