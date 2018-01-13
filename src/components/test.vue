<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/">
      modoru
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'TEST'
    }
  }
}
</script>

<style scoped>
</style>
