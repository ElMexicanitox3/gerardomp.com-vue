<template>
  <CustomBadge text="HTML" class="bg-amber-800 text-white">
    <template #icon>
      <HtmlIcon size="h-4 w-4" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import HtmlIcon from '@/icons/HtmlIcon.vue';
import CustomBadge from '../CustomBadge.vue';
</script>

<style scoped></style>
