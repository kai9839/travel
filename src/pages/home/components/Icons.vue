<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="pages.index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                autoplay: false
            }
            // iconList: [{
            //     id: '0001',
            //     imgUrl: 'https://imgs.qunarzz.com/vc/fd/55/94/6c7152c2a8b35a9c49bb26ea25.png_92.png',
            //     desc: '主题游'
            // }, {
            //     id: '0003',
            //     imgUrl: 'https://imgs.qunarzz.com/vc/eb/d9/1b/e24bca3f1ef6ae6ebdee15e4ca.png_92.png',
            //     desc: '徒步登山'
            // }, {
            //     id: '0004',
            //     imgUrl: 'https://imgs.qunarzz.com/vc/c8/01/32/8f6e29b7b6ce0a807742c2587a.png_92.png',
            //     desc: '深度探险'
            // }, {
            //     id: '0005',
            //     imgUrl: 'https://imgs.qunarzz.com/vc/c3/f2/54/2e1c8f9403de1ed28895c9ffa4.png_92.png',
            //     desc: '亲自游学'
            // }, {
            //     id: '0006',
            //     imgUrl: 'https://imgs.qunarzz.com/vc/fd/55/94/6c7152c2a8b35a9c49bb26ea25.png_92.png',
            //     desc: '景点门票'
            // }, {
            //     id: '0007',
            //     imgUrl: 'https://imgs.qunarzz.com/vc/eb/d9/1b/e24bca3f1ef6ae6ebdee15e4ca.png_92.png',
            //     desc: '景点门票'
            // }, {
            //     id: '0008',
            //     imgUrl: 'https://imgs.qunarzz.com/vc/c3/f2/54/2e1c8f9403de1ed28895c9ffa4.png_92.png',
            //     desc: '景点门票'
            // }, {
            //     id: '0009',
            //     imgUrl: 'https://imgs.qunarzz.com/vc/fd/55/94/6c7152c2a8b35a9c49bb26ea25.png_92.png',
            //     desc: '换页'
            // }, {
            //     id: '0009',
            //     imgUrl: 'https://imgs.qunarzz.com/vc/fd/55/94/6c7152c2a8b35a9c49bb26ea25.png_92.png',
            //     desc: '换页'
            // }]
        }
    },
    computed: {
        pages() {
            const pages = []
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom:50%
    .icons
        margin-top: .1rem
        .icon
            position : relative
            overflow:hidden
            float: left
            width: 25%
            height:0
            padding-bottom : 25%
            .icon-img
                position: absolute
                top: 0
                left : 0
                right: 0
                bottom: .44rem
                box-sizing:border-box
                padding: .1rem 
                .icon-img-content
                    display: block
                    margin:0 auto
                    height: 100%
            .icon-desc
                position: absolute
                left : 0
                right: 0
                bottom: 0
                height :0.44rem
                line-height:.44rem
                text-align: center
                color:$darkTextColor
                // overflow: hidden
                // white-space:nowrap
                // text-overflow:ellipsis
                ellipsis()
</style>