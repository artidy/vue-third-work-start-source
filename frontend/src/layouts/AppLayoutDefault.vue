<script setup>
import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";
</script>

<template>
  <div class="app_layout">
    <app-layout-header />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.app_layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex-grow: 1;
}
</style>
