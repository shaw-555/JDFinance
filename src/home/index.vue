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
    <footer/>
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
import footer from '../public/footer'

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
    footer
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/reset.scss';
</style>
