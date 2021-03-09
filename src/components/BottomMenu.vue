<template>
  <div class="bottom_menu">
    <div class="bottom">
      <div class="btn" @click="click(1)" :class="activeIndex === 1?'select':'text-color-gray'">
        <i class="el-icon-s-grid"></i>
        <span>首页</span>
      </div>
      <div class="btn" @click="click(2)" :class="activeIndex === 2?'select':'text-color-gray'">
        <i class="el-icon-position"></i>
        <span>发现</span>
      </div>
      <div class="btn" @click="click(3)" :class="activeIndex === 3?'select':'text-color-gray'">
        <i class="el-icon-document"></i>
        <span>订单</span>
      </div>
      <div class="btn" @click="click(4)" :class="activeIndex === 4?'select':'text-color-gray'">
        <i class="el-icon-user"></i>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomMenu",
  props: {
    index: {
      required: false,
      type: Number,
      default: 1
    }
  },
  data(){
    return {
      activeIndex: this.index
    }
  },
  methods: {
    click(i) {
      this.activeIndex = i
      if(this.activeIndex === 1) {
        this.$router.replace({path: '/'})
      }
      if (this.activeIndex === 2) {
        this.$router.replace({path: '/hot'})
      }
    }
  }
}
</script>

<style scoped lang="scss">

.bottom_menu {
  z-index: 999;
  position: fixed;
  bottom: 0;
  height: 56px;
  left: 0;
  width: 100%;
  border: none;
  border-top: 1px solid #EBEEF5;
  box-shadow: 0 -5px 10px  -4px rgba(0, 0, 0, .1);
  background: #FFFFFF;
}

.select {
  color: #409EFF;
}

.bottom {
  height: 55px;
  width: 100%;
  display: flex;

  .btn {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      font-size: 20px;
    }

    span {
      font-size: 12px;
    }
  }
}
</style>
