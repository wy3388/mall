<template>
  <div>
    <Header title="修改资料" :show-back="true"/>
    <div class="body">
      <div class="content">
        <el-input v-model="editValue" placeholder="请输入内容"/>
        <el-button type="primary" @click="save">确认修改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import {getData, getId, setData} from "../util";

export default {
  name: "Edit",
  components: {Header},
  data() {
    return {
      editValue: '',
      type: 0
    }
  },
  mounted() {
    this.type = this.$route.query.type === '' || this.$route.query.type === null ? 0 : Number(this.$route.query.type)
    if (this.type === 2) {
      let data = getData('user')
      this.editValue = data.username
    }
    if (this.type === 3) {
      let data = getData('user')
      this.editValue = data.phone
    }
  },
  methods: {
    save() {
      if (this.editValue === '') {
        this.$toast('请输入内容')
        return
      }
      let url = 'api/user/'
      let data = {}
      let id = getId()
      data['user_id'] = id
      // 充值金额
      if (this.type === 1) {
        url += 'charge'
        data['money'] = this.editValue
      }
      // 修改用户名
      else if (this.type === 2) {
        url += 'editUsername'
        data['username'] = this.editValue
      }
      // 绑定手机号
      else if (this.type === 3) {
        url += 'bindPhone'
        data['phone'] = this.editValue
      }
      // 修改密码
      else if (this.type === 4) {
        url += 'editPassword'
        data['password'] = this.editValue
      } else {
        this.$toast('参数错误')
        return
      }
      this.$http.post(url, data)
          .then(resp => {
            let data = resp.data
            this.$toast(data.msg)
            if (this.type !== 1 && this.type !== 4) {
              this.$http.get('api/user/getUserMsg?user_id=' + id)
                  .then(resp => {
                    let d = resp.data
                    setData('user', d.data)
                  })
            } else {
              // todo 跳转登录
            }
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
  margin-left: 5%;
  margin-top: 5%;

  button {
    width: 100%;
    margin-top: 10%;
  }
}
</style>
