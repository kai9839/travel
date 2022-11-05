<template>
    <div>
        <HomeHeader :city="city"></HomeHeader>
        <HomeSwiper :list='swiperList'></HomeSwiper>
        <HomeIcons :list='iconList'></HomeIcons>
        <RecommendIcons :list="recommendList"></RecommendIcons>
        <WeekendIcons :list="weekendList"></WeekendIcons>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import RecommendIcons from './components/Recommend.vue'
import WeekendIcons from './components/Weekend.vue'
import axios from 'axios'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        RecommendIcons,
        WeekendIcons
    },
    data() {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
        }
    },
    methods: {
        getHomeInfo() {
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data;
                this.city = data.city;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
            }
        }
    },
    mounted() {
        this.getHomeInfo()
    },
}
</script>

<style>

</style>