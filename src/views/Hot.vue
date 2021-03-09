<template>
  <div>
    <Header :show-back="false" title="好店发现"/>
    <div class="body">
      <div class="content">
        <div class="items" v-for="(item, index) in 10" :key="index">
          <el-card>
            <div class="item">
              <img src="../assets/logo.png" alt=""/>
              <span>叫了只鸡叫了只鸡叫了只鸡</span>
              <span class="text-color-gray">月售2888</span>
              <span class="text-color-gray">起送¥15</span>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <BottomMenu :index="2"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BottomMenu from "@/components/BottomMenu";

export default {
  name: "Hot",
  components: {BottomMenu, Header}
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
