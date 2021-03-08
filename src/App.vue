<template>
  <div>
    <router-view/>
    <BottomMenu/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: none;
  -moz-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
</style>
<script>
import BottomMenu from "@/components/BottomMenu";

export default {
  components: {BottomMenu}
}
</script>
