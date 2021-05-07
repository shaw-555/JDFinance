<template>
  <div>
    <heador/>
    <hslider/>
  </div>
</template>

<script>
import heador from '../public/heador'
import hslider from './hslider.vue'

export default {
  name: 'Home',
  components: {
    heador,
    hslider
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/reset.scss';
</style>
