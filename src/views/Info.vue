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
        <div class="item" v-for="(item, index) in 5" :key="index" @click="add(index)">
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
    <div class="menu" v-show="goods.length > 0">
      <span>已选商品</span>
      <div class="item" v-for="(item, index) in goods.length" :key="index">
        <el-card>
          <div class="goods">
            <img src="../assets/logo.png" alt="">
            <div class="fonts">
              <span>辣子鸡丁</span>
              <nav>
                <span>¥15</span>
                <span><del>¥18</del></span>
              </nav>
            </div>
            <el-link>删除</el-link>
          </div>
        </el-card>
      </div>
    </div>
    <div class="bottom">
      <el-badge :value="goods.length" type="primary">
        <img src="../assets/good.png" alt="" class="good_icon"/>
      </el-badge>
      <nav>
        <span>¥15</span>
        <span>配送费 ¥2.5</span>
      </nav>
      <el-button type="primary" round size="medium">结算</el-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Info",
  components: {Header},
  data() {
    return {
      goods: []
    }
  },
  methods: {
    add(k){
      this.goods.push(k)
    }
  }
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

.bottom {
  z-index: 999;
  position: fixed;
  bottom: 0;
  height: 56px;
  left: 0;
  width: 100%;
  border: none;
  border-top: 1px solid #EBEEF5;
  box-shadow: 0 -5px 10px  -4px rgba(0, 0, 0, .1);
  background: #FFFFFF;
  display: flex;
  align-items: center;

  .el-badge {
    margin-left: 5%;
  }

  .good_icon {
    height: 25px;
    width: 25px;
  }

  nav {
    display: flex;
    flex-direction: column;
    margin-left: 10%;

    span {
      font-size: 12px;

      &:first-child {
        font-size: 14px;
        color: red;
      }

      &:last-child {
        margin-top: 5px;
      }
    }
  }

  button {
    margin-left: auto;
    margin-right: 5%;
  }
}

.menu {
  background: #FFFFFF;
  z-index: 999;
  height: 250px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 56px;
  box-shadow: 0 -5px 10px  -4px rgba(0, 0, 0, .1);
  border-radius: 30px 30px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  border-top: 1px solid #C0C4CC;

  span {
    margin-top: 10px;
    font-size: 18px;
  }

  .item {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    margin-top: 5%;

    &:last-child {
      padding-bottom: 5%;
    }

    .goods {
      display: flex;

      img {
        height: 100px;
        width: 130px;
      }

      .fonts {
        margin-left: 5%;
        display: flex;
        flex-direction: column;

        span {
          margin-top: 0;
          font-size: 16px;
        }

        nav {
          margin-top: auto;

          span {
            font-size: 13px;

            &:first-child {
              font-size: 16px;
              color: red;
            }

            &:last-child {
              margin-left: 20%;
            }
          }
        }
      }

      a {
        margin-left: auto;
      }
    }
  }
}
</style>
