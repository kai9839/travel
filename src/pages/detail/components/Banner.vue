<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-title">{{ this.sightName }}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe632;</span>
                    {{ this.bannerImgs.length }}
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary :imgs='bannerImgs' v-show='showGallary' @close='handleGallaryClose'></common-gallary>
        </fade-animation>
    </div>
</template>
  
<script>
import CommonGallary from 'common/gallary/Gallary.vue'
import FadeAnimation from 'common/fade/FadeAnimation.vue'
export default {
    name: 'DetailBanner',
    components: {
        CommonGallary,
        FadeAnimation
    },
    data() {
        return {
            showGallary: false
        }
    },
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
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
  