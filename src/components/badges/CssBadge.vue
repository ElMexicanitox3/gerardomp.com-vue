<template>
  <CustomBadge text="CSS" class="bg-blue-800 text-white">
    <template #icon>
      <CssIcon size="h-4 w-4" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import CustomBadge from '../CustomBadge.vue';
import CssIcon from '@/icons/CssIcon.vue';
</script>

<style scoped></style>
