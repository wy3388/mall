<template>
  <div>
    <Header title="我的订单" :show-back="false"/>
    <div class="body">
      <div class="content">
        <div class="item" v-for="(item, index) in 10" :key="index">
          <el-card>
            <div class="top">
              <img src="../assets/logo.png" alt="">
              <div>
                <span>农家土鸡饭 ></span>
                <span>三鲜汤饭猪肝饭</span>
                <span class="text-color-gray">2021-3-9 11:30:10</span>
              </div>
              <span class="status_label">已完成</span>
            </div>
            <div class="bottom">
              <nav>
                <el-button type="danger" round size="small">删除订单</el-button>
                <el-button type="primary" round size="small">再来一单</el-button>
              </nav>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <BottomMenu :index="3"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BottomMenu from "@/components/BottomMenu";

export default {
  name: "Order",
  components: {BottomMenu, Header}
}
</script>

<style scoped lang="scss">

.content {
  width: 90%;

  .item {
    width: 100%;
    margin: 5%;

    .top {
      display: flex;

      img {
        height: 60px;
        width: 60px;
        border-radius: 10px;
      }

      div {
        margin-left: 5%;
        display: flex;
        flex-direction: column;

        span {
          margin-top: 5px;
          font-size: 14px;

          &:first-child {
            margin-top: 0;
            font-size: 16px;
          }
        }
      }

      .status_label {
        font-size: 12px;
        margin-left: auto;
      }
    }

    .bottom {
      display: flex;
      margin-top: 20px;

      nav {
        margin-left: auto;
      }
    }
  }
}

</style>
