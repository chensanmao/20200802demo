<template>
  <div>
    <div class="my">
      <img src="../../assets/image/face.png" alt />
      <div class="wz">
        <p>{{username}}</p>
        <p class="info">账户：{{account}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account:'',
      username:''
    };
  },
   mounted() {  //这个是调接口
        this.$axios({
            url:'http://localhost:8080/data/userInfo',
           
            
        })
        .then((res)=>{
            console.log(res,'请求成功时候的数据')
            this.account = res.data.data.account
            this.username = res.data.data.username
        })
        .catch((err)=>{
            console.log(err,'请求不到时候返回的错误信息')
        })
       
   },
         
}
</script>
<style lang="" scoped>
.my {
  width: 96%;
  height: 3rem;
  border: 0.01rem solid #ccc;
  margin: 0.15rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
img {
  width: 2rem;
  height: 2rem;
}
.wz {
  font-size: 0.5rem;
}
.info {
  margin-top: 0.35rem;
}
</style>
