<template>
  <CustomBadge text="HTML" class="bg-amber-800 text-white">
    <template #icon>
      <HtmlIcon size="h-4 w-4" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import CustomBadge from '../CustomBadge.vue';
import HtmlIcon from '@/assets/icons/HtmlIcon.vue';
</script>

<style scoped></style>
