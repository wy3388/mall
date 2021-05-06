<template>
  <div>
    <Header title="个人中心" :show-back="false"/>
    <div class="body">
      <div class="content">
        <el-card>
          <div class="top">
            <img :src="data.avatar" alt="">
            <span>{{ data.username }}</span>
            <nav>
              <el-card>
                <div>
                  <span>账户余额: <span>¥{{ data.total_balance }}</span></span>
                  <div class="add" @click="toEdit(1)">
                    <el-link>立即充值</el-link>
                  </div>
                </div>
              </el-card>
            </nav>
          </div>
        </el-card>
        <div class="bottom">
          <el-card>
            <div class="item" @click="toEdit(3)">
              <el-card>
                <div>
                  <i class="el-icon-phone"></i>
                  <span>修改手机号</span>
                </div>
              </el-card>
            </div>
            <div class="item" @click="toEdit(2)">
              <el-card>
                <div>
                  <i class="el-icon-edit"></i>
                  <span>修改昵称</span>
                </div>
              </el-card>
            </div>
            <div class="item" @click="toEdit(4)">
              <el-card>
                <div>
                  <i class="el-icon-lock"></i>
                  <span>修改密码</span>
                </div>
              </el-card>
            </div>
            <div class="item" @click="toStar">
              <el-card>
                <div>
                  <i class="el-icon-star-on"></i>
                  <span>我的收藏</span>
                </div>
              </el-card>
            </div>
            <div class="item" @click="toTop">
              <el-card>
                <div>
                  <i class="el-icon-s-promotion"></i>
                  <span>排行榜</span>
                </div>
              </el-card>
            </div>
            <div class="item">
              <el-button type="danger" round @click="logOut">退出登录</el-button>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <BottomMenu :index="4"/>
  </div>
</template>

<script>
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";
import {getId} from "../util";

export default {
  name: "My",
  components: {BottomMenu, Header},
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    this.requestData()
  },
  methods: {
    toEdit(type) {
      this.$router.push({path: '/edit', query: {type: type}})
    },
    toStar() {
      this.$router.push({path: '/star'})
    },
    toTop() {
      this.$router.push({path: '/top'})
    },
    requestData() {
      let id = getId()
      let url = 'api/user/getUserMsg?user_id=' + id
      this.$http.get(url)
          .then(resp => {
            let data = resp.data
            if (data.code === 0) {
              this.$toast(data.msg)
              return
            }
            this.data = data.data
          }).catch(() => {
        this.$toast('请求失败')
      })
    },
    logOut() {
      localStorage.clear()
      this.$router.push({path: '/login'})
    }
  }
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
