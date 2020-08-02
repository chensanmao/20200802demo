<template>
  <div>
    

     <my-nav></my-nav>
     

    <router-view />
  </div>
</template>
<script>
import myNav from './view/nav'

export default {
  components:{
    myNav,
    
  }
};
</script>
<style lang="" scoped>

</style>