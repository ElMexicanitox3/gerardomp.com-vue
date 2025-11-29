<template>
  <CustomBadge text="Codeigniter" class="bg-red-200 text-white">
    <template #icon>
      <CodeigniterIcon size="h-4 w-4" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import CustomBadge from '../CustomBadge.vue';
import CodeigniterIcon from '@/assets/icons/CodeigniterIcon.vue';
</script>

<style scoped></style>
