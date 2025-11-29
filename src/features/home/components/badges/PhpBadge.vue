<template>
  <CustomBadge text="PHP" class="bg-blue-400 text-white">
    <template #icon>
      <PhpIcon size="h-8 w-6" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import CustomBadge from '../CustomBadge.vue';
import PhpIcon from '@/assets/icons/PhpIcon.vue';
</script>

<style scoped></style>
