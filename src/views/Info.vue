<template>
  <div>
    <Header title="店铺详情" :show-back="true"/>
    <div class="body">
      <div class="content">
        <el-card>
          <div class="top">
            <div class="left">
              <h5>叫了只鸡（石桥铺店）叫了只鸡（石桥铺店）叫了只鸡（石桥铺店）叫了只鸡（石桥铺店）叫了只鸡（石桥铺店）</h5>
              <nav>
                <i class="el-icon-star-on">4.5分</i>
                <span>月售1200</span>
                <span>配送约30分钟</span>
              </nav>
              <span class="address">重庆市石桥铺高创敬业大厦 ></span>
              <span class="info">简介介绍简介介绍简介介绍简介介绍简</span>
            </div>
            <img src="../assets/logo.png" alt=""/>
          </div>
        </el-card>
        <div class="item">
          <el-card>
            <div class="goods">
              <img src="../assets/logo.png" alt="">
              <nav>
                <span class="name">农家土蛋肠粉</span>
                <span class="number">月售200</span>
                <div>
                  <span>¥12</span>
                  <span><del>¥15</del></span>
                  <i class="el-icon-circle-plus"></i>
                </div>
              </nav>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <Pay/>
  </div>
</template>

<script>
import Pay from "@/components/Pay";
import Header from "@/components/Header";

export default {
  name: "Info",
  components: {Header, Pay}
}
</script>

<style scoped lang="scss">
.content {
  margin-top: 5%;
  width: 90%;
  margin-left: 5%;

  .top {
    display: flex;

    .left {
      display: flex;
      flex-direction: column;

      h5 {
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      nav {
        margin-top: 10px;
        font-size: 12px;
        display: flex;
        align-items: center;

        i {
          color: #EEB829;
        }

        span {
          margin-left: 10px;
        }
      }

      .address {
        font-size: 12px;
        margin-top: 10px;
      }

      .info {
        margin-top: 10px;
        font-size: 12px;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    img {
      height: 60px;
      width: 60px;
      margin-left: auto;
    }
  }

  .item {
    margin-top: 5%;
    margin-bottom: 5%;

    .goods {
      display: flex;

      img {
        height: 100px;
        width: 120px;
      }

      nav {
        width: 95%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;

        .name {
          font-size: 18px;
        }

        .number {
          margin-top: 10px;
          font-size: 14px;
        }

        div {
          margin-top: auto;
          display: flex;
          align-items: center;

          span {

            &:nth-of-type(1) {
              font-size: 18px;
              color: red;
            }

            &:nth-of-type(2) {
              font-size: 14px;
              margin-left: 20px;
            }
          }

          i {
            margin-left: auto;
            color: #409EFF;
          }
        }
      }
    }
  }
}
</style>
