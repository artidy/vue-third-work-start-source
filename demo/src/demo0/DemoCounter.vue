<script setup>
import { ref } from 'vue'

const count = ref(0)

/* Метод уменьшения значения */
const decrement = () => {
  count.value = count.value - 1
}

/* Метод увеличения значения */
const increment = () => {
  count.value = count.value + 1
}
</script>

<template>
  <div class="counter">
    <button @click="decrement"> - </button>

    <span> Текущее количество: {{ count }} </span>

    <button @click="increment"> + </button>
  </div>
</template>

<style scoped lang="scss">

</style>
