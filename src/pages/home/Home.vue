<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
        <RecommendIcons></RecommendIcons>
        <WeekendIcons></WeekendIcons>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import RecommendIcons from './components/Recommend.vue'
import WeekendIcons from './components/Weekend.vue'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        RecommendIcons,
        WeekendIcons
    }
}
</script>

<style>

</style>