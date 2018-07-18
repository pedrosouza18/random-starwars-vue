<template>
  <div class="box-planet">
    <image-initial v-if="initial"></image-initial>
    <loader v-if="!hasPlanet && !initial"></loader>
    <div v-if="hasPlanet && !initial">
      <header>
          <h1 class="box-planet__title">{{planet.name}}</h1>
      </header>
      <article class="box-planet__descriptions">
          <div>Population: {{planet.population}}</div>
          <div>Climate: {{planet.climate}}</div>
          <div>Terrain: {{planet.terrain}}</div>
          <div>Films: {{lengthFilms}}</div>
      </article>
    </div>
  </div>
</template>

<script>

import Loader from '../shared/loader/Loader';
import ImageInitial from '../shared/image-initial/ImageInitial';

export default {

  components: {
    'loader': Loader,
    'image-initial': ImageInitial
  },
  props: ['planet', 'hasPlanet', 'initial'],
  computed: {
    lengthFilms() {
      if(this.planet.films) {
        return this.planet.films.length;
      } else {
        return 0;
      }
    }
  }

}
</script>

<style scoped>
.box-planet {
    border: 6px solid #00175b;
}
.box-planet__title {
    border-bottom: 6px solid #00175b;
    padding: 8px;
    text-align: center;
}
.box-planet__descriptions {
    padding: 25px 25px 80px 25px;
}
.box-planet__descriptions div:not(:last-child) {
    margin-bottom: 8px;
}
</style>
