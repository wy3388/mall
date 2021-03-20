<template>
  <div>
    <Header :show-back="false" title="好店发现"/>
    <div class="body">
      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="requestData">
        <div class="content">
          <div class="items" v-for="(item, index) in list" :key="index">
            <el-card>
              <div class="item" @click="toInfo(item.id)">
                <img :src="item.img" alt=""/>
                <span>{{ item.name }}</span>
                <!--              <span class="text-color-gray">月售2888</span>-->
                <span class="text-color-gray">起送¥{{ item.start_send_amount }}</span>
              </div>
            </el-card>
          </div>
        </div>
      </van-list>
    </div>
    <BottomMenu :index="2"/>
  </div>
</template>

<script>
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";

export default {
  name: "Hot",
  components: {BottomMenu, Header},
  data() {
    return {
      list: [],
      page: 1,
      loading: false,
      finished: false
    }
  },
  methods: {
    requestData() {
      let url = 'api/home/discoverList'
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
        this.$toast('请求失败')
      })
    },
    toInfo(id) {
      this.$router.push({path: '/info', query: {id: id}})
    }
  }
}
</script>

<style scoped lang="scss">

.el-card {
  margin: 5px;
}

.content {
  margin-top: 5%;
  margin-left: 5%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;

  .items {
    flex-basis: 50%;
    width: 50%;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        height: 100px;
        width: 100px;
      }

      span:nth-of-type(1) {
        align-self: flex-start;
        margin-top: 5px;
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      span:nth-of-type(n+2):nth-of-type(-n+3) {
        align-self: flex-start;
        margin-top: 5px;
        font-size: 13px;
      }
    }
  }
}
</style>
