<template>
  <div class="bottom_menu is-always-shadow el-card">
    <div class="bottom">
      <div class="btn">
        首页
      </div>
      <div class="btn">
        分类
      </div>
      <div class="btn">
        订单
      </div>
      <div class="btn">
        我的
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomMenu"
}
</script>

<style scoped lang="scss">

.bottom_menu {
  position: absolute;
  bottom: 0;
  height: 56px;
  left: 0;
  width: 100%;
  border: none;
  border-top: 1px solid #EBEEF5;
}

.bottom {
  height: 55px;
  width: 100%;
  display: flex;

  .btn {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
