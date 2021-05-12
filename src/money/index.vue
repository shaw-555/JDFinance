<template>
  <div>
    <heador/>
    <money-slider/>
    <Ada/>
    <Adb/>
    <Adc/>
    <money-footer/>
    <navbar/>
  </div>
</template>

<script>
import heador from '../public/heador'
import MoneySlider from './mslider.vue'
import MoneyFooter from './footer.vue'
import Ada from './Ada.vue'
import Adb from './Adb.vue'
import Adc from './Adc.vue'
import navbar from '../public/navbar'

export default {
  name: 'Money',
  components: {
    heador,
    MoneySlider,
    MoneyFooter,
    navbar,
    Ada,
    Adb,
    Adc
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/reset.scss';
</style>
