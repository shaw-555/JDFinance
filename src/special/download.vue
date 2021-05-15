<template>
  <panel title="下载APP" :class="$style.panel">
    <section :class="$style.content">
      <div></div>
      <p>立即下载</p>
      <span>@Copyright</span>
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
export default {
  name: 'Download',
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
@import "../assets/styles/element.scss";
  html,body {
    background-color: #fff;
    .panel{
      @include panel;
      margin: 0 !important;
      >h4{
        display: none;
      }
      .content{
        @include flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 1136px;
        >div {
          background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) center center no-repeat;
          width: 600px;
          height: 800px;
          background-size: 100% auto;
        }
        >p {
          @include btn($size:32px,$color:#fff,$bgcolor: #F1443E,$padding:5px, $radius: 5px);
          height: 100px;
          line-height: 100px;
          width: 471px;
          position: fixed;
          bottom: 130px;
        }
        span{
          position: fixed;
          bottom: 23px;
          color: #eff;
          font-size: 30px;
        }
      }
    }
  }
</style>
