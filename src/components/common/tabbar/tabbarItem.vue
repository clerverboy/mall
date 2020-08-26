<!--  -->
<template>
 <div class="tab-bar-item" @click="itemClick">
   <div v-if="!isOn"><slot name="item-icon"></slot></div>
   <div v-else><slot name="item-icon-on"></slot></div>
   <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
 data () {
 return {
  //  isOn:false
  }
 },
 props:{
   path:String,
   activeColor:{
     type:String,
     default:'red'
   }
 },
 computed:{
   isOn(){
     return this.$route.path == this.path
   },
   activeStyle(){
     return this.isOn ? {color:this.activeColor}:{}
   }
 },
 methods:{
   itemClick(){
     this.$router.replace(this.path)
   }
 }
}

</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    
  }


</style>
