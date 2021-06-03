<template>
  <div>
    <heador/>
    <hslider/>
    <HomeNovice/>
    <HomeBorrow/>
    <HomeMoney/>
    <Homeproduct/>
    <home-life/>
    <HomeFooter/>
    <navbar/>
    <test/>
  </div>
</template>

<script>
import heador from '../public/heador'
import hslider from './hslider.vue'
import HomeNovice from './novice.vue'
import HomeBorrow from './borrow.vue'
import HomeMoney from './money.vue'
import Homeproduct from './product.vue'
import HomeLife from './life.vue'
import HomeFooter from './footer.vue'
import navbar from '../public/navbar'
import Test from '../test/test.vue'

export default {
  name: 'TheHome',
  components: {
    heador,
    hslider,
    HomeNovice,
    HomeBorrow,
    HomeMoney,
    Homeproduct,
    HomeLife,
    HomeFooter,
    navbar,
    Test
  }
}
</script>

// <style lang="scss">
//   @import '../assets/styles/reset.scss';
// </style>
