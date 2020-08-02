<template>
  <div>
    <div class="footer">
      <div
        :class="[$route.path==item.path?'active':'']"
        v-for="item in navList"
        :key="item.path"
        @click="getNav(item.path)"
      >
        <img :src="$route.path==item.path?item.img2:item.img1" alt />
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          path: "/home",
          title: "首页",
          img1: require("../../assets/image/home.png"),
          img2: require("../../assets/image/home_click.png")
        },
        {
          path: "/order",
          title: "订单",
          img1: require("../../assets/image/order.png"),
          img2: require("../../assets/image/order_click.png")
        },
        {
          path: "/mine",
          title: "我的",
          img1: require("../../assets/image/mine.png"),
          img2: require("../../assets/image/mine_click.png")
        }
      ]
    };
  },
  methods: {
    getNav(i) {
      this.$router.push(i);
    }
  }
};
</script>
<style lang="" scoped>
.footer {
  width: 100%;
  height: 1.2rem;
  border-top: 1px solid #dcdcdc;
  box-shadow: 1px 1px 1px 1px silver;
  background: #eee;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: grey;
  
}
.active {
  color: #6495ed;
}

img {
  width: 0.6rem;
  height: 0.6rem;
}
p {
  margin-top: 0.1rem;
  font-size: 0.32rem;
}
</style>