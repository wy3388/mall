<template>
  <div>
    <Header title="个人中心" :show-back="false"/>
    <div class="body">

    </div>
    <BottomMenu :index="4"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BottomMenu from "@/components/BottomMenu";

export default {
  name: "My",
  components: {BottomMenu, Header}
}
</script>

<style scoped>

</style>
