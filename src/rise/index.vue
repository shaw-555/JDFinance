<template>
  <div>
    <heador/>
    <rise-slider/>
    <rise-daily/>
    <rise-more/>
    <rise-footer cname="mfooter"/>
    <navbar/>
  </div>
</template>

<script>
import heador from '../public/heador'
import navbar from '../public/navbar'
import RiseFooter from './footer.vue'
import RiseSlider from './rslider.vue'
import RiseDaily from './daily.vue'
import RiseMore from './more.vue'

export default {
  name: 'Rise',
  components: {
    heador,
    navbar,
    RiseFooter,
    RiseSlider,
    RiseDaily,
    RiseMore
  }
}
</script>

<style lang="scss">
  .mfooter {
    ul{
      li:first-child{
        display: none;
      }
    }
  }
</style>
