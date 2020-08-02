<template>
  <div>
    <div v-show="flag">
      <div class="header">
        <a
          href="javascript:void(0)"
          @click="toggleTabs(mech);"
          :class="[currentView==mech?'active':'']"
        >机械</a>
        <a
          href="javascript:void(0)"
          @click="toggleTabs(cloth);"
          :class="[currentView==
      cloth?'active':'']"
        >服装</a>
        <a
          href="javascript:void(0)"
          @click="toggleTabs(food);"
          :class="[currentView==food?'active':'']"
        >食品</a>
      </div>
      <mech @change="change(i)" :is="currentView" keep-alive></mech>
    </div>

    <!-- 这个页面是点击修改展示的页面 -->
    <div v-show="!flag">
      <div class="return">
        <span class="ret" @click="$router.go('/order')">返回</span>
        <span class="title">修改订单</span>
      </div>
      <div class="name">
        <span>订单名称：</span>
        <input type="text" placeholder="请输入订单名称" />
      </div>

      <div class="name">
        <span>订单数量：</span>
        <input type="text" placeholder="请输入订单数量" />
      </div>

      <div class="btn">确定</div>
    </div>

    <!-- 这个页面是点击新增展示的页面 -->
    <div v-show="!flag">
      <div class="return">
        <span class="ret" @click="$router.go(-1)">返回</span>
        <span class="title">新增订单</span>
      </div>
      <div class="name">
        <span>订单名称：</span>
        <input type="text" placeholder="请输入订单名称" />
      </div>

      <div class="name">
        <span>订单数量：</span>
        <input type="text" placeholder="请输入订单数量" value="0" />
      </div>

      <div class="btn">确定</div>
    </div>

    
  </div>
</template>
<script>
import mech from "../orderC/mech";
import cloth from "../orderC/cloth";
import food from "../orderC/food";
export default {
  data() {
    return {
      mech: "mech", //机械
      cloth: "cloth", //服装
      food: "food", //食品
      currentView: "mech", //默认选中机械子组件
      flag: true
    };
  },
  components: {
    mech,
    cloth,
    food
  },
  methods: {
    toggleTabs(tabText) {
      this.currentView = tabText;
    },

    //子传父修改父组件flag的值
    change(i) {
      this.flag = false;
    }
  }
};
</script>
<style lang="" scoped>
.header {
  height: 0.88rem;
  display: flex;
  justify-content: space-around;
}
a {
  width: 1.2rem;
  text-align: center;
  font-size: 0.32rem;
  line-height: 0.88rem;
}
.active {
  border-bottom: 3px solid #87ceeb;
  color: #87ceeb;
}

/* 这个样式是点击修改的样式 */
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
  width: calc(100% - 2rem);
  padding: 0.01rem 0.02rem;
  border: 0.01rem solid #666;
}
.name {
  padding: 0.4rem 0.2rem 0rem 0.2rem;
  margin-left: 0.4rem;
}
.btn {
  width: 90%;
  margin: 0.4rem;
  padding: 0;
  font-size: 0.32rem;
  background-color: #efefef;
  border: 0.02rem solid #666;
}
</style>