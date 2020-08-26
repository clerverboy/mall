<!--  -->
<template>
 <div id="home">
   <nav-bar class="home-nav">
     <template #center>
       <h3>购物街</h3>
     </template>

   </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img class="swiper-item-img" :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
 </div>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar'
import {getHomeData} from "@/network/home"

import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'
// import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
 data () {
 return {
 }
 },
 components:{
   NavBar,
   Swiper,
   SwiperItem
 },
 data(){
   return{
     banners:[],
     recommends:[]
   }
 },
 //vue组件创建时生效
 created(){
   getHomeData().then(res =>{
     this.banners = res.data.banner.list;
     this.recommends = res.data.recommend.list;
     console.log(res);
   })
 }
}

</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }

  .swiper-item-img {
    width: 100%;
  }
</style>
