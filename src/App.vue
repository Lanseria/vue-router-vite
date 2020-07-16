<template>
  <h1>Vue 3</h1>
  <div class="nav-list">
    <router-link to="/">Index</router-link>
    <router-link to="/First">First</router-link>
    <router-link to="/Second">Second</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "App"
});
</script>
<style scoped>
.nav-list {
  display: flex;
  justify-content: space-around;
}
</style>