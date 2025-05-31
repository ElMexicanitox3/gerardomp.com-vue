<template>
  <CustomBadge text="Javascript" class="bg-amber-400 text-white">
    <template #icon>
      <JavascriptIcon size="h-4 w-4" color="white" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import JavascriptIcon from '@/icons/JavascriptIcon.vue';
import CustomBadge from '../CustomBadge.vue';
</script>

<style scoped></style>
