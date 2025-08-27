<template>
  <CustomBadge text="VueJs" class="bg-green-900 text-white">
    <template #icon>
      <VuejsIcon size="h-4 w-4" color="white" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import VuejsIcon from '@/assets/icons/VuejsIcon.vue';
import CustomBadge from '../CustomBadge.vue';
</script>

<style scoped></style>
