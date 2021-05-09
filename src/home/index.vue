<template>
  <div>
    <heador/>
    <hslider/>
    <novice/>
    <borrow/>
  </div>
</template>

<script>
import heador from '../public/heador'
import hslider from './hslider.vue'
import novice from './novice.vue'
import borrow from './borrow.vue'

export default {
  name: 'Home',
  components: {
    heador,
    hslider,
    novice,
    borrow
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/reset.scss';
</style>
