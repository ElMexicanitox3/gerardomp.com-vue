<template>
  <div :class="computedClass">
    <!-- Slot para el icono -->
    <slot name="icon"></slot>
    <!-- Texto del badge -->
    <span class="text-shadow-lg/30">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  text?: string;
  class?: string;
}>();

const computedClass = computed(() => {
  return 'badge gap-1 ' + (props.class || 'badge-primary');
});
</script>

<style scoped></style>
