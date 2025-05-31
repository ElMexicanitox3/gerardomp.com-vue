<template>
  <CustomBadge text="Laravel" class="bg-red-200 text-white">
    <template #icon>
      <LaravelIcon size="h-4 w-4" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import CustomBadge from '../CustomBadge.vue';
import LaravelIcon from '@/icons/LaravelIcon.vue';
</script>

<style scoped></style>
