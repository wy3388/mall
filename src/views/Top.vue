<template>
  <div>
    <Header title="排行榜" :show-back="true"/>
    <div class="box">
      <el-card v-for="(item, index) in items" :key="index">
        <div class="item">
          <img :src="item.image" alt="">
          <div class="item_body">
            <h2>{{ item.top }}</h2>
            <span class="text-color-gray">销量:{{ item.sales }}</span>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Top",
  components: {Header},
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.requestData()
  },
  methods: {
    requestData() {
      this.$http.get('api/home/top')
      .then(resp => {
        this.items = resp.data.data;
      }).catch(() => {
        this.$toast('请求失败')
      })
    }
  }
}
</script>

<style scoped lang="scss">

.el-card {
  margin: 2% 0;
}

.box {
  width: 90%;
  margin-left: 5%;
  margin-top: 2%;
  margin-bottom: 2%;

  .item {
    display: flex;

    img {
      height: 80px;
      width: 80px;
    }

    .item_body {
      margin-left: 5%;
      height: 100%;
      display: flex;
      flex-direction: column;

      span {
        margin-top: 2%;

        &:nth-of-type(1) {
          font-size: 14px;
        }

        &:nth-of-type(2) {
          margin-top: 5%;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
