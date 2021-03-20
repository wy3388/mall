<template>
  <div>
    <div class=content>
      <el-card>
        <div slot="header">
          <h2>注册</h2>
        </div>
        <el-input placeholder="请输入账号"></el-input>
        <el-input placeholder="请输入密码" class="input"></el-input>
        <el-input placeholder="请确认密码" class="input"></el-input>
        <el-button type="primary" class="button">注册</el-button>
        <span class="to_register text-color-gray">已有账号</span>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register"
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
