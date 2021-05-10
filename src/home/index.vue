<template>
  <div>
    <heador/>
    <hslider/>
    <novice/>
    <borrow/>
    <money/>
    <HomeRroduct/>
  </div>
</template>

<script>
import heador from '../public/heador'
import hslider from './hslider.vue'
import novice from './novice.vue'
import borrow from './borrow.vue'
import money from './money.vue'
import HomeRroduct from './product.vue'

export default {
  name: 'Home',
  components: {
    heador,
    hslider,
    novice,
    borrow,
    money,
    HomeRroduct
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/reset.scss';
</style>
