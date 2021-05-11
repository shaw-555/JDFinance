<template>
  <div>
    <heador/>
    <hslider/>
    <HomeNovice/>
    <HomeBorrow/>
    <HomeMoney/>
    <HomeRroduct/>
    <home-life/>
    <HomeFooter/>
    <navbar/>
  </div>
</template>

<script>
import heador from '../public/heador'
import hslider from './hslider.vue'
import HomeNovice from './novice.vue'
import HomeBorrow from './borrow.vue'
import HomeMoney from './money.vue'
import HomeRroduct from './product.vue'
import HomeLife from './life.vue'
import HomeFooter from './footer.vue'
import navbar from '../public/navbar'

export default {
  name: 'Home',
  components: {
    heador,
    hslider,
    HomeNovice,
    HomeBorrow,
    HomeMoney,
    HomeRroduct,
    HomeLife,
    HomeFooter,
    navbar
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/reset.scss';
</style>
