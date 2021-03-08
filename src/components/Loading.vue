<template>
  <div class="loading" :class="isBottom?'bottom':'no_bottom'">
    <i class="el-icon-loading"></i>
    <span class="text-color-gray">加载中...</span>
  </div>
</template>

<script>
export default {
  props: {
    isBottom: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  name: "Loading"
}
</script>

<style scoped lang="scss">

.bottom {
  height: calc(100% - 56px);
}

.no_bottom {
  height: 100%;
}

.loading {
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
