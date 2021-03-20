<template>
  <div>
    <Header title="首页" :show-back="false"/>
    <div class="body">
      <div class="search">
        <el-input placeholder="请输入商品" prefix-icon="el-icon-search" v-model="value"/>
        <el-button class="search_button" type="primary" round size="medium" icon="el-icon-search"
                   @click="search"></el-button>
      </div>
      <div class="banner">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in banners" :key="item">
            <img :src="item" style="height: 100%;width: 100%;" alt=""/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="buttons">
        <div class="buttons_button" v-for="(item, index) in stroeTypes" :key="index" @click="toClassify(item.id)">
          <img :src="loadImg(item.id)" alt="">
          <span class="text-color-gray">{{ item.name }}</span>
        </div>
      </div>
      <div class="hot">
        <el-card>
          <div slot="header" class="clearfix hot_title">
            <span>好店推荐</span>
          </div>
          <div class="hot_content">
            <div v-for="(item, index) in stroes" :key="index" @click="toInfo(item.id)">
              <img :src="item.img" alt=""/>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="hot_goods">
        <span>热门美食推荐</span>
        <div class="hot_list">
          <van-list v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="requestData">
            <el-card v-for="(item, index) in list" :key="index">
              <div class="item" @click="toInfo(item.store_id)">
                <div class="item_left">
                  <img :src="item.img" alt="">
                </div>
                <div class="item_right">
                  <span class="shop_name">{{ item.stores.name }}</span>
                  <div class="score">
                    <i class="el-icon-star-on"></i>
                    <span class="text-color-gray">{{ item.stores.score }}分</span>
                    <span class="text-color-gray">月售{{ item.sale }}</span>
                    <span class="text-color-gray">{{ item.stores.delivery_time }}分钟</span>
                  </div>
                  <div class="score">
                    <span class="text-color-gray">起送 ¥{{ item.stores.start_send_amount }}</span>
                    <span class="text-color-gray" style="margin-left: 5px">配送 ¥{{ item.stores.send_amount }}</span>
                  </div>
                  <span class="shop_name text-color-gray">{{ item.stores.abstract }}</span>
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
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";

export default {
  name: "Home",
  components: {BottomMenu, Header},
  data() {
    return {
      loading: false,
      finished: false,
      list: [],
      page: 1,
      banners: [
        require('../assets/banner.jpg'),
        require('../assets/banner1.jpg'),
        require('../assets/banner2.png')
      ],
      stroes: [],
      isFirst: true,
      stroeTypes: [],
      value: ''
    }
  },
  mounted() {
  },
  methods: {
    toClassify(id) {
      this.$router.push({path: '/search', query: {value: id, type: "2"}})
    },
    loadImg(id) {
      return require('../assets/type' + id + '.png')
    },
    search() {
      if (this.value === '') {
        this.$toast('请输入搜索内容')
        return
      }
      this.$router.push({path: '/search', query: {value: this.value, type: "1"}})
    },
    toInfo(id) {
      this.$router.push({path: '/info', query: {id: id}})
    },
    requestData() {
      let url = 'api/home/home?type_id=1&page=' + this.page
      this.$http.get(url).then(resp => {
        let data = resp.data
        if (data.code === 0) {
          this.$toast(data.msg)
          return
        }
        this.stroes = data.data.stroes
        this.stroeTypes = data.data.stroeTypes
        this.list = data.data.foods.data
        this.loading = false
        this.page++
        if (this.page > data.data.foods.current_page) {
          this.finished = true
        }
      }).catch(() => {
        this.$toast('请求失败')
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
      font-size: 12px;
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

</style>
