<template>
  <panel title="白条福利" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
        <div>
            <h4>月度理财</h4>
            <p>预期年化收益率4.50%</p>
        </div>
        <em>去赚钱 > </em>
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
        <div>
            <h4>季度理财</h4>
            <p>历史年化回报率5.50%</p>
        </div>
        <em>去赚钱 > </em>
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
        <div>
            <h4>一年理财</h4>
            <p>历史年化回报率5.80%</p>
        </div>
        <em>去赚钱 > </em>
      </div>
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
export default {
  name: 'IousWelfare',
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
  @import '../assets/styles/element.scss';
  .panel{
    @include panel;
    >h4{
      border-bottom: 1px solid #ddd;
    }
    .content {
      margin: 10px 50px;
      .item {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      img {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 80px;
        height: 80px;
      }
      div {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 30px;
        line-height: 30px;
      }
      em {
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 30px;
        line-height: 30px;
        color: #888;
      }
    }
  }
</style>
