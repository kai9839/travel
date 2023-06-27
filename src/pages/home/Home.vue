<template>
    <div>
        <!--使用子组件-->
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-Weekend>
    </div>
</template>

<script>
//	引入header组件
import HomeHeader from './components/Header.vue'
//	引入轮播图HomeSwiper组件
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'Home',
    //		使用了子组件需要在此先声明
    components: {
        //			在ES6中,对象的键和值相等可以省略值.
        //			HomeHeader:HomeHeader
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data() {
        return {
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
            lastCity: ''
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo() {
            axios.get('./api/index.json?=' + this.city).then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
            res = res.data;
            if (res.ret && res.data) {
                const data = res.data;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
            }
        }
    },
    mounted() {
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated() {
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>

<style>

</style>
