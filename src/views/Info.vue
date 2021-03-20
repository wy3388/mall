<template>
  <div>
    <header>
      <i class="el-icon-arrow-left" @click="goBack"></i>
      <span>店铺详情</span>
      <span class="star" v-show="data.is_collect === 'no' && isShow" @click="star">收藏</span>
    </header>
    <div class="body">
      <div class="content">
        <el-card>
          <div class="top">
            <div class="left">
              <h5>{{ data.name }}</h5>
              <nav>
                <i class="el-icon-star-on">{{ data.score }}分</i>
                <span>配送约{{ data.delivery_time }}分钟</span>
              </nav>
              <span class="address">{{ data.address }} ></span>
              <span class="info">{{ data.abstract }}</span>
            </div>
            <img :src="data.img" alt=""/>
          </div>
        </el-card>
        <div class="item" v-for="(item, index) in data.munus" :key="index" @click="add(index)">
          <el-card>
            <div class="goods">
              <img :src="item.img" alt="">
              <nav>
                <span class="name">{{ item.name }}</span>
                <span class="number">月售{{ item.sale }}</span>
                <div>
                  <span>¥{{ item.current_amount }}</span>
                  <span><del>¥{{ item.original_amount }}</del></span>
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
      <div class="item" v-for="(item, index) in goods" :key="index">
        <el-card>
          <div class="goods">
            <img :src="item.img" alt="">
            <div class="fonts">
              <span>{{ item.name }}</span>
              <nav>
                <span>¥{{ item.current_amount }}</span>
                <span><del>¥{{ item.original_amount }}</del></span>
              </nav>
            </div>
            <el-link @click="del(index)">删除</el-link>
          </div>
        </el-card>
      </div>
    </div>
    <div class="bottom">
      <el-badge :value="goods.length" type="primary">
        <img src="../assets/good.png" alt="" class="good_icon"/>
      </el-badge>
      <nav>
        <span>¥{{ price }}</span>
        <span>配送费 ¥{{ data.send_amount }}</span>
      </nav>
      <el-button type="primary" round size="medium" @click="pay">结算</el-button>
    </div>
  </div>
</template>

<script>
import {getId} from "../util";

export default {
  name: "Info",
  data() {
    return {
      goods: [],
      data: {},
      id: '',
      price: 0,
      isShow: true
    }
  },
  mounted() {
    this.id = this.$route.query.id
    this.requestData()
  },
  methods: {
    star() {
      this.$http.post('api/home/collectStroe', {user_id: getId(), store_id: this.data.id})
          .then(resp => {
            let data = resp.data
            this.$toast(data.msg)
            if (data.code !== 0) {
              this.isShow = false
            }
          }).catch(() => {
        this.$toast('操作失败')
      })
    },
    goBack() {
      this.$router.go(-1)
    },
    add(k) {
      this.goods.push(this.data.munus[k])
      this.calcPrice()
    },
    del(k) {
      this.goods.splice(k, 1)
      this.calcPrice()
    },
    calcPrice() {
      let n = 0;
      for (let i = 0; i < this.goods.length; i++) {
        let item = this.goods[i]
        n += parseFloat(item.current_amount)
      }
      this.price = n
    },
    pay() {
      if (this.goods.length < 1) {
        this.$toast('请选择商品')
        return
      }
      let id = getId()
      let mid = ''
      let amount = 0
      for (let i = 0; i < this.goods.length; i++) {
        let item = this.goods[i]
        if (i < this.goods.length - 1) {
          mid += item.id + ','
        } else {
          mid += item.id
        }
        amount += parseFloat(item.current_amount)
      }
      let url = 'api/home/placeOrder'
      this.$http.post(url, {user_id: id, menu_id: mid, total_amount: amount})
          .then(resp => {
            let data = resp.data
            this.$toast(data.msg)
          }).catch(() => {
        this.$toast('下单失败')
      })
    },
    requestData() {
      let url = 'api/home/storeDetails?store_id=' + this.id + '&user_id=' + getId()
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
    }
  }
}
</script>

<style scoped lang="scss">
header {
  height: 50px;
  width: 100%;
  background: #409EFF;
  line-height: 50px;
  text-align: center;

  i {
    position: relative;
    top: 50%;
    left: 5%;
    float: left;
    font-size: 25px;
    transform: translateY(-50%);
  }

  span {
    margin-left: -5%;
    color: #FFFFFF;
  }

  .star {
    float: right;
    position: relative;
    right: 5%;
    font-size: 14px;
  }

}

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
