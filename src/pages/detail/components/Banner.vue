<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img"
                src="//img1.qunarzz.com/sight/p0/1603/50/50309ba1d90e4e3290.water.jpg_600x330_acaaf06b.jpg" />
            <div class="banner-info">
                <div class="banner-title">流溪河国家森林公园</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe632;</span>8
                </div>
            </div>
        </div>
        <CommonGallary :imgs='imgs' v-show='showGallary' @close='handleGallaryClose'></CommonGallary>
    </div>
</template>
  
<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
    name: 'Banner',
    components: {
        CommonGallary
    },
    data() {
        return {
            showGallary: false,
            imgs: ['http://img1.qunarzz.com/sight/p0/1603/50/50309ba1d90e4e3290.water.jpg_r_800x800_3e120f4a.jpg',
                'http://img1.qunarzz.com/sight/p0/1411/4f/aa1e6d34bc8ccdea819bfdb16ac49855.water.jpg_r_800x800_45caf40a.jpg']
        }
    },
    methods: {
        handleBannerClick() {
            this.showGallary = true
        },
        handleGallaryClose() {
            this.showGallary = false
        }
    }
}
</script>
  
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top,rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        height .32rem
        line-height .4rem
        margin-top .14rem
        border-radius .2rem
        font-size .24rem
        background rgba(0,0,0,.3)
        .banner-icon
          font-size .24rem
</style>