<template>
  <div id="app">
    <MainTabbar/>
  </div>
</template>
<script>
import MainTabbar from '@/components/content/MainTabbar/mainTabbar'

export default {
  name:"app",
  components:{
    MainTabbar
  }
}
</script>

<style>
  @import "assets/css/base.css"
</style>
