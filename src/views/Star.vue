<template>
  <div>
    <Header title="收藏" :show-back="true"/>
    <div class="body">
      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="requestData">
        <div class="content">
          <div class="item" v-for="(item, index) in list" :key="index">
            <el-card>
              <div class="top">
                <img :src="item.store.img" alt="">
                <div>
                  <span @click="toInfo(item.store.id)">{{ item.store.name }} ></span>
                  <span>{{ item.store.name }}</span>
                  <span class="text-color-gray">{{ item.create_time }}</span>
                </div>
              </div>
              <div class="bottom">
                <nav>
                  <el-button type="danger" round size="small" @click="del(item.id)">取消收藏</el-button>
                </nav>
              </div>
            </el-card>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import {getId} from "../util";

export default {
  name: "Star",
  components: {Header},
  data() {
    return {
      loading: false,
      finished: false,
      list: [],
      page: 1
    }
  },
  methods: {
    requestData() {
      let url = 'api/home/collectList?user_id=' + getId()
      this.$http.get(url)
          .then(resp => {
            let data = resp.data
            if (data.code === 0) {
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
        this.$toast('获取失败')
      })
    },
    toInfo(id) {
      this.$router.push({path: '/info', query: {id: id}})
    },
    del(id) {
      this.$http.post('api/home/deleteCollect', {collect_id: id})
          .then(resp => {
            let data = resp.data
            if (data.code === 0) {
              this.$toast(data.msg)
              return
            }
            this.list = []
            this.page = 1
            this.loading = true
            this.finished = false
            this.requestData()
          }).catch(() => {
        this.$toast('操作失败')
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 90%;
  margin: 5%;

  .item {
    width: 100%;
    margin: 5% 0;

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
