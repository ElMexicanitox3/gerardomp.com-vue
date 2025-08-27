<template>
  <CustomBadge text="Typescript" class="bg-sky-600 text-white">
    <template #icon>
      <TypescriptIcon size="h-4 w-4" color="white" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import CustomBadge from '../CustomBadge.vue';
import TypescriptIcon from '@/assets/icons/TypescriptIcon.vue';
</script>

<style scoped></style>
