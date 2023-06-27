<!--这是全国城市列表页-->
<!--需求：根据后台数据显示城市列表，能够动态滚动，自动根据内容排版，有按照拼音分组输出-->
<!--难点：数据动态获取，从父组件获取，列表动态分组渲染-->

<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom" @click="aaa()">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{ this.currentCity }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{ key }}</div>
                <ul class="item-list">
                    <li class="item border-bottom" v-for="innerItem of item" :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)">
                        {{ innerItem.name }}
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter: String
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    methods: {
        handleCityClick(city) {
            this.$store.commit('changeCity', city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch: {
        letter() {
            if (this.letter) {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper);
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.border-topbottom
		&:before
			border-color:#ccc
		&:after
			border-color:#ccc
	.border-bottom
		&:before
			border-color:#ccc
	.list
		position:absolute
		overflow:hidden
		top:1.58rem
		left:0
		right:0
		bottom:0
		.title
			line-height:.54rem
			background-color:#eee
			padding-left:.2rem
			color:#666
			font-size:.26rem
		.button-list
			padding:.1rem .6rem .1rem .1rem
			overflow:hidden
			.button-wrapper
				float:left
				width:33.33%
				.button
					margin:.1rem
					padding:.1rem 0
					border-radius:.06rem
					text-align:center
					border:.02rem solid #ccc
		.item-list
			.item
				line-height:.76rem
				padding-left:.2rem
</style>