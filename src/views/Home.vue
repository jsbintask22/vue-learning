<template>
  <div>
    <router-view />
    <router-link :to="{name: 'home-list'}">list</router-link>
    <router-link :to="{name: 'home-personal-info'}">Personal Info</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>

</style>
