<template>
  <div>
    the home
    <heador/>
    <btn>刘云最美</btn>
    <panel :title="'京东赛高'"></panel>
    <hslider/>
  </div>
</template>

<script>
import heador from '../public/heador'
import btn from '../core/btn.vue'
import panel from '../core/panel.vue'
import hslider from './hslider.vue'

export default {
  name: 'Home',
  components: {
    btn,
    panel,
    heador,
    hslider
  }
}
</script>

<style lang="scss" module>
  @import '../assets/styles/reset.scss';
</style>
