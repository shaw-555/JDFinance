import { swiper, swiperSlide } from 'vue-awesome-swiper';
<template>
  <panel title="每日签到" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" />
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160"/>
      </div>
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
export default {
  name: 'RiseDaily',
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
  @import '../assets/styles/element.scss';

  .panel{
    @include panel;
    height: 270px;
    position: relative;
    &:before{
      content:'hello world';
      position: absolute;
      right: 50px;
      top: 50px;
      font-size: 25px;
      color: #666;
    }
    .content {
      @include flex(row);
      justify-content: space-between;
      .item {
        width: 50%;
        img {
          width: 95%;
        }
      }
    }
  }
</style>
