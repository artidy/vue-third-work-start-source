<script setup>
import AppLayoutSidebar from "@/layouts/AppLayoutSidebar.vue";
import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
  filters: {
    type: Object,
    required: true,
  },
});

defineEmits(["updateTasks"]);
</script>

<template>
  <div class="app_layout">
    <app-layout-header />
    <div class="content">
      <app-layout-sidebar
          :tasks="props.tasks"
          @update-tasks="$emit('updateTasks', $event)"
      />
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
