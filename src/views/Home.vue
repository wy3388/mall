<template>
  <div class="home">
    <Header title="首页" :show-back="false"/>
    <Loading />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Loading from "@/components/Loading";
export default {
  name: "Home",
  components: {Loading, Header}
}
</script>

<style scoped lang="scss">

</style>
