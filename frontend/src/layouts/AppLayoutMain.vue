<script setup>
import AppLayoutSidebar from "@/layouts/AppLayoutSidebar.vue";
import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";
import { useAuthStore } from "@/stores";

const authStore = useAuthStore();
</script>

<template>
  <div class="app_layout">
    <app-layout-header />
    <div class="content">
      <app-layout-sidebar v-if="authStore.isAuthenticated" />
      <slot />
    </div>
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
