<template>
  <div>
    <div class="menu" v-show="showMenu">
      <span>已选商品</span>
      <div class="item" v-for="(item, index) in 4" :key="index">
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
      <el-badge :value="2" type="primary">
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
export default {
  name: "Pay",
  props: {
    showMenu: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

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
