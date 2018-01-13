<template>
  <div>
    <div class="">
      <a class="" href="/">
        <img class="img" src="build/logo.png" />
      </a>
    </div>
    <nav class="">
      <ul class="navbar">
        <li><a href="/">なんの</a></li>
        <li><a href="/">意味もない</a></li>
        <li><a href="/">navバー</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headerTitle: 'ヘッダー部分だよ'
    }
  }
}
</script>

<style>
.img {
  width: 75px;
  height: 75px;
}
.navbar {
  float: right;
}
</style>
