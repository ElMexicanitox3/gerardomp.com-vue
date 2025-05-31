<template>
  <CustomBadge text="Python" class="bg-blue-400 text-white">
    <template #icon>
      <PythonIcon size="h-8 w-6" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import PythonIcon from '@/icons/PythonIcon.vue';
import CustomBadge from '../CustomBadge.vue';
</script>

<style scoped></style>
