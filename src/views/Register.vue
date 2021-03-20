<template>
  <div>
    <div class=content>
      <el-card>
        <div slot="header">
          <h2>注册</h2>
        </div>
        <el-input placeholder="请输入账号" v-model="username"></el-input>
        <el-input placeholder="请输入密码" class="input" v-model="password" show-password></el-input>
        <el-input placeholder="请确认密码" class="input" v-model="password_confirm" show-password></el-input>
        <el-button type="primary" class="button" @click="register">注册</el-button>
        <span class="to_register text-color-gray" @click="toLogin">已有账号</span>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    register() {
      if (this.username === '') {
        this.$toast('请输入账号')
        return
      }
      if (this.password === '') {
        this.$toast('请输入密码')
        return
      }
      if (this.password_confirm === '') {
        this.$toast('请确认密码')
        return
      }
      this.$http.post('api/user/register', {
        username: this.username,
        password: this.password,
        password_confirm: this.password_confirm
      }).then(resp => {
        let data = resp.data;
        this.$toast(data.msg)
        if (data.code === 0){
          return
        }
        if (data.code === 1) {
          setTimeout(() => {
            this.$router.push({path: '/login'})
          }, 2000)
        }
      }).catch(() => {
        this.$toast('注册失败')
      })
    },
    toLogin() {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 80%;
  margin-left: 10%;
  margin-top: 25%;
}

.input {
  margin-top: 10%;
}

.button {
  margin-top: 15%;
  width: 100%;
}

.to_register {
  display: block;
  font-size: 12px;
  margin-top: 20%;
  width: 100%;
}
</style>
