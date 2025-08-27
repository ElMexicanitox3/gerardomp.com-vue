<template>
  <div>{{ projectName }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const projectName = ref<string>();

onMounted(() => {
  const nameParam = route.params.name;
  projectName.value = Array.isArray(nameParam) ? nameParam[0] : nameParam;
});
</script>

<style scoped></style>
