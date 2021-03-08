<template>
  <div>
    <Header title="首页" :show-back="false"/>
    <div class="body">
      <div class="search">
        <el-input placeholder="请输入商品" prefix-icon="el-icon-search"/>
        <el-button class="search_button" type="primary" round size="medium" icon="el-icon-search"></el-button>
      </div>
      <div class="banner">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="buttons">
        <div class="buttons_button" v-for="(item, index) in 8" :key="index">
          <img src="../assets/logo.png" alt="">
          <span>美食</span>
        </div>
      </div>
      <div class="hot">
        <div class="hot_title">
          <span>好店推荐</span>
          <span>更多 >></span>
        </div>
        <div class="hot_content">
          <div>
            <img src="../assets/logo.png" alt=""/>
            <span>乡村基(大坪店)</span>
          </div>
          <div>
            <img src="../assets/logo.png" alt=""/>
            <span>乡村基(大坪店)</span>
          </div>
          <div>
            <img src="../assets/logo.png" alt=""/>
            <span>乡村基(大坪店)</span>
          </div>
          <div>
            <img src="../assets/logo.png" alt=""/>
            <span>乡村基(大坪店)</span>
          </div>
        </div>
      </div>
      <div class="hot_goods">
        <span>美食推荐</span>
        <div class="hot_goods_top">
          <el-select clearable placeholder="请选择" value size="mini" class="select_menu">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-select clearable placeholder="请选择" value size="mini" class="select_menu">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="hot_list">
          <div class="item">
            <div class="item_left">
              <img src="../assets/logo.png" alt="">
            </div>
            <div class="item_right">
              <h6>享多味炸鸡（巴国城店铺）啊啊啊啊啊啊</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomMenu/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BottomMenu from "@/components/BottomMenu";

export default {
  name: "Home",
  components: {BottomMenu, Header}
}
</script>

<style scoped lang="scss">

.hot_goods {
  margin-top: 2%;
  margin-bottom: 5%;
  width: 90%;
  margin-left: 5%;

  span {
    font-size: 18px;
  }

  .hot_goods_top {
    margin-top: 2%;
    display: flex;

    .select_menu {
      width: 30%;

      &:last-child {
        margin-left: 5%;
      }
    }
  }

  .hot_list {
    margin-top: 2%;

    .item {
      display: flex;

      .item_left {
        height: 120px;
        width: 120px;
        background: red;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .item_right {
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        width: calc(93% - 120px);

        h6 {
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}

.hot {
  width: 90%;
  margin-top: 2%;
  margin-left: 5%;
  border-left: 1px solid #909399;
  border-bottom: 1px solid #909399;
  border-right: 1px solid #909399;
  border-radius: 20px;
  padding-bottom: 10px;

  .hot_content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    div {
      margin-top: 10px;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        height: 80px;
        width: 80%;
      }

      span {
        margin-top: 5px;
      }
    }
  }

  .hot_title {
    height: 50px;
    display: flex;
    background: #409EFF;
    align-items: center;
    border-radius: 20px 20px 0 0;
    padding: 0 10px 0 10px;

    span {
      font-size: 18px;
      color: #FFFFFF;
    }

    span:last-child {
      margin-left: auto;
      font-size: 14px;
    }
  }
}

.buttons {
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 25%;

  .buttons_button {
    margin-top: 2%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 2px;
      height: 40px;
      width: 40px;
      border-radius: 20px;
    }
  }
}

.search {
  width: 90%;
  display: flex;
  margin-left: 5%;
  margin-top: 2%;

  .search_button {
    margin-left: 2%;
  }

}

.banner {
  margin-left: 5%;
  margin-top: 2%;
  width: 90%;
  height: 150px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>
