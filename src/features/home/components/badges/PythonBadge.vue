<template>
  <CustomBadge text="Python" class="bg-blue-400 text-white">
    <template #icon>
      <PythonIcon size="h-8 w-6" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import CustomBadge from '../CustomBadge.vue';
import PythonIcon from '@/assets/icons/PythonIcon.vue';
</script>

<style scoped></style>
