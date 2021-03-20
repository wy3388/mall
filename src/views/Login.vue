<template>
  <div>
    <div class=content>
      <el-card>
        <div slot="header">
          <h2>登录</h2>
        </div>
        <el-input placeholder="请输入账号" v-model="username"></el-input>
        <el-input placeholder="请输入密码" class="input" show-password v-model="password"></el-input>
        <el-button type="primary" class="button" @click="login">登录</el-button>
        <span class="to_register text-color-gray" @click="toRegister">没有账号?</span>
      </el-card>
    </div>
  </div>
</template>

<script>
import {setData} from "../util";

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    toRegister() {
      this.$router.push({path: '/register'})
    },
    login() {
      if (this.username === '') {
        this.$toast('请输入账号')
        return
      }
      if (this.password === '') {
        this.$toast('请输入密码')
        return
      }
      this.$http.post("api/user/login", {
        username: this.username,
        password: this.password
      }).then(resp => {
        let data = resp.data;
        this.$toast(data.msg);
        if (data.code === 0) {
          return
        }
        setData("user", data.data)
        setTimeout(() => {
          this.$router.push({path: '/'})
        }, 2000)
      }).catch(() => {
        this.$toast('登录失败')
      })
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
  text-align: end;
}
</style>
