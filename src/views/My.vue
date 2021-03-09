<template>
  <div>
    <Header title="个人中心" :show-back="false"/>
    <div class="body">
      <div class="content">
        <el-card>
          <div class="top">
            <img src="../assets/logo.png" alt="">
            <span>我是吃货</span>
            <nav>
              <el-card>
                <div>
                  <span>账户余额: <span>¥20</span></span>
                  <div class="add">
                    <el-link>立即充值</el-link>
                  </div>
                </div>
              </el-card>
            </nav>
          </div>
        </el-card>
        <div class="bottom">
          <el-card>
            <div class="item">
              <el-card>
                <div>
                  <i class="el-icon-phone"></i>
                  <span>修改手机号</span>
                </div>
              </el-card>
            </div>
            <div class="item">
              <el-card>
                <div>
                  <i class="el-icon-edit"></i>
                  <span>修改手机号</span>
                </div>
              </el-card>
            </div>
            <div class="item">
              <el-card>
                <div>
                  <i class="el-icon-lock"></i>
                  <span>修改手机号</span>
                </div>
              </el-card>
            </div>
            <div class="item">
              <el-card>
                <div>
                  <i class="el-icon-star-on"></i>
                  <span>修改手机号</span>
                </div>
              </el-card>
            </div>
            <div class="item">
              <el-button type="danger" round>退出登录</el-button>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <BottomMenu :index="4"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BottomMenu from "@/components/BottomMenu";

export default {
  name: "My",
  components: {BottomMenu, Header}
}
</script>

<style scoped lang="scss">
.content {
  margin-top: 5%;
  margin-left: 5%;
  width: 90%;

  .top {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 120px;
      width: 120px;
      border-radius: 60px;
    }

    span {
      font-weight: bold;
      margin-top: 10px;
      font-size: 16px;
    }

    nav {
      margin-top: 10px;
      width: 100%;
    }

    div {
      align-items: center;

      span {
        margin-top: 0;
        font-weight: normal;

        span {
          font-size: 20px;
        }
      }

      .add {
        float: right;
      }
    }
  }

  .bottom {
    margin-top: 10px;
    margin-bottom: 5%;

    .item {
      margin: 5% 0 5% 0;

      button {
        width: 100%;
      }

      div {
        display: flex;
        align-items: center;

        i {
          color: #303133;
        }

        span {
          font-size: 14px;
          margin-left: 10px;
          color: #303133;
        }
      }
    }
  }
}
</style>
