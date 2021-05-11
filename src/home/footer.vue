<template>
    <panel title="公司信息" :class="$style.content">
    </panel>
</template>

<script>
import panel from '../core/panel'
export default {
  name: 'HomeFooter',
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
  @import '../assets/styles/element.scss';
  .content {
    @include panel;
  }
</style>
