<template>
  <CustomBadge text="Javascript" class="bg-amber-400 text-white">
    <template #icon>
      <JavascriptIcon size="h-4 w-4" color="white" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import CustomBadge from '../CustomBadge.vue';
import JavascriptIcon from '@/assets/icons/JavascriptIcon.vue';
</script>

<style scoped></style>
