<template>
  <div>
    <div class="tbody">
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.numbr}}</td>
            <td>
              <span class="edit">修改</span>
              <span class="delete">删除</span>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="add">新增订单</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.$axios({
      url: "http://localhost:8080/data/listData?type=Foot"
    })
      .then(res => {
        console.log(res, "成功时候返回的数据");
        this.data = res.data.data;
        console.log(this.data);
      })
      .catch(err => {
        console.log(err, "失败时候返回的数据");
      });
  }
};
</script>
<style lang="" scoped>
.tbody {
  width: calc(100% - 20px);
  margin: 10px;
}

table {
  width: 100%;
  text-align: center;
  color: #2c3e50;
}

tr,
th,
td {
  text-align: center;
  height: 0.46rem;
  line-height: 0.46rem;

  border: 0.04rem solid grey;
}
th {
  font-weight: 800;
}
.add {
  padding: 10px;
  background: #eee;
}
.add:hover {
  background-color: #87ceeb;
}
.edit {
  color: #6495ed;
  cursor: pointer;
}
.delete {
  color: red;
  cursor: pointer;
}
</style>