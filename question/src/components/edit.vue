<template>
  <div>
    

    <my-nav></my-nav>
  </div>
</template>
<script>
import myNav from "../components/view//nav";
export default {
  components: {
    myNav
  },
  methods: {
    goto() {
      window.history.back(-1);
    }
  }
};
</script>
<style lang="" scoped>
.return {
  width: 100%;
  height: 0.94rem;
  line-height: 0.47rem;
  border-bottom: 0.02rem dotted #dcdcdc;
  padding: 0.2rem;
  color: #666;
}
.ret {
  font-size: 0.4rem;
  float: left;
}
.title {
  font-size: 0.4rem;
  float: right;
  margin-right: calc(50% - 40px);
}
input {
  width: calc(100% - 120px);
  padding: 0.01rem 0.02rem;
  border: 0.01rem solid #666;
}
</style>