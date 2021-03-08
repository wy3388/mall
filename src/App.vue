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
}
</style>
<script>
import BottomMenu from "@/components/BottomMenu";

export default {
  components: {BottomMenu}
}
</script>
