<template>
  <panel title="人间极品" :class="$style.panel">
    <section :class="$style.content">
      <div class="arrow">更多尖货></div>
      <slider :options="options" :items="items" cname="product-slider"></slider>
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
import slider from '../core/slider.vue'

export default {
  name: 'HomeProduct',
  components: {
    panel,
    slider
  },
  data () {
    return {
      items: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421'
      }],
      options: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidersPreview: 2,
        spaceBetween: 10
      }
    }
  }
}
</script>

<style lang="scss">
  .product-slider {
    // 第三方库的class不用module为妙，可以避免混淆
    .swiper-container{
      box-sizing: border-box;
      padding: 0 24px;
      .swiper-slide {
        a{
          display: inline-block;
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>

<style lang="scss" module>
  @import "../assets/styles/element.scss";
  .panel {
    @include panel;
    .content {
      padding: 40px;
      position: relative;
      &>div {
        position: absolute;
        font-size: 30px;
        color: #999;
        right: 10px;
        top: -70px;
      }
    }
  }
</style>
