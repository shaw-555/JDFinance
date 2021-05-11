<template>
  <div>
    <heador/>
    <money-slider/>
    <Ada/>
    <money-footer/>
    <navbar/>
  </div>
</template>

<script>
import heador from '../public/heador'
import MoneySlider from './mslider.vue'
import MoneyFooter from './footer.vue'
import Ada from './Ada.vue'
import navbar from '../public/navbar'

export default {
  name: 'Money',
  components: {
    heador,
    MoneySlider,
    MoneyFooter,
    navbar,
    Ada
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/reset.scss';
</style>
