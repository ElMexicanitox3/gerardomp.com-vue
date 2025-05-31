<template>
  <div class="navbar bg-base-200 flex-shrink-0 sticky top-0 lg:top-0 z-10 rounded-2xl">
    <div class="flex-1 text-lg sm:text-xl font-semibold ml-2">
      <div class="inline-block">
        <h2 class="text-2xl font-bold">{{ $t(`sections.${currentTitle}.title`) }}</h2>
        <div class="h-1 w-full mt-1" style="background-color: var(--color-primary)"></div>
      </div>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <!-- propery menuItem does not exist -->
        <li v-for="item in menuItems" :key="item">
          <a
            class="text-sm sm:text-base"
            :class="{ 'text-primary font-semibold': currentTitle === item }"
            @click="$emit('section-click', item)"
          >
            {{ $t(`sections.${item}.title`) }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentTitle: string;
  menuItems: string[];
}>();
console.log(`NavbarComponent props:`, props.menuItems);

defineEmits<{
  (e: 'section-click', sectionId: string): void;
}>();
</script>
