<!--这是城市搜索页面及其逻辑-->
<!--需求：在搜索框中输入城市或拼音或其首字母，能够动态地显示符合相关条件的城市，其中城市的数据来自该列表的城市。当清空搜索框内容时列表也会相应地隐藏-->
<!--技术难点：动态搜索数据，加载城市数据，清空搜索框则内容也会被清空-->

<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市或拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id"
                    @click="handleCityClick(item.name)">{{ item.name }}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>

</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    //		接收父组件传来的数据(数据名:类型)
    props: {
        cities: Object
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    //		这是一个计算属性
    computed: {
        //			判断当前输入框中是否有内容
        hasNoData() {
            return !this.list.length
        }
    },
    methods: {
        handleCityClick(city) {
            this.$store.commit('changeCity', city)
            this.$router.push('/')
        }
    },
    watch: {
        keyword() {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            //				搜索城市数据中符合搜索条件的城市,利用定时器函数来限制操作提高性能,但是搜索算法有待提高
            this.timer = setTimeout(() => {
                //					将匹配的结果放在该数组中,然后循环输出
                const result = [];
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result;
            }, 100)
        }
    },
    //		调用组件实现列表滚动
    mounted() {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.search
		height:.72rem
		padding:0 .1rem
		background-color:$bgColor
		.search-input
			box-sizing:border-box
			width:100%
			height:.62rem
			padding:0 .1rem
			line-height:.62rem
			text-align:center
			border-radius:.06rem
			color:#666
	.search-content
		z-index:1
		overflow:hidden
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		background:#eee
		.search-item
			line-height:.62rem
			padding-left:.2rem
			background:#fff
			color:#666
</style>