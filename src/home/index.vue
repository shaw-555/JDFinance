<template>
  <div>
    the home
    <btn>刘云最美</btn>
    <panel :title="'京东赛高'"></panel>
  </div>
</template>

<script>
import btn from './btn.vue'
import panel from '../core/panel.vue'

export default {
  name: 'Home',
  components: {
    btn,
    panel
  }
}
</script>
