<template>
  <div>
    <Header title="搜索" :show-back="true"/>
    <div class="hot_list">
      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="requestData">
        <el-card v-for="(item, index) in list" :key="index">
          <div class="item">
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
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Search",
  components: {Header},
  data() {
    return {
      loading: false,
      finished: false,
      list: [],
      value: '',
      page: 1
    }
  },
  mounted() {
    this.value = this.$route.query.value;
  },
  methods: {
    requestData() {
      let url = 'api/home/menuSearch?name=' + this.value
      this.$http.get(url)
          .then(resp => {
            let data = resp.data
            if (data.code === 0){
              this.$toast(data.msg)
              return
            }
            this.list = data.data.data
            this.page++
            this.loading = false
            if (this.page > data.data.current_page) {
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
</style>
