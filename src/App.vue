<template>
  <div id="app">
    <KeepAlive exclude="Detail">
      <router-view />
    </KeepAlive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
