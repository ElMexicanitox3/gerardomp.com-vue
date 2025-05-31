<template>
  <CustomBadge text="Jquery" class="bg-blue-700 text-white">
    <template #icon>
      <JqueryIcon size="h-4 w-4" />
    </template>
  </CustomBadge>
</template>

<script setup lang="ts">
import CustomBadge from '../CustomBadge.vue';
import JqueryIcon from '@/icons/JqueryIcon.vue';
</script>

<style scoped></style>
