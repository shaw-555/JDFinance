<template>
  <panel title="极速借贷" :class="$style.panel">
    <section :class="$style.content">
      <router-link :to="{ name : 'home' }">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
      </router-link>
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
export default {
  name: 'HomeBorrow',
  components: {
    panel
  }
}

// borrow 组件，本质是就是panel内安插一个section元素，在section元素内再放一个布局为block的图片
</script>

<style lang="scss" module>
  @import '../assets/styles/element.scss';
  .panel {
    @include panel;
    .content {
      // 保持与页面底部的距离
      padding-bottom: 40px;
      img {
        // 宽度撑开整个页面
        width: 100%;
        // block布局以独占整个页面
        display: block;
      }
    }
  }
</style>
