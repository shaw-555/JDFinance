<template>
  <div>
    <heador/>
    <hslider/>
    <novice/>
  </div>
</template>

<script>
import heador from '../public/heador'
import hslider from './hslider.vue'
import novice from './novice.vue'

export default {
  name: 'Home',
  components: {
    heador,
    hslider,
    novice
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/reset.scss';
</style>
