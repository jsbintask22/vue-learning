<template>
  <div>
    <div>
      <span @click="toHome()">Sign In</span> &nbsp; <span>Sign Up</span>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    methods: {
      toHome: function () {
        this.$router.push("/home/list");
      }
    }
  }
</script>

<style scoped>

</style>
