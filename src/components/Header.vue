<template>
  <div>
    <header>
      <i class="el-icon-arrow-left" @click="goBack" v-show="showBack"></i>
      <span v-show="title !==''" :class="!showBack?'clear_margin':''">{{title}}</span>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    showBack: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">

.clear_margin {
  margin-left: 0;
}

header {
  height: 50px;
  width: 100%;
  background: #409EFF;
  line-height: 50px;
  text-align: center;

  i {
    position: relative;
    top: 50%;
    left: 5%;
    float: left;
    font-size: 25px;
    transform: translateY(-50%);
  }

  span {
    margin-left: -5%;
    color: #FFFFFF;
  }

}

</style>
