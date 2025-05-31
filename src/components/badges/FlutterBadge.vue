<template>
  <CustomBadge text="Flutter" class="bg-blue-700 text-white">
    <template #icon>
      <FlutterIcon size="h-4 w-4" color="white" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import CustomBadge from '../CustomBadge.vue';
import FlutterIcon from '@/icons/FlutterIcon.vue';
</script>

<style scoped></style>
