<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CitySList></CitySList>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CitySList from './components/List'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CitySList,
    }
}
</script>

<style lang="stylus" scoped>

</style>