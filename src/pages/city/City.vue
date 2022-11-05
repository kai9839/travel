<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CitySList></CitySList>
        <CityAlphabet></CityAlphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CitySList from './components/List'
import CityAlphabet from './components/Alphabet.vue'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CitySList,
        CityAlphabet
    }
}
</script>

<style lang="stylus" scoped>

</style>