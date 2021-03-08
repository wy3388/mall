<template>
  <div class="loading">
    <i class="el-icon-loading"></i>
    <span class="text-color-gray">加载中...</span>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped lang="scss">
.loading {
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  i {
    font-size: 28px;
  }

  span {
    margin-top: 2%;
    font-size: 14px;
  }
}
</style>
