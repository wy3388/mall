<template>
  <div>
    <Header title="首页" :show-back="false"/>
    <div class="body">
      <div class="search">
        <el-input placeholder="请输入商品" prefix-icon="el-icon-search"/>
        <el-button class="search_button" type="primary" round size="medium" icon="el-icon-search"
                   @click="search"></el-button>
      </div>
      <div class="banner">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="buttons">
        <div class="buttons_button" v-for="(item, index) in 8" :key="index">
          <img src="../assets/logo.png" alt="">
          <span>美食</span>
        </div>
      </div>
      <div class="hot">
        <el-card>
          <div slot="header" class="clearfix hot_title">
            <span>好店推荐</span>
            <span style="float: right">>></span>
          </div>
          <div class="hot_content">
            <div>
              <img src="../assets/logo.png" alt=""/>
              <span>乡村基(大坪店)</span>
            </div>
            <div>
              <img src="../assets/logo.png" alt=""/>
              <span>乡村基(大坪店)</span>
            </div>
            <div>
              <img src="../assets/logo.png" alt=""/>
              <span>乡村基(大坪店)</span>
            </div>
            <div>
              <img src="../assets/logo.png" alt=""/>
              <span>乡村基(大坪店)</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="hot_goods">
        <span>热门美食推荐</span>
        <div class="hot_goods_top">
          <el-select clearable placeholder="请选择" value size="mini" class="select_menu">
            <!--            <el-option-->
            <!--                v-for="item in options"-->
            <!--                :key="item.value"-->
            <!--                :label="item.label"-->
            <!--                :value="item.value">-->
            <!--            </el-option>-->
          </el-select>
          <el-select clearable placeholder="请选择" value size="mini" class="select_menu">
            <!--            <el-option-->
            <!--                v-for="item in options"-->
            <!--                :key="item.value"-->
            <!--                :label="item.label"-->
            <!--                :value="item.value">-->
            <!--            </el-option>-->
          </el-select>
        </div>
        <div class="hot_list">
          <van-list v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad">
            <el-card v-for="(item, index) in list" :key="index">
              <div class="item">
                <div class="item_left">
                  <img src="../assets/logo.png" alt="">
                </div>
                <div class="item_right">
                  <span class="shop_name">享多味炸鸡（巴国城店铺）啊啊啊啊啊啊</span>
                  <div class="score">
                    <i class="el-icon-star-on"></i>
                    <span class="text-color-gray">4.6分</span>
                    <span class="text-color-gray">月售1200</span>
                    <span class="text-color-gray">30分钟</span>
                  </div>
                  <div class="score">
                    <span class="text-color-gray">起送 ¥15</span>
                    <span class="text-color-gray" style="margin-left: 5px">配送 ¥2.5</span>
                  </div>
                  <span class="shop_name text-color-gray">描述描述描述描述描述描述描述描述描述描述描述描述描述描述</span>
                </div>
              </div>
            </el-card>
          </van-list>
        </div>
      </div>
    </div>
    <BottomMenu :index="1"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BottomMenu from "@/components/BottomMenu";

export default {
  name: "Home",
  components: {BottomMenu, Header},
  data() {
    return {
      loading: false,
      finished: false,
      list: [],
      page: 1
    }
  },
  methods: {
    search() {
      this.$router.push({path: '/info'})
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i <= 10; i++) {
          this.list.push(i)
        }
        this.finished = true
      }, 1000)
    },
    requestData() {
      this.$http.get("").then(resp => {
        console.log(resp)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="scss">

.hot_goods {
  margin-top: 2%;
  margin-bottom: 5%;
  width: 90%;
  margin-left: 5%;

  span {
    font-size: 18px;
  }

  .hot_goods_top {
    margin-top: 2%;
    display: flex;

    .select_menu {
      width: 30%;

      &:last-child {
        margin-left: 5%;
      }
    }
  }

  .hot_list {
    margin-top: 2%;

    .el-card {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .item {
      display: flex;

      .item_left {
        height: 80px;
        width: 80px;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .item_right {
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        width: calc(93% - 80px);

        .shop_name {
          width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &:last-child {
            margin-top: 10px;
            font-size: 13px;
          }
        }

        .score {
          margin-top: 5px;
          display: flex;
          align-items: center;

          i {
            color: #EEB829;
          }

          span {
            font-size: 12px;

            &:nth-child(n+3):nth-child(-n+4) {
              margin-left: 5px;
            }
          }

          &:last-child {
            span {
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
}

.hot {
  width: 90%;
  margin: 5%;

  .hot_content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    div {
      margin-top: 10px;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        height: 80px;
        width: 80%;
      }

      span {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }

  .hot_title {

    span {
      font-size: 18px;
    }

    span:last-child {
      font-size: 14px;
      float: right;
    }
  }
}

.buttons {
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 25%;

  .buttons_button {
    margin-top: 2%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 2px;
      height: 40px;
      width: 40px;
      border-radius: 20px;
    }

    span {
      font-size: 14px;
    }
  }
}

.search {
  width: 90%;
  display: flex;
  margin-left: 5%;
  margin-top: 2%;

  .search_button {
    margin-left: 2%;
  }

}

.banner {
  margin-left: 5%;
  margin-top: 2%;
  width: 90%;
  height: 150px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>
