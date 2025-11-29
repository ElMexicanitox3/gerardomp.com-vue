<template>
  <div
    class="navbar glass-effect flex-shrink-0 sticky top-4 z-50 rounded-2xl mb-6 mx-4 w-auto transition-all duration-300"
  >
    <div class="flex-1 text-lg sm:text-xl font-semibold ml-4">
      <div class="inline-block relative group cursor-default">
        <h2
          class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          {{ $t(`sections.${currentTitle}.title`) }}
        </h2>
        <div
          class="h-1 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-primary to-accent rounded-full mt-1"
        ></div>
      </div>
    </div>
    <div class="flex-none mr-2">
      <ul class="menu menu-horizontal px-1 gap-2">
        <li v-for="item in menuItems" :key="item">
          <a
            class="text-sm sm:text-base rounded-xl transition-all duration-300 hover:bg-primary/10 hover:text-primary"
            :class="{
              'bg-primary/10 text-primary font-bold shadow-sm': currentTitle === item,
              'opacity-70 hover:opacity-100': currentTitle !== item,
            }"
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
