<template>
  <div>
    <heador/>
    <money-slider/>
    <Ada/>
    <the-money/>
    <Adb/>

    <money-finance/>
    <Adc/>
    <money-footer cname="mfooter"/>
    <navbar/>
  </div>
</template>

<script>
import heador from '../public/heador'
import MoneySlider from './mslider.vue'
import MoneyFooter from './footer.vue'
import Ada from './Ada.vue'
import theMoney from './theMoney.vue'
import Adb from './Adb.vue'
import MoneyFinance from './finance.vue'
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
    theMoney,
    Adb,
    MoneyFinance,
    Adc
  }
}
</script>

<style lang="scss">
@import '../assets/styles/reset.scss';
  .mfooter {
    ul{
      li:first-child{
        display: none;
      }
    }
  }
</style>
