<template>
  <div class="ious">
    <heador/>
    <ious-slider/>
    <ious-welfare/>
    <ious-service/>
    <ious-footer/>
    <navbar/>
  </div>
</template>

<script>
import heador from '../public/heador'
import navbar from '../public/navbar'
import IousFooter from './footer.vue'
import IousSlider from './Islider.vue'
import IousWelfare from './welfare.vue'
import IousService from './service.vue'

export default {
  name: 'Ious',
  components: {
    heador,
    navbar,
    IousFooter,
    IousSlider,
    IousWelfare,
    IousService
  }
}
</script>
