<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    },
  }
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
</style>